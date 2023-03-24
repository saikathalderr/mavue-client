import { gql } from '@apollo/client';

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

export const CHAPTER_BY_ID_QUERY = gql`
    query($chapterId: String!){
        chapter(id: $chapterId) {
            id
            title
            text
            recurringInterval
            requirements
            assignedTo {
                id
                firstName
                lastName
                __typename
            }
            __typename
        }
    }
`

export const UPDATE_CHAPTER_QUERY = gql`
mutation($input: ChapterUpdateInput!, $updateChapterId: String!){
  updateChapter(input: $input, id: $updateChapterId) {
    id
    text
    title
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
`