export default Page

import React from 'react'
import { Counter } from './Counter'
import { Heading, List, Text } from '@chakra-ui/react'

function Page() {
  return (
    <>
      <Heading display="block" fontSize="2em" marginBlock="0.67em" fontWeight="bold">
        My Vike + React app
      </Heading>
      <Text marginBlock="2">This page is:</Text>
      <List.Root>
        <List.Item>Rendered to HTML.</List.Item>
        <List.Item>
          Interactive. <Counter />
        </List.Item>
      </List.Root>
    </>
  )
}
