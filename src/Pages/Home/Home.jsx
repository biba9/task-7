import Hero from "../../componets/Hero/Hero"
import ServicesHome from "../../componets/ServicesHome/ServicesHome"
import Pricing from "../../componets/Pricing/Pricing"
import Clients from "../../componets/Clients/Clients"
import Blog from "../../componets/Blog/Blog"


function Home() {
  return (
      <>
      <Hero title={'Home'} />
      <ServicesHome />
      <Pricing/>
      <Clients />
      <Blog/>
      </>
  )
}

export default Home