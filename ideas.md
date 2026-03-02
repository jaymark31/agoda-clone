# Agoda Clone Design Brainstorm

## Chosen Design Approach: Modern Travel-Focused Minimalism

### Design Movement
**Modern Minimalism with Travel Inspiration** - Clean, contemporary design that emphasizes exploration and discovery. Inspired by travel apps and booking platforms that prioritize user experience and trust.

### Core Principles
1. **Trust Through Clarity** - Simple, uncluttered interface that makes booking feel effortless
2. **Visual Hierarchy** - Strategic use of color and spacing to guide user attention to key actions
3. **Exploration-Driven** - Destination cards and promotions inspire travel rather than just facilitate booking
4. **Responsive Elegance** - Works seamlessly across all devices with consistent visual language

### Color Philosophy
- **Primary Blue** (#1B5E8F or similar) - Represents trust, travel, and the sea. Used for CTAs and primary actions
- **Warm Accent** (#FF6B35 or similar) - Energy and excitement for deals/promotions
- **Neutral Grays** - Clean backgrounds and secondary text for readability
- **White Space** - Generous spacing for breathing room and visual clarity
- **Emotional Intent**: The palette evokes wanderlust (blues of sky/ocean) combined with the excitement of deals (warm orange)

### Layout Paradigm
- **Hero Section** - Full-width background with search box overlay (not centered, but positioned for visual impact)
- **Card-Based Grid** - Destination and promotion cards in responsive grid (2-3 columns on desktop, 1-2 on mobile)
- **Horizontal Carousels** - For destination showcases and promotions (scrollable on mobile)
- **Asymmetric Sections** - Alternating left/right layouts to avoid monotony

### Signature Elements
1. **Destination Cards** - Image-based cards with overlay text, rounded corners, subtle shadows
2. **Promotion Banners** - Colorful, gradient-based promotional cards with bold typography
3. **Search Widget** - Central, elevated search box with tabs for different accommodation types
4. **Navigation Pills** - Smooth, interactive category tabs with underline indicators

### Interaction Philosophy
- **Smooth Transitions** - All interactions include subtle fade/slide animations
- **Hover States** - Cards lift slightly on hover, buttons change color/shadow
- **Active States** - Clear visual feedback for selected tabs and filters
- **Loading States** - Skeleton screens for content that loads

### Animation Guidelines
- **Entrance Animations** - Staggered fade-in for cards (100-150ms delays)
- **Hover Effects** - 200ms ease-out transitions for card lifts and color changes
- **Scroll Animations** - Subtle parallax on hero image for depth
- **Carousel Motion** - Smooth scroll behavior for horizontal carousels

### Typography System
- **Display Font**: Poppins (bold, 600-700 weight) for headings and CTAs - modern, friendly, travel-oriented
- **Body Font**: Inter (400-500 weight) for body text and descriptions - clean, readable, professional
- **Hierarchy**:
  - H1: Poppins 700, 32-48px (hero titles)
  - H2: Poppins 600, 24-32px (section titles)
  - H3: Poppins 600, 18-24px (card titles)
  - Body: Inter 400, 14-16px (descriptions)
  - Small: Inter 400, 12-14px (secondary info)

---

## Implementation Notes
- Use Tailwind CSS for all styling with custom color tokens
- Leverage shadcn/ui components for consistency
- Implement responsive design with mobile-first approach
- Use Lucide React icons for UI elements
- Generate hero background image to set the travel mood
