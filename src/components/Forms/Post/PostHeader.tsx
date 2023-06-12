import Avatar from "components/Elements/Avatar";
import TextBold from "components/Elements/Texts/TextBold";

interface IPostHeader {
  username: string;
  userImage: string;
}

function PostHeader({ userImage, username }: IPostHeader) {
  return (
    <div className="flex items-center gap-3 p-3">
      <Avatar image={userImage} highlight size={"medium"} />
      <TextBold>{username}</TextBold>
    </div>
  );
}

export default PostHeader;
