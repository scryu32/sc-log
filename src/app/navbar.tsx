'use client'
import Link from "next/link"
import "./nav.css"
import { useState } from "react"

export default function NavBar(){
    const [openSide, setOpenSide] = useState<boolean>(false);

    function SideHandler() {
        setOpenSide(!openSide);
    }

    return (
        <div>
            <div className="nav-bar">
                <div className="nav-Icon">
                    <h4>SC-Log</h4>
                </div>
                <div className="nav-btn">
                    <Link href="/">Home</Link>
                    <Link href="/code">Code</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/blog">Blog</Link>
                    <a href="https://github.com/scryu32" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    )
}