# Prabhanjan K - Portfolio Website

A production-ready, pixel-perfect, highly responsive personal portfolio website built with React, Vite, Tailwind CSS, and modern web technologies.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, and 1280px
- **Dark/Light Mode**: Automatic theme detection based on OS preference with manual toggle
- **Particle Background**: Interactive tsparticles background with hover effects
- **Cursor Effects**: Smooth trailing particle effects on desktop (disabled on mobile and for reduced-motion preference)
- **Contact Form**: EmailJS integration for direct email delivery
- **Smooth Animations**: Framer Motion for micro-interactions and page transitions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels, keyboard navigation, alt attributes, and reduced-motion support
- **Performance**: Optimized for Lighthouse scores (Performance ≥60, Accessibility ≥90)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (JIT mode)
- **Animations**: Framer Motion
- **Particles**: tsparticles
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter + Playfair Display)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (see EmailJS Setup section below)

4. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

5. Add your EmailJS credentials to `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Running Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## EmailJS Setup

The contact form uses EmailJS to send emails directly to `prabh.bhat12@gmail.com` without a backend server.

### Step-by-Step Setup:

1. **Create EmailJS Account**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**:
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - Note your **Service ID**

3. **Create Email Template**:
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_email}}` - Recipient (prabh.bhat12@gmail.com)

   **Example Template**:
   ```
   Subject: {{subject}}

   From: {{from_name}} ({{from_email}})

   Message:
   {{message}}
   ```

   - Note your **Template ID**

4. **Get Public Key**:
   - Go to "Account" → "General"
   - Find your **Public Key** (also called User ID)

5. **Update Environment Variables**:
   - Add the Service ID, Template ID, and Public Key to your `.env` file

6. **Test the Contact Form**:
   - Run the site locally
   - Fill out the contact form
   - Check if the email arrives at prabh.bhat12@gmail.com

## Deployment to GitHub Pages

### Option 1: Using gh-pages Package

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://<username>.github.io/<repository-name>"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create gh-pages branch:
```bash
git checkout -b gh-pages
```

3. Copy dist contents to root:
```bash
cp -r dist/* .
```

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. Go to your repository settings → Pages → Set source to `gh-pages` branch

### Option 3: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build
        env:
          VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
          VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
          VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Don't forget to add your EmailJS credentials as GitHub Secrets:
- Go to Repository Settings → Secrets and variables → Actions
- Add: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

## Updating Content

### Update Personal Information

Edit the following files to update your information:

1. **Hero Section**: `src/components/Hero.tsx`
   - Update name, title, and description

2. **About Section**: `src/components/About.tsx`
   - Update biography and personal details

3. **Projects**: `src/components/Projects.tsx`
   - Add/edit projects in the `projects` array

4. **Publications**: `src/components/Publications.tsx`
   - Add/edit publications in the `publications` array

5. **Experience**: `src/components/Experience.tsx`
   - Update work experience in the `experiences` array

6. **Skills**: `src/components/Skills.tsx`
   - Update skills in the `skillCategories` array

7. **Footer/Social Links**: `src/components/Footer.tsx`
   - Update social media links

### Update CV

Replace `public/Prabhanjan_CV.pdf` with your updated CV file.

### Update Meta Tags

Edit `index.html` to update SEO meta tags, title, and description.

## Color System

The site uses a carefully selected color palette:

- **Primary**: `#0ea5a4` (Teal) - Main brand color
- **Accent**: `#7c3aed` (Violet) - Secondary highlights
- **Light Mode**:
  - Background: `#ffffff`
  - Text: `#0f172a`
- **Dark Mode**:
  - Background: `#061025`
  - Text: `#e6eef8`

To change colors, edit `tailwind.config.js`.

## Performance Optimization

The site is optimized for performance:

- Lazy loading of images
- Code splitting
- Minified production build
- Preconnect to Google Fonts
- Optimized animations with reduced-motion support

## Accessibility Features

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for images
- Sufficient color contrast ratios
- Reduced-motion preference support
- Focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

### Run Type Check
```bash
npm run typecheck
```

### Run Linting
```bash
npm run lint
```

### Test Production Build
```bash
npm run build && npm run preview
```

### Lighthouse Audit
1. Build the project: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools → Lighthouse
4. Run audit for Performance, Accessibility, Best Practices, and SEO

## License

© 2025 Prabhanjan K. All rights reserved.

## Contact

- **Email**: prabh.bhat12@gmail.com / prabhanjanakumaraswamy@gmail.com
- **Phone**: +91-8951568286
- **LinkedIn**: [linkedin.com/in/pkb1202](https://www.linkedin.com/in/pkb1202)
- **GitHub**: [github.com/prabhanjanak](https://github.com/prabhanjanak)
- **Instagram**: [@prabh.jpeg](https://instagram.com/prabh.jpeg)
- **ORCID**: [0009-0005-0824-9550](https://orcid.org/0009-0005-0824-9550)

---

Built with ❤️ using React, Vite, and Tailwind CSS
