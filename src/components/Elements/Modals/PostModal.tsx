"use client";

import Close from "../icons/Close";

interface IPostModal {
  children: React.ReactNode;
  onClose: () => void;
}

function PostModal({ onClose, children }: IPostModal) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-neutral-900/70"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        className={"fixed top-0 right-0 p-4 text-white"}
        onClick={() => onClose()}
      >
        <Close />
      </button>
      <div className="bg-white w-4/5 h-3/5 max-w-7xl">{children}</div>
    </section>
  );
}

export default PostModal;
