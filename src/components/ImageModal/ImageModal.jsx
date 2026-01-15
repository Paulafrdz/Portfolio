import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './ImageModal.css';

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt = 'Image' }) => {
  useEffect(() => {
    // Prevenir scroll del body cuando el modal está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cerrar con tecla ESC
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`image-modal ${isOpen ? 'open' : ''}`}>
      {/* Overlay - Cerrar al hacer click fuera */}
      <div 
        className="image-modal__overlay" 
        onClick={onClose}
      />

      {/* Contenedor de la imagen */}
      <div className="image-modal__content">
        {/* Botón cerrar */}
        <button 
          className="image-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Imagen ampliada */}
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="image-modal__image"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;