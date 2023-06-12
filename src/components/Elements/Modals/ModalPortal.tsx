import { createPortal } from "react-dom";

interface IModalPortal {
  children: React.ReactNode;
}

function ModalPortal({ children }: IModalPortal) {
  if (typeof window === "undefined") return null;

  const node = document.getElementById("portal") as Element;
  return createPortal(children, node);
}

export default ModalPortal;
