import {IUser} from "../container/Users/interface";

export function __getFullName(user: IUser): string {
    if (!user) return ''
    return user.firstName + ' ' + user.lastName
}