import Image from "next/image";
import React from 'react';
import {TextBoxWithImage, TextBoxWithoutImage} from "@/components/TextBox";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <section id = "title" className="h-screen flex flex-col justify-center text-center">
          <div className="px-16 pb-16">
            <Image
              src="/title-image-with-words.png"
              width={3000}
              height={877}
              className="rounded-3xl"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>  
          <div className="px-16">
            <h1 className="text-2xl md:text-5xl font-bold text-stone-400">Engineer and Creator</h1>
          </div>
      </section>
      <section id = "experience" className="h-screen flex flex-col justify-center text-center bg-white text-black py-16">
        <div className="flex justify-evenly">
            <div className="flex flex-col justify-center text-center">
              <div className="flex justify-evenly">
              <Image
              src="/sonnet.jpeg"
              width={150}
              height={150}
              className="rounded-2xl"
              alt="image of sonnet looking all distinguished as hell"
            />
              <TextBoxWithImage
                image="/experience.png" // Update with your image path
                title="Experience"
                listItems={[
                  "Software AI Compilers Intern",
                  "@ Tenstorrent",
                  "Co-Founder",
                  "@ Daydream Education",
                  "Intern",
                  "@ Repel Technologies Ltd.",
                ]}
              />
              <TextBoxWithImage
                image="/education.png" // Update with your image path
                title="Education"
                listItems={[
                  "B.A.S.c in Computer Engineering",
                  "@ University of Toronto",
                ]}
              />
              </div>

              <p>Skills</p>

              <div className="flex justify-evenly">
              <TextBoxWithoutImage
                title="Programming Languages"
                listItems={[
                  "C/C++",
                  "Python",
                  "Java",
                ]}
              />
              <TextBoxWithoutImage
                title="Web Development"
                listItems={[
                  "HTML/CSS/TypeScript",
                  "React",
                  "Next.js",
                ]}
              />
              </div>
              <div className="flex justify-evenly">
              <TextBoxWithoutImage
                title="AI/ML"
                listItems={[
                  "PyTorch",
                  "CUDA",
                ]}
              />
              <TextBoxWithoutImage
                title="Hardware/Embedded Systems"
                listItems={[
                  "Verilog",
                  "RISC Assembly",
                ]}
              />
              </div>
            </div>  
        </div>
        <div className="flex justify-evenly px-64 pt-16">
          <Button
            content="Download CV"
            invert={true}
          />
          <Button
            content="Reach me"
            invert={false}
          />
        </div>
      </section>
      <section id = "about" className="h-screen">
        <div className="text-center">
          <h2 className="font-medium text-l pt-4">Get to know more</h2>
          <h1 className="font-bold text-4xl pb-8">About Me</h1>
        </div>
        <div className="flex px-8 pb-8">
          <div className="rounded-2xl bg-hermes_orange text-center px-4 py-4">
              <p>I'm a Computer Engineering student at the University of Toronto. 
                My interests lie in hardware acceleration for AI/ML. As a creative, I'm also interested in full-stack development. 
                I also enjoy writing my thoughts down (totally check out the blog), playing basketball, reading wikipedia, and painting!
                </p>
              <p>
              <br/> I was born in India but I moved to Japan when I was three and lived there for my entire childhood. 
              I did most of my upper years in  Portland, OR but finished high school in Vancouver, BC. 
                </p>
              <p>
              <br/>I’d always been very into computers from quite a young age. 
               At around 11, my dad first introduced me to coding and the very basics of computer hardware. 
               Making machines think with just electrical signals is the greatest thing humanity has done, and that fascinated me. 
               Ever since then I’ve been on a journey to understand more and be a part of this exciting 
               phase in society and I'm very excited to see what else we’ll do next.      
                </p>
          </div>
          <div className="px-8">
            <Image
              src="/cutesonnet.jpg"
              width={2016}
              height={6048/4}
              className="rounded-3xl"
              alt="Fun sonnet picture"
            />
          </div>
        </div>
      </section>
      <section id = "contact" className="h-screen bg-white text-black">
        <div className="text-center">
          <h2 className="font-medium text-l pt-32">Get in touch</h2>
          <h1 className="font-bold text-4xl pb-8">Contact Me</h1>
        </div>
        <div className="border-4 rounded-2xl border-black flex justify-center">
          <div className="flex justify-center px-4">
            <Image
              src="/email.png"
              width={50}
              height={50}
              alt="Email icon"
              className=""
            />
            <p className="px-4"><Link href="mailto:salicesonnet@gmail.com">salicesonnet@gmail.com</Link></p>
          </div>
          <div className="flex justify-center px-4">
            <Image
              src="/linkedin.png"
              alt="LinkedIn icon"
              width={50}
              height={50}
              className=""
            />
            <p className="px-4"><Link href="https://www.linkedin.com/in/sonnetsalice/">LinkedIn</Link></p>
          </div>
        </div>
      </section>
    </div>  
  )
}
