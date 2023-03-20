/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

/** Schema for authentication payload */
export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export enum Category {
  Environment = 'environment',
  Governance = 'governance',
  Social = 'social',
}

export enum Interval {
  Biweekly = 'biweekly',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Yearly = 'yearly',
}

/** Schema for login */
export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  login: AuthPayload;
  signup: AuthPayload;
  updateTask: Task;
};

export type MutationCreateTaskArgs = {
  input?: InputMaybe<TaskCreateInput>;
};

export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};

export type MutationSignupArgs = {
  input?: InputMaybe<SignupInput>;
};

export type MutationUpdateTaskArgs = {
  assignedOn?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  isRecurring?: InputMaybe<Scalars['Boolean']>;
  recurringInterval?: InputMaybe<Interval>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  taskExecutorId: Scalars['Int'];
  taskId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getTask: Array<Task>;
  tasks: Array<Task>;
  users: Array<User>;
};

/** Schema for signup */
export type SignupInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

/** A schema type for Task */
export type Task = {
  __typename?: 'Task';
  assignedToId?: Maybe<Scalars['Int']>;
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Task>;
  createdById?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isRecurring?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  recurringInterval?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Schema for creating task input */
export type TaskCreateInput = {
  assignedToId?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Category>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['Date']>;
  isRecurring?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  recurringInterval?: InputMaybe<Interval>;
  startDate?: InputMaybe<Scalars['Date']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

/** A schema for User */
export type User = {
  __typename?: 'User';
  assignedTask: Array<Task>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  tasks: Array<Task>;
};
