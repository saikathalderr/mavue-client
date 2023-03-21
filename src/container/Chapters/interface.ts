import {IUser} from "../Users/interface";

export interface IChapter {
    id: string
    title: string
    text: string
    requirements: string
    recurringInterval: number
    assignedTo: IUser
    __typename: string
}