---
name: Artisan Heritage
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#4f453f'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#81756e'
  outline-variant: '#d2c4bc'
  surface-tint: '#705a4c'
  primary: '#26170c'
  on-primary: '#ffffff'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#dec1af'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fddd7c'
  on-secondary-container: '#776005'
  tertiary: '#20190e'
  on-tertiary: '#ffffff'
  tertiary-container: '#362e21'
  on-tertiary-container: '#a19584'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffe085'
  secondary-fixed-dim: '#e3c466'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#efe0cd'
  tertiary-fixed-dim: '#d2c4b2'
  on-tertiary-fixed: '#221a0f'
  on-tertiary-fixed-variant: '#4f4538'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e5'
  chocolate-deep: '#3D2B1F'
  patisserie-gold: '#735C00'
  warm-cream: '#FAF7F2'
  muted-text: '#6B7280'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

This design system captures the essence of a storied patisserie, blending the prestige of a 1978 heritage with a contemporary artisan sensibility. The brand personality is warm, sophisticated, and deeply rooted in craftsmanship. The UI should evoke a sense of "slow luxury"—the feeling of walking into a high-end bakery where every detail is intentional and every product is made by hand.

The design style is **Minimalist with Tactile accents**. It leverages heavy whitespace to signal premium quality, while using a rich, gourmand color palette to create an inviting atmosphere. The aesthetic balances the classic authority of traditional European patisseries with the clean, functional layouts of modern digital experiences.

## Colors

The color palette is inspired by the ingredients of the craft: dark chocolate, golden honey, and fresh cream.

- **Primary (Chocolate Deep):** Used for typography and structural elements to provide a grounding, high-contrast alternative to pure black.
- **Secondary (Patisserie Gold):** Reserved for interactive accents, calls to action, and elegance markers. It represents quality and the "Artisan" seal.
- **Tertiary (Warm Cream):** The primary background color. It is softer on the eyes than pure white, providing a cozy, parchment-like quality.
- **Neutral:** A deep charcoal used sparingly for secondary text and borders to maintain legibility without breaking the warm tonal harmony.

## Typography

The typographic scale relies on a high-contrast pairing between **Playfair Display** and **Montserrat**. 

- **Headlines:** Use Playfair Display for all headings to inject character and a "literary" sophistication. For Display sizes, a slight negative letter-spacing enhances the premium feel.
- **Body & UI:** Montserrat provides a clean, neutral counterpoint. Its geometric clarity ensures that menus, ingredient lists, and functional UI remain highly legible against the more decorative headlines.
- **Labels:** Use uppercase Montserrat with generous tracking for small labels, buttons, and navigation items to evoke the feel of luxury brand packaging.

## Layout & Spacing

The layout follows a **fixed grid** approach on desktop to maintain a boutique, editorial feel. The spacing philosophy is "Generous and Airy." 

- **Rhythm:** Use an 8px base unit. Section vertical spacing should be aggressive (80px+) to allow the photography and typography "room to breathe."
- **Grid:** A 12-column grid for desktop with wide margins (64px) creates an inset, framed appearance that feels intentional and curated.
- **Mobile:** Transition to a single-column fluid layout with 20px side margins, ensuring that product imagery remains the focal point.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than sharp borders.

- **Surfaces:** Use the Warm Cream (`#FAF7F2`) as the base layer. Elevate primary content cards using pure white (`#FFFFFF`) to create a subtle "raised" effect without needing heavy shadows.
- **Shadows:** When shadows are required (e.g., on product cards or floating navigation), they should be extremely soft, long, and slightly tinted with the Chocolate Deep color at very low opacity (3-5%). This creates a naturalistic, warm depth rather than a clinical gray shadow.
- **Interactions:** Hover states should involve a gentle lift (y-axis shift) and a deepening of the ambient shadow to mimic physical touch.

## Shapes

The shape language is organic and approachable. Avoid sharp corners which can feel clinical or aggressive.

- **Global Radius:** Use a consistent `rounded-md` (0.5rem) for standard elements like input fields and small buttons.
- **Cards & Imagery:** Apply `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to product cards and hero images to reinforce the "soft" artisan aesthetic.
- **Decorative Elements:** Occasional use of circular (pill-shaped) badges for "New" or "Best Seller" tags adds a playful, modern touch to the traditional layout.

## Components

### Buttons
- **Primary:** Solid Chocolate Deep with White or Gold text. High-contrast, bold, and rectangular with 8px rounded corners.
- **Secondary:** Outlined in Gold or Chocolate Deep. Use for less critical actions like "View Gallery."

### Cards
- **Product Cards:** Full-bleed imagery at the top, followed by a title in Playfair Display. The card should have a white background and a soft ambient shadow to stand out against the Warm Cream page background.

### Input Fields
- Use a subtle border in a muted neutral. When focused, the border should transition to Gold. The background should be slightly lighter than the page background to indicate interactivity.

### Chips & Tags
- Use for categories (e.g., "Gluten-Free," "Vegan"). These should be pill-shaped with a low-opacity Gold background and Chocolate Deep text.

### Lists
- For menus, use a clean list with "Price" right-aligned. Use a dotted leader line if a more traditional "café menu" vibe is desired in specific sections.

### Navigation
- A centered or split-logo navigation bar that stays fixed or hides on scroll. Use high-tracking Montserrat labels for a sophisticated, airy feel.