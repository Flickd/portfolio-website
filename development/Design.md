# Website Design

## Wireframes
Sketches of the layout for key pages.
// ToDo

## Mockups
High-fidelity visulas showing colors, typography and spacing.
//ToDo

## Style Guide

### Color Palette

#### Primary Color
```
Primary Yellow (Logo): #FFD700
Primary Blue:         #1E90FF // Accent for links and CTAs (Call-to-action)
```

#### Secondary Color
```
Dark Blue:     #1A1B4B // Headers, Important text
Tech Gray:     #2C3E50 // Body text
Light Gray:    #F7F9FC // Backgrounds, cards
```

#### Accent Colors
```
Success Green:  #27AE60 // Success states, completed items
Warning Orange: #F39C12 // Warning states, in-progress
Error Red:      #E74C3C // Error states
```

#### Neutral Colors
```
White:          #FFFFFF     /* Background, cards */
Gray-100:       #F8F9FA     /* Light backgrounds */
Gray-200:       #E9ECEF     /* Borders */
Gray-300:       #DEE2E6     /* Disabled states */
Gray-400:       #CED4DA     /* Muted text */
Gray-800:       #343A40     /* Body text */
Gray-900:       #212529     /* Headings */
```

### Typography
```
Primary Font: font-family: 'Inter', sans-serif;
Secondary Font: font-family: 'JetBrains Mono', monospace;
```

#### Font Sizes
```
h1: 2.5rem     (40px)     /* Page titles */
h2: 2rem       (32px)     /* Section headers */
h3: 1.75rem    (28px)     /* Sub-sections */
h4: 1.5rem     (24px)     /* Card titles */
h5: 1.25rem    (20px)     /* Small headers */
h6: 1rem       (16px)     /* Mini headers */
Body: 1rem     (16px)     /* Regular text */
Small: 0.875rem (14px)    /* Secondary text */
Tiny: 0.75rem  (12px)     /* Meta information */
Code: 0.9375rem (15px)    /* Code blocks */
```

#### Font Weights
```
Extra Light: 200    /* Decorative use only */
Regular:    400    /* Body text */
Medium:     500    /* Emphasis */
Semi-bold:  600    /* Sub-headers */
Bold:       700    /* Headers */
```

#### Spacing System
```
Space-xs:  0.25rem  (4px)
Space-sm:  0.5rem   (8px)
Space-md:  1rem     (16px)
Space-lg:  1.5rem   (24px)
Space-xl:  2rem     (32px)
Space-2xl: 3rem     (48px)
Space-3xl: 4rem     (64px)
```

### Border Radius
```
Radius-sm:  4px     /* Small elements */
Radius-md:  8px     /* Cards, buttons */
Radius-lg:  16px    /* Large cards */
Radius-full: 9999px /* Pills, tags */
```

### Shadows
```
/* Card shadows */
box-shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
box-shadow-md: 0 4px 6px rgba(0,0,0,0.1);
box-shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

/* Interactive elements */
box-shadow-hover: 0 10px 20px rgba(0,0,0,0.15);
```

## Component Specific Styles

### Buttons
```
/* Primary */
background: #1E90FF
color: white
padding: 12px 24px
border-radius: 8px

/* Secondary */
background: white
border: 2px solid #1E90FF
color: #1E90FF

/* Hover states */
transform: translateY(-1px)
box-shadow: 0 4px 6px rgba(0,0,0,0.1)
```

### Cards
```
Blue-dark:     #60A5FA     /* Links, buttons */
Green-dark:    #34D399     /* Success states */
Orange-dark:   #FBBF24     /* Warning states */
Red-dark:      #F87171     /* Error states */
```

### Navigation
```
background: white
border-bottom: 1px solid #E9ECEF
height: 64px
```

### Code Blocks
```
background: #1A1B4B
color: #FFFFFF
font-family: 'JetBrains Mono'
padding: 16px
border-radius: 8px
```

## Dark Mode Colors

### Dark Mode Base Colors
```
Background:    #0A0C1B     /* Page background */
Surface:       #1A1B4B     /* Cards, elevated surfaces */
Primary:       #FFD700     /* Logo yellow preserved */
Text-primary:  #FFFFFF     /* Main text */
Text-secondary: #94A3B8    /* Secondary text */
```

### Dark Mode Accents
```
Blue-dark:     #60A5FA     /* Links, buttons */
Green-dark:    #34D399     /* Success states */
Orange-dark:   #FBBF24     /* Warning states */
Red-dark:      #F87171     /* Error states */
```

### Motion and Transitions
```
/* Default transition */
transition: all 0.2s ease-in-out;

/* Smooth hover */
transition: transform 0.2s ease, box-shadow 0.2s ease;

/* Page transitions */
transition: opacity 0.3s ease-in-out;
```

### Responsive Breakpoints
```
/* Mobile first approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
``` 

## UI/UX Principles
How the design meets user needs.
// ToDo