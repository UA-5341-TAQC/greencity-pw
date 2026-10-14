export interface EventAttender {
  id: number;
  name: string;
  imagePath: string;
}

export interface EventCoordinates {
  latitude: number;
  longitude: number;
  streetEn: string;
  streetUa: string;
  houseNumber: string;
  cityEn: string;
  cityUa: string;
  regionEn: string;
  regionUa: string;
  countryEn: string;
  countryUa: string;
  formattedAddressEn: string;
  formattedAddressUa: string;
}

export interface EventFilter {
  time: string;
  cities: string[];
  statuses: string[];
  tags: string[];
  title: string;
  type: string;
  from: string;
  to: string;
}

export interface EventOrganizer {
  id: number;
  name: string;
  organizerRating: number | null;
  email: string;
}

export interface EventTag {
  id: number;
  nameUa: string;
  nameEn: string;
}

export interface EventDate {
  id: number;
  startDate: string;
  finishDate: string;
  onlineLink: string;
  coordinates: EventCoordinates;
  event?: EventsPage;
}

export interface EventsPage {
  id: number;
  title: string;
  organizer: EventOrganizer;
  creationDate: string;
  description: string;
  dates: EventDate[];
  tags: EventTag[];
  titleImage: string;
  additionalImages: string[];
  type: string;
  isRelevant: boolean;
  likes: number;
  dislikes: number;
  countComments: number;
  eventRate: number;
  currentUserGrade: number | null;
  open: boolean;
  isSubscribed: boolean;
  isFavorite: boolean;
  isOrganizedByFriend: boolean;
}

export interface ResponseEventsPage {
  page: EventsPage[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
  number: number;
  hasPrevious: boolean;
  hasNext: boolean;
  first: boolean;
  last: boolean;
}
