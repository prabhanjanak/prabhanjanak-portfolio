# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to GitHub Pages.

## Prerequisites

- Git installed on your local machine
- A GitHub account
- Node.js 16+ installed
- EmailJS account configured (see README.md)

## Method 1: GitHub Actions (Recommended - Automated)

This is the easiest method as it automatically deploys your site whenever you push to the main branch.

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `portfolio`)

2. Initialize git and push your code:
```bash
cd /path/to/your/portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/portfolio.git
git push -u origin main
```

### Step 2: Configure GitHub Secrets

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:
   - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS Service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS Template ID
   - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS Public Key

### Step 3: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**:
   - Source: **GitHub Actions**
3. Save the settings

### Step 4: Trigger Deployment

The GitHub Action (`.github/workflows/deploy.yml`) will automatically run on every push to the `main` branch.

To manually trigger a deployment:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

Your site will be available at: `https://<username>.github.io/portfolio/`

---

## Method 2: Manual Deployment with gh-pages

If you prefer manual control over deployments:

### Step 1: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 2: Update package.json

Add the following to your `package.json`:

```json
{
  "homepage": "https://<username>.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace `<username>` with your GitHub username.

### Step 3: Deploy

```bash
npm run deploy
```

This will:
1. Build your project
2. Create/update the `gh-pages` branch
3. Push the `dist` folder contents to that branch

### Step 4: Configure GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Set **Source** to **Deploy from a branch**
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Save

Your site will be available at: `https://<username>.github.io/portfolio/`

---

## Method 3: Manual Deployment (No npm packages)

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Create gh-pages Branch

```bash
git checkout --orphan gh-pages
git rm -rf .
```

### Step 3: Copy Build Files

```bash
cp -r dist/* .
cp dist/.* . 2>/dev/null || :
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Step 5: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Set **Source** to **Deploy from a branch**
3. Select `gh-pages` branch, `/ (root)` folder
4. Save

### Step 6: Return to Main Branch

```bash
git checkout main
```

---

## Custom Domain (Optional)

To use a custom domain:

### Step 1: Add CNAME file

Create `public/CNAME` with your domain:
```
yourdomain.com
```

### Step 2: Configure DNS

Add DNS records with your domain provider:

For apex domain (yourdomain.com):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

For subdomain (www.yourdomain.com):
```
Type: CNAME
Name: www
Value: <username>.github.io
```

### Step 3: Configure GitHub

1. Go to **Settings** → **Pages**
2. Enter your custom domain
3. Enable **Enforce HTTPS** (wait for certificate)

---

## Troubleshooting

### Issue: Site shows 404

**Solution**:
- Check that GitHub Pages is enabled in repository settings
- Ensure the correct branch and folder are selected
- Wait a few minutes for deployment to complete

### Issue: Assets not loading

**Solution**:
- If using a repository name in the URL path, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/', // your repository name
  plugins: [react()],
});
```

### Issue: Contact form not working

**Solution**:
- Verify EmailJS environment variables are set correctly
- Check GitHub Actions secrets (Method 1)
- Test EmailJS credentials in local environment first

### Issue: GitHub Actions workflow fails

**Solution**:
- Check that all secrets are configured in repository settings
- Verify Node.js version compatibility (18.x)
- Check Actions logs for specific error messages

---

## Updating Your Site

### Using GitHub Actions (Method 1)
Simply push to main branch:
```bash
git add .
git commit -m "Update content"
git push
```

### Using gh-pages package (Method 2)
```bash
npm run deploy
```

### Manual deployment (Method 3)
Repeat steps 1-4 from Method 3

---

## Environment Variables

Remember to set these environment variables:

**For Local Development** (`.env` file):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**For GitHub Actions** (Repository Secrets):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Performance Optimization Before Deploy

1. **Optimize Images**: Compress images before adding to `public/` folder
2. **Check Bundle Size**: Run `npm run build` and review dist size
3. **Test Locally**: Run `npm run preview` to test production build
4. **Lighthouse Audit**: Test with Chrome DevTools Lighthouse

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (if using gh-pages)
npm run deploy

# Type check
npm run typecheck

# Lint code
npm run lint
```

---

For questions or issues, refer to the main [README.md](./README.md) or contact prabh.bhat12@gmail.com.
