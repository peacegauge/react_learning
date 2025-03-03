import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import styled from "styled-components";

interface LikeProps {
  color: string;
  onLike: () => void;
  like: boolean;
}

function Like({ like, color, onLike }: LikeProps) {
  //const [like, setLike] = useState(false);

  return like ? (
    <AiFillHeart onClick={onLike} color={color} />
  ) : (
    <CiHeart color={color} onClick={onLike} />
  );
}

export default Like;
