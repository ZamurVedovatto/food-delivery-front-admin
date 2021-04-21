import { useMutation } from '@apollo/client'
import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import { CREATE_PRODUCT, FETCH_PRODUCTS } from '../util/graphql'
import { useForm } from '../util/hooks/useForm'

export default function ProdutosAdicionar({ refetch }) {

	const {values, onChange, onSubmit} = useForm(createProductCallback, {
		title: '',
		description: '',
		price: ''
	})

	const [createProduct, { error }] = useMutation(CREATE_PRODUCT, {
		variables: values,
		update(proxy, result) {
			console.log(result)
      const data = proxy.readQuery({
        query: FETCH_PRODUCTS,
      });
      proxy.writeQuery({
        query: FETCH_PRODUCTS,
        data: {
          getProducts: [result.data.createProduct, ...data.getProducts],
        },
      });
      values.title = '';
      values.description = "";
      values.price = '';
		},
		onError(err) {
			console.log(err)
			return err
		}
	})

	function createProductCallback() {
		createProduct()
		refetch()
	}

	return (
    <Container>
			<Form onSubmit={onSubmit}>
				<Form.Field>
					<Form.Input
						label="Produto"
						name="title"
						onChange={onChange}
						value={values.title}
						error={error ? true : false}
					></Form.Input>
				</Form.Field>
				<Form.Field>
					<Form.TextArea
						label="Descrição"
						placeholder="Escreva a descrição completa do produto aqui"
						name="description"
						onChange={onChange}
						value={values.description}
						error={error ? true : false}
					/>
				</Form.Field>
				<Form.Field>
					<Form.Input
						label="Preço"
						name="price"
						onChange={onChange}
						value={values.price}
						error={error ? true : false}
					></Form.Input>
				</Form.Field>
				<Form.Field>
					<Button type="submit" color="teal">
						Adicionar
					</Button>
				</Form.Field>
			</Form>

			{ error && (
				<div className="ui error message" style={{ marginBottom: "2rem" }}>
					<ul className="list">
						<li>{error?.graphQLErrors[0]?.message}</li>
					</ul>
				</div>
			)}

	</Container>
	)
}
