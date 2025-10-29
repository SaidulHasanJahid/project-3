"use client";

import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div
      className="
        w-full 
        relative 
        h-[500px]           /* Default height for mobile */
        sm:h-[600px]        /* Slightly taller on small devices */
        md:h-[450px]        /* Medium screens */
        lg:h-[80vh]         /* Large screens */
        xl:h-[90vh]         /* Extra large screens */
        overflow-hidden
      "
    >
      <iframe
        src="https://player.vimeo.com/video/803053913?loop=1&autoplay=1&title=0&byline=0&portrait=0&background=1&player_id=iframe18704"
        className="absolute top-1/2 left-1/2 w-[177.78%] h-full -translate-x-1/2 -translate-y-1/2"
        style={{ border: "none" }}
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
