import { useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import data from "./data";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image } = data[currentIndex];

  let autoScroll = true;

  const IntervalRef = useRef();

  console.log(IntervalRef.current);

  const prev = () => {
    if (autoScroll) {
      clearInterval(IntervalRef.current);
      IntervalRef.current = setInterval(next, 3000);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const next = useCallback(() => {
    if (autoScroll) {
      clearInterval(IntervalRef.current);
      IntervalRef.current = setInterval(next, 3000);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }, [autoScroll, IntervalRef]);

  useEffect(() => {
    if (autoScroll) {
      IntervalRef.current = setInterval(next, 3000);
      return () => {
        clearInterval(IntervalRef.current);
      };
    }
  }, [autoScroll, next]);

  const Images = styled.div`
    display: flex;
    position: relative;
    width: 600px;
    height: 600px;
  `;
  const Btns = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: -18rem;
    position: relative;
  `;
  const Img = styled.img`
    width: 100%;
    height: 100%;
    display: none;
  `;

  return (
    <div>
      <h1>REACT IMAGE CAROUSEL</h1>
      <Images>
        <img src={image} alt="" />
      </Images>
      <Btns>
        <button className="prev" onClick={prev}>
          Prev
        </button>
        <button
          className="next"
          onClick={next}
          style={{ marginRight: "-705px", right: 0 }}
        >
          Next
        </button>
      </Btns>
    </div>
  );
};

export default ImageCarousel;
