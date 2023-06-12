import Avatar from "components/Elements/Avatar";
import TextBold from "components/Elements/Texts/TextBold";
import { Comment } from "model/post";

interface IPostChats {
  username: string;
  userImage: string;
  text?: string;
}

function PostChats({ username, userImage, text }: IPostChats) {
  return (
    <ul className="border-t-2 border-gray-300 p-4">
      <li className="flex items-center gap-2">
        <Avatar image={userImage} highlight size="small" />
        <TextBold>{username}</TextBold>
        <p>{text && text}</p>
      </li>
    </ul>
  );
}

export default PostChats;
