import React from 'react'
import Image from '../Image'
import { ItemWrapper } from './styled'

/**
 * Component For Render Single Movie Item
 */
const ContentItem = ({ name, 'poster-image': posterImage }) => {
  return (
    <ItemWrapper>
      <Image src={`Slices/${posterImage}`} alt={name} loading="lazy" />
      <span>{name}</span>
    </ItemWrapper>
  )
}

export default ContentItem
