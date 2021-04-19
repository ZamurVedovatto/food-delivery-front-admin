import React, { useContext, useState } from 'react'
import { Button, Message, Form, Grid, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from './../util/graphql'
import { AuthContext } from './../context/auth'
import { useForm } from './../util/hooks/useForm'

export default function Login(props) {
  const context = useContext(AuthContext)
  const [errors, setErrors] = useState({})

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  })

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login:userData } }) {
      context.login(userData)
      props.history.push('/')
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.exception.errors)
    },
    variables: values
  })

  function loginUserCallback() {
    loginUser()
  }

  return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				{/* <Header as='h2' color='teal' textAlign='center'>
					<Image src='/logo.png' /> Log-in to your account
				</Header> */}
				<Form size='large' onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
					<Segment>
						<Form.Input
							fluid
							icon='user'
							iconPosition='left'
							placeholder="Username"
							name="username"
							type="text"
							value={values.username}
							error={errors?.username ? true : false}
							onChange={onChange}
						/>
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder="Password"
							name="password"
							type="password"
							value={values.password}
							error={errors?.password ? true : false}
							onChange={onChange}
						/>

						<Button color='teal' fluid size='large' type="submit">
							Acessar
						</Button>
					</Segment>
				</Form>
				{
					Object.keys(errors).length > 0 && (
						<div className="ui error message">
							<ul className="list">
								{
									Object.values(errors).map(value => (
										<li key={value}>
											{value}
										</li>
									))
								}
							</ul>
						</div>
					)
				}
				<Message>
					Não tem acesso? <a href='#'>Registrar-se</a>
				</Message>
			</Grid.Column>
		</Grid>


    // <Segment placeholder className="login-wrapper">
    //   <Grid columns={2} relaxed='very' stackable>
    //     <Grid.Column>
    //       <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
    //         <Form.Input
    //           label="Username"
    //           placeholder="Username"
    //           name="username"
    //           type="text"
    //           value={values.username}
    //           error={errors?.username ? true : false}
    //           onChange={onChange}
    //         />
    //         <Form.Input
    //           label="Password"
    //           placeholder="Password"
    //           name="password"
    //           type="password"
    //           value={values.password}
    //           error={errors?.password ? true : false}
    //           onChange={onChange}
    //         />
    //         <Button type="submit" primary>
    //           Acessar
    //         </Button>
    //       </Form>
    //       {
    //         Object.keys(errors).length > 0 && (
    //           <div className="ui error message">
    //             <ul className="list">
    //               {
    //                 Object.values(errors).map(value => (
    //                   <li key={value}>
    //                     {value}
    //                   </li>
    //                 ))
    //               }
    //             </ul>
    //           </div>
    //         )
    //       }

    //     </Grid.Column>
    //     <Grid.Column verticalAlign='middle'>
    //       <Button content='Criar conta' icon='signup' size='big' as={Link} to="/register" />
    //     </Grid.Column>
    //   </Grid>

    //   <Divider vertical>Ou</Divider>
    // </Segment>
  )
}
