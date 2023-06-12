import { BsBookmarkFill } from "react-icons/bs";

interface IBookMarksFill {
  size?: number;
}

function BookMarksFill({ size = 24 }: IBookMarksFill) {
  return <BsBookmarkFill size={size} />;
}

export default BookMarksFill;
