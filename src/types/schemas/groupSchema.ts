import { Document, model, Schema } from "mongoose";
import IGroup from "../models/groupModel";

interface groupDocument extends Document, IGroup {}

export const groupSchema = new Schema<groupDocument>({
    name: {
        type: String,
        required: true
    },
    admins: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    photoUrl: {
        type: String
    }
});

const groupModel = model('Group', groupSchema);

export default groupModel;