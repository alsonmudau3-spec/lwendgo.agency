# Public Images Directory

Organize all static images for Lwendgo in subdirectories:

## Directory Structure

```
images/
├── logos/
│   ├── lwendgo-logo.png
│   ├── lwendgo-logo-dark.png
│   ├── favicon-192.png
│   └── favicon-512.png
├── backgrounds/
│   ├── hero-banner.jpg
│   └── home-background.jpg
├── services/
│   ├── bus.jpg
│   ├── coach.jpg
│   └── shuttle.jpg
├── destinations/
│   └── routes/
└── icons/
    ├── bus.svg
    ├── location.svg
    └── booking.svg
```

## Usage in React

```jsx
// Logo
<img src="/images/logos/lwendgo-logo.png" alt="Lwendgo" />

// Background
<div style={{ backgroundImage: 'url(/images/backgrounds/hero-banner.jpg)' }}>

// Service Images
<img src="/images/services/bus.jpg" alt="Bus Service" />

// Icons
<img src="/images/icons/bus.svg" alt="Bus Icon" />
```

## Image Guidelines

- **Logos**: PNG format, transparent background
- **Backgrounds**: JPG, optimized for web (max 2MB)
- **Icons**: SVG preferred for scalability
- **Responsive**: Use srcset for different sizes
