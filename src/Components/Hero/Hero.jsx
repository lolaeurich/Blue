import React, { useState, useEffect } from "react";
import "./style.css";
import hero from "../../assets/Hero/hero.png";
import aya from "../../assets/Hero/aya_logo.png";
import arrow from "../../assets/Hero/arrow.png";
import herodesk from "../../assets/Hero/hero-desk.png";

function Hero() {

    return (
        <>
            <div className="hero">
                <img alt="" src={hero}/>

                <div className="hero-info">
                    <div className="hero-text">
                        <h2>Suítes e homes</h2>
                        <h3>de 21 a 54 m²</h3>
                        <p>Rua Emiliano Perneta,</p>
                        <p>260 - Centro</p>

                        <div className="info-logos">
                            <img alt="" src={aya}/>
                            <p>Conheça <img className="info-arrow" alt="" src={arrow}/></p>
                        </div>
                    </div>    
                </div>
            </div>

            <div className="hero-desk">
                <img alt="" src={herodesk}/>

                <div className="hero-info-desk">
                    <div className="hero-text-desk">
                        <h2>Suítes e homes</h2>
                        <h3>de 21 a 54 m²</h3>
                        <p>Rua Emiliano Perneta,</p>
                        <p>260 - Centro</p>

                        <div className="info-logos-desk">
                            <img alt="" src={aya}/>
                            <p>Conheça <img className="info-arrow-desk" alt="" src={arrow}/></p>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    );
}

export default Hero;
