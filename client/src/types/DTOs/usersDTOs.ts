export interface registerDTO {
  id: string;
  username: string;
  token: string;
}

export interface loginDTO {
  id: string;
  username: string;
  token: string;
}

export interface userDTO {
  id: string;
  username: string;
  photoUrl?: string;
  chats: {
    name: string;
    photoUrl?: string;
    id: string;
  }[];
}
