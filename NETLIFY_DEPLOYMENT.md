# Deploying Your Portfolio Website to Netlify

This guide will walk you through the process of deploying your luxury engineering portfolio website to Netlify, a popular platform for hosting static websites.

## Prerequisites

Before you begin, make sure you have:

1. A GitHub, GitLab, or Bitbucket account
2. Your portfolio website code pushed to a repository
3. A Netlify account (free to create at [netlify.com](https://www.netlify.com/))

## Deployment Steps

### Option 1: Continuous Deployment from Git (Recommended)

This method automatically rebuilds and deploys your site whenever you push changes to your repository.

1. **Push your code to a Git repository**
   - Create a repository on GitHub, GitLab, or Bitbucket
   - Push your portfolio code to the repository
   - Make sure your repository includes the built files or the necessary build scripts

2. **Sign up/Log in to Netlify**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up for a free account or log in if you already have one

3. **Create a new site from Git**
   - Click the "New site from Git" button
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your portfolio website repository

4. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

5. **Wait for the initial build**
   - Netlify will build and deploy your site
   - You'll see a unique URL where your site is published (e.g., random-name.netlify.app)

6. **Set up a custom domain (optional)**
   - Go to "Site settings" > "Domain management"
   - Click "Add custom domain"
   - Follow the instructions to connect your domain

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build your site locally**
   ```
   npm run build
   ```

2. **Deploy via the Netlify UI**
   - Go to [netlify.com](https://www.netlify.com/) and log in
   - Go to the "Sites" section
   - Drag and drop your `dist` folder onto the designated area
   - Wait for the upload to complete

3. **Configure your site**
   - Set a custom site name if desired
   - Add a custom domain if you have one

## Updating Your Site

### With Continuous Deployment

1. Make changes to your code locally
2. Commit and push to your Git repository
3. Netlify automatically rebuilds and deploys your site

### With Manual Deployment

1. Make changes to your code locally
2. Rebuild your site: `npm run build`
3. Go to your site on Netlify
4. Deploy the updated `dist` folder

## Environment Variables

If your site needs environment variables:

1. Go to "Site settings" > "Build & deploy" > "Environment"
2. Add your environment variables
3. Trigger a new deploy

## Troubleshooting

If your deployment fails:

1. Check the build logs in Netlify
2. Common issues include:
   - Missing dependencies
   - Build command errors
   - Incorrect publish directory

For the specific error "cannot find module 'react'":
1. Add an environment variable: `NPM_FLAGS` with value `--legacy-peer-deps`
2. Or update your build command to: `npm install --legacy-peer-deps && npm run build`

## Getting Help

If you encounter issues:
- Check Netlify's [documentation](https://docs.netlify.com/)
- Visit the [Netlify Community forum](https://community.netlify.com/)
- Contact Netlify support through your dashboard

## Next Steps

After deployment, consider:
- Setting up a custom domain
- Enabling HTTPS (automatic with Netlify)
- Setting up form handling if needed
- Adding analytics to track visitors
