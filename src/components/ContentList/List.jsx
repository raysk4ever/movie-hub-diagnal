import { Suspense, lazy } from "react"

// Lazy loading Movie Item
const ContentItem = lazy(() => import('./ContentItem'))

/**
 * Component For Rendering Movie List
 */
const MovieItems = ({ items = [] }) => {
  return (
    <>
      {items.map((data, id) => (
        <Suspense key={id} fallback={<Fallback />}>
          <ContentItem {...data} />
        </Suspense>
      ))}
    </>
  )
}
export default MovieItems

// Fallback Placeholder for missing poster images
const Fallback = () => {
  return (
    <img src='Slices/placeholder_for_missing_posters.png' alt="fallback" />
  )
}
