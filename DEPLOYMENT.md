# GitHub Pages Deployment Guide

## Initial Setup (One-Time)

1. **Enable GitHub Pages in your repository:**

   - Go to your GitHub repository: https://github.com/SpencerKing7/LearningToLove
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select branch: **gh-pages** and folder: **/ (root)**
   - Click **Save**

2. **Make sure you're on the main branch:**
   ```bash
   git checkout main
   ```

## Deployment Commands

### Full Deploy (Build + Deploy + Commit + Push)

This builds, deploys to GitHub Pages, and commits/pushes your source code:

```bash
npm run deploy
```

### Deploy Only (Just Build + Deploy to gh-pages)

If you've already committed your changes and just want to deploy:

```bash
npm run deploy-only
```

## What Happens When You Run `npm run deploy`:

1. ✅ **Builds** your React app (`npm run build`)
2. ✅ **Deploys** the `dist` folder to the `gh-pages` branch
3. ✅ **Stages** all your changes (`git add -A`)
4. ✅ **Commits** with message "Deploy updates"
5. ✅ **Pushes** to your main branch

## Your Site URL

After deployment, your site will be available at:

```
https://spencerking7.github.io/LearningToLove/
```

## Important Notes

⚠️ **First deployment may take a few minutes** for GitHub Pages to activate

⚠️ If you want a **custom commit message**, stage and commit manually first, then use:

```bash
git add -A
git commit -m "Your custom message"
git push
npm run deploy-only
```

⚠️ The `npm run deploy` command will commit ALL changes in your working directory

## Troubleshooting

- **404 errors**: Make sure GitHub Pages is enabled and set to deploy from the `gh-pages` branch
- **Blank page**: Check the browser console for errors related to the base path
- **Assets not loading**: The `base: "/LearningToLove/"` in `vite.config.ts` ensures proper asset paths

## Custom Domain (Optional)

If you have a custom domain (like learningtolove.com):

1. Add a `CNAME` file in the `/public` folder with your domain
2. Configure DNS settings at your domain provider
3. Update the `homepage` in `package.json` to your custom domain
