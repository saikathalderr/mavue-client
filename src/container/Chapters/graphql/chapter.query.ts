import gql from 'graphql-tag';

export const CHAPTER_QUERY = gql`
    query{
        chapters {
            id
            title
            text
            requirements
            recurringInterval
            assignedTo {
                id
                firstName
                lastName
                __typename
            }
            __typename
        }
    }
`;
