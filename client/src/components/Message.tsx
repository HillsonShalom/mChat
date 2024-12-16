import IMessage from "../types/messageModel"

interface Props {
    msg: IMessage
}

const Message = ({msg}: Props) => {
  return (
    <div>
        <h4>{msg.content}</h4>
    </div>
  )
}

export default Message