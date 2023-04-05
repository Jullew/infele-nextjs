import React from "react";

type Props = { title: string };

function ArticleHead({ title }: Props) {
  return (
    <div>
      <h2 className="text-4xl text-head">{title}</h2>
      <div className="my-2 translate-x-0.5 h-[5px] w-[23%] bg-orange-500"></div>
    </div>
  );
}

export default ArticleHead;
