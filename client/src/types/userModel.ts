interface IUser {
    id: string;
    username: string;
    contacts: {
        user: string;
        nickname: string;
    }[];
    
    photoUrl?: string;
}

export default IUser
