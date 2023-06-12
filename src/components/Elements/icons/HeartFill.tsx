import { BsFillHeartFill } from "react-icons/bs";

interface IHeartFill {
  size?: number;
}

function HeartFill({ size = 24 }: IHeartFill) {
  return <BsFillHeartFill color="red" size={size} />;
}

export default HeartFill;
