import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";

export default function Project2048() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">2048</h1>
        
        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 border border-stone-200">
             <Image 
                src="/images/projects/2048-main-pic.png" 
                width={1200} 
                height={800} 
                alt="2048 Gameplay" 
                className="w-full h-auto object-cover"
            />
        </div>

        <div className="flex justify-start mb-12">
            <Link href="https://github.com/theonlysonnet/Carto-Neighbourhood_Mapping_GIS_Software" target="_blank">
                <Button content="View on GitHub" invert={true} />
            </Link>
        </div>

        <div className="prose prose-lg max-w-none text-stone-700">
             <h2 className="text-2xl font-semibold mb-4 text-black">Michael Harhay & Sonnet Salice&apos;s ECE243 final project.</h2>
             
             <h3 className="text-xl font-bold mt-8 mb-4 text-black">Description:</h3>
             <p className="mb-6">
                2048 is a single-player game where players control tiles on a 4x4 board, merging tiles to create bigger ones. The aim is to obtain the 2048 tile, and beyond...
             </p>

             <h3 className="text-xl font-bold mt-8 mb-4 text-black">Running the Game:</h3>
             <p className="mb-6">
                This project can be run on a DE1-SoC FPGA Board. Alternatively, go to <a href="https://cpulator.01xz.net/?sys=nios-de1soc" className="text-blue-600 hover:underline">https://cpulator.01xz.net/?sys=nios-de1soc</a>, set the language to C, and import the main.c file.
             </p>
        </div>
      </div>
    </div>
  );
}
