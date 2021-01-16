import { SongResolver } from "./song/graphql/SongResolver";
import { GroupResolver } from "./group/graphql/GroupResolver";
import { PlayResolver } from "./play/graphql/PlayResolver";

export const resolvers = [
    SongResolver,
    GroupResolver,
    PlayResolver
];