import BrandCarousel from "./components/BrandCarousel/BrandCarousel"
import Cards from "./components/cards/cards"
import ContentDatScoort from "./components/content/content"
import Lees from "./components/Lees/Lees"
import Hero from "./components/Navbar/Hero"
import Navbar from "./components/Navbar/Navbar"




const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Lees />
      <Cards/>
      <ContentDatScoort />
      <BrandCarousel/>
   
    </div>
  )
}

export default page