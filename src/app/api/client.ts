// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: {
    properties: '/properties',
  },
};

// API client class
export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...options?.headers,
        },
        mode: 'cors',
        credentials: 'omit',
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed for ${url}:`, error);

      // More detailed error information
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.error('❌ This is likely a CORS issue or the backend is not running.');
        console.error('🔍 Troubleshooting steps:');
        console.error('1. Make sure your backend server is running on', this.baseUrl);
        console.error('2. Check if CORS is enabled on your backend');
        console.error('3. Verify the backend URL is correct');
      }

      throw error;
    }
  }

  // Get all properties
  async getProperties() {
    const endpoint = apiConfig.endpoints.properties;
    console.log('🔄 Making API request to:', `${this.baseUrl}${endpoint}`);

    try {
      const data = await this.request(endpoint);
      console.log('✅ API Response received:', {
        status: 'success',
        dataType: typeof data,
        isArray: Array.isArray(data),
        count: Array.isArray(data) ? data.length : 'N/A',
        sample: Array.isArray(data) && data.length > 0 ? data[0] : data,
      });
      return data;
    } catch (error) {
      console.error('❌ API Request failed:', error);
      throw error;
    }
  }
}

// Export a default instance
export const apiClient = new ApiClient();
