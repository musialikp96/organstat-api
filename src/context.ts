import GroupModel from "./group/GroupModel"
import PlayModel from "./play/PlayModel"
import SongModel from "./song/SongModel"

export const context = () => {
    return {
        songModel: SongModel,
        groupModel: GroupModel,
        playModel: PlayModel
    }
}