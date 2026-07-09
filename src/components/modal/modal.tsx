import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  altText?: string;
  onClose: () => void;
}

const Modal = ({ isOpen, images, initialIndex = 0, altText = "", onClose }: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    setCurrentIndex(initialIndex);
    triggerRef.current = document.activeElement;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    };
  }, [isOpen, initialIndex, images.length, onClose]);

  if (!isOpen) return null;

  const showNav = images.length > 1;

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog" role="dialog" aria-modal="true" tabIndex={-1} ref={dialogRef}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <IconX stroke={2} size={20} />
        </button>

        {showNav && (
          <button
            className="modal-nav modal-nav--prev"
            aria-label="Imagen anterior"
            onClick={() => setCurrentIndex((i) => (i - 1 + images.length) % images.length)}
          >
            <IconChevronLeft stroke={2} size={22} />
          </button>
        )}

        <img className="modal-image" src={images[currentIndex]} alt={altText} />

        {showNav && (
          <button
            className="modal-nav modal-nav--next"
            aria-label="Siguiente imagen"
            onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
          >
            <IconChevronRight stroke={2} size={22} />
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
