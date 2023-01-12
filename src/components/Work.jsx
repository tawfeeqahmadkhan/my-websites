import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import { motion} from "framer-motion"

const Work = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity:1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
      opacity: 0,
      y: "-200%",
    },
  }
  return (
    <>
    <div div id="work">
<motion.div className="skills" >
<motion.div   whileInView={animations.whileInView} initial={animations.one} className="progress">

<div className="progress-bar"  role="progressbar" style={{width: "85%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">HTML5</div>
</motion.div>
<motion.div  whileInView={animations.whileInView} initial={animations.two} className="progress">
<div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">SCSS</div>
</motion.div>
<motion.div  whileInView={animations.whileInView} initial={animations.one} className="progress">
<div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
</motion.div>
<motion.div  whileInView={animations.whileInView} initial={animations.two} className="progress">
<div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">ReactJs</div>
</motion.div>
<motion.div whileInView={animations.whileInView} initial={animations.one} className="progress">
<div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">NodeJs</div>
</motion.div>
<motion.div  whileInView={animations.whileInView} initial={animations.two} className="progress">
<div className="progress-bar"  role="progressbar" style={{width: "65%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">ExpressJs</div>
</motion.div>
<motion.div whileInView={animations.whileInView} initial={animations.one} className="progress">
<div className="progress-bar"  role="progressbar" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
</motion.div>
</motion.div>
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  </>);
};

export default Work;