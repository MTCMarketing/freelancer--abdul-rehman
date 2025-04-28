# Custom CSS Variables & Utility Classes

This document explains the customizable CSS variables, color variants, typography styles, gutter spacing, media queries, and utility classes.  
Follow this guide to understand what each section does and how to use them effectively across your site.

---

## Color Variant Types

**(type1, type2, type3)**

- **type1**: The **default color scheme**. Meant for standard sections on your site (e.g., dark text on a light background, or vice-versa depending on your design).
- **type2**: The **opposite of the default**. If the page is mostly dark, this would be light; if the page is mostly light, this would be dark. Useful for inverting colors inside sections like popups, cards, feature blocks, etc.
- **type3**: The **alternative color**. Often used for secondary designs like grays, super bright backgrounds, or accent-heavy sections.

**Purpose:**  
Allows easily switching an element’s entire color scheme without manually editing font color, link color, or background color individually.  
Ideal for designing sections that need contrast against the default page style (like testimonials, feature highlights, promotions).

---

## Gutter Variables (Spacing)

- Gutter variables control the **vertical spacing** between sections and between smaller elements inside sections.
- You should use gutter variables on **every section** (`section`, `div`, `article`, etc.) and apply them **as often as possible** inside regular `div`s too.

**Purpose:**  
Maintains consistent spacing across your design without manually adjusting margins or paddings each time.  
Creates a predictable rhythm to the page and prevents elements from feeling crowded or randomly spaced.

---

## Media Query Breakpoints

| Variable | Description |
| :-------- | :----------- |
| `--media-small` | Base width for small devices (phones). |
| `--media-medium` | Base width for medium devices (tablets). |
| `--media-large` | Base width for large devices (laptops). |
| `--media-xlarge` | Base width for extra-large devices (large desktops). |
| `--media-extndable` | Custom width for very large monitors (optional). |
| `--media-minimum` | Minimum width for the smallest device layouts. |
| `--media-mobile-portrait` | Mobile devices in portrait orientation (standard phone view). |
| `--media-mobile-landscape` | Mobile devices in landscape orientation (phone held sideways). |
| `--media-tablet-portrait` | Tablet devices in portrait mode. |
| `--media-tablet-landscape` | Tablet devices in landscape mode. |

**Special Note:**  
If you leave any of these variables blank, your design may fail to adjust properly at different screen sizes.  
This could cause elements to become unreadable, overlap, or overflow outside the intended containers.  
Always define at least the basic breakpoints (`small`, `medium`, `large`) to ensure responsiveness.  
Orientation-specific breakpoints (`portrait`, `landscape`) are optional but very useful for extra polish on mobile and tablet devices.

---

## Typography Variables

Typography settings combine **font family** and **font size** into unified "typography types."

- Some fonts naturally appear **larger** or **smaller** than others, even at the same pixel size.  
  (Example: Arial looks smaller than Oswald at 16px.)
- Typography types (`type1`, `type2`, `type3`) let you **pair** a font family and responsive font sizes into a matching style.

**Purpose:**  
Ensures your font choices maintain visual balance across different device types without needing to manually adjust size or font on each element.

---

# Utility Classes Overview

---

## Custom Classes for Color Variants

You can apply different predefined color schemes to elements using these classes:

| Class | Description |
| :----- | :----------- |
| `.c1` | Applies **Color Type 1** settings (Primary: `#003366`, Secondary: `#003366`, Accent: `#ffa500`). |
| `.c2` | Applies **Color Type 2** settings (Primary: `#003366`, Secondary: `#003366`, Accent: `#ffa500`). |
| `.c3` | Applies **Color Type 3** settings (Primary: `#003366`, Secondary: `#003366`, Accent: `#ffa500`). |

**Purpose:**  
These classes allow you to instantly swap the color theme of any container, card, or section without manually adjusting text, link, or background colors.  
Use them when you need to create strong visual separations between sections or highlight specific parts of a page.

---

## Custom Classes for Typography Variants

You can also apply predefined typography (font family + font size) styles using these classes:

| Class | Description |
| :----- | :----------- |
| `.t1` | Applies **Typography Type 1** (font family and responsive font sizes for type 1). |
| `.t2` | Applies **Typography Type 2** (font family and responsive font sizes for type 2). |
| `.t3` | Applies **Typography Type 3** (font family and responsive font sizes for type 3). |

**Purpose:**  
These classes make it easy to maintain consistent typography across multiple sections or elements.  
They adjust automatically depending on the device (desktop, tablet, mobile), so you don’t have to manually re-style text for responsiveness.

---

# Quick Tips

- Always use **gutter variables** between sections to keep spacing clean and consistent.
- Apply **color type classes** (`.c1`, `.c2`, `.c3`) when switching between dark and light containers.
- Always test your **typography classes** (`.t1`, `.t2`, `.t3`) across mobile, tablet, and desktop.
- Don't leave **media queries** undefined, especially `--media-small`, `--media-medium`, and `--media-large`, or your site won't respond properly on different devices.
- Combine color types and typography types together for maximum design flexibility without extra CSS overrides.

---
