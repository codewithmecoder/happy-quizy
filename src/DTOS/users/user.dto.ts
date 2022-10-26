export interface UserDto {
  id: number;
  username: string;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photo: Buffer | null;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
