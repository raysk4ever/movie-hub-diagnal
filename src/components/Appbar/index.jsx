import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce'
import { setSearch, toggleSearch, moviesByName } from '../../store/slice/feed'
import { AppbarContainer, Name, SearchMask, SectionWrapper } from './styled'

/**
 * Component For Rendering Appbar on the Top
 */
function Appbar() {
  const dispatch = useDispatch()
  const { search, isSearchMode } = useSelector(s => s.feed)
  const searchRef = useRef()
  useEffect(() => {
    if(isSearchMode && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isSearchMode])

  const handleToggleSarch = () => {
    dispatch(toggleSearch())
  }
  const handleSearch = useDebouncedCallback((search) => {
    dispatch(moviesByName())
  }, 300)

  const handleOnChange = useCallback(({ target }) => {
    const { value } = target
    dispatch(setSearch(value))
    if (value.length >= 1) {
      handleSearch()
    }
  }, [dispatch, handleSearch])

  return (
    <>
    <AppbarContainer>
      <SectionWrapper className='pr-0 flex-1'>
        {isSearchMode}
        {isSearchMode && <img src='Slices/Back.png' alt='back-logo' onClick={handleToggleSarch} />}
        <Name
          ref={searchRef}
          placeholder='Type Here...'
          showCaret={isSearchMode}
          value={!isSearchMode ? 'Movie Hub ' : search}
          onChange={handleOnChange}
        />
      </SectionWrapper>
      <SectionWrapper>
        <img src={'Slices/search.png'} alt={'search'} onClick={handleToggleSarch} />
      </SectionWrapper>
    </AppbarContainer>
    <SearchMask />
    </>
  )
}

export default Appbar
