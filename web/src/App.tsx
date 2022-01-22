import {
  Box, ChakraProvider, Container, Grid, Heading, theme, useToast, VStack
} from "@chakra-ui/react"
import * as React from "react"
import { AppForm } from "./AppForm"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import MessageList from "./MessageList"
import axios from 'axios'

type Message = {
  name: string
  email: string
}

export const App = () => {

  const [messages, setMesssages] = React.useState<Message[] | any>([])
  const toast = useToast()

  async function getMessages() {
    console.log('estou rodando')
    axios.get('http://localhost:8000/message').then((res) => {

      if (res.data.length !== messages.length) {
        setMesssages(res?.data)
      }
    }).catch((error) => {
      toast({ title: 'error', status: 'error' })
    })


  }
  React.useEffect(() => {

    const interval = setInterval(getMessages, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>Web Realtime</Heading>
            <Container>

              <AppForm getMessages={getMessages} />

              <MessageList messages={messages} />
            </Container>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
