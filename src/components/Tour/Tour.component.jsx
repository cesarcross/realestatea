import React from "react";

import { TourContainer, VideoTitle, VideoIframe } from "./Tour.style";

const Tour = () => {
  return (
    <TourContainer>
      <VideoTitle>Faça um tour pelo apartamento</VideoTitle>
      <VideoIframe>
        <iframe
          title="Faça um tour pelo apartamento"
          src="https://www.youtube.com/embed/otwOx7l45Gk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoIframe>
    </TourContainer>
  );
};

export default Tour;
