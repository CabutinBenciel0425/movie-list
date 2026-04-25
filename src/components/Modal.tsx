import { useEffect, useRef } from "react";
import { useAppContext } from "../hooks/useAppContext";

function Modal() {
  const { confirmModal, closeConfirmModal } = useAppContext();

  const modalRef = useRef<HTMLDivElement>(null);

  const { isOpen, title, message, confirmText, cancelText, onConfirm } =
    confirmModal;

  useEffect(() => {
    if (!isOpen) return;

    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeConfirmModal();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, closeConfirmModal]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleConfirm() {
    onConfirm();
    closeConfirmModal();
  }

  function handleOverlayClick() {
    closeConfirmModal();
  }

  function handleModalClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 transform transition-all duration-200 scale-95 opacity-0 animate-fadeIn"
        onClick={handleModalClick}
      >
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}

        <p className="text-black mb-10 text-xl font-semibold">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-500 transition cursor-pointer"
            onClick={closeConfirmModal}
          >
            {cancelText}
          </button>

          <button
            className="px-4 py-2 rounded-md bg-border-main text-white hover:bg-border-secondary transition cursor-pointer"
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
