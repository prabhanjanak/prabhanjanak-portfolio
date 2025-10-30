# Customization Guide

This guide shows you exactly where to edit content to personalize your portfolio.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Hero Section](#hero-section)
3. [About Section](#about-section)
4. [Projects](#projects)
5. [Publications](#publications)
6. [Experience](#experience)
7. [Skills](#skills)
8. [Contact Information](#contact-information)
9. [Social Links](#social-links)
10. [Colors & Branding](#colors--branding)
11. [SEO & Meta Tags](#seo--meta-tags)

---

## Personal Information

### Update Your Name

**File**: `src/components/Hero.tsx`

```tsx
// Line ~70
<h1>Your Name</h1>

// Line ~79
<div>Your Title</div>

// Line ~86
<p>Your tagline or brief description</p>
```

**File**: `src/components/Nav.tsx`

```tsx
// Line ~60 - Update logo initials
<button>YN</button> // Change to your initials
```

---

## Hero Section

**File**: `src/components/Hero.tsx`

Update your headline, role, and description:

```tsx
// Around line 70
<h1>Prabhanjan K</h1>  // Replace with your name

// Around line 79
<div>AI & ML Engineer</div>  // Replace with your title

// Around line 86
<p>
  B.E. in AI & ML | Researcher in Graph Neural Networks & LLM integration | OCI
  Generative AI Certified
</p>  // Replace with your description
```

---

## About Section

**File**: `src/components/About.tsx`

### Update Biography

```tsx
// Around line 22-45
<p>Your first paragraph about yourself...</p>
<p>Your second paragraph...</p>
<p>Your third paragraph...</p>
```

### Update Education

```tsx
// Around line 54-60
<p>Your Degree Name</p>
<p>University Name (Year Range)</p>
```

### Update Certifications

```tsx
// Around line 71-74
<li>Your Certification 1</li>
<li>Your Certification 2</li>
```

### Update Languages

```tsx
// Around line 85-87
<p>Language 1, Language 2, Language 3</p>
```

---

## Projects

**File**: `src/components/Projects.tsx`

Add or edit projects in the `projects` array (around line 14):

```tsx
const projects: Project[] = [
  {
    title: 'Your Project Name',
    date: 'Month Year',
    location: 'Organization',
    description: [
      'First key point about the project',
      'Second key point',
      'Third key point',
    ],
    tech: ['Technology 1', 'Technology 2', 'Technology 3'],
    github: 'https://github.com/username/repo',  // Optional
    demo: 'https://demo-url.com',  // Optional
  },
  // Add more projects here
];
```

---

## Publications

**File**: `src/components/Publications.tsx`

Add publications in the `publications` array (around line 14):

```tsx
const publications: Publication[] = [
  {
    title: 'Your Publication Title',
    year: '2025',
    type: 'Journal Article',  // or 'Conference Paper', 'Book Chapter', etc.
    doi: '10.1234/example.doi',
    doiUrl: 'https://doi.org/10.1234/example.doi',
    description: 'Brief description of your publication and its contributions.',
  },
  // Add more publications here
];
```

### Update ORCID Link

```tsx
// Around line 95
<a href="https://orcid.org/YOUR-ORCID-ID">
```

---

## Experience

**File**: `src/components/Experience.tsx`

### Update Work Experience

Edit the `experiences` array (around line 14):

```tsx
const experiences: ExperienceItem[] = [
  {
    company: 'Company Name',
    role: 'Your Job Title',
    type: 'Full-time',  // or 'Part-time', 'Freelance', 'Remote', 'On Site'
    location: 'City, State, Country',
    period: 'Month Year – Present',
    description: [
      'Key responsibility or achievement 1',
      'Key responsibility or achievement 2',
      'Key responsibility or achievement 3',
    ],
  },
  // Add more experiences here
];
```

### Update Training/Certifications

Edit the `training` array (around line 55):

```tsx
const training = [
  {
    name: 'Training Program Name',
    organization: 'Organization',
    period: 'Start Date – End Date',
    mentor: 'Mentor Name',
    highlights: [
      'Key learning 1',
      'Key learning 2',
    ],
  },
  // Add more training here
];
```

---

## Skills

**File**: `src/components/Skills.tsx`

Update the `skillCategories` array (around line 17):

```tsx
const skillCategories: SkillCategory[] = [
  {
    title: 'Category Name',
    icon: <Icon className="w-6 h-6" />,  // Import from lucide-react
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    color: 'from-primary to-accent',  // Gradient colors
  },
  // Add more categories here
];
```

Available icons: `Brain`, `Code`, `Cloud`, `Network`, `Shield`, `Database`, `Wrench`, `Globe`, etc.

### Update Soft Skills

```tsx
// Around line 120
{[
  'Skill 1',
  'Skill 2',
  'Skill 3',
  // Add your soft skills here
].map((skill, i) => (...))}
```

---

## Contact Information

**File**: `src/components/ContactForm.tsx`

### Update Email Addresses

```tsx
// Around line 41 - Destination email
to_email: 'your.email@example.com',

// Around line 102 - Success message
<span>Thanks! I'll reply to your.email@example.com</span>

// Around line 120 - Fallback link
<a href="mailto:your.email@example.com">
```

### Update Phone Number

```tsx
// Around line 183
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>
```

### Update Location

```tsx
// Around line 203
<div>Your City, Country</div>
```

---

## Social Links

**File**: `src/components/Footer.tsx`

Update the `socialLinks` array (around line 5):

```tsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: <Linkedin className="w-5 h-5" />,
  },
  // Add or remove social links as needed
];
```

### Update Email in Footer

```tsx
// Around line 65-72
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

---

## Colors & Branding

**File**: `tailwind.config.js`

Update brand colors (around line 7):

```js
colors: {
  primary: '#0ea5a4',     // Your primary brand color
  accent: '#7c3aed',      // Your accent color
  light: {
    bg: '#ffffff',        // Light mode background
    text: '#0f172a',      // Light mode text
    muted: '#94a3b8',     // Muted text
  },
  dark: {
    bg: '#061025',        // Dark mode background
    text: '#e6eef8',      // Dark mode text
    muted: '#94a3b8',     // Muted text
  },
},
```

### Update Fonts

```js
// Around line 21
fontFamily: {
  sans: ['Your Body Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'serif'],
},
```

Don't forget to update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600&display=swap" rel="stylesheet" />
```

---

## SEO & Meta Tags

**File**: `index.html`

### Update Title & Description

```html
<!-- Around line 8 -->
<title>Your Name — Your Title | Portfolio</title>

<!-- Around line 9 -->
<meta name="description" content="Your brief professional summary and contact info." />

<!-- Around line 11-15 - Open Graph -->
<meta property="og:title" content="Your Name — Your Title" />
<meta property="og:description" content="Your professional summary." />
<meta property="og:url" content="https://yourusername.github.io/portfolio" />

<!-- Around line 17-19 - Twitter Card -->
<meta name="twitter:title" content="Your Name — Your Title" />
<meta name="twitter:description" content="Your professional summary." />

<!-- Around line 22 -->
<meta name="author" content="Your Name" />

<!-- Around line 23 -->
<meta name="keywords" content="Your, Keywords, Here" />
```

### Update Sitemap

**File**: `public/sitemap.xml`

```xml
<!-- Update the base URL -->
<loc>https://yourusername.github.io/portfolio/</loc>
```

**File**: `public/robots.txt`

```txt
Sitemap: https://yourusername.github.io/portfolio/sitemap.xml
```

---

## Replace Your CV

**File**: `public/Prabhanjan_CV.pdf`

1. Delete or rename the existing CV file
2. Add your CV file as `Prabhanjan_CV.pdf` (or update the filename in `Hero.tsx`)

To use a different filename:

**File**: `src/components/Hero.tsx` (around line 18)

```tsx
link.href = '/YourName_CV.pdf';  // Update filename
link.download = 'YourName_CV.pdf';  // Update download name
```

---

## Testing Your Changes

After making changes:

1. **Check locally**:
```bash
npm run dev
```

2. **Check TypeScript**:
```bash
npm run typecheck
```

3. **Lint code**:
```bash
npm run lint
```

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

---

## Quick Content Update Workflow

1. Edit the relevant file(s)
2. Save and check in browser (if dev server is running)
3. Test responsiveness (mobile, tablet, desktop)
4. Run `npm run build` to ensure no errors
5. Commit and push to GitHub
6. GitHub Actions will automatically deploy

---

## Need More Help?

- **Full Documentation**: [README.md](./README.md)
- **Deployment Guide**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Quick Start**: [QUICK_START.md](./QUICK_START.md)
- **Contact**: prabh.bhat12@gmail.com

---

**Pro Tip**: Use your code editor's search function (Ctrl/Cmd + F) to find specific text you want to change across all files!
