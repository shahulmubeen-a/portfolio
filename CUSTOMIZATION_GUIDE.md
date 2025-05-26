# Portfolio Website Customization Guide

This guide will help you customize your redesigned portfolio website to match your personal information, preferences, and style.

## Table of Contents
1. [Editing Content](#editing-content)
2. [Customizing Sections](#customizing-sections)
3. [Adding Your Images](#adding-your-images)
4. [Styling and Theming](#styling-and-theming)
5. [Testing Your Changes](#testing-your-changes)

## Editing Content

All content for your portfolio is stored in a single file: `src/data/portfolioData.ts`. This makes it easy to update your information without having to modify any React components.

### Personal Information

Edit the `personalInfo` object to update your name, title, bio, contact information, and summary text:

```typescript
export const personalInfo = {
  name: "Mubeen A", // Name displayed in the footer
  title: "Mechanical Engineer",
  portfolioTitle: "Mubeen's Portfolio", // Text displayed in the top-left of the header
  bio: "Your bio text here...",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  cvPath: "/docs/Your-CV.pdf",
  profileImage: "/images/your-profile-image.jpg", // Your headshot image
  headerBackground: "/images/header-background.jpg", // Can be image, GIF or video
  isHeaderBackgroundVideo: false, // Set to true if using a video for header background
  summaryText: "Thanks for checking out my portfolio! Whether you're a recruiter...",
  dreamJobsFlowchartImage: "/images/flowchart-placeholder.jpg", // Your custom flowchart image
};
```

### Timeline/Dream Jobs

Edit the `dreamJobs` array to update your career timeline:

```typescript
export const dreamJobs: TimelineItem[] = [
  {
    title: "Job Title",
    subtitle: "Phase Description"
  },
  // Add more timeline items
  {
    title: "Current Position",
    subtitle: "Current Phase",
    isCurrentPosition: true  // Mark your current position
  }
];
```

### Strengths and Weaknesses

Edit the `strengths` and `weaknesses` arrays:

```typescript
export const strengths: Strength[] = [
  {
    text: "Your strength point here."
  },
  // Add more strengths
];

export const weaknesses: Weakness[] = [
  {
    text: "Your weakness point here."
  },
  // Add more weaknesses
];
```

### Company Logos

Edit the `companyLogos` array to update the logos displayed in the experience section:

```typescript
export const companyLogos: CompanyLogo[] = [
  {
    name: "Company Name",
    image: "/images/logos/company-logo.png",
    link: "https://company-website.com"
  },
  // Add more company logos
];
```

### Skills

Edit the `skills` array to update your technical skills with descriptive proficiency levels:

```typescript
export const skills: Skill[] = [
  {
    name: "Skill Name",
    proficiencyLevel: "Expert", // Use descriptive terms like "Beginner", "Intermediate", "Advanced", "Expert", etc.
    description: "Description of your skill and experience with it."
  },
  // Add more skills
];
```

### Work Experience

Edit the `workExperience` array to update your work history:

```typescript
export const workExperience: WorkExperience[] = [
  {
    title: "Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Start Date - End Date",
    description: "Brief description of your role",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    backgroundImage: "/images/backgrounds/company-bg.jpg", // Can be image, GIF or video
    isVideo: false // Set to true if using a video or GIF
  },
  // Add more work experiences
];
```

### Projects, Drawings, and Extracurricular Activities

Similarly, edit the `projects`, `mechanicalDrawings`, and `extraCurricular` arrays to update those sections:

```typescript
export const projects: Project[] = [
  {
    title: "Project Title",
    description: "Project description...",
    technologies: ["Technology 1", "Technology 2"],
    image: "/images/project-image.jpg", // Can be image, GIF or video
    isVideo: false, // Set to true if using a video or GIF
    link: "https://project-link.com" // Optional
  },
  // Add more projects
];

export const extraCurricular: ExtraCurricular[] = [
  {
    title: "Activity Title",
    description: "Activity description...",
    period: "Time period",
    image: "/images/activity-image.jpg", // Can be image, GIF or video
    isVideo: false // Set to true if using a video or GIF
  },
  // Add more activities
];
```

## Customizing Sections

### Reordering Sections

To change the order of sections, edit the `App.tsx` file and reorder the components:

```jsx
function App() {
  return (
    <div className="App font-sans">
      <Header />
      <main>
        <SummarySection />
        <StrengthsWeaknessesSection />
        {/* Reorder these components as needed */}
        <LogoSection />
        <WorkExperienceSection />
        <SkillsSection />
        <HowIWorkSection />
        <ProjectsSection />
        <MechanicalDrawingsSection />
        <ExtraCurricularSection />
      </main>
      <Footer />
    </div>
  );
}
```

### Hiding Sections

To hide a section, simply comment it out in `App.tsx`:

```jsx
function App() {
  return (
    <div className="App font-sans">
      <Header />
      <main>
        <SummarySection />
        <StrengthsWeaknessesSection />
        <LogoSection />
        <WorkExperienceSection />
        <SkillsSection />
        {/* <HowIWorkSection /> */} {/* This section is now hidden */}
        <ProjectsSection />
        <MechanicalDrawingsSection />
        <ExtraCurricularSection />
      </main>
      <Footer />
    </div>
  );
}
```

## Adding Your Images

### Profile Image

1. Add your profile image to the `public/images/` directory
2. Update the `profileImage` path in the `personalInfo` object

### Company Logos

1. Add your company logos to the `public/images/logos/` directory
2. Update the image paths in the `companyLogos` array

### Background Images

1. Add background images for work experiences to the `public/images/backgrounds/` directory
2. Update the `backgroundImage` paths in the `workExperience` array

### Project Images

1. Add project images to the `public/images/` directory
2. Update the image paths in the `projects` array

## Styling and Theming

### Colors

The main colors are defined in the `tailwind.config.js` file. You can modify these to match your preferred color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... other shades
        900: '#0c4a6e',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        // ... other shades
        900: '#0f172a',
      },
      // Add more custom colors as needed
    },
  },
},
```

### Fonts

Fonts are imported in the `src/index.css` file. You can change these to your preferred fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');

/* Then update the font family in tailwind.config.js */
```

## Testing Your Changes

After making changes:

1. Run the development server:
```
npm run dev
```

2. View your site at `http://localhost:5173` (or the port shown in your terminal)

3. Make sure everything looks good on different screen sizes by resizing your browser window

4. When you're satisfied with your changes, build for production:
```
npm run build
```

5. Deploy to Netlify following the instructions in the NETLIFY_DEPLOYMENT.md guide

## Need More Help?

If you need to make more complex customizations, you can edit the React components directly in the `src/components/` directory. Each section of your portfolio has its own component file that you can modify as needed.
