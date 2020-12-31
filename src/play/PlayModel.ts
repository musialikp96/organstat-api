import * as Mongoose from "mongoose";
import { Kind } from "./Kind";

export interface IPlay extends Mongoose.Document {
    timestamp: Date,
    song: string,
}

const PlaySchema: Mongoose.Schema = new Mongoose.Schema(
    {
        timestamp: {
            type: Number,
        },
        song: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'Song'
        },
        kind: Number
    },
    { timestamps: true }
);

export default Mongoose.model<IPlay>("Play", PlaySchema);
