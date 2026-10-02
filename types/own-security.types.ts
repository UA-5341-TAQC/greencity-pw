export interface OwnSignUpDto {
  email: string;
  password: string;
  name?: string;
  isUbs?: boolean;
}

export interface SuccessSignUpDto {
  userId: number;
  username: string;
  email: string;
  ownRegistrations: boolean;
}

export interface OwnSignInDto {
  email: string;
  password: string;
  projectName: 'GREENCITY' | 'PICKUP';
}

export interface SuccessSignInDto {
  userId: number;
  accessToken: string;
  refreshToken: string;
  name: string;
  ownRegistrations?: boolean;
}

export interface OwnRestoreDto {
  token: string;
  password: string;
  confirmPassword: string;
  isUbs?: boolean;
}

export interface UpdatePasswordDto {
  password: string;
  confirmPassword: string;
}

export interface SetPasswordDto {
  password: string;
  confirmPassword: string;
}

export interface UnblockAccountDto {
  token?: string;
}

export interface PositionDto {
  id: number;
  name: string;
}

export interface EmployeeSignUpDto {
  email: string;
  name?: string;
  uuid?: string;
  positions?: PositionDto[];
  isUbs?: boolean;
}

export interface UserManagementCreateDto {
  id: number;
  email: string;
  role: 'ROLE_USER' | 'ROLE_ADMIN' | 'ROLE_MODERATOR' | 'ROLE_EMPLOYEE' | 'ROLE_UBS_EMPLOYEE';
  name?: string;
}

export interface PasswordStatusDto {
  hasPassword: boolean;
}
