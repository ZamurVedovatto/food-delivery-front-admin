import { useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { Segment, Image, Button, Checkbox, Loader, Table } from 'semantic-ui-react'
import DeleteButton from '../components/product/DeleteButton'
import { TOGGLE_ACTIVE_PRODUCT } from '../util/graphql'
import { AuthContext } from './../context/auth'

export default function ProdutosLista({ loading, products }) {
	const { user } = useContext(AuthContext)

	const [onToggleActive, { error, loading: loadingActive }] = useMutation(TOGGLE_ACTIVE_PRODUCT, {
		onError(err) {
			console.log(err)
			return err
		}
	})

	return (
		<div style={{ width: "100%" }}>
			{
				loading ? (
					<Segment loading>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Segment>
				) : (
					<Table definition celled collapsing compact fixed selectable stackable>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell />
								<Table.HeaderCell>Produto</Table.HeaderCell>
								<Table.HeaderCell>Descrição</Table.HeaderCell>
								<Table.HeaderCell>Preço</Table.HeaderCell>
								<Table.HeaderCell></Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{
								products && products.map((product) => (
									<Table.Row key={product.id}>
										<Table.Cell collapsing>
											{
												loadingActive ? (
													<Loader active inline='centered' />
												) : (
													<Checkbox
														toggle
														checked={product.active}
														onChange={() => onToggleActive({ variables: { productId: product.id }})}
													/>
												)
											}
										</Table.Cell>
										<Table.Cell>{product.title}</Table.Cell>
										<Table.Cell>{product.description}</Table.Cell>
										<Table.Cell>{product.price}</Table.Cell>
										<Table.Cell>
											<Button.Group basic>
												<Button icon='edit' color='yellow' />
												<DeleteButton productId={product.id} />
												{/* <Button icon='delete' color='red' /> */}
											</Button.Group>
										</Table.Cell>
									</Table.Row>
								))
							}
						</Table.Body>
					</Table>
				)
			}
		</div>
	)
}
