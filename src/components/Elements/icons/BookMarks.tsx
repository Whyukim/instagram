import { BsBookmark } from "react-icons/bs";

interface IBookMarks {
  size?: number;
}

function BookMarks({ size = 24 }: IBookMarks) {
  return <BsBookmark size={size} />;
}

export default BookMarks;
