import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Collection of my thoughts</h1>
          <p className="text-xl text-stone-500 font-light">for you to read and ponder over</p>
        </div>

        <div className="space-y-8">
          {/* Article 1 */}
          <Link href="/blog/think-less-do-more" className="block">
            <div className="bg-white rounded-3xl border border-stone-300 p-8 md:p-10 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-left">Think less, Do more: Resilience over Success</h2>
                <p className="text-stone-500 mt-2 md:mt-0 text-sm md:text-base text-right w-full md:w-auto">
                  October 12, 2024 <br className="hidden md:inline" /> 8 min read
                </p>
              </div>
              <hr className="border-stone-200 mb-6" />
              <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed">
                You won’t always win. You’ll lose more than win. You’ll fail more than succeed. 
                You’ll miss more shots than make. Even Steph Curry only made 40% of threes in his career. 
                But that’s okay...
              </p>
            </div>
          </Link>

          {/* Article 2 */}
          <Link href="/blog/maybe-we-dont-have-free-will" className="block">
            <div className="bg-white rounded-3xl border border-stone-300 p-8 md:p-10 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-left">Maybe we don&apos;t have free will?</h2>
                  <p className="text-stone-500 mt-2 md:mt-0 text-sm md:text-base text-right w-full md:w-auto">
                    October 11, 2024 <br className="hidden md:inline" /> 9 min read
                  </p>
                </div>
                <hr className="border-stone-200 mb-6" />
                <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed">
                  One of the most profound discoveries I’ve had in my life 
                  thus far was on one night in Robarts Library working on a 
                  linear algebra assignment at 2 AM. It was a seemingly random moment...
                </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
