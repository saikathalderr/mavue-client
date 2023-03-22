import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
    mutation($input: UserInput!){
        createUser(input: $input) {
            id
            firstName
            lastName
            __typename
        }
    }
`;
