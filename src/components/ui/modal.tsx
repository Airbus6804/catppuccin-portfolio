import Modal from "react-modal";
import FadeIn from "../animations/fadeIn";
import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { useContext } from "react";
import { SettingsContext } from "@/contextes/settings";

export interface UiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UiModalChildrenProps extends UiModalProps {
  children: React.ReactNode;
}

export default function UiModal({
  isOpen,
  onClose,
  children,
}: UiModalChildrenProps) {
  const { theme } = useContext(SettingsContext);
  return (
    <Modal
      className={`${theme}`}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          position: "absolute",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgb(var(--ctp-base))",
          border: "1px solid rgba(var(--ctp-blue), 0.1)",
          padding: 0,
        },
        overlay: {
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity .1s ease-in-out",
        },
      }}
    >
      <FadeIn>
        <LiaTimesSolid className="absolute left-4 top-7 text-2xl cursor-pointer" onClick={onClose} style={{color: "rgba(var(--ctp-text))"}} />
        {children}
      </FadeIn>
    </Modal>
  );
}
