# Small Group Prayer Gathering Website

A beautiful, responsive website for hosting monthly small group prayer gathering agendas. This website is designed to be easily deployable to any static hosting service.

## Features

- **Monthly Agenda Display**: Navigate through different months to view prayer gathering agendas
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Catholic Theme**: Appropriate colors, fonts, and styling for a small group prayer community
- **Interactive Navigation**: Easy-to-use navigation between different sections
- **Past Agendas Archive**: View previous months' prayer gathering agendas
- **Upcoming Events**: See information about future gatherings
- **Prayer Resources**: Quick access to common Catholic prayers and resources
- **Print-Friendly**: Optimized for printing agendas

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styling with Catholic theme
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment Options

### 1. GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire folder onto the Netlify deploy area
3. Your site will be live immediately with a random URL
4. You can customize the URL in site settings

### 3. Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project from GitHub or upload files
3. Deploy with one click

### 4. Firebase Hosting (Free)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init hosting` in your project folder
3. Run `firebase deploy`

## Customization

### Adding New Agendas
Edit the `agendaData` object in `script.js` to add new monthly agendas:

```javascript
const agendaData = {
    "2024-04": {
        title: "Easter Season Prayer",
        date: "April 15, 2024",
        time: "7:00 PM - 8:30 PM",
        location: "Parish Hall",
        items: [
            {
                time: "7:00 - 7:10 PM",
                title: "Opening Prayer",
                description: "Your prayer description here"
            }
            // Add more items...
        ]
    }
};
```

### Customizing Colors
The main colors can be changed in `styles.css`:
- Primary brown: `#8B4513`
- Secondary brown: `#A0522D`
- Gold accent: `#FFD700`
- Dark brown: `#654321`

### Updating Church Information
- Edit the header title in `index.html`
- Update the footer Bible verse
- Modify location information in the agenda templates

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or build process required
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized images and minimal external dependencies
- **SEO-Friendly**: Proper meta tags and semantic structure

## Sample Content

The website comes with sample agendas for August, September, and October 2025, including:
- Small Group Prayer Gathering - August
- Small Group Prayer Gathering - September
- Small Group Prayer Gathering - October

## Support

For technical support or questions about customization, please refer to the comments in the code files or consult with your web developer.

## License

This project is created for small group prayer communities and may be freely used and modified for religious purposes.

---

*"For where two or three gather in my name, there am I with them." - Matthew 18:20*