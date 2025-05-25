// This file contains all the editable content for your portfolio
// You can modify this data to update your portfolio without touching the components

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  description: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export interface Drawing {
  title: string;
  description: string;
  filename: string;
}

export interface ExtraCurricular {
  title: string;
  description: string;
  period?: string;
  image?: string;
}

export const personalInfo = {
  name: "Mubeen A",
  title: "Mechanical Design Engineer",
  bio: "A budding mechanical design engineer with expertise in CAD, DfM, FEA and Rapid Prototyping. Everything else I have up my sleeve is an added bonus to this world.",
  email: "your.email@example.com", // Replace with your email
  linkedin: "https://www.linkedin.com/in/shahul-mubeen/",
  cvPath: "/docs/Mubeen Design CV.pdf",
  profileImage: "/images/profile-placeholder.jpg", // Replace with your image path
};

export const skills: Skill[] = [
  {
    name: "CAD Design",
    proficiency: 95,
    description: "Proficient in creating detailed 3D models and technical drawings using industry-standard CAD software."
  },
  {
    name: "Finite Element Analysis",
    proficiency: 70,
    description: "Experienced in performing structural and thermal analyses to validate designs and optimize performance."
  },
  {
    name: "Mechanical Design",
    proficiency: 90,
    description: "Expert in designing mechanical components and systems with a focus on functionality, reliability, and manufacturability."
  },
  {
    name: "Python Programming",
    proficiency: 90,
    description: "Skilled in using Python for data analysis, automation, and solving engineering problems."
  },
  {
    name: "Project Management",
    proficiency: 75,
    description: "Experienced in managing engineering projects from concept to completion, ensuring timely delivery and quality results."
  },
  // Add more skills as needed
];

export const workExperience: WorkExperience[] = [
  {
    title: "Assembly Operator",
    company: "Husqvarna Group",
    location: "Newton Aycliffe, UK",
    period: "Feb 2024 - Present",
    description: "Build, test and quality-control 300+ robotic lawnmower assemblies every shift",
    achievements: [
      "Designed and implemented a new cooling system that improved efficiency by 15%",
      "Led a team of 5 engineers in the successful delivery of 3 major projects",
      "Reduced manufacturing costs by 20% through design optimization"
    ]
  },
  {
    title: "FC Associate",
    company: "Amazon MME2",
    location: "Durham, UK",
    period: "Oct 2024 - Jan 2025",
    description: "Assisted senior engineers in design and analysis tasks for industrial equipment.",
    achievements: [
      "Contributed to the design of a new assembly line component",
      "Performed stress analysis on critical components",
      "Created detailed technical documentation for manufacturing"
    ]
  },
  {
    title: "Remote Design Engineer (Internship)",
    company: "Tata Consultancy Services Ltd.",
    location: "Chennai, India",
    period: "Nov 2020 - Mar 2022",
    description: "Responsible for the design and development of mechanical components for an experimental V6 engine.",
    achievements: [
      "Developed 10+ mechanical designs that went into production",
      "Collaborated with cross-functional teams to ensure design feasibility",
      "Implemented design improvements that increased product lifespan by 30%"
    ]
  },
  // Add more work experiences as needed
];

export const projects: Project[] = [
  {
    title: "Bluetooth Smart Lock",
    description: "Designed and implemented an automated assembly system for manufacturing electronic components, resulting in a 40% increase in production efficiency.",
    technologies: ["CAD Design", "Pneumatics", "PLC Programming"],
    image: "/images/project1-placeholder.jpg" // Replace with actual image
  },
  {
    title: "Redesign of a Contingency Cart for Amazon",
    description: "Developed a lightweight structural component for aerospace applications using topology optimization, reducing weight by 25% while maintaining structural integrity.",
    technologies: ["FEA", "Topology Optimization", "Materials Engineering"],
    image: "/images/project2-placeholder.jpg" // Replace with actual image
  },
  {
    title: "Robot Arm to play Chess (ongoing)",
    description: "Designed an energy recovery system for industrial processes that captures waste heat and converts it to usable energy, reducing energy consumption by 30%.",
    technologies: ["Thermodynamics", "Heat Transfer", "System Design"],
    image: "/images/project3-placeholder.jpg" // Replace with actual image
  },
  // Add more projects as needed
];

export const mechanicalDrawings: Drawing[] = [
  {
    title: "Contingency Cart",
    description: "Detailed drawing of a turbine blade assembly showing key components and dimensions.",
    filename: "turbine-blade-assembly.pdf" // Add your drawing files to public/docs/
  },
  {
    title: "V6 Engine",
    description: "Technical drawing of a custom hydraulic cylinder with pressure specifications.",
    filename: "hydraulic-cylinder.pdf"
  },
  {
    title: "Robot Arm",
    description: "Exploded view and assembly drawing of a precision gearbox system.",
    filename: "gearbox-assembly.pdf"
  },
  // Add more drawings as needed
];

export const extraCurricular: ExtraCurricular[] = [
  {
    title: "Engineering Volunteer Program",
    description: "Participated in a volunteer program to teach engineering principles to high school students, mentoring over 20 students on various projects.",
    period: "2020 - Present",
    image: "/images/volunteer-placeholder.jpg" // Replace with actual image
  },
  {
    title: "Robotics Competition Judge",
    description: "Served as a technical judge for regional robotics competitions, evaluating design innovation and technical implementation.",
    period: "2021 - 2022",
    image: "/images/robotics-placeholder.jpg" // Replace with actual image
  },
  {
    title: "Professional Association Member",
    description: "Active member of the Society of Mechanical Engineers, participating in workshops and conferences to stay updated with industry trends.",
    period: "2018 - Present"
  },
  // Add more extracurricular activities as needed
];
