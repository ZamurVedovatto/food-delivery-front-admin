import React, { useContext, useState } from 'react'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table
} from "semantic-ui-react";
import { AuthContext } from './../context/auth'

export default function AdminApp() {
  const { logout, user } = useContext(AuthContext)
	const [dropdownMenuStyle, setDropdownMenuStyle] = useState("none")
	const [activeItem, setActiveItem] = useState("novos")

	const handleItemClick = (e, { name }) => setActiveItem(name)

	const handleToggleDropdownMenu = () => {
		if (dropdownMenuStyle === "none") setDropdownMenuStyle("flex")
		else setDropdownMenuStyle("none")
  };

	return (
	<div className="App">
		<Grid padded className="tablet computer only">
			<Menu borderless inverted fluid fixed="top">
				<Menu.Item header as="a">
					FoodDelivery
				</Menu.Item>
				{/* <Menu.Menu position="right">
					<Menu.Item>
						<Input placeholder="Search..." size="small" />
					</Menu.Item>
					<Menu.Item as="a">Dashboard</Menu.Item>
					<Menu.Item as="a">Settings</Menu.Item>
					<Menu.Item as="a">Profile</Menu.Item>
					<Menu.Item as="a">Help</Menu.Item>
				</Menu.Menu> */}
			</Menu>
		</Grid>
		<Grid padded className="mobile only">
			<Menu borderless inverted fluid fixed="top">
				<Menu.Item header as="a">
					FoodDelivery
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						<Button
							basic
							inverted
							icon
							toggle
							onClick={handleToggleDropdownMenu}
						>
							<Icon name="content" />
						</Button>
					</Menu.Item>
				</Menu.Menu>
				<Menu
					borderless
					fluid
					inverted
					vertical
					style={{display: dropdownMenuStyle}}
				>
					<Menu.Item as="a">Dashboard</Menu.Item>
					<Menu.Item as="a">Settings</Menu.Item>
					<Menu.Item as="a">Profile</Menu.Item>
					<Divider fitted />
					<Menu.Item as="a">Logout</Menu.Item>
					{/* <Menu.Item>
						<Input placeholder="Search..." size="small" />
					</Menu.Item> */}
				</Menu>
			</Menu>
		</Grid>
		<Grid padded>
			<Grid.Column
				tablet={3}
				computer={3}
				only="tablet computer"
				id="sidebar"
			>
				<Menu vertical>
					<Menu.Item>
						<Menu.Header>Pedidos</Menu.Header>

						<Menu.Menu>
							<Menu.Item
								name='novos'
								active={activeItem === 'novos'}
								onClick={handleItemClick}
							/>
							<Menu.Item
								name='em produção'
								active={activeItem === 'em produção'}
								onClick={handleItemClick}
							/>
							<Menu.Item
								name='pronto para entrega'
								active={activeItem === 'pronto para entrega'}
								onClick={handleItemClick}
							/>
							<Menu.Item
								name='em entrega'
								active={activeItem === 'em entrega'}
								onClick={handleItemClick}
							/>
							<Menu.Item
								name='finalizados'
								active={activeItem === 'finalizados'}
								onClick={handleItemClick}
							/>
							<Menu.Item
								name='cancelados'
								active={activeItem === 'cancelados'}
								onClick={handleItemClick}
							/>
						</Menu.Menu>
					</Menu.Item>

					<Menu.Item>
						<Menu.Header>Produtos</Menu.Header>
						<Menu.Menu>
							<Menu.Item
								name='adicionar'
								active={activeItem === 'adicionar'}
								onClick={handleItemClick}
							/>
							<Menu.Item
								name='lista'
								active={activeItem === 'lista'}
								onClick={handleItemClick}
							/>
						</Menu.Menu>
					</Menu.Item>

					<Menu.Item>
						<Menu.Header>Configurações</Menu.Header>

						<Menu.Menu>
							<Menu.Item
								name='usuários'
								active={activeItem === 'usuários'}
								onClick={handleItemClick}
							/>
						</Menu.Menu>
					</Menu.Item>

					<Menu.Item>
						<Menu.Header></Menu.Header>
						<Menu.Menu>
							<Menu.Item
								name='sair'
								active={activeItem === 'sair'}
								onClick={handleItemClick}
							>
							Sair
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
				</Menu>
			</Grid.Column>
			<Grid.Column
				mobile={16}
				tablet={13}
				computer={13}
				floated="right"
				id="content"
			>
				<Grid padded>
					<Grid.Row>
						<Header dividing size="huge" as="h5">
							{user.name}
						</Header>
					</Grid.Row>
					<Divider section hidden />
					<Grid.Row>
						<Header dividing size="huge" as="h1">
							Section title
						</Header>
					</Grid.Row>
					<Grid.Row>
						content
					</Grid.Row>
				</Grid>
			</Grid.Column>
		</Grid>
	</div>
	)
}
