export interface Painting {
  id: string;
  title: string;
  artist: string;
  description?: string;
  imageUrl: string;
  price?: number;
  year?: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface PaintingsResponse {
  paintings: Painting[];
  total: number;
  limit: number | null;
  offset: number | null;
}

export interface CreatePaintingData {
  title: string;
  artist: string;
  description?: string;
  imageUrl: string;
  price?: number;
  year?: number;
  userId: string;
}

export interface UpdatePaintingData extends CreatePaintingData {
  id: string;
}