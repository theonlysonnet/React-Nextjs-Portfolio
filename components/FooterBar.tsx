import Link from "next/link";
import React from "react";

// section links will be changed
export default function FooterBar() {
    return (
        <div>   
            <nav className="">
                <div className="container mx-auto py-8 px-10">
                    <ul className="flex space-x-6 text-xl font-medium justify-center">
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#experience">Experience</Link></li> 
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#blog">Blog</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="container mx-auto py-3 px-10 text-center">Copyright © 2024 Sonnet Salice. All Rights Reserved.</div>
            </nav>
            
        </div> 
    )
}