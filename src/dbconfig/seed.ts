import ChatModel from "../types/schemas/chatSchema"
import MessageModel from "../types/schemas/messageSchema"
import UserModel from "../types/schemas/userSchema"

const seed = async () => {
    try {
        const me = await (new UserModel({
            username: "Shalom",
            password: "1234",
        })).save()
        const mam = await (new UserModel({
            username: "Miriam",
            password: "1234"
        })).save()

        const chat = await (new ChatModel({
            members: [me.id, mam.id]
        })).save()

        const msg1 = await (new MessageModel({
            author: me.id,
            chat: chat.id,
            content: "hello"
        })).save()
    } catch(err) {
        throw err;
    }
}

export default seed