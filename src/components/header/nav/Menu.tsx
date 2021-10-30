import React, {useState} from 'react';
import {Burger} from './StyledBurger';
import {Navigation} from './Nav';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Burger isOpen={isOpen} setIsOpen={toggleMenuHandler}/>
            <Navigation isOpen={isOpen} setIsOpen={toggleMenuHandler}/>
        </>
    )
};