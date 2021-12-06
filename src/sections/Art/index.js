import { useEffect, useState } from "react"

function ArtsSection() {
  const [art, setArt] = useState(null)

  console.log({ art })

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then(res => res.json())
      .then(res => setArt(res.data))
  }, [])

  if (!art) return <p>Loading...</p>

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((artwork, index) => {
            const { title, artist_title, image_id, subject_titles } =
              artwork

            const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
            return (
              <li key={index}>
                {image_id && (
                  <div className="frame">
                    <img src={imageUrl} />
                  </div>
                )}
                <h3>{title}</h3>
                <p>Artist: {artist_title}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  {subject_titles.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
