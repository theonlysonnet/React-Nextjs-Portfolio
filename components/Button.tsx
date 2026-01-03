import React from "react";

type ButtonProps = {      
    content: string;  // content of button
    invert: boolean;  // to be inverted or not
  };
  
  const Button: React.FC<ButtonProps> = ({ content, invert }) => {
    if (invert) {
        return (
            <div className="flex justify-center items-center border-4 rounded-full border-stone-500 p-4 hover:bg-stone-500 hover:text-white transition-all cursor-pointer">
                <h2 className="font-semibold">{content}</h2>
            </div>
          );
    }
    else {
        return (
            <div className="flex justify-center items-center border-4 border-stone-500 rounded-full bg-stone-500 p-4 hover:bg-transparent hover:text-black transition-all cursor-pointer">
                <h2 className="text-white font-semibold group-hover:text-black">{content}</h2>
            </div>
        );
    }
  };
  
  export default Button;
