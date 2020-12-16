import { SongResolver } from "./song/graphql/SongResolver";
import { GroupResolver } from "./group/graphql/GroupResolver";

export const resolvers = [SongResolver, GroupResolver];