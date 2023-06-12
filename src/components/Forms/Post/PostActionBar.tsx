import BookMarks from "components/Elements/icons/BookMarks";
import Heart from "components/Elements/icons/Heart";
import { parseDate } from "util/date";
import ToggleButton from "components/Elements/Buttons/ToggleButton";
import HeartFill from "components/Elements/icons/HeartFill";
import BookMarksFill from "components/Elements/icons/BookMarksFill";
import { Comment, SimplePost } from "model/post";
import usePosts from "hooks/posts";
import useMe from "hooks/me";
import PostComment from "./PostComment";
import { useCacheKeys } from "context/CacheKeyContext";
interface IPostActionBar {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (comment: Comment) => void;
}

function PostActionBar({ post, children, onComment }: IPostActionBar) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    if (user) setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    if (user) setBookmark(id, bookmark);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className="grid gap-3 p-3">
        <div className="flex justify-between items-center">
          <ToggleButton
            toggled={liked}
            onToggle={handleLike}
            onIcon={<HeartFill />}
            offIcon={<Heart />}
          />
          <ToggleButton
            toggled={bookmarked}
            onToggle={handleBookmark}
            onIcon={<BookMarksFill />}
            offIcon={<BookMarks />}
          />
        </div>
        <b className="font-semibold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</b>
        {children}
        <p className="text-gray-400">{parseDate(createdAt)}</p>
      </div>
      <PostComment onPostComment={handleComment} />
    </>
  );
}

export default PostActionBar;
