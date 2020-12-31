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
import { time } from "console";

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
        @Arg("kind") kind: Kind,
        @Ctx() ctx: any
    ): Promise<IPlay> {
        if (!timestamp) {
            timestamp = Date.now();
        }
        const play = await new ctx.playModel({
            timestamp,
            song: songId,
            kind
        });

        return play.save();
    }
}
