export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: {
    address: string;
    city: string;
    province: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specifications: {
    landArea: number;
    buildingArea: number;
    bedrooms: number;
    bathrooms: number;
    floors: number;
    carports: number;
  };
  images: string[];
  amenities: string[];
  propertyType: 'house' | 'apartment' | 'land' | 'commercial';
  status: 'available' | 'sold' | 'reserved';
  listedDate: Date;
  agent?: {
    name: string;
    contact: string;
    photo?: string;
  };
}

export interface PropertyFilters {
  propertyType?: Property['propertyType'] | 'all';
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  city?: string;
  status?: Property['status'];
}
