'use client'
import Link from "next/link"
import "./nav.css"

export default function NavBar(){
    return (
        <div className="nav-bar">
            <div className="nav-Icon">
                <h4>SC-log</h4>
            </div>
            <div className="nav-btn">
                <Link href="/">Home</Link>
                <Link href="www.youtube.com">Blog</Link>
                <Link href="www.youtube.com">Projects</Link>
                <a href="https://github.com/scryu32" target="_blank">GitHub</a>
            </div>
            <div className="side-bar">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}