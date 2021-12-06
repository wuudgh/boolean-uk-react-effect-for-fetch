import { useEffect, useState } from "react"

function AdviceSection() {
  const [slip, setSlip] = useState(null)
  const [favouriteSlips, setFavouriteSlips] = useState([])

  console.log({ slip })

  function handleMoreAdviceClick() {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(res => setSlip(res.slip))
  }

  function handleSaveToFavouritesClick(slipToSave) {
    setFavouriteSlips([...favouriteSlips, slipToSave])
  }

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(res => setSlip(res.slip))
  }, [])

  if (!slip) return <p>Loading...</p>

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{slip.advice}</p>
        <button onClick={handleMoreAdviceClick}>Get More Advice</button>
        <button onClick={() => handleSaveToFavouritesClick(slip)}>
          Save to Favourties
        </button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favouriteSlips.map((slip, index) => (
            <li key={index}>{slip.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
