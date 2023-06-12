import { BsEmojiSmile } from "react-icons/bs";

interface ISmile {
  size?: number;
}

function Smile({ size = 24 }: ISmile) {
  return <BsEmojiSmile size={size} />;
}

export default Smile;
