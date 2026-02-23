import React from "react";
import "./Portfolio.css";
import FloodImage from "./flood-image.jpeg";
import FoxImage from "./fox.jpeg";
import DogImage from "./dog-breed.jpeg";
import MLImage from "./ml-safety.jpeg";
import CancerImage from "./malignant.jpeg";
import GitHubIcon from "./github-logo.png";
import PaperImage from "./paperbot.png";
import NotionImage from "./notion-search.png";

function Portfolio() {

    const handleItemClick = (url) => {
        window.open(url, '_blank');
      };

    return (
        <section id='portfolio'>
            <span className="portfolioTitle"></span>
            <span className="portfolioContent">
            <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Real-Time-Animal-Classification')}>
                    <img src={FoxImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Real Time Animal Classification</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Set up a Raspberry Pi device to run a pretrained MobileNetV2 model in order to perform real time image classification as
                            part of a Vertically Integrated Project at Georgia Tech. The project goal was to design and
                            implement a device that distributes vaccine biscuits to foxes on campus when detected by a camera. 
                        </p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Satellite-Flooding-Segmentation')}>
                    <img src={FloodImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Identifying Flood Water from Satellite Imagery</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Final project for a deep learning course at Georgia Tech. 
                            Implemented and trained various fully convolutional network architectures to create segmentation maps of flooded areas. 
                            Additionally used a vision transformer pretrained on generic satellite data to compare and improve base performance.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Research-Paper-Bot')}>
                    <img src={PaperImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>PDF ChatBot</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Reading through pdfs is a constant in my life and sometimes I can't help but wish I could interact with the pdf more efficiently. 
                            This wish resulted in a web app that allows users to upload a pdf, ask questions related to the pdf and get a response in real time.
                            Built using React, Python, & Langchain.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Notion-Search-Tool')}>
                    <img src={NotionImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Notion Semantic Search</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Looking through hundreds of saved links in Notion can be difficult just using keyword search. This tool allows for searching semantically
                            (searching by topic or meaning) rather than exact text matching. Built using the Cohere API, React and Python.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Kaggle-Breast-Cancer/')}>
                    <img src={CancerImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Automatic Diagnosis of Breast Cancer</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Submission to Kaggle competition for automatically discriminating malignant from benign lesions in breast ultrasound images using a
                            convolutional neural network built with Keras.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/CAIS-Intro-to-ML-Safety')}>
                    <img src={MLImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Intro to Machine Learning Safety</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>A repository with completed assignments from an Introduction to Machine Learning Safety course hosted by the Center for AI Safety.</p>
                    </div>
                </div>
            </span>
        </section>        
    );
  }


  export default Portfolio;