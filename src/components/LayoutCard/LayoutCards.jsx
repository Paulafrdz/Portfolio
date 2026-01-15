import { useState } from 'react';
import ImageModal from "../ImageModal/ImageModal";
import ProjectCard from "../Card/ProjectCard";
import "./LayoutCards.css";

export default function LayoutCards({ cards }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage(imageSrc);
    setSelectedImageAlt(imageAlt);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="layout-grid">
        {cards.map((card, index) =>
          card ? (
            <ProjectCard
              key={index}
              {...card}
              onImageClick={handleImageClick}
            />
          ) : (
            <div key={index} className="grid-hole" />
          )
        )}
      </section>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
        imageAlt={selectedImageAlt}
      />

    </>
  );
}
