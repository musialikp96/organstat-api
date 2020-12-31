import { Field, ObjectType } from "type-graphql";
import PlaySchema from "./PlaySchema";

@ObjectType({ description: "Play Response" })
export default class PlayResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => PlaySchema)
    data: PlaySchema | null;

    @Field(() => String)
    error: String | null;
}
