# Portfolio Website Customization Guide

This guide will help you customize your luxury engineering portfolio website. The site has been designed with a premium aesthetic inspired by thanhvtran.com, featuring elegant typography, refined color schemes, and smooth animations.

## Table of Contents
1. [File Structure](#file-structure)
2. [Editing Your Content](#editing-your-content)
3. [Customizing Colors](#customizing-colors)
4. [Changing Fonts](#changing-fonts)
5. [Adding Your Images](#adding-your-images)
6. [Adding Mechanical Drawings](#adding-mechanical-drawings)
7. [Building and Testing Locally](#building-and-testing-locally)

## File Structure

The most important files and directories in your portfolio website:

```
portfolio-enhanced/
├── public/              # Static assets (images, documents)
│   ├── docs/            # Your CV and mechanical drawings
│   └── images/          # Your photos and images
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer, Navbar)
│   │   └── sections/    # Content sections
│   ├── data/            # Your portfolio content
│   │   └── portfolioData.ts  # All your editable content
│   ├── App.tsx          # Main application component
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind CSS configuration
└── index.html           # HTML entry point
```

## Editing Your Content

All your content is stored in a single file: `src/data/portfolioData.ts`

This makes it easy to update your information without touching the code structure. Open this file in any text editor to modify:

- Personal information (name, title, bio, links)
- Skills and proficiency levels
- Work experience
- Projects
- Mechanical drawings
- Extracurricular activities

Example of editing personal information:

```typescript
export const personalInfo = {
  name: "Your Name",  // Change to your name
  title: "Mechanical Engineer",  // Change to your title
  bio: "Your professional bio goes here...",  // Update your bio
  email: "your.email@example.com",  // Update your email
  linkedin: "https://www.linkedin.com/in/your-profile/",  // Your LinkedIn URL
  cvPath: "/docs/Your-CV.pdf",  // Path to your CV file
  profileImage: "/images/your-profile-photo.jpg",  // Path to your profile image
};
```

## Customizing Colors

The website uses a luxury color scheme that you can customize in `tailwind.config.js`:

1. Open `tailwind.config.js`
2. Find the `colors` section
3. Modify the color values to match your preferences

```javascript
colors: {
  primary: {
    // These are blue shades - change to your preferred primary color
    500: '#0ea5e9',  // Main primary color
    600: '#0284c7',  // Darker shade for hover states
    // other shades...
  },
  secondary: {
    // These are gray/slate shades - change to your preferred secondary color
    900: '#0f172a',  // Very dark (used for text)
    800: '#1e293b',  // Dark (used for headings)
    // other shades...
  },
  // other color definitions...
}
```

## Changing Fonts

The website uses elegant Google Fonts:
- Playfair Display (serif) for headings
- Raleway (sans-serif) for body text

To change fonts:

1. Open `src/index.css`
2. Find the Google Fonts import at the top:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;...');
   ```
3. Replace with your preferred Google Fonts
4. Update the font-family references in the CSS below

Also update the font family in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Raleway', 'sans-serif'],  // Change to your body font
  serif: ['Playfair Display', 'serif'],  // Change to your heading font
},
```

## Adding Your Images

Replace the placeholder images with your own:

1. Add your images to the `public/images/` directory
2. Update the image paths in `src/data/portfolioData.ts`

For your profile photo:
```typescript
export const personalInfo = {
  // other fields...
  profileImage: "/images/your-profile-photo.jpg",  // Update this path
};
```

For project images:
```typescript
export const projects = [
  {
    // other fields...
    image: "/images/your-project-image.jpg",  // Update this path
  },
  // other projects...
];
```

## Adding Mechanical Drawings

To add your mechanical drawings:

1. Add your drawing files (PDF format recommended) to the `public/docs/` directory
2. Update the drawing references in `src/data/portfolioData.ts`:

```typescript
export const mechanicalDrawings = [
  {
    title: "Your Drawing Title",
    description: "Description of your drawing...",
    filename: "your-drawing-file.pdf"  // Must match the filename in public/docs/
  },
  // other drawings...
];
```

## Building and Testing Locally

To test your changes locally:

1. Open a terminal in your project directory
2. Run `npm install` to install dependencies (first time only)
3. Run `npm run dev` to start the development server
4. Open your browser to the URL shown in the terminal (usually http://localhost:5173)
5. Make changes and see them update in real-time

When you're satisfied with your changes, build the production version:

```
npm run build
```

This will create a `dist` folder with your optimized website, ready for deployment to Netlify as described in the NETLIFY_DEPLOYMENT.md guide.
