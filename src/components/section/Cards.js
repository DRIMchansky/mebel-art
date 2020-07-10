// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '../Typography'
// utils
import { colors, shadows, breakpoints } from '../../util/cssConfig'

const Cards = () => {
  const cardsData = useStaticQuery(graphql`
    query {
      allContentfulFeature {
        edges {
          node {
            id
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            title
            description
          }
        }
      }
    }
  `).allContentfulFeature.edges

  return (
    <CardsStyled>
      <Container maxWidth="xl">
        <Title>Почему с нами выгодно?</Title>
        <Grid container spacing={6} justify="center">
          {cardsData.map((item) => {
            return (
              <GridItemStyled key={item.node.title} item sm={6} md={4}>
                <CardStyled>
                  <ImageStyled fluid={item.node.image.fluid} />
                  <DescriptionStyled>
                    <h3>{item.node.title}</h3>
                    <p>{item.node.description}</p>
                  </DescriptionStyled>
                </CardStyled>
              </GridItemStyled>
            )
          })}
        </Grid>
      </Container>
    </CardsStyled>
  )
}

const CardsStyled = styled.section`
  padding: 3rem 0 4rem;
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.8rem;
`

const GridItemStyled = styled(Grid)`
  max-width: 400px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}) {
    padding: 3rem 2rem !important;
  }
`

const CardStyled = styled.div`
  box-shadow: ${shadows.two};
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: 1.1rem;
    color: ${colors.accent};
    margin: 0.5rem 0;
  }
  & p {
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: ${colors.gray};
  }
`
const DescriptionStyled = styled.div`
  background: ${colors.white};
  padding: 0.5rem;
  flex-grow: 1;
  border-radius: 0 0 5px 5px;
`

const ImageStyled = styled(Img)`
  border-radius: 5px 5px 0 0;
  border-bottom: 4px solid ${colors.accent};
`

export default Cards
