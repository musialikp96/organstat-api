import { Field, ObjectType } from "type-graphql";
import SongSchema from "./SongSchema";

@ObjectType({ description: "Song Response" })
export default class SongResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => SongSchema)
    data: SongSchema | null;

    @Field(() => String)
    error: String | null;
}
