import React from "react";
import NavHeader from "../NavHeader";
import "./Blog.css";
import BlogCard from "../BlogCard";

class Blog extends React.Component {

    state = {
        user_id: this.props.match.params.id,
        first_name: "",
        last_name: "",
        password: "",
    }

    render() {
        return (
            <div>
                <NavHeader />
                <div className="container">
                <h1>THIS IS THE BLOG PAGE</h1>
                <p> Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan.Asymmetrical pork belly selvage, twee freegan sriracha pour - over.Squid pitchfork mustache vegan          kombucha.Mumblecore disrupt poke gochujang pitchfork master cleanse normcore pinterest selfies keytar ugh art party.Waistcoat artisan wayfarers snackwave venmo.Narwhal            williamsburg drinking vinegar lumbersexual.
                    </p>
                <BlogCard
                  src="./backlit-dark-evening-753994"
                  blog_title="BLOG ONE TITLE"
                  blog_text="Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan.Asymmetrical pork belly selvage, twee freegan sriracha pour - over.Squid pitchfork mustache vegan kombucha.Mumblecore disrupt poke"
                />
                </div>
                
                
            </div>
        ) 
    }
}

export default Blog;