import { gql } from "apollo-boost";
export const GET_MYGITHUB = gql`
{
  viewer {
    avatarUrl
    name
    location
    status {
      message
    }
    bio
    createdAt
    organizations (first: 7) {
      edges {
        node {
          avatarUrl
        }
      }
    }
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        owner {
          login
        }
        name
        createdAt
        description
        updatedAt
        licenseInfo {
          name
        }
        primaryLanguage {
          name
        }
        openGraphImageUrl
        isPrivate
        collaborators {
          edges {
            node {
              id
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`