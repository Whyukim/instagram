import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";

interface IModal {
  children: React.ReactNode;
}

function Modal({ children }: IModal) {
  return (
    <>
      {createPortal(
        <section className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[9999]">
          {children}
        </section>,
        document.body
      )}
    </>
  );
}

export default Modal;
