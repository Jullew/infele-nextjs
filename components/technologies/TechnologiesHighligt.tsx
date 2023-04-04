import React from "react";

type Props = {
  text: string;
};

function TechnologiesHighligt({ text }: Props) {
  return (
    <span className="bg-gray-600 transition-all text-xs font-medium opacity-0 group-hover:opacity-100 text-white text-center p-0.5 leading-none rounded-full px-2 dark:bg-black dark:text-blue-200 absolute translate-y-1/2 translate-x-1/2 bottom-0 right-1/2">
      {text}
    </span>
  );
}

export default TechnologiesHighligt;
