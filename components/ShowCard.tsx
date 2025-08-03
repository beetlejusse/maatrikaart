"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Loader2 } from "lucide-react";
import { Painting } from "@/types/paintings";

interface ShowCardProps {
  painting: Painting;
  isAdmin?: boolean;
  onEdit?: (painting: Painting) => void;
  onDelete?: (id: string, title: string) => void;
  onPaintingClick?: (paintingId: string) => void;
  actionLoading?: string | null;
}

export function ShowCard({ 
  painting, 
  isAdmin = false, 
  onEdit, 
  onDelete, 
  onPaintingClick, 
  actionLoading 
}: ShowCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on admin buttons
    if (isAdmin && (e.target as HTMLElement).closest('button')) {
      return;
    }
    onPaintingClick?.(painting.id);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/60"
    >
      <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group mx-auto">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-10"
            aria-hidden="true"
          />
          <img 
            src={painting.imageUrl}
            alt={painting.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x600?text=Image+Not+Found";
            }}
          />
        </div>

        {/* Admin Controls */}
        {isAdmin && onEdit && onDelete && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-30">
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onEdit(painting)}
                className="h-8 w-8 p-0 bg-white/90 hover:bg-white backdrop-blur-sm"
                disabled={actionLoading !== null}
              >
                <Edit className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDelete(painting.id, painting.title)}
                className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-600 backdrop-blur-sm"
                disabled={actionLoading !== null}
              >
                {actionLoading === painting.id ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <Trash2 className="h-3 w-3" />
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white">
          <h2 className="text-xl font-bold mb-1 truncate">{painting.title}</h2>

          <div className="flex flex-col gap-1 mb-4">
            <p className="text-sm text-gray-200 truncate">by {painting.artist}</p>
            {painting.description && (
              <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                {painting.description}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mb-3">
            {painting.price && (
              <div className="text-sm">
                <span className="block text-gray-300">Price</span>
                <span className="font-medium text-green-400">₹{painting.price.toLocaleString()}</span>
              </div>
            )}

            {painting.year && (
              <div className="text-sm">
                <span className="block text-gray-300">Year</span>
                <span className="font-medium">{painting.year}</span>
              </div>
            )}
          </div>

          <div className="text-xs text-gray-400">
            Added {new Date(painting.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
