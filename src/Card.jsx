import profilePic from './assets/makima.jpg'

function Card() {
  return (
    <>
        <div className="card">
          {/* <img src="/src/assets/makima.jpg" alt="profile picture" width="200rem" height="200rem" /> */}
          <img src={profilePic} alt="profile picture" width="200rem" height="200rem" />
          <h2>Mazaru</h2>
          <p>Studying react.</p>
        </div>
    </>
  )
}

export default Card