export default function Places({
  title,
  places,
  fallbackText,
  onSelectPlace,
  removePlaceButton,
}) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <div
                className="place"
                onClick={
                  removePlaceButton ? null : () => onSelectPlace(place.id)
                }
              >
                {removePlaceButton ? (
                  <button
                    className="remove-place"
                    onClick={() => onSelectPlace(place.id)}
                  >
                    Remove
                  </button>
                ) : null}
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
