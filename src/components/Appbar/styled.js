import { styled } from "styled-components"

export const AppbarContainer = styled.div`
  background-image: url('Slices/nav_bar.png');
  display: flex;
  justify-content: space-between;
  height: 70px;
  position: sticky;
  top: 0px;
  z-index: 1;
`
export const SearchMask = styled.div`
  background-image: url('Slices/nav_bar.png');
  position: fixed;
  width: 100%;
  height: 41px;
  background-size: contain;
  top: 45px;
  z-index: 0;
`
export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0px 30px;
  gap: 10px;
  img {
    width: 20px;
    height: 20px;
    align-self: center;
  }
`
export const Name = styled.input`
  color: white;
  min-width: 2px;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  ${p => !p.showCaret ? 'caret-color: transparent' : ''};
`