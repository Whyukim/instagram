import ModalPortal from "components/Elements/Modals/ModalPortal";
import PostModal from "components/Elements/Modals/PostModal";
import { SimplePost } from "model/post";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import PostDetail from "../Post/PostDetail";

type Props = {
  post: SimplePost;
  priority: boolean;
};
export default function UserPostGridCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { image, username } = post;
  const { data: session } = useSession();
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };

  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
