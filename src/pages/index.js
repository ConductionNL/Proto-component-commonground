import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

const IndexPage = ({location}) => (
  <Layout>
    <SEO title="Proto component commonground"/>
    <Background backgroundColor="white">
      <Container>
        <Navigation as="nav" location={location}/>
        <Section>
          <Payoff/>
        </Section>
      </Container>
    </Background>
    {/*<Background backgroundColor="#2A5587">*/}
    {/*  <Container>*/}
    {/*    <Logos/>*/}
    {/*  </Container>*/}
    {/*</Background>*/}
    <Container>
      <Section id="over-demodam">
        <Flex>
          <Box>
            <h2>Inleiding</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </Box>
        </Flex>
      </Section>

      {/*<Section textAlign="center">*/}
      {/*  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jTK-sbee2qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
      {/*</Section>*/}

      {/*<Section>*/}
      {/*    <Flex>*/}
      {/*        <Box width={2 / 5}>*/}
      {/*            <ResponsiveImage src={casesImage} alt="Illustratie van persoon en document"/>*/}
      {/*        </Box>*/}
      {/*        <Box width={3 / 5}>*/}
      {/*            <h2>Historie</h2>*/}
      {/*            <p>Het huwelijksplanner project is voortgekomen uit een samenvoeging van projecten van de*/}
      {/*                gemeente Utrecht en de convenant gemeenten. Deze projecten hadden dermate veel overlap en*/}
      {/*                aansluiting hadden dat in het kader van common ground en samen organiseren ze samen zijn*/}
      {/*                gegaan.</p>*/}
      {/*        </Box>*/}
      {/*    </Flex>*/}
      {/*</Section>*/}

      {/*<Section>*/}
      {/*    <Flex>*/}
      {/*        <Box width={3 / 5}>*/}
      {/*            <h2>Wie</h2>*/}
      {/*            <p>Het huwelijksplanner project wordt in co-creatie ontwikkeld door een aantal partijen.*/}
      {/*                Vanuit de gemeenten nemen Utrecht, Almere en Hoorn deel. Conduction is vanaf het begin*/}
      {/*                betrokken als ontwikkelende partij en gedurende het traject is daar Eend bij gekomen als*/}
      {/*                expert op de front-end.*/}
      {/*            </p>*/}
      {/*        </Box>*/}
      {/*        <Box width={2 / 5}>*/}
      {/*            <ResponsiveImage src={selectionImage} alt="Illustratie van documenten met checklist"/>*/}
      {/*        </Box>*/}
      {/*    </Flex>*/}
      {/*</Section>*/}

    </Container>
    {/*<Background backgroundColor="#2A5587">*/}
    {/*    <Container>*/}
    {/*        <Section>*/}
    {/*            <Heading align="center" fontSize="2rem">Roadmap</Heading>*/}
    {/*        </Section>*/}
    {/*    </Container>*/}
    {/*</Background>*/}
    {/*<Container>*/}
    {/*    <Timeline>*/}
    {/*<Timeline.Container align="left">*/}
    {/*    <Timeline.Content>*/}
    {/*        <Span fontSize="0.9rem">Juni 2021</Span>*/}
    {/*        <Heading as="h3" fontSize="1.5rem">Kick-off Demodam</Heading>*/}
    {/*        <p>Lancering van Demodam</p>*/}
    {/*    </Timeline.Content>*/}
    {/*</Timeline.Container>*/}
    {/*    <Timeline.ContainerGreen align="left">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Resultaat</Heading>*/}
    {/*            <p>Huidige resultaten Utrecht en Convenant gemeenten in kaart brengen</p>*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.ContainerGreen align="right">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Hergroeperen</Heading>*/}
    {/*            <p>Wie gaat wat doen en wanneer</p>*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.ContainerGreen align="left">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">BPMn trouwproces ontwikkelen</Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.ContainerGreen align="right">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Betere aansluiting bij <br/> Common Ground</Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.ContainerGreen align="left">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Gebruikersonderzoek met <br/> trouw stellen</Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.ContainerGreen align="right">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">UX redesign van de klantreis</Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.ContainerGreen align="left">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Opstellen implementatie <br/> routekaart</Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.ContainerGreen>*/}
    {/*    <Timeline.Container align="right">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Ontwikkeling user interface <br/>“gratis trouwen”*/}
    {/*            </Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.Container>*/}
    {/*    <Timeline.Container align="left">*/}
    {/*        <Timeline.Content>*/}
    {/*            /!*<Span fontSize="0.9rem">Juni 2021</Span>*!/*/}
    {/*            <Heading as="h3" fontSize="1.5rem">Implementatie <br/> “gratis trouwen”*/}
    {/*            </Heading>*/}
    {/*            /!*<p>Wie gaat wat doen en wanneer</p>*!/*/}
    {/*        </Timeline.Content>*/}
    {/*    </Timeline.Container>*/}
    {/*</Timeline>*/}
    {/*</Container>*/}
    <Footer/>
  </Layout>
)

export default IndexPage
