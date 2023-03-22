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

export const DELETE_USER_MUTATION = gql`
    mutation($input: DeleteUserInput!){
        deleteUser(input: $input) {
            id
            firstName
            lastName
            __typename
        }
    }
`