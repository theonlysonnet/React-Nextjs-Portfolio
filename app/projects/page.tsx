import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-20 bg-white text-black text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-stone-500 font-light mb-16">Here are some things I&apos;ve built</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Carto */}
            <Link href="/projects/carto" className="group">
                <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 hover:shadow-lg transition-all text-left h-full">
                    <div className="aspect-video bg-white rounded-2xl border border-stone-200 mb-6 flex items-center justify-center overflow-hidden relative">
                         <Image 
                            src="/images/projects/carto/carto-main-pic.png" 
                            width={600} 
                            height={400} 
                            alt="Carto Project" 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-stone-600 transition-colors">Carto</h2>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">C++</span>
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">GIS</span>
                    </div>
                    <p className="text-stone-600 mb-6 font-light">
                        Geographic Information System (GIS) mapping application.
                    </p>
                </div>
            </Link>

            {/* 2048 */}
            <Link href="/projects/2048" className="group">
                <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 hover:shadow-lg transition-all text-left h-full">
                    <div className="aspect-video bg-white rounded-2xl border border-stone-200 mb-6 flex items-center justify-center overflow-hidden relative">
                        <Image 
                            src="/images/projects/2048-main-pic.png" 
                            width={600} 
                            height={400} 
                            alt="2048 Project" 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-stone-600 transition-colors">2048</h2>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">C</span>
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">Nios II Assembly</span>
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">De1-SoC</span>
                    </div>
                    <p className="text-stone-600 mb-6 font-light">
                        A recreation of the classic 2048 game.
                    </p>
                </div>
            </Link>

            {/* Pong Verilog */}
            <Link href="/projects/pong-verilog" className="group">
                <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 hover:shadow-lg transition-all text-left h-full">
                    <div className="aspect-video bg-white rounded-2xl border border-stone-200 mb-6 flex items-center justify-center overflow-hidden relative">
                         <Image 
                            src="/images/projects/pong-main-pic.jpg" 
                            width={600} 
                            height={400} 
                            alt="Pong Verilog" 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-stone-600 transition-colors">Pong Verilog</h2>
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">Verilog</span>
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">FPGA</span>
                    </div>
                    <p className="text-stone-600 mb-6 font-light">
                        The classic game written entirely in Verilog.
                    </p>
                </div>
            </Link>

             {/* Archival Redesign */}
             <Link href="/projects/archival-redesign" className="group">
                <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 hover:shadow-lg transition-all text-left h-full">
                    <div className="aspect-video bg-white rounded-2xl border border-stone-200 mb-6 flex items-center justify-center overflow-hidden relative">
                         <Image 
                            src="/images/projects/archival_project/archival-main-pic.png" 
                            width={600} 
                            height={400} 
                            alt="Archival Redesign" 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-stone-600 transition-colors">Archival Redesign</h2>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">Engineering Design</span>
                    </div>
                    <p className="text-stone-600 mb-6 font-light">
                        Redesigning archival systems for better simplified access.
                    </p>
                </div>
            </Link>

            {/* Spectral Classification */}
            <Link href="/projects/spectral-classification" className="group">
                <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 hover:shadow-lg transition-all text-left h-full">
                    <div className="aspect-video bg-stone-100 rounded-2xl border border-stone-200 mb-6 flex items-center justify-center overflow-hidden relative">
                         <div className="w-full h-full flex items-center justify-center text-stone-300 font-bold text-2xl">
                             Coming Soon!
                         </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-stone-600 transition-colors">Spectral Classification</h2>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-sm">PyTorch</span>
                    </div>
                    <p className="text-stone-600 mb-6 font-light">
                        Classifying spectral data using machine learning models.
                    </p>
                </div>
            </Link>

        </div>
      </div>
    </div>
  );
}
