import {
    Arg,
    Query,
    Mutation,
    Resolver,
    Ctx,
} from "type-graphql";
import SongSchema from "./SongSchema";
import { ISong } from "../SongModel";

@Resolver((of) => SongSchema)
export class SongResolver {

    @Query(() => SongSchema, { nullable: true })
    async songById(@Arg("id") id: string, @Ctx() ctx: any): Promise<ISong> {
        const songCollection = await ctx.songModel.findOne({ _id: id }).populate('group', 'name');

        return songCollection;
    }

    @Query(() => SongSchema, { nullable: true })
    async songByNumber(@Arg("number") number: number, @Ctx() ctx: any): Promise<ISong> {
        const songCollection = await ctx.songModel.findOne({ number: number }).populate('group', 'name');

        return songCollection;
    }

    @Query(() => [SongSchema], { nullable: true })
    async songList(@Ctx() ctx: any): Promise<ISong[]> {
        const songCollection = await ctx.songModel.find().populate('group')

        return songCollection;
    }

    @Mutation(() => SongSchema)
    async addSong(
        @Arg("name") name: string,
        @Arg("number") number: number,
        @Ctx() ctx: any
    ): Promise<ISong> {
        const song = await new ctx.songModel({
            name,
            number,
        });

        return song.save();
    }
}
