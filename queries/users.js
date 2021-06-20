import gql from 'graphql-tag';

export const FULL_USERS = gql`
    {
        users {
            display_name
        }
    }
`;
