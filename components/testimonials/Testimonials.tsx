import React from "react";
import TestimonialsSwiper from "./TestimonialsSwiper";

type Props = {};

function Testimonials({}: Props) {
  return (
    <div className="bg-orange-100 dark:bg-slate-950 bg-opacity-40 mt-10 pt-2 pb-16">
      <div className="flex container mx-auto my-16 flex-col">
        <div className="text-center text-5xl fo-bold">
          Posłuchaj naszych <span className="ul-effect">klientów</span>
        </div>
      </div>

      <TestimonialsSwiper />
    </div>
  );
}

export default Testimonials;
