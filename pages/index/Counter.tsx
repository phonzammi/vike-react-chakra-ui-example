export { Counter }

import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <Button size="sm" colorPalette="teal" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </Button>
  )
}
