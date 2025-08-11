"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { paintingsApi } from "@/lib/api";
import { Painting } from "@/types/paintings";
import { Loader2, ArrowLeft, Calendar, User, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

export default function PaintingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [painting, setPainting] = useState<Painting | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPainting = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/paintings/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setPainting(data);
        } else {
          toast.error("Painting not found");
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching painting:", error);
        toast.error("Failed to load painting");
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPainting();
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading painting...</p>
        </div>
      </div>
    );
  }

  if (!painting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Painting not found</h1>
          <Button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700">
            Go back to gallery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="mb-6 bg-white/70 border-slate-200/60 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image section */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={painting.imageUrl}
                alt={painting.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Details section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">
                {painting.title}
              </h1>
              <div className="flex items-center text-slate-600 mb-4">
                <User className="h-5 w-5 mr-2" />
                <span className="text-lg">by {painting.artist}</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4">
              {painting.year && (
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60">
                  <div className="flex items-center text-slate-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Year</span>
                  </div>
                  <p className="text-lg font-semibold text-slate-800">{painting.year}</p>
                </div>
              )}

              {painting.price && (
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60">
                  <div className="flex items-center text-slate-600 mb-1">
                    <IndianRupee className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Price</span>
                  </div>
                  <p className="text-lg font-semibold text-slate-800">
                    ₹{painting.price.toLocaleString()}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            {painting.description && (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Description</h3>
                <p className="text-slate-600 leading-relaxed">{painting.description}</p>
              </div>
            )}

            {/* Contact section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/60">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Interested in this piece?</h3>
              <p className="text-slate-600 mb-4">
                Contact us to learn more about this artwork or to make a purchase.
              </p>
              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Artist
                </Button>
                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
