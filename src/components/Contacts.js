// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import ContactsForm from './ContactsForm'
import ContactsInfo from './ContactsInfo'
import ContactsBg from './ContactsBg'
// utils
import { colors } from '../util/cssConfig'

const Contacts = () => {
  return (
    <SectionStyled>
      <ContainerStyled maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item xs={12} md={7}>
            <ContactsInfo />
          </Grid>
          <Grid item md={5}>
            <ContactsBg />
          </Grid>
        </Grid>
        <ContactsForm />
      </ContainerStyled>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  @media (min-width: 1200px) {
    background: linear-gradient(0deg, ${colors.dark} 35%, ${colors.lightgray} 0);
    padding-bottom: 6rem;
  }
`

const ContainerStyled = styled(Container)`
  @media (min-width: 960px) {
    position: relative;
  }
`

export default Contacts
