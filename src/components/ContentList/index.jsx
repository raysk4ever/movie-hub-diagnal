import { useEffect, lazy } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchMovies } from "../../store/slice/feed"
import MovieItems from "./List"
import { ContentListWrapper } from "./styled"

// Lazy loading Search Placeholder
const SearchPlaceHolder = lazy(() => import('../SearchPlaceHolder'))

/**
 * Component For Rendering Feed
 */
const ContentList = () => {
  const dispatch = useDispatch()
  const feed = useSelector(s => s.feed)
  const { movies, status, hasMore, page, searchedMovies, isSearchMode } = feed
  const list = !isSearchMode ? [...movies] : [...searchedMovies]
  const loadFunc = () => {
    dispatch(fetchMovies(page))
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies())
    }
  }, [dispatch, status])
  
  return (
    <ContentListWrapper
        dataLength={movies?.length ?? 0}
        next={loadFunc}
        hasMore={isSearchMode? false : hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
        scrollableTarget='profile-post-list'
    >
      {list.length ? <MovieItems items={list} /> : <SearchPlaceHolder />}
    </ContentListWrapper>
  )
}

export default ContentList
