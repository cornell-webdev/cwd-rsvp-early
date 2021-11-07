import {
  FadeOnView,
  FlexContainer,
  Footer,
  Showcase,
  Spacer,
  Span,
  Text,
  theme,
  useIsDesktop,
} from 'cornell-glue-ui'
import React from 'react'
import { ReactComponent as ArrowDownIcon } from 'src/assets/arrow-down.svg'
import { ReactComponent as IllustRSVP } from 'src/assets/illust-rsvp.svg'
import { ReactComponent as QuoteSVG } from 'src/assets/quote.svg'
import ScreenshotAdvertise from 'src/assets/screenshot-advertise.png'
import ScreenshotBrowse from 'src/assets/screenshot-browse.png'
import styled, { keyframes } from 'styled-components'
import ChartBar from './ChartBar'

const Home = () => {
  const isDesktop = useIsDesktop()

  return (
    <Container>
      <Section>
        <Section1>
          <div />
          <NeonTitle>RSVP</NeonTitle>
          {isDesktop ? (
            <div />
          ) : (
            <FlexContainer flexDirection='column' alignCenter>
              <Text fontWeight={700} color={theme.text.muted}>
                Learn more
              </Text>
              <StyledDownArrow />
            </FlexContainer>
          )}
        </Section1>
      </Section>
      <Section centerText>
        <FadeOnView>
          <Text variant='h2' color={theme.text.light}>
            Finding <BrandSpan>events</BrandSpan> at Cornell is <BrandSpan>hard</BrandSpan>.
          </Text>
        </FadeOnView>
      </Section>
      <Section>
        <FadeOnView>
          <Text variant='h3' color={theme.text.light}>
            How do you find out about events on campus?
          </Text>
          <Spacer y={4} />
          <ChartBar label='Word of mouth' widthPercent={80} barLabel='76%' />
          <Spacer y={3} />
          <ChartBar label='Instagram' widthPercent={25} barLabel='13%' />
          <Spacer y={3} />
          <ChartBar label='Campus Groups' widthPercent={10} barLabel='11%' />
        </FadeOnView>
      </Section>
      <Section centerText>
        <Container>
          <FadeOnView>
            <StyledQuoteSVG />
            <Text variant='h3' color={theme.text.light}>
              What was that <Span color={theme.brand[500]}>large gathering</Span> in front of
              Cornell store today?
            </Text>
            <Spacer y={5} />
            <Text variant='h3' color={theme.text.light}>
              Are there any <Span color={theme.brand[500]}>Halloween events</Span> happening on
              campus?
            </Text>
            <Spacer y={5} />
            <Text variant='h3' color={theme.text.light}>
              When are project teams holding <Span color={theme.brand[500]}>info sessions</Span>?
            </Text>
          </FadeOnView>
        </Container>
      </Section>
      <Section>
        <Showcase
          overline='Introducing'
          name='RSVP'
          svg={<IllustRSVP />}
          paragraphs={[
            'RSVP gathers and displays all the events happening in the Cornell community.',
            "Discover exciting events from a comprehensive database of events. If you're hosting an event, advertise your events on RSVP to gather greater interest from the community!",
          ]}
        />
      </Section>
      <Section>
        <Showcase
          overline='Browse'
          name='Find events just for you'
          svg={<StyledImg src={ScreenshotBrowse} />}
          paragraphs={[
            'Filter out events that you are not interested in so that you can view a list of events that are specific to your interests!',
            'Follow organizers and receive notifications when they post new events!',
          ]}
        />
      </Section>
      <Section>
        <Showcase
          overline='Advertise'
          name='Post events'
          svg={<StyledImg src={ScreenshotAdvertise} />}
          paragraphs={[
            'Raise awareness and market your events to the Cornell community!',
            'It takes a most 10 minutes to create and post a new event. After posting an even, view the list of people who are interested in or have registered for your event.',
          ]}
        />
      </Section>
      <Section centerText>
        <FadeOnView>
          <Text variant='h4' fontWeight={500} color={theme.text.muted}>
            Jan. 2022
          </Text>
          <Text variant='h2' fontWeight={500} color={theme.brand[500]}>
            Coming soon
          </Text>
        </FadeOnView>
      </Section>
      <Footer />
    </Container>
  )
}

const Container = styled.div``

interface ISectionProps {
  offwhite?: boolean
  centerText?: boolean
}
const Section = styled.div<ISectionProps>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  /* offwhite */
  background: ${(props) => props.offwhite && props.theme.grey[50]};

  /* centerText */
  text-align: ${(props) => props.centerText && `center`};
`

const GradientAnimation = keyframes`
  0% {
    background-position: 0% center;
  }

  50% {
    background-position: 70% center;
  }

  100% {
    background-position: 0% center;
  }
`

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 78vh;
`

const StyledDownArrow = styled(ArrowDownIcon)`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.grey[500]};
`

const NeonTitle = styled.h1`
  opacity: 1;
  font-size: 34vw;
  background: linear-gradient(45deg, #ff3683, #ef903c);
  background-size: 200% auto;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${GradientAnimation} 4s linear infinite;
`

const BrandSpan = styled.span`
  color: ${(props) => props.theme.brand[500]};
`

const StyledQuoteSVG = styled(QuoteSVG)`
  flex-shrink: 0;
  height: 80px !important;
  width: 80px !important;

  @media (min-width: ${(props) => props.theme.large}) {
    height: 120px !important;
    width: 120px !important;
  }
`

const StyledImg = styled.img`
  border-radius: 20px;
  border: ${(props) => `2px solid ${props.theme.border.default}`};
  max-width: 90%;
`

export default Home
