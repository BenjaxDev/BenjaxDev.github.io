# djbenjax Website - Setup Guide

## 🎧 Welcome to Your Glitch-Themed DJ Portfolio!

This website has been built with a **Glitch/Digital/Hacker/Retro/Dither** aesthetic, featuring:
- Blue color scheme with Red/Green glitch effects
- CRT scanline overlay
- Glitch hover animations
- Bilingual support (English/Spanish)
- Fully responsive design
- Premium user experience

---

## 📁 File Structure

```
djbenjax.com/
├── index.html          (Home page)
├── epk.html           (Electronic Press Kit)
├── rider.html         (Technical Rider)
├── identity.html      (Brand Identity Gallery)
├── css/
│   └── style.css      (All styling)
├── js/
│   └── main.js        (All interactivity)
├── CNAME              (Your domain config)
└── README.md          (This file)
```

---

## 🚀 How to Deploy to GitHub Pages

### Step 1: Upload Files to GitHub
1. Go to your GitHub repository
2. Upload ALL files (keep the folder structure!)
3. Make sure the files are in the ROOT of your repository

### Step 2: Enable GitHub Pages
1. Go to your repo → Settings → Pages
2. Select Branch: `main` (or `master`)
3. Select Folder: `/ (root)`
4. Click Save
5. Your site will be live at `yourusername.github.io/repo-name`

### Step 3: Connect Your GoDaddy Domain
1. In your GitHub repo, create/edit the `CNAME` file
2. Add just one line: `djbenjax.com` (your domain)
3. In GoDaddy:
   - Go to DNS Management
   - Add these records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     
     Type: A
     Name: @
     Value: 185.199.109.153
     
     Type: A
     Name: @
     Value: 185.199.110.153
     
     Type: A
     Name: @
     Value: 185.199.111.153
     
     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```
4. Wait 24-48 hours for DNS propagation

---

## 🎨 Customization Guide

### Adding Your Logo
Replace this section in `index.html` and `epk.html`:
```html
<div class="logo-placeholder">
    <div class="logo-text glitch-text" data-text="djbenjax">djbenjax</div>
</div>
```

With:
```html
<div class="logo-placeholder">
    <img src="images/your-logo.png" alt="djbenjax logo">
</div>
```

### Adding Your Photo
Replace:
```html
<div class="image-placeholder">
    <span>[YOUR PHOTO]</span>
</div>
```

With:
```html
<img src="images/your-photo.jpg" alt="djbenjax">
```

### Adding YouTube Videos (EPK Page)
Replace `YOUR_VIDEO_ID_1` with your actual YouTube video ID:
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"...
```

To find your video ID: 
- YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID is: `dQw4w9WgXcQ`

### Adding Social Media Links
Update these links in ALL pages:
```html
<a href="https://instagram.com/djbenjax" target="_blank">
<a href="https://youtube.com/@djbenjax" target="_blank">
<a href="https://tiktok.com/@djbenjax" target="_blank">
<a href="https://open.spotify.com/artist/djbenjax" target="_blank">
```

### Updating Contact Email
Change `booking@djbenjax.com` to your actual email throughout all pages.

### Adding Identity Images
In `identity.html`, replace:
```html
<div class="image-placeholder">
    <span>[IDENTITY 01]</span>
</div>
```

With:
```html
<img src="images/identity-01.jpg" alt="Brand Identity 01">
```

Do this for all 10 identity images.

### Adding Shows
In `index.html`, replace the TBA show with:
```html
<div class="show-item">
    <div class="show-date">JAN 15</div>
    <div class="show-details">
        <div class="show-name">Event Name</div>
        <div class="show-location">Venue Name - Bogotá</div>
    </div>
</div>
```

---

## 🎨 Color Customization

Want to change the color scheme? Edit these CSS variables in `css/style.css`:

```css
:root {
    --primary-blue: #0066FF;      /* Main blue color */
    --glitch-red: #FF0040;        /* Glitch red effect */
    --glitch-green: #00FF41;      /* Glitch green effect */
}
```

---

## ✨ Features & Effects

### Language Toggle
- Automatically saves user preference
- Click the EN/ES button in navigation
- All content switches between English and Spanish

### Glitch Effects
- Hover over titles to see RGB split glitch
- Buttons have glitch animation on hover
- Cards have random subtle glitch on hover

### CRT Effect
- Scanline overlay for retro monitor feel
- Grain texture for authentic look
- Subtle random flicker

### Gallery Navigation (Identity Page)
- Click arrows to navigate
- Use keyboard arrows (← →)
- Touch/swipe on mobile
- Smooth scrolling

### Easter Egg 🎮
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

---

## 📱 Mobile Responsive

The site is fully responsive and looks great on:
- Desktop (1920px+)
- Laptop (1200px+)
- Tablet (768px+)
- Mobile (480px+)

---

## 🔧 Quick Fixes

### Images Not Showing?
1. Create an `images/` folder in your root directory
2. Upload your images there
3. Reference them as `images/your-file.jpg`

### Videos Not Loading?
- Make sure YouTube video IDs are correct
- Videos must be set to "Public" or "Unlisted" on YouTube

### Colors Look Different?
- Check your monitor color calibration
- CSS uses hex colors, not RGB

### Language Toggle Not Working?
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)

---

## 🎯 Next Steps

1. **Add Your Content**
   - Upload your logo
   - Add your photo
   - Insert YouTube video IDs
   - Update social media links
   - Add your identity images

2. **Customize Colors** (optional)
   - Experiment with different blue shades
   - Adjust glitch effect colors

3. **Test Everything**
   - Check all pages
   - Test language toggle
   - Try on mobile
   - Test all links

4. **Deploy**
   - Push to GitHub
   - Enable GitHub Pages
   - Connect your domain

---

## 💡 Tips

- **Keep it Premium**: Don't overcrowd pages with too much content
- **High-Quality Images**: Use high-res images (at least 1920px wide)
- **Regular Updates**: Update your shows and content regularly
- **Fast Loading**: Optimize images before uploading (compress them)
- **Test Links**: Always test your social media links

---

## 🆘 Need Help?

If something doesn't work:
1. Check the browser console (F12 → Console tab)
2. Verify all file paths are correct
3. Make sure files are in the right folders
4. Check that you didn't accidentally delete any closing tags

---

## 🎵 Your Website Features

✅ Bilingual (EN/ES)
✅ Glitch/Retro aesthetic
✅ Fully responsive
✅ CRT effects
✅ Smooth animations
✅ SEO optimized
✅ Fast loading
✅ Premium UX

---

**Good luck with your website, Benjax! 🎧🔥**

If you need any changes or have questions, just ask!
