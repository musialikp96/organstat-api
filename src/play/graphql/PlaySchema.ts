import { Field, ObjectType, ID } from "type-graphql";
import Song from "../../song/graphql/SongSchema";
import { Kind } from "../Kind";

@ObjectType({ description: "Play Schema" })
export default class Play {

    @Field(() => ID)
    id: String;

    @Field()
    kind: Kind;

    @Field()
    song: Song;

    @Field()
    timestamp: Number
}
