import { FlexContainer, Spacer, Text, theme } from 'cornell-glue-ui'
import React from 'react'
import styled from 'styled-components'

interface IChartBarProps {
  label: string
  widthPercent: number
  barLabel: string
}

const ChartBar = ({ label, widthPercent, barLabel }: IChartBarProps) => {
  return (
    <Container>
      <BarLabel color={theme.text.light} fontWeight={500}>
        {label}
      </BarLabel>
      <FlexContainer alignCenter>
        <Bar width={widthPercent} />
        <Spacer x={2} />
        <BarLabel color={theme.text.light} fontWeight={500}>
          {barLabel}
        </BarLabel>
      </FlexContainer>
    </Container>
  )
}

const Container = styled.div``

interface IBarProps {
  width: number
}

const Bar = styled.div<IBarProps>`
  padding: 0.5rem;
  background: ${(props) => props.theme.brand[500]};
  color: white;
  border-radius: 8px;

  /* width */
  width: ${(props) => props.width && `${props.width}%`};
`

const BarLabel = styled(Text)`
  text-align: left;
`

export default ChartBar
