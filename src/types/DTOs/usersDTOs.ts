export interface registerDTO {
  username: string;
  password: string;
}

export interface loginDTO {
  username: string;
  password: string;
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
