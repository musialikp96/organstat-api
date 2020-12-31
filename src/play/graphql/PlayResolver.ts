import {
    Arg,
    Query,
    Mutation,
    Resolver,
    Ctx,
} from "type-graphql";
import PlaySchema from "./PlaySchema";
import { IPlay } from "../PlayModel";
import { Kind } from "../Kind";
import SongModel from "../../song/SongModel";

@Resolver((of) => PlaySchema)
export class PlayResolver {

    @Query(() => PlaySchema, { nullable: true })
    async playById(@Arg("id") id: string, @Ctx() ctx: any): Promise<IPlay> {
        const playCollection = await ctx.playModel.findOne({ _id: id });

        return playCollection;
    }

    @Query(() => [PlaySchema], { nullable: true })
    async playList(@Ctx() ctx: any): Promise<IPlay[]> {
        const playCollection = await ctx.playModel.find().populate('song');

        return playCollection;
    }

    @Mutation(() => PlaySchema)
    async addPlay(
        @Arg("songId") songId: string,
        @Arg("timestamp") timestamp: number,
        @Arg("number") number: number,
        @Arg("kind") kind: Kind,
        @Ctx() ctx: any
    ): Promise<IPlay> {
        if (!timestamp) {
            timestamp = Date.now();
        }
        if (!songId && number) {
            let song = await SongModel.findOne({ number: number });

            if (song?.id) {
                songId = song?.id
            }
        }
        const play = await new ctx.playModel({
            timestamp,
            song: songId,
            kind
        });

        return play.save();
    }
}
