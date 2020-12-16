import { Field, ObjectType } from "type-graphql";
import GroupSchema from "./GroupSchema";

@ObjectType({ description: "Group Response" })
export default class GroupResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => GroupSchema)
    data: GroupSchema | null;

    @Field(() => String)
    error: String | null;
}
