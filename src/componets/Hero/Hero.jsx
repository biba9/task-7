import './Hero.css'
// import from './../../assets/images/AboutHero.webp'
function Hero({title}) {
  return (
    <section className='Hero'>
          <div className='title'>
        <h2>{title}</h2>
              <p>Home  </p>
                </div>

    </section>
  )
}

export default Hero