import gql from 'graphql-tag'

export const LOGIN_USER = gql `
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(
      username: $username
      password: $password
    ){
      user {
				email
      username
      id
      token
      name
      createdAt
      }
    }
  }
`
