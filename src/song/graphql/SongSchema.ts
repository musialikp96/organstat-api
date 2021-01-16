import { Field, ObjectType, ID } from "type-graphql";
import Group from "../../group/graphql/GroupSchema";
import { IGroup } from "../../group/GroupModel";

@ObjectType({ description: "Song Schema" })

export default class Song {

    @Field(() => ID)
    id: String;

    @Field()
    name: String;

    @Field()
    number: Number;

    @Field()
    group: Group;

}
