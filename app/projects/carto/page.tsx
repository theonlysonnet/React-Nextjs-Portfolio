import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";

export default function Carto() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Carto</h1>
        
        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 border border-stone-200">
             <Image 
                src="/images/projects/carto/carto-main-pic.png" 
                width={1200} 
                height={800} 
                alt="Carto Map Interface" 
                className="w-full h-auto object-cover"
            />
        </div>

        <div className="flex justify-start mb-12">
            <Link href="https://github.com/theonlysonnet/Carto-Neighbourhood_Mapping_GIS_Software" target="_blank">
                <Button content="View on GitHub" invert={true} />
            </Link>
        </div>

        <div className="prose prose-lg max-w-none text-stone-700">
             <h2 className="text-2xl font-semibold mb-4 text-black">Carto - Neighbourhood Mapping GIS Software</h2>
             <p className="italic text-stone-500 mb-6">NOTE: The repository is private as I am not allowed to post solutions according to UofT policy</p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Overview</h3>
            <p>
                This project, developed as part of the ECE297 course at the University of Toronto, focuses on building a data-driven mapping application designed to help individuals explore Toronto’s neighborhoods. By integrating data from OpenStreetMap, Toronto Police Services Open Data, and other public sources, our application visualizes key factors that influence residential decision-making, such as:
            </p>
            <ul className="list-disc pl-6 mb-6">
                <li>Crime Data</li>
                <li>Public Transportation Routes</li>
                <li>Proximity to Schools and Hospitals</li>
                <li>Housing Prices</li>
                <li>Income Distribution</li>
            </ul>
            <p className="mb-6">
                Our goal was to create a user-friendly and minimalistic map that provides easy access to crucial information, empowering users to make informed decisions when choosing a place to live.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Features</h3>
            <ul className="list-disc pl-6 mb-6">
                <li><strong>Toggleable Subway Routes:</strong> Users can view subway and bus routes directly on the map.</li>
                <li><strong>Interactive Map:</strong> Users can search for paths between intersections using either text input or a mouse.</li>
                <li><strong>Zoom Levels:</strong> The map supports multiple zoom levels to give more detail, especially about neighborhood safety and proximity to important services like hospitals and schools.</li>
                <li><strong>Neighborhood Crime Data:</strong> Integrated with data from the Toronto Police Services, users can view crime rates and other safety-related information within Toronto neighborhoods.</li>
                <li><strong>Path Optimization:</strong> The application includes optimization features that ensure efficient pathfinding between locations.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Advanced Algorithms Implemented</h3>
            <p>As part of the course, we implemented key algorithms for routing and optimization:</p>
            <ul className="list-disc pl-6 mb-6">
                <li><strong>Travelling Salesman Problem (TSP):</strong> We tackled this classic problem using a combination of dynamic programming, multithreading, greedy algorithms, and perturbation techniques to find optimized routes for visiting multiple locations.</li>
                <li><strong>Route Mapping Software:</strong> Our software integrates Dijkstra’s Algorithm for finding the shortest paths between intersections. To improve efficiency and real-time performance, we also implemented A* Heuristics on top of Dijkstra’s to enhance the speed and accuracy of route computation.</li>
            </ul>

            {/* Demos Section */}
            <h3 className="text-xl font-bold mt-12 mb-4 text-black">Demos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                     <p className="font-semibold mb-2">Neighbourhood Demo</p>
                    <video controls className="w-full rounded-xl shadow-md border border-stone-200">
                        <source src="/images/projects/carto/neighbourhoodDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                     <p className="font-semibold mb-2">Path Finding</p>
                    <video controls className="w-full rounded-xl shadow-md border border-stone-200">
                        <source src="/images/projects/carto/clicked.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                 <div>
                     <p className="font-semibold mb-2">Partial Name Search</p>
                    <video controls className="w-full rounded-xl shadow-md border border-stone-200">
                        <source src="/images/projects/carto/partial_name.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Data Sources</h3>
            <ul className="list-disc pl-6 mb-6">
                <li><strong>OpenStreetMap:</strong> Used for generating the base map, streets, and public transportation routes</li>
                <li><strong>Toronto Police Services Open Data:</strong> Crime statistics were visualized alongside neighborhood data to provide users with safety information about their areas of interest.</li>
                <li><strong>Statistics Canada:</strong> Data on income distribution from the 2021 Census was included to offer a comprehensive view of socioeconomic factors.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Significance</h3>
            <p className="mb-6">
                With Toronto’s growing population and increasing urban density, finding the right neighborhood that balances safety, accessibility, and affordability has become more challenging. This project aimed to simplify the process by creating a consolidated mapping tool. It assists users in evaluating key factors that impact their choice of residence and helps them make more informed decisions.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-black">Development Process</h3>
            <ol className="list-decimal pl-6 mb-6">
                <li><strong>Data Gathering:</strong> We gathered data from OpenStreetMap, Toronto Police Services, and other public sources such as the Toronto Regional Real Estate Board and Statistics Canada.</li>
                <li><strong>Data Parsing:</strong> Using C++, we parsed and transformed large CSV datasets into JSON format for faster and easier access.</li>
                <li><strong>Visualization:</strong> Leveraging the GTK library, we rendered the map interface, integrated zoom features, and visualized crime, income, and other neighborhood data.</li>
                <li><strong>Pathfinding & Optimization:</strong> We implemented Dijkstra’s Algorithm for optimal route mapping and improved upon it using A* Heuristics for faster performance. Additionally, we addressed the Travelling Salesman Problem with dynamic programming, multithreading, and greedy strategies.</li>
            </ol>

            <p className="font-bold text-lg mt-8">Team: <span className="font-normal">Sonnet Salice, Christina Zhang, Aryan Billah</span></p>

            <div className="flex justify-center mt-12 pb-16">
                 <a href="/images/projects/carto/OP2_team052.pdf" download="OP2_team052.pdf">
                    <Button content="Project Report" invert={true} />
                </a>
            </div>

        </div>
      </div>
    </div>
  );
}
