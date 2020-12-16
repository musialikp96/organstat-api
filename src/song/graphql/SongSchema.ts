import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "Song Schema" })

export default class Song {

    @Field(() => ID)
    id: String;

    @Field()
    name: String;

    @Field()
    number: Number;
}
