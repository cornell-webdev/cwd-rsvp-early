import { Button, Spacer, Span, Text, theme } from 'cornell-glue-ui'
import React, { useState } from 'react'
import styled from 'styled-components'

interface IInterestedProps {
  interestedCount: number
}

const Interested = ({ interestedCount }: IInterestedProps) => {
  const [isInterested, setIsInterested] = useState<boolean>(false)

  return (
    <Container>
      <Button onClick={() => setIsInterested(true)} disabled={isInterested}>
        Interested!
      </Button>
      <Spacer y={1} />
      <Text fontWeight={500} color={theme.text.muted}>
        <Span
          fontWeight={isInterested ? 700 : 500}
          color={isInterested ? theme.brand[500] : theme.text.muted}>
          {isInterested ? interestedCount + 1 : interestedCount}
        </Span>{' '}
        people are interested
      </Text>
    </Container>
  )
}

const Container = styled.div``

export default Interested
