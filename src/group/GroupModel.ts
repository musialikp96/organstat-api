import * as Mongoose from "mongoose";

export interface IGroup extends Mongoose.Document {
    name: string
}

const GroupSchema: Mongoose.Schema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default Mongoose.model<IGroup>("Group", GroupSchema);
