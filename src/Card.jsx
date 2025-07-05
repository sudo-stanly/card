import profilePic from './assets/makima.jpg'

function Card() {
  return (
    <>
        <div className="card">
          {/* <img src="/src/assets/makima.jpg" alt="profile picture" width="200rem" height="200rem" /> */}
          <img src={profilePic} className="card-image" alt="profile picture"/>
          <h2 className="card-title">Masaru</h2>
          <p className="card-text">Studying react.</p>
        </div>
    </>
  )
}

export default Card