import Image from "next/image";
import React from "react";
import Button from "@/components/Button";

export default function ArchivalRedesign() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Archival Redesign</h1>
        
        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 border border-stone-200">
             <Image 
                src="/images/projects/archival_project/archival-main-pic.png" 
                width={1200} 
                height={800} 
                alt="Archival Redesign Preview" 
                className="w-full h-auto object-cover"
            />
        </div>

        <div className="prose prose-lg max-w-none text-stone-700 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-black">Final Presentation</h2>
             <div className="w-full h-[500px] md:h-[600px] border border-stone-200 rounded-2xl overflow-hidden">
                <iframe 
                    src="/images/projects/archival_project/Team-144-Final-Presentation.pdf" 
                    className="w-full h-full"
                    title="Final Presentation"
                >
                    <p>Your browser does not support iframes. <a href="/images/projects/archival_project/Team-144-Final-Presentation.pdf">Download the presentation</a>.</p>
                </iframe>
             </div>
        </div>

        <div className="flex justify-center">
            <a href="/images/projects/archival_project/Team144_Sonnet Salice_CDS.pdf" download="Team144_Sonnet_Salice_CDS.pdf">
                <Button content="Project Report" invert={true} />
            </a>
        </div>
      </div>
    </div>
  );
}
