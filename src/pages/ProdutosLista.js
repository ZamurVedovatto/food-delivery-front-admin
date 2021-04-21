import React, { useContext } from 'react'
import { Segment, Image, Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { AuthContext } from './../context/auth'

export default function ProdutosLista({ loading, products }) {
	const { user } = useContext(AuthContext)

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
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{
								products && products.map((product) => (
									<Table.Row key={product.id}>
										<Table.Cell collapsing>
											<Checkbox toggle checked={product.active} />
										</Table.Cell>
										<Table.Cell>{product.title}</Table.Cell>
										<Table.Cell>{product.description}</Table.Cell>
										<Table.Cell>{product.price}</Table.Cell>
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
