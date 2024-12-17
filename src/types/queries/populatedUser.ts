interface populatedUser {
  username: string;
  chats: {
    _id: string;
    members: {
      _id: string
      username: string;
      photoUrl?: string;
    }[];
    group?: {
      name: string;
      photoUrl?: string;
    };
  }[];
  photoUrl?: string;
}

export default populatedUser;
