import * as Mongoose from "mongoose";

export interface ISong extends Mongoose.Document {
    name: string;
    number: number;
}

export interface ISongResponse {
    data: any,
    succes: boolean,
    errors: any
}

const SongSchema: Mongoose.Schema = new Mongoose.Schema(
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

export default Mongoose.model<ISong>("Song", SongSchema);