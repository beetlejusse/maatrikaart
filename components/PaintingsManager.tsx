"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { paintingsApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Loader2, Search, Plus, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { CreatePaintingData, Painting } from "@/types/paintings";
import { ShowCard } from "@/components/ShowCard";

interface PaintingsGalleryProps {
  isAdmin?: boolean;
}

export function PaintingsGallery({ isAdmin = false }: PaintingsGalleryProps) {
  const router = useRouter();
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingPainting, setEditingPainting] = useState<Painting | null>(null);
  const [total, setTotal] = useState(0);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const [formData, setFormData] = useState<CreatePaintingData>({
    title: "",
    artist: "",
    description: "",
    imageUrl: "",
    price: undefined,
    year: undefined,
    userId: process.env.NEXT_PUBLIC_ADMIN_USERID || "cmdlyqkl40000y260aahz64bh",
  });

  const fetchPaintings = async () => {
    try {
      setLoading(true);
      const response = await paintingsApi.getPaintings({
        search: search || undefined,
        limit: 20,
      });
      setPaintings(response.paintings);
      setTotal(response.total);
    } catch (error: any) {
      console.error("Error fetching paintings:", error);
      toast.error(error.response?.data?.error || "Failed to fetch paintings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchPaintings();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading("submit");

    try {
      if (editingPainting) {
        await paintingsApi.updatePainting({
          ...formData,
          id: editingPainting.id,
        });
        toast.success("Painting updated successfully");
      } else {
        await paintingsApi.createPainting(formData);
        toast.success("Painting created successfully");
      }

      setShowAddDialog(false);
      setEditingPainting(null);
      resetForm();
      fetchPaintings();
    } catch (error: any) {
      console.error("Error saving painting:", error);
      toast.error(error.response?.data?.error || "Operation failed");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    setActionLoading(id);
    try {
      await paintingsApi.deletePainting(id);
      toast.success("Painting deleted successfully");
      fetchPaintings();
    } catch (error: any) {
      console.error("Error deleting painting:", error);
      toast.error(error.response?.data?.error || "Failed to delete painting");
    } finally {
      setActionLoading(null);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      artist: "",
      description: "",
      imageUrl: "",
      price: undefined,
      year: undefined,
      userId:
        process.env.NEXT_PUBLIC_ADMIN_USERID || "cmdlyqkl40000y260aahz64bh",
    });
  };

  const handleEdit = (painting: Painting) => {
    setEditingPainting(painting);
    setFormData({
      title: painting.title,
      artist: painting.artist,
      description: painting.description || "",
      imageUrl: painting.imageUrl,
      price: painting.price,
      year: painting.year,
      userId: painting.userId,
    });
    setShowAddDialog(true);
  };

  const handlePaintingClick = (paintingId: string) => {
    if (!isAdmin) {
      router.push(`/paintings/${paintingId}`);
    } else {
      router.push(`/admin/dashboard/painting/${paintingId}`);
    }
  };

  if (loading && paintings.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-slate-600">Loading paintings...</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isAdmin ? (
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="mb-8 mt-28">
              <h1 className="text-3xl font-bold text-slate-800  mb-2">
                Artworks Listing
              </h1>
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search paintings, artists..."
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                className="pl-10 bg-white/70 border-slate-200/60 focus:border-amber-600 focus:ring-amber-600"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={fetchPaintings}
                variant="outline"
                size="sm"
                disabled={loading}
                className="bg-white/70 border-slate-200/60 hover:bg-white hover:border-slate-300"
              >
                <RefreshCw
                  className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>

              {isAdmin && (
                <Dialog
                  open={showAddDialog}
                  onOpenChange={(
                    open: boolean | ((prevState: boolean) => boolean)
                  ) => {
                    setShowAddDialog(open);
                    if (!open) {
                      setEditingPainting(null);
                      resetForm();
                    }
                  }}
                >
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Painting
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-slate-800">
                        {editingPainting ? "Edit Painting" : "Add New Painting"}
                      </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-slate-700">
                          Title *
                        </Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e: { target: { value: any } }) =>
                            setFormData((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          required
                          className="border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="artist" className="text-slate-700">
                          Artist *
                        </Label>
                        <Input
                          id="artist"
                          value={formData.artist}
                          onChange={(e: { target: { value: any } }) =>
                            setFormData((prev) => ({
                              ...prev,
                              artist: e.target.value,
                            }))
                          }
                          required
                          className="border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="imageUrl" className="text-slate-700">
                          Image URL *
                        </Label>
                        <Input
                          id="imageUrl"
                          type="url"
                          value={formData.imageUrl}
                          onChange={(e: { target: { value: any } }) =>
                            setFormData((prev) => ({
                              ...prev,
                              imageUrl: e.target.value,
                            }))
                          }
                          placeholder="https://example.com/image.jpg"
                          required
                          className="border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description" className="text-slate-700">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e: { target: { value: any } }) =>
                            setFormData((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          rows={3}
                          placeholder="Enter painting description..."
                          className="border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price" className="text-slate-700">
                            Price (₹)
                          </Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            min="0"
                            value={formData.price || ""}
                            onChange={(e: { target: { value: string } }) =>
                              setFormData((prev) => ({
                                ...prev,
                                price: e.target.value
                                  ? parseFloat(e.target.value)
                                  : undefined,
                              }))
                            }
                            placeholder="0.00"
                            className="border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                          />
                        </div>

                        <div>
                          <Label htmlFor="year" className="text-slate-700">
                            Year
                          </Label>
                          <Input
                            id="year"
                            type="number"
                            min="1000"
                            max={new Date().getFullYear()}
                            value={formData.year || ""}
                            onChange={(e: { target: { value: any } }) =>
                              setFormData((prev) => ({
                                ...prev,
                                year: e.target.value
                                  ? parseInt(e.target.value)
                                  : undefined,
                              }))
                            }
                            placeholder="2024"
                            className="border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowAddDialog(false)}
                          disabled={actionLoading === "submit"}
                          className="border-slate-200 hover:bg-slate-50"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={actionLoading === "submit"}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          {actionLoading === "submit" ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              {editingPainting ? "Updating..." : "Creating..."}
                            </>
                          ) : editingPainting ? (
                            "Update"
                          ) : (
                            "Create"
                          )}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          {/* Results info */}
          <div className="text-sm text-slate-600 mb-6">
            {search
              ? `Found ${total} paintings matching "${search}"`
              : `${total} paintings in gallery`}
          </div>
        </div>
      ) : null}

      {/* Paintings Grid */}
      {paintings.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-slate-400 text-6xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">
            No paintings found
          </h3>
          <p className="text-slate-600 mb-4">
            {search
              ? "Try adjusting your search terms"
              : "The gallery is empty"}
          </p>
          {isAdmin && !search && (
            <div className="flex gap-2 justify-center">
              <Button
                onClick={() => setShowAddDialog(true)}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Add Your First Painting
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paintings.map((painting) => (
            <ShowCard
              key={painting.id}
              painting={painting}
              isAdmin={isAdmin}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onPaintingClick={handlePaintingClick}
              actionLoading={actionLoading}
            />
          ))}
        </div>
      )}

      {loading && paintings.length > 0 && (
        <div className="flex justify-center mt-8">
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
        </div>
      )}
    </div>
  );
}

export default PaintingsGallery;
