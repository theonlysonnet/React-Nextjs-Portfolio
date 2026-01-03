import Link from "next/link";
import React from "react";

// section links will be changed
export default function FooterBar() {
    return (
        <div>   
            <nav className="">
                <div className="container mx-auto py-8 px-10">
                    <ul className="flex space-x-6 text-xl font-medium justify-center">
                        <li><Link href="/#experience" className="hover:border-b-2 hover:border-black transition-all">Experience</Link></li>
                        <li><Link href="/#about" className="hover:border-b-2 hover:border-black transition-all">About</Link></li> 
                        <li><Link href="/projects" className="hover:border-b-2 hover:border-black transition-all">Projects</Link></li>
                        <li><Link href="/blog" className="hover:border-b-2 hover:border-black transition-all">Blog</Link></li>
                        <li><Link href="/#contact" className="hover:border-b-2 hover:border-black transition-all">Contact</Link></li>
                    </ul>
                </div>
                <div className="container mx-auto py-3 px-10 text-center text-sm text-stone-500 font-light">Copyright © 2024 Sonnet Salice. All Rights Reserved.</div>
            </nav>
            
        </div> 
    )
}