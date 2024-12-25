import UserModel from "../../types/schemas/userSchema"

const getAllUsers = async (): Promise<[getUsersDto[] | null, string | null]> => {
    try {
        const data = await UserModel.find({}).select('_id username photoUrl').exec() as unknown as getUsersDto[]
        return [data, null]
    } catch(err) {
        return [null, (err as Error).message]
    }
}

export default getAllUsers

export type getUsersDto = {_id: string, username: string, photoUrl?: string}