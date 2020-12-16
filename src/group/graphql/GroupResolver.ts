import {
    Arg,
    Query,
    Mutation,
    Resolver,
    Ctx,
} from "type-graphql";
import GroupSchema from "./GroupSchema";
import { IGroup } from "../GroupModel";

@Resolver((of) => GroupSchema)
export class GroupResolver {

    @Query(() => GroupSchema, { nullable: true })
    async groupById(@Arg("id") id: string, @Ctx() ctx: any): Promise<IGroup> {
        const groupCollection = await ctx.groupModel.findOne({ _id: id });

        return groupCollection;
    }

    @Query(() => [GroupSchema], { nullable: true })
    async groupList(@Ctx() ctx: any): Promise<IGroup[]> {
        const groupCollection = await ctx.groupModel.find();

        return groupCollection;
    }

    @Mutation(() => GroupSchema)
    async addGroup(
        @Arg("name") name: string,
        @Ctx() ctx: any
    ): Promise<IGroup> {
        const group = await new ctx.groupModel({
            name
        });

        return group.save();
    }
}
