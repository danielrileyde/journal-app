import { ReactNode } from "react";
// There are two way to pass data to a component, the most commen way is; pass them as as props. The second is to pass them as children.

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__inner"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="model__inner--cancelButton" onClick={onClose}>
          Cancel
        </button>{" "}
        {children}
      </div>
    </div>
  );
};
