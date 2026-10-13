export enum UserStatus {
  Blocked = 'BLOCKED',
  Deactivated = 'DEACTIVATED',
  Activated = 'ACTIVATED',
  Deleted = 'DELETED',
}

export interface CreateUserRequest {
  id: number;
  email: string;
  name: string;
  profilePicturePath: string;
}

export interface UserLocation {
  id: number;
  cityEn: string;
  cityUk: string;
  regionEn: string;
  regionUk: string;
  countryEn: string;
  countryUk: string;
  latitude: number;
  longitude: number;
}
