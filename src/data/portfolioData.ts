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
  backgroundImage?: string; // Added for low opacity background images
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

export interface Strength {
  text: string;
}

export interface Weakness {
  text: string;
}

export interface CompanyLogo {
  name: string;
  image: string;
  link?: string;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  isCurrentPosition?: boolean;
}

export const personalInfo = {
  name: "Shahul Mubeen",
  title: "Mechanical Engineer",
  bio: "I am a passionate mechanical engineer with expertise in design and analysis. My technical skills and creative problem-solving abilities allow me to develop innovative solutions to complex engineering challenges.",
  email: "your.email@example.com", // Replace with your email
  linkedin: "https://www.linkedin.com/in/shahul-mubeen/",
  cvPath: "/docs/Mubeen Design CV.pdf",
  profileImage: "/images/profile-placeholder.jpg", // Replace with your image path
  summaryText: "Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.",
  howIWorkText: "I approach engineering challenges with a blend of analytical thinking and creative problem-solving. My process typically involves thorough research, collaborative brainstorming, iterative design, and rigorous testing. I believe in learning continuously and adapting my approach based on feedback and new information. Communication is central to my work style, ensuring all stakeholders remain aligned throughout the project lifecycle."
};

export const dreamJobs: TimelineItem[] = [
  {
    title: "Baseball Star",
    subtitle: "Farmer Phase, Vietnam"
  },
  {
    title: "Computer Builder",
    subtitle: "Being Useless Phase, WA"
  },
  {
    title: "Astrophysicist",
    subtitle: "College Phase, WA"
  },
  {
    title: "Electrical Engineer",
    subtitle: "College Phase, WA"
  },
  {
    title: "Mechanical Engineer",
    subtitle: "Being Useful Phase",
    isCurrentPosition: true
  },
  {
    title: "(Still taking suggestions)",
    subtitle: "TBD, Earth (?)"
  }
];

export const companyLogos: CompanyLogo[] = [
  {
    name: "Google",
    image: "/images/logos/google-logo.png",
    link: "#"
  },
  {
    name: "Apple",
    image: "/images/logos/apple-logo.png",
    link: "#"
  },
  {
    name: "SpaceX",
    image: "/images/logos/spacex-logo.png",
    link: "#"
  },
  // Add more logos as needed
];

export const strengths: Strength[] = [
  {
    text: "Addicted to machining."
  },
  {
    text: "Never lost to Magnus Carlsen in chess."
  },
  {
    text: "Like to design, build, and assemble everything."
  }
  // Add more strengths as needed
];

export const weaknesses: Weakness[] = [
  {
    text: "Addicted to machining."
  },
  {
    text: "4th year in a row to be cursed with laptop problems."
  },
  {
    text: "Really like to disassemble and break things."
  }
  // Add more weaknesses as needed
];

export const skills: Skill[] = [
  {
    name: "CAD Design",
    proficiencyLevel: "Expert",
    description: "Proficient in creating detailed 3D models and technical drawings using industry-standard CAD software."
  },
  {
    name: "Finite Element Analysis",
    proficiencyLevel: "Advanced",
    description: "Experienced in performing structural and thermal analyses to validate designs and optimize performance."
  },
  {
    name: "Mechanical Design",
    proficiencyLevel: "Expert",
    description: "Expert in designing mechanical components and systems with a focus on functionality, reliability, and manufacturability."
  },
  {
    name: "Python Programming",
    proficiencyLevel: "Proficient",
    description: "Skilled in using Python for data analysis, automation, and solving engineering problems."
  },
  {
    name: "Project Management",
    proficiencyLevel: "Advanced",
    description: "Experienced in managing engineering projects from concept to completion, ensuring timely delivery and quality results."
  },
  // Add more skills as needed
];

export const workExperience: WorkExperience[] = [
  {
    title: "Product Design Engineer",
    company: "Google",
    location: "Chicago, IL",
    period: "Jan 2023 - Present",
    description: "Pixel phone mechanical design",
    achievements: [
      "Designed and implemented a new cooling system that improved efficiency by 15%",
      "Led a team of 5 engineers in the successful delivery of 3 major projects",
      "Reduced manufacturing costs by 20% through design optimization"
    ],
    backgroundImage: "/images/backgrounds/google-bg.jpg"
  },
  {
    title: "iPhone PD Engineering Intern",
    company: "Apple",
    location: "Cupertino, CA",
    period: "Sept 2021 - Sept 2022",
    description: "Mechanical design and development of the iPhone 14 lineup",
    achievements: [
      "Developed 10+ mechanical designs that went into production",
      "Collaborated with cross-functional teams to ensure design feasibility",
      "Implemented design improvements that increased product lifespan by 30%"
    ],
    backgroundImage: "/images/backgrounds/apple-bg.jpg"
  },
  {
    title: "Starship Engineering Intern",
    company: "SpaceX",
    location: "Brownsville, TX",
    period: "June - Sept 2021",
    description: "Responsible for the build process of Starship nosecone and driving internal structures design.",
    achievements: [
      "Contributed to the design of a new assembly line component",
      "Performed stress analysis on critical components",
      "Created detailed technical documentation for manufacturing"
    ],
    backgroundImage: "/images/backgrounds/spacex-bg.jpg"
  },
  {
    title: "Manufacturing Engineering Intern",
    company: "Blue Origin",
    location: "Kent, WA",
    period: "Sept - Dec 2020",
    description: "Streamlined New Glenn carbon fiber panels assembly by conducting tolerance stack-up analyses and fixture design.",
    achievements: [
      "Optimized assembly processes reducing build time by 15%",
      "Designed fixtures for complex carbon fiber components",
      "Implemented quality control procedures that improved first-pass yield"
    ],
    backgroundImage: "/images/backgrounds/blueorigin-bg.jpg"
  },
  {
    title: "Product Design Integration Intern",
    company: "Tesla",
    location: "Fremont, CA",
    period: "Mar - Sept 2020",
    description: "Directly involved in product design cycle for Model S/X Refresh for solving packaging and integration issues.",
    achievements: [
      "Resolved critical packaging constraints in dashboard assembly",
      "Collaborated with electrical and software teams on integrated systems",
      "Developed innovative mounting solutions for new feature implementation"
    ],
    backgroundImage: "/images/backgrounds/tesla-bg.jpg"
  },
  {
    title: "Structures Engineering Intern",
    company: "Boeing",
    location: "Everett, WA",
    period: "June - Sept 2019",
    description: "Led the redesign and finite element analysis of a case-hardened gear for wing actuation.",
    achievements: [
      "Performed detailed FEA on critical structural components",
      "Optimized gear design resulting in 12% weight reduction",
      "Documented analysis methodology for future engineering reference"
    ],
    backgroundImage: "/images/backgrounds/boeing-bg.jpg"
  },
  // Add more work experiences as needed
];

export const projects: Project[] = [
  {
    title: "Automated Assembly System",
    description: "Designed and implemented an automated assembly system for manufacturing electronic components, resulting in a 40% increase in production efficiency.",
    technologies: ["CAD Design", "Pneumatics", "PLC Programming"],
    image: "/images/project1-placeholder.jpg" // Replace with actual image
  },
  {
    title: "Lightweight Structural Component",
    description: "Developed a lightweight structural component for aerospace applications using topology optimization, reducing weight by 25% while maintaining structural integrity.",
    technologies: ["FEA", "Topology Optimization", "Materials Engineering"],
    image: "/images/project2-placeholder.jpg" // Replace with actual image
  },
  {
    title: "Energy Recovery System",
    description: "Designed an energy recovery system for industrial processes that captures waste heat and converts it to usable energy, reducing energy consumption by 30%.",
    technologies: ["Thermodynamics", "Heat Transfer", "System Design"],
    image: "/images/project3-placeholder.jpg" // Replace with actual image
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
