import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState(1);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} number={order}/>
            <SideMenu isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Tastiest hand made doughnuts</HeroH1>
                    <HeroP>Irresistibly delicious!!</HeroP>
                    <HeroBtn onClick= {() => setOrder(12)}>Shop Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}
 
export default Hero;