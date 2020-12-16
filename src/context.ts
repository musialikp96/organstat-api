import GroupModel from "./group/GroupModel"
import SongModel from "./song/SongModel"

export const context = () => {
    return {
        songModel: SongModel,
        groupModel: GroupModel
    }
}