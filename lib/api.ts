import axios from 'axios';
import { CreatePaintingData, Painting, PaintingsResponse, UpdatePaintingData } from '@/types/paintings';

const api = axios.create({
  baseURL: '/api/paintings',
  timeout: 10000,
});

export const paintingsApi = {
  async getPaintings(params?: {
    userId?: string;
    limit?: number;
    offset?: number;
    search?: string;
  }): Promise<PaintingsResponse> {
    const response = await api.get('/getAllPainting', { params });
    return response.data;
  },

  async createPainting(data: CreatePaintingData): Promise<Painting> {
    const response = await api.post('/addPainting', data);
    return response.data.painting;
  },

  async updatePainting(data: UpdatePaintingData): Promise<Painting> {
    const response = await api.put('/updatePainting', data);
    return response.data.painting;
  },

  async deletePainting(id: string): Promise<void> {
    await api.delete(`/deletePainting?id=${id}`);
  },
};

export default api;
