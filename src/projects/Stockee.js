import login from "../assets/login.png"
import dashboard from "../assets/dashboard.png"
import inventary from "../assets/inventary.png"
import efficiency from "../assets/efficiency.png"
import efficiency2 from "../assets/efficiency2.png"
import orders from "../assets/orders.png"


export const stockeeCards = [
  {
    index: "01",
    title: "Authentication flow",
    description: "Clear and accessible login experience with validation, user feedback and protected access to the platform.",
    image: login,
    variant: "dark",
  },
  {
    index: "02",
    title: "Dashboard overview",
    description: "Centralized dashboard to quickly understand stock status, alerts and key metrics at a glance.",
    image: dashboard,
    variant: "light",
  },
  null,
  {
    index: "03",
    title: "Inventory management",
    description: "Full inventory control with ingredient listing, editing, minimum stock levels and real-time updates.",
    image: inventary,
    variant: "medium",
  },
  null,
  {
    index: "04",
    title: "Smart stock alerts",
    description: "Low-stock alerts and recommendations based on consumption patterns to prevent shortages.",
    image: orders,
    variant: "dark",
  },
  null,
   {
    index: "05",
    title: "Analytics & insights",
    description: "Visual insights into consumption trends and stock performance to support better decisions.",
    image: efficiency,
    variant: "light",
  },
  {
    index: "06",
    title: "Waste & efficiency",
    description: "Waste registration and categorization to analyze losses and improve operational efficiency.",
    image: efficiency2,
    variant: "medium",
  },

];
