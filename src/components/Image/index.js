/**
 * Component responsible for rendering Images
 */
function Image ({ src, alt='', loading = 'lazy' }) {
  if (!src) {
    return null
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={(event) => {
        event.target.src = '/Slices/placeholder_for_missing_posters.png'
      }}
    />
  )
}
export default Image