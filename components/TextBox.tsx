import React from "react";
import Image from "next/image";

type TextBoxProps = {
  image?: string;       // Optional Image URL (string)
  listItems: string[];  // List of strings
  title: string;        // Title string
};

export const TextBoxWithImage: React.FC<TextBoxProps> = ({ image, listItems, title }) => {
  return (
    <div className="border-2 rounded-3xl border-stone-300 bg-stone-50/50 p-8 hover:shadow-xl hover:bg-white transition-all duration-300 h-full flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 mb-6">
        {image && (
          <div className="p-3 bg-white rounded-2xl border border-stone-200 shadow-sm">
            <Image 
              src={image}
              alt={title}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
      </div>
      <ul className="space-y-6 w-full px-4 text-center">
        {listItems.map((item, index) => {
          const [role, company] = item.includes(" - ") ? item.split(" - ") : [item, ""];
          return (
            <li key={index} className="group/item flex flex-col items-center">
              <span className="text-stone-800 font-semibold text-lg leading-tight transition-colors group-hover/item:text-hermes_orange text-center max-w-[280px] md:max-w-none">
                {role}
              </span>
              {company && (
                <span className="text-stone-500 font-light text-base mt-1 text-center">
                  {company}
                </span>
              )}
              {index < listItems.length - 1 && (
                <div className="w-12 h-[1px] bg-stone-200 mt-6" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const TextBoxWithoutImage: React.FC<Omit<TextBoxProps, "image">> = ({ listItems, title }) => {
  return (
    <div className="border border-stone-200 rounded-3xl bg-stone-100/40 p-8 hover:shadow-lg hover:bg-white transition-all duration-300 h-full flex flex-col">
      <h2 className="text-lg font-bold text-stone-800 mb-6 text-center border-b border-stone-200 pb-4">
        {title}
      </h2>
      <ul className="space-y-2 flex-grow">
        {listItems.map((item, index) => (
          <li key={index} className="text-stone-700 text-[15px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-hermes_orange/70 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextBoxWithImage;