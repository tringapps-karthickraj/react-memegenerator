import React from "react"
import '../assets/header.css'
import memeLogo from '../assets/meme.png'
export default function Header() {
    return (
        <header className="header">
            <img 
                src={memeLogo}
                alt="img"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}