export default Page

import React from 'react'
import { Button, Card, Code, Heading, Link, List } from '@chakra-ui/react'
import { Alert } from '../../components/ui/alert'
import { Avatar } from '../../components/ui/avatar'
import { Blockquote } from '../../components/ui/blockquote'

function Page() {
  return (
    <>
      <Heading display="block" fontSize="2em" marginBlock="0.67em" fontWeight="bold">
        Examples of{' '}
        <Link href="https://www.chakra-ui.com/docs/components/concepts/overview" target="_blank" colorPalette="teal">
          Chakra UI Components
        </Link>
      </Heading>

      <List.Root>
        <List.Item fontWeight="bold">Alert</List.Item>
        <Alert status="info">This is the alert title</Alert>
        <List.Item fontWeight="bold">Avatar, Button & Card</List.Item>
        <Card.Root width="320px">
          <Card.Body gap="2">
            <Avatar src="https://picsum.photos/200/300" name="Nue Camp" size="lg" shape="rounded" />
            <Card.Title mt="2">Nue Camp</Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui
              euismod fermentum. Curabitur nec odio vel dui euismod fermentum.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline">View</Button>
            <Button>Join</Button>
          </Card.Footer>
        </Card.Root>
        <List.Item fontWeight="bold">Blockquote</List.Item>
        <Blockquote>
          If anyone thinks he is something when he is nothing, he deceives himself. Each one should test his own
          actions. Then he can take pride in himself, without comparing himself to anyone else.
        </Blockquote>
        <List.Item fontWeight="bold">Code</List.Item>
        <Code>{`console.log("Hello, world!")`}</Code>
      </List.Root>
    </>
  )
}
