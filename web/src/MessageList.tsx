import { Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'



export default function MessageList({ messages }: any): ReactElement {

    if (messages) return (
        <>
            {messages?.map((message: any) => {
                return (
                    <Text>
                        {message?.name}
                    </Text>
                )
            })}
        </>
    ); else return <p>No messages</p>
}
