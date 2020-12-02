// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import ReviewItem from './review-item'
import Title from '../title'

const ReviewsList = () => {
  const reviewsData = useStaticQuery(graphql`
    query {
      allContentfulReview(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            images {
              id
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyContentfulFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyContentfulFluid
              }
            }
            name
            link
            id
            date(formatString: "DD MMMM, YYYY", locale: "ru")
            childContentfulReviewBodyRichTextNode {
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    }
  `).allContentfulReview.edges

  return (
    <Container maxWidth="md">
      <Title>
        <h1>Отзывы наших клиентов</h1>
        <span>
          Вы можете увидеть больше или написать свой в нашей группе{' '}
          <a href="https://vk.com/mebelart76" target="_blank" rel="noreferrer">
            ВКонтакте
          </a>
        </span>
      </Title>
      <ReviewsListStyled>
        {reviewsData.map((item) => {
          return (
            <ReviewItem
              key={item.node.id}
              name={item.node.name}
              link={item.node.link}
              date={item.node.date}
              images={item.node.images}
              html={item.node.childContentfulReviewBodyRichTextNode.childContentfulRichText.html}
            />
          )
        })}
      </ReviewsListStyled>
    </Container>
  )
}

const ReviewsListStyled = styled.ul`
  padding: 0;
`

export default ReviewsList
