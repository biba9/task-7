import Hero from '../../componets/Hero/Hero'
import Servicese from '../../componets/Servicese/Servicese'
import Brands from '../../componets/Brands/Brands'
import TitleCards from '../../componets/TitleCards/TitleCards'

function About() {
  return (
    <>
       <Hero title={'about'}/>
      <Servicese />
      <TitleCards/>
      <Brands />
  
      </>
  )
}

export default About