// This file contains all the editable content for your portfolio
// You can modify this data to update your portfolio without touching the components

export interface Skill {
  name: string;
  proficiencyLevel: string; // Changed from number to string for descriptive terms
  description: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  backgroundImage?: string; // Can be image, GIF or video
  isVideo?: boolean; // Flag to indicate if backgroundImage is a video
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  isVideo?: boolean; // Flag to indicate if image is a video
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
  isVideo?: boolean; // Flag to indicate if image is a video
}

export interface Strength {
  text: string;
}

export interface Weakness {
  text: string;
}

export interface CompanyLogo {
  name: string;
  image: string;
  isVideo?: boolean; // Flag to indicate if image is a video
  link?: string;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  isCurrentPosition?: boolean;
}

export const personalInfo = {
  name: "Mubeen A", // Updated from "Shahul Mubeen" to "Mubeen A"
  title: "Mechanical Engineer",
  portfolioTitle: "Mubeen's Portfolio", // Added for the header
  bio: "I am a passionate mechanical engineer with expertise in design and analysis. My technical skills and creative problem-solving abilities allow me to develop innovative solutions to complex engineering challenges.",
  email: "a.shahul.mubeen@gmail.com", // Replace with your email
  linkedin: "https://www.linkedin.com/in/shahul-mubeen/",
  cvPath: "/docs/Mubeen Design CV.pdf",
  profileImage: "/images/Headshot.jpg", // Replace with your image path
  headerBackground: "/images/header-background.jpg", // Can be image, GIF or video
  isHeaderBackgroundVideo: false, // Set to true if using a video
  summaryText: "Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.",
  dreamJobsFlowchartImage: "/images/flowchart-placeholder.jpg", // Add your custom flowchart image here
};

export const companyLogos: CompanyLogo[] = [
  {
    name: "TCS",
    image: "/images/logos/google-logo.png",
    link: "#"
  },
  {
    name: "Amazon",
    image: "/images/logos/apple-logo.png",
    link: "#"
  },
  {
    name: "Husqvarna",
    image: "/images/logos/spacex-logo.png",
    link: "#"
  },
  // Add more logos as needed
];

export const strengths: Strength[] = [
  {
    text: "Addicted to Robotics"
  },
  {
    text: "Like to design, build, and assemble everything"
  },
  {
    text: "Never lost to Magnus Carlsen in chess"
  }
  // Add more strengths as needed
];

export const weaknesses: Weakness[] = [
  {
    text: "Addicted to Robotics"
  },
  {
    text: "Physically incapable to sit on one place and not learn new things"
  },
  {
    text: "Likes only one food"
  }
  // Add more weaknesses as needed
];

export const skills: Skill[] = [
  {
    name: "Computer-aided Design (CAD)",
    proficiencyLevel: "Expert",
    description: "Proficient in creating detailed 3D models and BOMs in SolidWorks, adhering to standards such as ISO, BS, and ANSI."
  },
  {
    name: "Finite Element Analysis (FEA)",
    proficiencyLevel: "Intermediate",
    description: "Experienced in performing structural and thermal analyses in SolidWorks to validate designs and optimise performance."
  },
  {
    name: "Design for Manufacturing (DfM)",
    proficiencyLevel: "Intermediate",
    description: "Hands-on experience in designing mechanical components and systems with a focus on functionality, reliability, and manufacturability."
  },
  {
    name: "Python Programming",
    proficiencyLevel: "Proficient",
    description: "Skilled in using Python for data analysis, automation, and solving engineering problems. Occassionally uses Python to automate all boring tasks at home."
  },
  {
    name: "Robot Operating System (ROS2)",
    proficiencyLevel: "Proficient",
    description: "Experienced in programming ROS packages for custom-built robots. Well-versed in programming said robot brains to accompany human beings."
  },
  {
    name: "Project Management",
    proficiencyLevel: "Intermediate",
    description: "Experienced in managing engineering projects from concept to completion, ensuring timely delivery and quality results."
  },
  // Add more skills as needed
];

export const workExperience: WorkExperience[] = [
  {
    title: "Assembly Operator",
    company: "Husqvarna Group",
    location: "Durham, UK",
    period: "Feb 2024 - Present",
    description: "Assembler of various series of Husqvarna's robotic lawnmowers",
    achievements: [
      "Designed and implemented a new cooling system that improved efficiency by 15%",
      "Led a team of 5 engineers in the successful delivery of 3 major projects",
      "Reduced manufacturing costs by 20% through design optimization"
    ],
    backgroundImage: "/images/backgrounds/google-bg.jpg",
    isVideo: false // Set to true if using a video or GIF
  },
  {
    title: "FC Associate",
    company: "Amazon MME2",
    location: "Durham, UK",
    period: "Oct 2024 - Jan 2025",
    description: "Redesign of an existing contingency cart to avoid shipment lags during peak",
    achievements: [
      "Developed 10+ mechanical designs that went into production",
      "Collaborated with cross-functional teams to ensure design feasibility",
      "Implemented design improvements that increased product lifespan by 30%"
    ],
    backgroundImage: "/images/backgrounds/apple-bg.jpg",
    isVideo: false
  },
  {
    title: "Remote Design Engineer Intern",
    company: "Tata Consultancy Services Ltd.",
    location: "Chennai, IN",
    period: "Nov 2020 - Mar 2022",
    description: "Design, validate and simulate an experimental V6 engine design",
    achievements: [
      "Contributed to the design of a new assembly line component",
      "Performed stress analysis on critical components",
      "Created detailed technical documentation for manufacturing"
    ],
    backgroundImage: "/images/backgrounds/spacex-bg.jpg",
    isVideo: false
  },
  // Add more work experiences as needed
];

export const projects: Project[] = [
  {
    title: "Experimental V6 Engine Design (TCS)",
    description: "Designed and implemented an automated assembly system for manufacturing electronic components, resulting in a 40% increase in production efficiency.",
    technologies: ["CAD Design", "Pneumatics", "PLC Programming"],
    image: "/images/project1-placeholder.jpg", // Replace with actual image
    isVideo: false
  },
  {
    title: "Design and Fabrication of a Spherical Gear for Robot Joints (college project)",
    description: "Developed a lightweight structural component for aerospace applications using topology optimization, reducing weight by 25% while maintaining structural integrity.",
    technologies: ["FEA", "Topology Optimization", "Materials Engineering"],
    image: "/images/project2-placeholder.jpg", // Replace with actual image
    isVideo: false
  },
  {
    title: "Robot Arm that plays Chess with humans or themselves (personal, ongoing)",
    description: "Designed an energy recovery system for industrial processes that captures waste heat and converts it to usable energy, reducing energy consumption by 30%.",
    technologies: ["Thermodynamics", "Heat Transfer", "System Design"],
    image: "/images/project3-placeholder.jpg", // Replace with actual image
    isVideo: false
  },
  // Add more projects as needed
];

export const mechanicalDrawings: Drawing[] = [
  {
    title: "Turbine Blade Assembly",
    description: "Detailed drawing of a turbine blade assembly showing key components and dimensions.",
    filename: "turbine-blade-assembly.pdf" // Add your drawing files to public/docs/
  },
  {
    title: "Hydraulic Cylinder Design",
    description: "Technical drawing of a custom hydraulic cylinder with pressure specifications.",
    filename: "hydraulic-cylinder.pdf"
  },
  {
    title: "Gearbox Assembly",
    description: "Exploded view and assembly drawing of a precision gearbox system.",
    filename: "gearbox-assembly.pdf"
  },
  // Add more drawings as needed
];

export const extraCurricular: ExtraCurricular[] = [
  {
    title: "Freelance Filmmaker",
    description: "Participated in a volunteer program to teach engineering principles to high school students, mentoring over 20 students on various projects.",
    period: "2017 - Present",
    image: "/images/volunteer-placeholder.jpg", // Replace with actual image
    isVideo: false
  },
  {
    title: "Team Coordinator - MuFX",
    description: "Served as a technical judge for regional robotics competitions, evaluating design innovation and technical implementation.",
    period: "2021 - 2022",
    image: "/images/robotics-placeholder.jpg", // Replace with actual image
    isVideo: false
  },
  {
    title: "PC Building",
    description: "Active member of the Society of Mechanical Engineers, participating in workshops and conferences to stay updated with industry trends.",
    period: "2021 - Present",
    image: "/images/association-placeholder.jpg", // Added image for Professional Association Member
    isVideo: false
  },
  // Add more extracurricular activities as needed
];
