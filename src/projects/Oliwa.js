import OLogin from "../assets/O-login.png"
import ODashboard from "../assets/O-dashboard.png"
import OCalendar from "../assets/O-calendar.png"
import OAppoitment from "../assets/O-appointment.png"
import OPatient from "../assets/O-patient.png"
import OProfile from "../assets/O-profile.png"


export const oliwaProject = {
  name: "Oliwa",
  description: "A web-based management tool for veterinary clinics that centralizes appointments, patients, and daily workflows. The platform provides an at-a-glance overview of schedules and clinic activity, improving organization and operational efficiency.",
  tags: ["React", "Spring Boot", "MySQL", "REST API"],
};

export const oliwaCards = [
  {
    index: "01",
    title: "User access",
    description:
      "Friendly and accessible login screen with clear inputs, visual feedback and a welcoming brand identity.",
    image: OLogin,
    variant: "light",
  },
  {
    index: "02",
    title: "Dashboard overview",
    description:
      "At-a-glance overview combining weekly calendar and upcoming appointments to quickly understand the clinic’s day.",
    image: ODashboard, 
    variant: "medium",
  },
  null,
  {
    index: "03",
    title: "Calendar scheduling",
    description:
      "Calendar-based scheduling to visualize availability, navigate days and manage appointments efficiently.",
    image: OCalendar, 
    variant: "dark",
  },
  null,
  {
    index: "04",
    title: "Appointments management",
    description:
      "Structured appointment lists with clear status indicators and quick actions for daily clinic management.",
    image: OAppoitment, 
    variant: "light",
  },
  null,
  {
    index: "05",
    title: "Patients directory",
    description:
      "Visual patient directory with fast scanning, alphabetical navigation and clear identification.",
    image: OPatient,
    variant: "medium",
  },
  {
    index: "06",
    title: "Pet profile & medical history",
    description:
      "Detailed pet profile combining personal data, medical history and related appointments in a single view.",
    image: OProfile,
    variant: "dark",
  },
];