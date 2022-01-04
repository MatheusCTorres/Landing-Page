import './App.css';
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Navbar from './components/Navbar'

const navbarLinks = [
  {url: "#", title:"Home"},
  {url: "#", title:"Trips"},
  {url: "#", title:"Rewards"},
]

export default function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={img1} />
      <Slider
        imageSrc={img2}
        title={"Explore your dream."}
        subtitle={
          "We can bring your dream place close to you."
        }
      />
      <Slider
        imageSrc={img3}
        title={"Memories for a lifetime."}
        subtitle={"The real journey of discovery is not about looking for new landscapes, but about seeing with new eyes."}
        flipped={true}
      />
    </div>
  )
}
