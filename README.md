# Medsurg Technology Website

A modern, responsive website for Medsurg Technology, showcasing medical goods, hospital equipment, pharmaceutical products, and home care services.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Interactive product catalog
- Contact form with validation
- WhatsApp integration for quick communication
- Testimonial carousel
- Social media integration

## Technologies Used

- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Bootstrap 5.3.2

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Create an `assets` folder in the root directory and add the following images:
- `logo.png` - Company logo
- `hero-bg.jpg` - Hero section background image
- `featured-product.jpg` - Featured product image

3. Update the following in the code:
- WhatsApp number in `script.js` (line with `wa.me/1234567890`)
- Social media links in `index.html`
- Contact information in `index.html`
- Company information and content

4. Open `index.html` in a web browser to view the website.

## File Structure

```
medsurg-website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logo.png
    ├── hero-bg.jpg
    └── featured-product.jpg
```

## Customization

### Colors
The website uses a green and blue color scheme. You can modify the colors in `styles.css` by updating the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #2E7D32;
    --secondary-color: #1976D2;
    --light-green: #E8F5E9;
    --light-blue: #E3F2FD;
    --dark-green: #1B5E20;
    --dark-blue: #1565C0;
}
```

### Content
- Update the hero section text in `index.html`
- Modify service descriptions and icons
- Add or remove testimonials in the carousel
- Update contact information and social media links

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

The website is optimized for:
- Fast loading times
- Mobile responsiveness
- Smooth animations
- SEO best practices

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 