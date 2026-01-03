import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";

export default function PongVerilog() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Pong Verilog</h1>
        
        <div className="rounded-3xl overflow-hidden shadow-xl mb-6 border border-stone-200">
             <Image 
                src="/images/projects/pong-main-pic.jpg" 
                width={1200} 
                height={800} 
                alt="Pong Verilog" 
                className="w-full h-auto object-cover"
            />
        </div>
        <p className="text-stone-500 italic mb-12 text-center text-lg">
            The classic game written entirely in Verilog and designed to be run on a De1-SoC FPGA board with VGA output
        </p>

        <div className="flex justify-start mb-12">
            <Link href="https://github.com/theonlysonnet/Pong-Verilog" target="_blank">
                <Button content="View on GitHub" invert={true} />
            </Link>
        </div>

        <div className="prose prose-lg max-w-none text-stone-700">
             <h2 className="text-2xl font-semibold mb-4 text-black">Pong Game on FPGA in Verilog</h2>
             
            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Overview</h3>
            <p>
                This project, developed as part of the ECE241: Digital Systems course at the University of Toronto, involves designing and implementing a version of the classic video game Pong using Verilog. The game is played by two players using switches on an FPGA board, with the gameplay displayed on a VGA monitor. The project includes audio output, score tracking via a 7-segment display, and a fully integrated game system designed using hardware description languages (HDLs), specifically Verilog.
            </p>
            <p className="mb-6">
                The project leverages digital design principles such as Finite State Machines (FSMs), ALUs, and registers to implement gameplay, ball physics, and paddle control. The game offers an interactive and engaging experience, showcasing fundamental digital system design concepts through Verilog-based development.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Features</h3>
            <ul className="list-disc pl-6 mb-6">
                <li><strong>Complex ALU model with state machines:</strong> Implements the game’s “physics engine,” handling ball movement, paddle collisions, and game dynamics.</li>
                <li><strong>VGA Display with Double Buffering:</strong> Responsible for rendering smooth game visuals on the VGA monitor.</li>
                <li><strong>Audio Integration:</strong> Provides audio feedback for paddle-ball interactions and goal scoring, adding to the game’s immersive experience.</li>
                <li><strong>FSM for Gameplay Tracking:</strong> Manages the game state, including player turns, resets, and game-over conditions.</li>
                <li><strong>Paddle Control via Switches and Keys:</strong> Players control their paddles using switches on the FPGA board.</li>
                <li><strong>Scorekeeping and Winning Animation:</strong> The game’s score is displayed using the 7-segment display, and LEDs are used to show the winning animation.</li>
                <li><strong>Ball and Paddle Management:</strong> Keeps track of ball and paddle positions, directions, and velocities using inferred memories and registers.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">System Design</h3>
            <p className="font-semibold mb-4">Key Components:</p>
            <ol className="list-decimal pl-6 mb-6">
                <li><strong>VGA Display with Double Buffering:</strong> Renders the game in real-time, ensuring smooth visual output.</li>
                <li><strong>Complex ALU & State Machine:</strong> Acts as the “physics engine,” calculating the movement of the ball and detecting collisions with paddles and walls.</li>
                <li><strong>Audio Output:</strong> Audio feedback when the paddles hit the ball and when a goal is scored, adding to the game’s interactivity.</li>
                <li><strong>FSM for Gameplay Control:</strong> Tracks the current state of the game, manages ball resets, player turns, and game-over states.</li>
                <li><strong>Switch and Key Input for Paddle Control:</strong> Switches on the FPGA board allow players to move their paddles, creating a responsive gaming experience.</li>
                <li><strong>7-Segment Display & LEDs:</strong> Displays the score and provides visual feedback with a winning animation.</li>
            </ol>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Conclusion</h3>
            <p className="mb-6">
                This project was an excellent opportunity to apply digital systems design concepts in a practical way by building a real-time game system on an FPGA using Verilog. It demonstrates the integration of FSMs, ALUs, VGA display, and audio systems into a cohesive and interactive game. Although completed in 2023, this project is being uploaded now in 2024 to showcase my skills in FPGA-based digital system design and Verilog programming.
            </p>
        </div>
      </div>
    </div>
  );
}
