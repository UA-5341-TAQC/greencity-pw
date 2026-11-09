export interface EcoNewsAuthor {
  id: number;
  name: string;
}

export interface EcoNewsDetails {
  creationDate: string;
  imagePath: string | null;
  id: number;
  title: string;
  content: string;
  shortInfo: string;
  author: EcoNewsAuthor;
  likes: number;
  dislikes: number;
  countComments: number;
  hidden: boolean;
  tagsEn: string[];
  tagsUk: string[];
  favorite: boolean;
  source?: string;
  countOfEcoNews?: number;
}

export interface EcoNewsPage {
  page: EcoNewsDetails[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
  number: number;
  hasPrevious: boolean;
  hasNext: boolean;
  first: boolean;
  last: boolean;
}
