import { gql } from "apollo-boost";
export const GET_DETAILREPO = gql`
query RepoDetail ($url: String!) {
    repository(owner:"jokorezky", name:$url) {
      owner {
        login
      }
      name
      updatedAt
      isPrivate
      openGraphImageUrl
      primaryLanguage {
        name
      }
      collaborators {
        edges {
          node {
            name
          }
        }
      }
      primaryLanguage {
        name
      }
     object(expression: "master:") {
              ... on Tree {
                entries {
                  name
                  type
                }
              }
            }
    }
  }
`