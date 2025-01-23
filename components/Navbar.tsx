import Link from "next/link";
import React from "react";

// section links will be changed
export default function NavBar() {
    return (
        <nav className="flex justify-center">
            <div className="container mx-auto pt-12 px-20 text-3xl font-medium">Sonnet Salice</div>
            <div className="container mx-auto pt-12 px-14 text-3xl font-medium">
                <ul className="flex space-x-6">
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#experience">Experience</Link></li> 
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#blog">Blog</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}