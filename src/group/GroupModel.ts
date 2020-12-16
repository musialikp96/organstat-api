import * as Mongoose from "mongoose";

export interface IGroup extends Mongoose.Document {
    name: string;
    number: number;
}

export interface IGroupResponse {
    data: any,
    succes: boolean,
    errors: any
}

const GroupSchema: Mongoose.Schema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default Mongoose.model<IGroup>("Group", GroupSchema);
