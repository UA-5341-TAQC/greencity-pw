/** Paginated response of the `/search/*` endpoints (PageableDto). */
export interface SearchPage<T> {
  page: T[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
}

export interface SearchNewsItem {
  id: number;
  title: string;
  tags: string[];
}

export interface SearchEventItem {
  id: number;
  title: string;
  tags: string[];
}

export interface SearchPlaceItem {
  id: number;
  name: string;
  category: string;
}
