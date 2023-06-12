import { BsHeart } from "react-icons/bs";

interface IHeart {
  size?: number;
}

function Heart({ size = 24 }: IHeart) {
  return <BsHeart size={size} />;
}

export default Heart;
