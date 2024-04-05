import React from "react";
import "./Portfolio.css";
import FloodImage from "./flood-image.jpeg";
import FoxImage from "./fox.jpeg";
import DogImage from "./dog-breed.jpeg";
import MLImage from "./ml-safety.jpeg";
import CancerImage from "./malignant.jpeg";
import StockImage from "./stock-chart.jpeg";
import GitHubIcon from "./github-logo.png";

function Portfolio() {

    const handleItemClick = (url) => {
        window.open(url, '_blank');
      };

    return (
        <section id='portfolio'>
            <span className="portfolioTitle"></span>
            <span className="portfolioContent">
            <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/object-detection-rpi')}>
                    <img src={FoxImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Real Time Object Detection</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Set up a Raspberry Pi device to run a MobileNet v2 classification model via Pytorch in order to perform real time object detection as
                            part of a Vertically Integrated Project at Georgia Tech with other engineering and economics students. The project goal was to design and
                            implement a device that distributes vaccine biscuits to foxes on campus when detected by a camera. 
                        </p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Flood-Detection')}>
                    <img src={FloodImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Identifying Flood Water from Satellite Imagery</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Final project for a deep learning course at Georgia Tech. 
                            Various fully convolutional network architectures were implemented and trained to 
                            create segmentation maps of flooded areas. A vision transformer pretrained on generic satellite data 
                            was also used to compare and improve base performance.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Kaggle-Breast-Cancer/')}>
                    <img src={CancerImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Automatic Diagnosis of Breast Cancer</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>In progress academic Kaggle competition where the aim is to implement a model able to automatically discriminate malignant from benign lesions in breast ultrasound images.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Kaggle-Dog-Breed-Identification/')}>
                    <img src={DogImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Classifying Dog Breeds</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>Used transfer learning with InceptionV3 as the base pretrained model to classify 120 different breeds of dogs as part of
                            a Kaggle competition.</p>
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
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/optionality')}>
                    <img src={StockImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <div className="portfolioItemHeader">
                            <h2>Optionality</h2>
                            <img src={GitHubIcon} alt="" className="portfolioItemIcon" />
                        </div>
                        <p>In progress full-stack website for creating investing strategies based on options and other financial instruments.</p>
                    </div>
                </div>
            </span>
        </section>        
    );
  }


  export default Portfolio;