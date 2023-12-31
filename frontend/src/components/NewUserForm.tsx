import { FormEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { GET_USER } from "../App"

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`

export function NewUserForm() {
  const [name, setName] = useState('')
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

  const handleCreateUser = async (event: FormEvent) => {
    event.preventDefault()

    if (!name) {
      return
    }

    await createUser({
      variables: {
        name
      },
      refetchQueries: [GET_USER]
    })

    console.log(data)
  }
  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}