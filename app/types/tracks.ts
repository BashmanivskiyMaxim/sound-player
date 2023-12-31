export interface ITrack {
    _id: string
    name: string
    artist: string
    text: string
    listens: number
    picture: string
    comment: IComment[]
}

export interface IComment {
    _id: string
    username: string
    text: string
}