import Emoji from "../emoji";

export interface createChat {
  partnerId: string;
}

export interface createGroup {
  name: string;
  partnerId: string;
}

export interface chatDTO {
  members: {
    id: string;
    username: string;
    photoUrl?: string;
    isAdmin?: boolean;
  }[];
  messages: {
    id: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    content?: string;
    replyOn?: string;
    image?: File | string;
    voice?: ArrayBuffer;
    file?: File | string;
    likes: {
        from: string;
        symbol: Emoji;
    }[]
  }[];
  id?: string;
  chatName: string;
  photoUrl?: string;
  isGroup: boolean;
}
