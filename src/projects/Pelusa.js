import home from "../assets/P-home.png"
import cats from "../assets/P-cats.png"
import favorites from "../assets/P-favorites.png"
import form from "../assets/P-form.png"


export const pelusaProject = {
  name: "Pelusa Society",
  description: "A responsive web application that connects animals in need of adoption with potential families. Designed with a friendly, emotional user experience, it allows users to browse animals, save favorites, and complete adoption requests in a simple and intuitive way.",
  tags: ["React", "JavaScript", "CSS"],
};

export const pelusaCards = [
  {
    index: "01",
    title: "Brand-driven home",
    description:
      "Warm and friendly homepage introducing the project through illustration, tone and a strong emotional identity.",
    image: home, 
    variant: "light",
  },
  {
    index: "02",
    title: "Animal discovery",
    description:
      "Visual browsing experience to discover animals through cards, gestures and clear calls to action.",
    image: cats, 
    variant: "medium",
  },
  null,
  null,
  {
    index: "03",
    title: "Favorites & decision support",
    description:
      "Favorites system designed to help users shortlist animals and make thoughtful adoption decisions.",
    image: favorites,
    variant: "dark",
  },
  {
    index: "04",
    title: "Adoption flow",
    description:
      "Guided adoption request flow with friendly copy, accessible form structure and user preferences.",
    image: form,
    variant: "light",
  },
];
