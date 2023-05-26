import InfiniteScroll from "react-infinite-scroll-component";
import { styled } from "styled-components";

export const ContentListWrapper = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  padding: 36px 30px;
  place-content: center;
  grid-column-gap: 30px;
  grid-row-gap: 90px;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  img {
    width: 100%;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`