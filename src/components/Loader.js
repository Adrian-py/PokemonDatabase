import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLoader = styled.div`
  width: 100%;
  padding: 4vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  & .ball {
    width: 1.5vw;
    aspect-ratio: 1/1;
    border-radius: 50%;

    &--1 {
      background: brown;
    }

    &--2 {
      background: blue;
    }

    &--3 {
      background: green;
    }

    &--4 {
      background: purple;
    }

    &--5 {
      background: orange;
    }
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <motion.div
        className="ball ball--1"
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="ball ball--2"
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ delay: 0.25, duration: 1.5, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="ball ball--3"
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="ball ball--4"
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ delay: 0.75, duration: 1.5, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="ball ball--5"
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ delay: 0.1, duration: 1.5, repeat: Infinity }}
      ></motion.div>
    </StyledLoader>
  );
}
