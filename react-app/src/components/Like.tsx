import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import styled from "styled-components";

interface LikeProps {
  onClick: () => void;
}

function Like({ onClick }: LikeProps) {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <AiFillHeart onClick={toggle} color="pink" size={20} />;
  } else {
    return <CiHeart onClick={toggle} size={20} />;
  }
}

export default Like;
