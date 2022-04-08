import React from 'react';
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
    
    return (
        <>
            <h3>Home Component</h3>
            <div>Data of Home Component</div>
            
            
        </>
    )
}

export const About = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log('About us Component');
        navigate('/gallery');

    }
    return (
        <>
            <h3>About Component</h3>
            <div>Data of About Component</div>
            <div>The city value is {props.city}</div>
            <button onClick={handleClick}>Go to gallery</button>
        </>
    )
}

export const Services = () => {
    return (
        <>
            <h3>Services Component</h3>
            <div>Data of Services Component</div>
        </>
    )
}

export const Gallery = () => {
    return (
        <>
            <h3>Gallery Component</h3>
            <div>Data of gallery Component</div>
        </>
    )
}

export const Contact = () => {
    return (
        <>
            <h3>Contact Component</h3>
            <div>Data of contact Component</div>
        </>
    )
}

export const Consultancy = () => {
    return (
        <>
            <h3>Consultancy Component</h3>
            <div>Data of Consultancy Component</div>
        </>
    )
}

export const Training = () => {
    return (
        <>
            <h3>Training Component</h3>
            <div>Data of Training Component</div>
        </>
    )
}