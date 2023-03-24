import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
    query{
        users {
            id
            firstName
            lastName
            __typename
        }
    }
`;