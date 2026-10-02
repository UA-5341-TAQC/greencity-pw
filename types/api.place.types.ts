export enum PlaceStatus {
  Proposed = 'PROPOSED',
  Declined = 'DECLINED',
  Approved = 'APPROVED',
  Deleted = 'DELETED',
}

export interface PlacesPage {
  page: unknown[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
}

export interface PlaceLocation {
  id: number;
  lat: number;
  lng: number;
  address: string;
}

export interface PlaceInfo {
  id: number;
  name: string;
  location: PlaceLocation;
  rate: number;
  description: string;
  websiteUrl: string;
  placeImages: string[];
}