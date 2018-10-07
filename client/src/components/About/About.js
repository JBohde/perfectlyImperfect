import React from "react";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import "./About.css";

class About extends React.Component {

    render() {
        return ( 
        <div>
            <NavBar />
            <NavHeader />
            <Container>
            <h1>About Me</h1> 
            <br/>
            <div className="about">
            <p> After getting sober in December of 2015 I was working for a friends property management company writing blogs for their website. Not because I was a writer, but because I was newly non-drunk and I needed a job, something to positively occupy my mind. Doing that changed the way I thought about writing... in that I actually thought about writing. As events happened in my sobriety, like re-meeting and hanging out with my daughter(17 yrs old at the time) and developing a relationship with a 4 yr old son I’d never met; I shared them in what would be fairly lengthy Facebook posts. I shared these things because I was proud of my progress but also because I wanted to show the people I drank with or that drank like me that there was a sustainably fulfilling life beyond the bar.</p>

            <p>The Facebook response grew with each post. People were reaching out about their addictions and asking questions and honest conversations were spawning from this.It was suggested that I share this information on a platform outside of facebook so that it could be accessed by people I didn’t know, people who may need to hear the message I was putting out. That was the birth of Perfectly Imperfect.</p>

            <p>As sobriety became my normal I focused on growth, it quickly became my new addiction. Everything I could get my hands on about spirituality and self-awareness I would devour. Taking in this new knowledge chipped away at the wall I was hiding my truths and true self behind. As the wall slowly began to come down, brick by brick, another piece of my truth out would spill out and a little more weight was lifted.</p>

            <p>Most encouraging was hearing how people related to either my situations or feelings and in some cases both. I soon realized alcoholism was my response to life and the main block between myself and growth. I didn’t need to have a blog about recovery from addiction but recover(ing) self. I realized that while everyone that drinks doesn’t have an alcohol problem, everyone that lives does have life problems and that's what I wanted to address.</p>

            <p>As you’ll read throughout the blogs, I don’t shy away from being an alcoholic(where applicable) because it’s my truth. MY truth. The common denominator is that we all have the exact same emotions caused by individual experiences. Those individual experiences present the fallacy that we are separate from the whole(judging our insides by someone else’ s outside) and Perfectly Imperfect my attempt at bridging that gap.</p>

            <p>Who we are, as a result of what we’ ve experienced does not make us damaged or even unique. It is those ‘imperfections’ that make us all perfectly human.</p>
            </div>
            </Container>
            </div>
        )
    }
}

export default About;