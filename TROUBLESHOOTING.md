# Troubleshooting Guide

## Common Issues & Solutions

### 🚨 Environment Variables Not Loading

**Error:**
```
Error: CANNOT START: Missing required environment variables:
PUBLIC_SITE_URL
```

**Solution:**
1. Ensure `.env` file exists in project root
2. Check that `.env` contains:
   ```
   PUBLIC_SITE_URL=http://localhost:5173
   ```
3. Restart the dev server after making changes
4. Variables must start with `PUBLIC_` to be accessible in the browser

**Verification:**
```bash
# Check if .env exists
ls -la .env

# View .env contents
cat .env

# Test environment loading
node test-env.js
```

---

### 🔧 npm run dev Fails to Start

**Common Causes:**

1. **Port already in use**
   ```bash
   # Find process using port 5173
   lsof -i :5173
   
   # Kill the process
   kill -9 <PID>
   ```

2. **Node modules corruption**
   ```bash
   # Clean install
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **SvelteKit cache issues**
   ```bash
   # Clear SvelteKit cache
   rm -rf .svelte-kit
   npm run dev
   ```

---

### 📦 Build Errors

**Error:** `Cannot find module` or import errors

**Solution:**
```bash
# Sync SvelteKit types
npx svelte-kit sync

# Rebuild project
npm run build
```

---

### 🎨 CSS Not Loading

**Symptoms:**
- No styling applied
- CSS variables undefined
- Broken layout

**Solution:**
1. Check that `app.css` is imported in `+layout.svelte`
2. Verify CSS file path is correct
3. Clear browser cache
4. Check browser console for errors

---

### 🌐 Vercel Deployment Issues

**Error:** Build fails on Vercel

**Common Fixes:**

1. **Environment Variables**
   - Set `PUBLIC_SITE_URL` in Vercel dashboard
   - Use production URL: `https://your-app.vercel.app`

2. **Build Configuration**
   - Ensure `vercel.json` exists
   - Check build command: `npm run build`
   - Output directory: `.svelte-kit/output`

3. **Node Version**
   - Add to `package.json`:
   ```json
   {
     "engines": {
       "node": ">=18.0.0"
     }
   }
   ```

---

### 🔒 Permission Errors

**Error:** `EACCES: permission denied`

**Solution:**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm

# Or use npm without sudo
npm config set prefix ~/.npm
export PATH="$HOME/.npm/bin:$PATH"
```

---

### 🐛 ESLint/Prettier Conflicts

**Symptoms:**
- Format on save not working
- Conflicting style rules

**Solution:**
1. Run formatter manually:
   ```bash
   npm run format
   ```

2. Check VS Code settings:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

3. Fix all linting issues:
   ```bash
   npm run lint -- --fix
   ```

---

### 💾 Git Issues

**Problem:** Large files or node_modules committed

**Solution:**
```bash
# Remove from git history
git rm -r --cached node_modules
git rm --cached .env

# Ensure .gitignore is working
git add .gitignore
git commit -m "Fix gitignore"
```

---

### 🔄 Hot Module Replacement (HMR) Not Working

**Symptoms:**
- Changes not reflecting without manual refresh
- Console errors about HMR

**Solution:**
1. Check Vite config for correct host settings
2. Disable browser extensions that might interfere
3. Try different browser
4. Add to `vite.config.js`:
   ```javascript
   server: {
     hmr: {
       overlay: false
     }
   }
   ```

---

## Quick Fixes Checklist

Before deep troubleshooting, try these:

- [ ] `rm -rf node_modules && npm install`
- [ ] `rm -rf .svelte-kit`
- [ ] Restart dev server
- [ ] Clear browser cache
- [ ] Check `.env` file exists and has values
- [ ] Run `npx svelte-kit sync`
- [ ] Update to latest SvelteKit: `npm update @sveltejs/kit`

---

## Getting Help

If issues persist:

1. Check error messages carefully - they often contain the solution
2. Search the [SvelteKit GitHub issues](https://github.com/sveltejs/kit/issues)
3. Review [SvelteKit documentation](https://kit.svelte.dev)
4. Check the project's `manifest.js` for implementation status

---

## Prevention Tips

1. **Always use `.env.example`** as a template
2. **Run `npm run check`** before committing
3. **Test locally** before deploying
4. **Keep dependencies updated** monthly
5. **Document any workarounds** in this file

---

Last updated: When you encounter and solve a new issue, add it here!