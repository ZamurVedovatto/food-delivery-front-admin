import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Icon, Button, Confirm } from 'semantic-ui-react'
import CustomPopup from './../CustomPopup'
import { DELETE_PRODUCT, FETCH_PRODUCTS } from '../../util/graphql'

export default function DeleteButton({ productId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const [deleteProductMutation] = useMutation(DELETE_PRODUCT, {
    update(proxy) {
      setConfirmOpen(false)
			const data = proxy.readQuery({
				query: FETCH_PRODUCTS
			})
			proxy.writeQuery({
				query:FETCH_PRODUCTS,
				data: {
					getProducts: data.getProducts.filter(product => product.id !== productId)
				}
			})
      if(callback) callback()
    },
    variables: {
      productId
    }
  })

  return (
    <>
      <CustomPopup content={'Excluir produto?'}>
        <Button
          as="div"
          color="red"
					icon='trash'
          onClick={() => setConfirmOpen(true)}
          >
        </Button>
      </CustomPopup>

      <Confirm
        cancelButton="Cancelar"
        confirmButton="Confirmar"
        content="Você tem certeza?"
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deleteProductMutation}
      />
    </>
  )
}
