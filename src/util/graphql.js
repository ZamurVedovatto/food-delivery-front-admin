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
export const FETCH_PRODUCTS = gql `
	{
		getProducts {
			id
			title
			description
			price
			active
		}
	}
`
export const CREATE_PRODUCT = gql `
	mutation createProduct($title: String!, $description: String!, $price: String!) {
		createProduct(title: $title, description: $description, price: $price) {
			id
			title
			description
			price
			active
		}
	}
`
export const TOGGLE_ACTIVE_PRODUCT = gql `
	mutation toggleActiveProduct($productId: ID!) {
		toggleActiveProduct(productId: $productId) {
			id
			title
			description
			price
			active
		}
	}
`
export const DELETE_PRODUCT = gql `
	mutation deleteProduct($productId: ID!) {
		deleteProduct(productId: $productId)
	}
`
