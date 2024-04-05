import React from "react";
import "./About.css";

function About() {
    return (
        <section id='about'>
            <span className="aboutTitle"></span>
            <span className="aboutContent">
            <p>Hi, I’m Jenn! I’m currently based in Vancouver, Canada and completing a masters degree 
            remotely at <a href="https://omscs.gatech.edu/">Georgia Tech</a> in computer science, with a focus on machine learning.</p>
            
            <p>Prior to pursuing a graduate degree, I studied business at the University of British Columbia and gained a few years of experience in the finance industry. 
                Highlights include working on the trading floor at Bank of America and as a data analyst on quantitative investing teams at the <a href="https://www.cppinvestments.com/">Canada Pension Plan Investment Board</a> and <a href="https://cclinvest.cclgroup.com/">Connor, Clark & Lunn Investment Management</a>. </p> 
            
            <p>I love thinking about how to apply technology to pressing global issues or ways to improve the life around us, which is why the projects you will find here are often inspired by this, 
                as well as tools I am currently learning. Some themes that tend to spark my interest are safe deployment of artificial intelligence, climate change, economic inequality, animal welfare and healthcare.</p>
            
            When I’m not in front of a computer screen, you can usually find me in the mountains on bikes or skis, or playing Chopin on the piano. 
            Feel free to reach out if collaborating on projects would be of interest to you!</span>
        </section>        
    );
  }


  export default About;