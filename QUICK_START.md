# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 1. Clone & Install (2 minutes)

```bash
# Navigate to your project
cd portfolio

# Install dependencies
npm install
```

## 2. Set Up EmailJS (2 minutes)

### Option A: Use Existing Credentials
If you already have EmailJS set up:

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Edit `.env` and add your credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Option B: Quick EmailJS Setup
If you don't have EmailJS:

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Add Gmail service (or your preferred email)
3. Create template with these variables: `from_name`, `from_email`, `subject`, `message`
4. Copy Service ID, Template ID, and Public Key to `.env`

**Template Example**:
```
New message from {{from_name}} ({{from_email}})

Subject: {{subject}}

{{message}}
```

## 3. Run Locally (30 seconds)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 4. Customize Content (Optional)

Edit these files to personalize:

- `src/components/Hero.tsx` - Name, title, tagline
- `src/components/About.tsx` - Biography
- `src/components/Projects.tsx` - Your projects
- `src/components/Publications.tsx` - Research papers
- `src/components/Experience.tsx` - Work history
- `src/components/Skills.tsx` - Technical skills
- `src/components/Footer.tsx` - Social links
- `index.html` - SEO meta tags
- `public/Prabhanjan_CV.pdf` - Replace with your CV

## 5. Deploy to GitHub Pages (3 minutes)

### Quick Deploy

```bash
# Create GitHub repository
# (Go to github.com and create a new repo called 'portfolio')

# Push your code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Add these secrets in **Settings** → **Secrets** → **Actions**:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

The site will auto-deploy at: `https://YOUR_USERNAME.github.io/portfolio/`

## That's It!

Your portfolio is now live!

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run typecheck    # Check TypeScript errors
npm run lint         # Check code quality
```

## Need Help?

- **Full Documentation**: See [README.md](./README.md)
- **Deployment Guide**: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **EmailJS Issues**: Check [README.md EmailJS Setup](./README.md#emailjs-setup)
- **Contact**: prabh.bhat12@gmail.com

## Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with EmailJS credentials
- [ ] Site running locally (`npm run dev`)
- [ ] Content customized (name, bio, projects, etc.)
- [ ] CV file replaced in `public/` folder
- [ ] Code pushed to GitHub
- [ ] GitHub Actions secrets configured
- [ ] Site deployed and accessible online

---

**Time to Launch**: ~5-10 minutes
**Result**: Production-ready portfolio website
