import { useQuery } from '@tanstack/react-query';
import { apiClient } from './client';

// Types for property data
export interface Property {
  id: string;
  title: string;
  description?: string;
  price?: number;
  location?: string;
  images?: string[];
  amenities?: string[];
  type?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  rating?: number;
  available?: boolean;
  // Add more fields based on your backend response
}

export interface PropertiesResponse {
  data: Property[];
  total?: number;
  page?: number;
  limit?: number;
  success?: boolean;
  message?: string;
}

// Query keys for better cache management
export const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  list: (filters: Record<string, any>) => [...propertyKeys.lists(), { filters }] as const,
  details: () => [...propertyKeys.all, 'detail'] as const,
  detail: (id: string) => [...propertyKeys.details(), id] as const,
};

export const useProperties = (options?: { enabled?: boolean; refetchInterval?: number }) => {
  return useQuery({
    queryKey: propertyKeys.lists(),
    queryFn: async () => {
      console.log('🔄 Fetching properties from backend...');
      const data = await apiClient.getProperties();
      console.log('✅ Properties fetched successfully:', data);
      return data;
    },
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
    enabled: options?.enabled ?? true,
    refetchInterval: options?.refetchInterval,
    retry: (failureCount, error) => {
      console.error(`❌ Error fetching properties (attempt ${failureCount + 1}):`, error);
      return failureCount < 3;
    },
  });
};

// Direct API calls (for server-side usage)
export const propertiesApi = {
  getAll: async () => {
    console.log('🔄 Direct API call: Fetching all properties...');
    try {
      const data = await apiClient.getProperties();
      console.log('✅ Direct API call successful:', data);
      return data;
    } catch (error) {
      console.error('❌ Direct API call failed:', error);
      throw error;
    }
  },
};

// Utility function to prefetch properties (useful for SSG/SSR)
export const prefetchProperties = async (queryClient: any) => {
  await queryClient.prefetchQuery({
    queryKey: propertyKeys.lists(),
    queryFn: propertiesApi.getAll,
    staleTime: 5 * 60 * 1000,
  });
};
