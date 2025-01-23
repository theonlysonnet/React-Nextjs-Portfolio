import React from "react";
import Image from "next/image";

type TextBoxProps = {
  image?: string;       // Optional Image URL (string)
  listItems: string[];  // List of strings
  title: string;        // Title string
};

export const TextBoxWithImage: React.FC<TextBoxProps> = ({ image, listItems, title }) => {
  return (
    <div className="border-4 rounded-2xl border-stone-500 px-16">
      <div className="flex justify-center items-center py-8">
        {image && (
          <Image 
            src={image}
            alt={title}
            width={50}
            height={50}
            className=""
          />
        )}
        <div className="pl-4 text-2xl font-semibold">
          <h2 className="">{title}</h2>
        </div>  
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="text-center">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const TextBoxWithoutImage: React.FC<Omit<TextBoxProps, "image">> = ({ listItems, title }) => {
  return (
    <div className="border-2 rounded-lg border-stone-300 px-12">
      <div className="py-4">
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="text-sm text-left">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextBoxWithImage;