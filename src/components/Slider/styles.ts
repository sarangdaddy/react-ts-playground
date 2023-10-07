import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Slider = styled.div`
  position: relative;
  top: -112px;
  margin: 0 50px;
`;

export const rowVariants = {
  hidden: {
    x: window.innerWidth - 50,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth + 50,
  },
};

export const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.3,
      duration: 0.1,
      type: 'tween',
    },
  },
};

export const Box = styled(motion.div)`
  height: 200px;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.1,
      type: 'tween',
    },
  },
};

export const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  width: 100%;

  h4 {
    text-align: center;
    font-size: 13px;
    font-weight: 400;
  }
`;
