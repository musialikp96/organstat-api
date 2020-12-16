import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "Group Schema" })

export default class Group {

    @Field(() => ID)
    id: String;

    @Field()
    name: String;
}
