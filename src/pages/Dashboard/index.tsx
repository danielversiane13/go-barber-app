import React from 'react'
import { Button } from 'react-native'

import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <Container style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={signOut} />
    </Container>
  )
}

export default Dashboard
