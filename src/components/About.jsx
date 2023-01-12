import React from "react";
import  img from "../assets/profile.png"
import "../Style/about.css"
const About = ()=>{

    return(
        <>
        <div className="about" id="About">
            <h1>About Me</h1>
            <img src={img} alt="logo" />
            <p>
My name is Tawfeeq Ahmad Khan . I'm 18years old. I born in kashmir. Currently, I am living in kashmir at ganderbal. In my family, I live with my papa, mummy ,two cute sister and one brother his name is tawheed ahmad khan. I am thankful to God that he gives me such a wonderful family.
I am working as a web developer or MERN stack developer. i am also a sport's person i love volleyball🏐 outerdoor game and i am inter-state level player.
my qualification is 10+2 and i like💖 mathematics subject. 
<h3>follow me on instagram ⬇</h3>
</p>
        </div>
        </>
    )
    }
    export default About;