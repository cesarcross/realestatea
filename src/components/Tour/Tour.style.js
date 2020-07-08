import styled from "styled-components";

export const TourContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  background: #85d7ea;
  padding: 30px 0;
`;

export const VideoTitle = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const VideoIframe = styled.div`
  overflow: hidden;
  position: relative;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  max-width: 992px;

  ::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
