import React from "react";

type ButtonProps = {      
    content: string;  // content of button
    invert: boolean;  // to be inverted or not
  };
  
  const Button: React.FC<ButtonProps> = ({ content, invert }) => {
    if (invert == true) {
        return (
            <div className="flex justify-center items-center border-4 rounded-full border-stone-500 p-4">
                <h2 className="">{content}</h2>
            </div>
          );
    }
    else {
        return (
            <div className="flex justify-center items-center rounded-full bg-stone-500 p-4">
                <h2 className="">{content}</h2>
            </div>
        );
    }
  };
  
  export default Button;
