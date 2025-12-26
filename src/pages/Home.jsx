import { FaLongArrowAltRight } from "react-icons/fa"
import "../App.css"

export const Home = () =>{
    return <main className="hero-section main">
        <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a time
                    </h1>
                    <p className="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor animi illum quo quae? Aut praesentium veritatis odio aperiam dicta deleniti.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight/>
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="beautiful world" 
                    className="banner-image"
                    />
                </div>
        </div>
    </main>
    
}