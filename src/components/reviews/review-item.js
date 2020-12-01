// packages
import React from 'react'
import styled from 'styled-components'
// components
import Typography from '../typography'
import Gallery from '@browniebroke/gatsby-image-gallery'
// utilities
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { colors, shadows } from '../../util/css-config'

const ReviewItem = ({ name, date, images, html, link }) => {
  return (
    <ReviewItemStyled>
      <NameStyled href={link} target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739V5.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H.9c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553C6.318 17.343 9.374 19 12.154 19c1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C19.114 18.217 19.407 19 20.405 19h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" />
        </svg>
        {name}
      </NameStyled>
      <DateStyled>{date}</DateStyled>
      <Typography html={html}></Typography>
      {images ? <Gallery mdColWidth={20} imgClass="review-image" images={images} /> : ''}
    </ReviewItemStyled>
  )
}

const ReviewItemStyled = styled.li`
  color: ${colors.black};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background: ${colors.white};
  box-shadow: ${shadows.one};
  border-radius: 5px;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  & .review-image {
    border-radius: 5px;
    cursor: pointer;
  }
`

const NameStyled = styled.a`
  position: relative;
  font-size: 1.1rem;
  /* font-weight: 500; */
  display: flex;
  align-items: center;
  color: ${colors.black};

  & svg {
    height: auto;
    width: 30px;
    margin-right: 8px;
    fill: #4b729f;
  }
`

const DateStyled = styled.span`
  color: ${colors.gray};
  font-weight: 300;
  font-size: 0.8rem;
  padding: 0.3rem 0;
`
// const ImagesWrapper = styled.div`
//   padding: 1rem 5px 1.5rem;

//   @media (min-width: ${breakpoints.small}) {
//     padding: 1rem 20% 2rem;
//   }
// `

export default ReviewItem
