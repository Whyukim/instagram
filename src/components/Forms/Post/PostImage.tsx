"use client";

import Image from "next/image";

interface IPostImage {
  image: string;
  priority: boolean;
  setOpenModal: any;
}

function PostImage({ image, priority, setOpenModal }: IPostImage) {
  return (
    <div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={"postImage"}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
}

export default PostImage;
