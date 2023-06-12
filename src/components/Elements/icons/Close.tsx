import { AiOutlineClose } from "react-icons/ai";

interface IClose {
  size?: number;
}

function Close({ size = 24 }: IClose) {
  return <AiOutlineClose size={size} fill={"#fff"} />;
}

export default Close;
