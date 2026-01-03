import Image from "next/image";
import React from 'react';
import {TextBoxWithImage, TextBoxWithoutImage} from "@/components/TextBox";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <section id="title" className="min-h-screen flex flex-col justify-center text-center pt-24 md:pt-32">
          <div className="px-16 pb-16">
            <Image
              src="/images/general/title-image-with-words.png"
              width={3000}
              height={877}
              className="rounded-3xl shadow-2xl object-cover"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>  
        <div className="px-6 pb-8">
          <h1 className="text-3xl md:text-6xl font-bold text-stone-600 tracking-tight">Engineer, Builder, Thinker.</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pb-12">
          <a href="/documents/Sonnet_Salice_Resume.pdf" download="Sonnet_Salice_Resume.pdf">
            <Button content="Download CV" invert={true} />
          </a>
          <Link href="#contact">
            <Button content="Reach me" invert={true} />
          </Link>
        </div>
      </section>
      <section id="experience" className="min-h-screen py-16 px-4 md:px-8 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Image & Experience & Education */}
            <div className="flex flex-col xl:flex-row justify-between items-center gap-12 w-full max-w-7xl">
              
              <div className="flex-1 flex justify-center">
                 <Image
                  src="/images/general/sonnet.jpeg"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg border-4 border-stone-200"
                  alt="Sonnet Profile"
                />
              </div>

              <div className="flex-1 w-full max-w-md">
                <TextBoxWithImage
                  image="/images/general/experience.png"
                  title="Experience"
                  listItems={[
                    "AI/ML Compiler Engineering Intern - Tenstorrent",
                    "Co-Founder - DayDream Education",
                    "Intern - Repel Technologies Ltd.",
                  ]}
                />
              </div>

              <div className="flex-1 w-full max-w-md">
                <TextBoxWithImage
                  image="/images/general/education.png"
                  title="Education"
                  listItems={[
                    "B.A.S.c Electrical Engineering - University of Toronto",
                    "Eric Hamber Secondary School",
                    "Camas High School",
                  ]}
                />
              </div>
          </div>

          {/* Skills Header */}
          <div className="text-center mt-24 mb-12">
            <h2 className="text-4xl font-bold text-stone-700">Skills</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
            <TextBoxWithoutImage
              title="Programming Languages"
              listItems={["C++", "Python", "Java", "ARM/Nios II Assembly"]}
            />
            <TextBoxWithoutImage
              title="AI/ML"
              listItems={["PyTorch", "TensorFlow", "HuggingFace", "JAX", "ONNX"]}
            />
            <TextBoxWithoutImage
              title="Compiler Technology"
              listItems={["Torch", "XLA", "MLIR", "StableHLO", "Shardy"]}
            />
            <TextBoxWithoutImage
              title="Hardware & Circuit Design"
              listItems={["Verilog/VHDL", "ModelSim", "FPGAs", "SoCs"]}
            />
            <TextBoxWithoutImage
              title="Data Science & Analysis"
              listItems={["R/RStudio", "Matlab", "NumPy", "Matplotlib"]}
            />
            <TextBoxWithoutImage
              title="Web Development"
              listItems={["JavaScript", "CSS/HTML", "React / Next.js", "PostgreSQL", "REST API"]}
            />
          </div>
        </div>
      </section>
      <section id="about" className="min-h-screen py-16 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-medium text-lg text-stone-300 mb-2">Get to know more</h2>
            <h1 className="font-bold text-4xl text-white">About Me</h1>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Image Section - Shows first on mobile because of flex-col (default order) but we want image above text?
                User said: "move image to be above orange blob by default (mobile) and when PC have them side by side"
                If I use flex-col-reverse, text comes first. flex-col is image first if image is first in DOM.
                Wait, previous code had text first. So I should put Image first in DOM for mobile, and use proper ordering for desktop.
                Or just put Image first in DOM, and flex-row on desktop. That puts Image Left, Text Right on desktop. Does user want that?
                "when PC have them side by side". Doesn't specify left/right.
                Let's assume Image Right on Desktop (original design) and Image Top on Mobile.
                So: Mobile: Image -> Text. Desktop: Text -> Image.
                To achieve: Flex-col (Image First). MD: Flex-row-reverse ?? No, Text is left, Image is right.
                Flex-col: Image Top, Text Bottom.
                MD: Flex-row: Image Left, Text Right.
                Oh, original was Text Left, Image Right.
                So for Desktop: Text Left, Image Right.
                For Mobile: Image Top, Text Bottom.
                Using Flexbox:
                Container: flex flex-col-reverse md:flex-row
                DOM: Text, Image.
                Mobile (col-reverse): Image (bottom of DOM) goes to Top. Text goes to Bottom. Perfect.
                Desktop (row): Text (top of DOM) goes Left. Image goes Right. Perfect.
            */}
            
            <div className="flex-1 w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/general/cutesonnet.jpg"
                width={500}
                height={750}
                className="rounded-3xl shadow-xl object-cover"
                alt="Fun sonnet picture"
              />
            </div>

            <div className="flex-1 rounded-3xl bg-hermes_orange text-white p-8 md:p-12 shadow-lg">
                <p className="mb-6 leading-relaxed text-lg">
                  I&apos;m an Electrical Engineering student at the University of Toronto, with primary interest in Computer Architecture and AI/ML technologies. 
                  I&apos;m currently at Tenstorrent, working on compilers for their AI accelerators, optimizing how AI models map onto our hardware for peak performance and efficiency in training and inference.
                  I also enjoy writing my thoughts down (check out the blog), playing basketball, reading wikipedia, and painting.
                </p>
                <p className="mb-6 leading-relaxed text-lg">
                  I was born in India, but I moved to Japan when I was three and grew up there, spending my whole childhood in Tokyo. 
                  I spent most of my teenage years in Portland, OR, but finished high school in Vancouver, BC. 
                  I moved to Toronto for university and I&apos;ve been here ever since.
                </p>
                <p className="leading-relaxed text-lg">
                  I&apos;ve always been very into computers from a young age. 
                  At around 11, my dad first introduced me to coding and the very basics of computer hardware. 
                  We made rocks into machines that think, with just some electrical signals. 
                  It is the greatest achievement of humanity, and that always fascinated me as a child.
                  Ever since then, I&apos;ve been on a journey to understand it more and be a part of this exciting 
                  phase in society. I&apos;m very excited to see what else we&apos;ll do next!      
                </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="min-h-[50vh] bg-white text-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-medium text-lg text-stone-500 mb-2">Get in touch</h2>
          <h1 className="font-bold text-4xl mb-12">Contact Me</h1>
          
          <div className="border-4 rounded-3xl border-black p-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4 group cursor-pointer">
              <Image
                src="/icons/email.png"
                width={40}
                height={40}
                alt="Email icon"
                className="group-hover:scale-110 transition-transform"
              />
              <Link href="mailto:salicesonnet@gmail.com" className="text-xl font-medium border-b-2 border-transparent hover:border-black transition-all">
                salicesonnet@gmail.com
              </Link>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-stone-300"></div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn icon"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform"
              />
              <Link href="https://www.linkedin.com/in/sonnetsalice/" className="text-xl font-medium border-b-2 border-transparent hover:border-black transition-all">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>  
  )
}
