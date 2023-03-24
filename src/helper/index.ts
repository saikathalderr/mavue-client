import { IUser } from "../container/Users/interface";

export function __getFullName(user: IUser | undefined | null): string {
  if (!user) return "";
  return user.firstName + " " + user.lastName;
}
