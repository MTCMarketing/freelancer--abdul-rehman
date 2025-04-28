# Custom CSS Variables & Utility Classes

This document explains the customizable CSS variables, color variants, typography styles, gutter spacing, media queries, and utility classes.  
Follow this guide to understand what each section does and how to use them effectively across your site.

---
## Quick Usage - Example 1
This is super simple, so dont overthink it. We can set preset themes in the following way. For example if we want to set an element to use typography-type-1 and color-type-1, we do so like:

```html
  <div className="t1 c1"/>
```

## Quick Usage - Example 2
In another example say we move the following div from a light container (ex: white background and black text) to a dark container (ex: black background white text) we just change the previous to this:

```html
  <div className="t1 c2"/>
```

## Quick Usage - Example 3
In this example say we want to change the typopgraphy from type 1 (could be a big title) to type 2 (could be a colored title), via the following. Again more of these can be added, but should not really be done that often to ens

```html
  <div className="t2 c1"/>
```

## Quick Usage - Example 4
In this example say we want set up the auto-spacing (template spacing) via the following

```html
  <section className="sts sbs"/>
```

```html
  <div className="ste sbe"/>
```

---
# Template Override 
Here is how to modify what t1 c1 actually do:
- go to: assets/css/index.css
- uncomment out or modify as necessary 
- see below for a variable reference guide
---

# API Reference

## Typography Class Table Ref
Below is a breakdown of each typography variation's suggested use case:

| **Class Name**        | **Typography Style**    | **Suggested Use**                                                           |
|-----------------------|-------------------------|-----------------------------------------------------------------------------|
| `.t1`                 | Hero Title              | For the main page header or large, impactful text.                          |
| `.t2`                 | Hero Subtitle           | The supporting subtitle beneath the hero title.                            |
| `.t3`                 | Section Headings        | Larger titles within sections to separate content.                         |
| `.t4`                 | Large Text Blocks       | Main body content or long text areas (e.g., articles).                     |
| `.t5`                 | Paragraph Text          | Standard text for general content and paragraphs.                          |
| `.t6`                 | Smaller Text            | Used for captions or fine print.                                           |
| `.t7`                 | Call-to-Action Text     | Prominent text prompting the user to take action.                          |
| `.t8`                 | Navigation Links        | Text for links in the navigation menu or header.                           |
| `.t9`                 | Footer Text             | Small text often used for copyright, links, or disclaimers.                |
| `.t10`                | Highlighted Text        | Emphasized text, e.g., important information or alerts.                    |
| `.t11`                | Testimonials            | Customer or client feedback section.                                       |
| `.t12`                | Blog Post Titles        | Titles of blog posts, articles, or news updates.                           |
| `.t13`                | Button Text             | Text inside buttons that trigger actions.                                  |

## Color Class Table  Ref
You can apply different predefined color schemes to elements using these classes (mostly used to quickly transfer from dark to light contiainer of vice versa:

| Class | Description |
| :----- | :----------- |
| `.c1` | Applies **Color Type 1** settings (Primary: `#003366`, Secondary: `#003366`, Accent: `#ffa500`). |
| `.c2` | Applies **Color Type 2** settings (Primary: `#003366`, Secondary: `#003366`, Accent: `#ffa500`). |
| `.c3` | Applies **Color Type 3** settings (Primary: `#003366`, Secondary: `#003366`, Accent: `#ffa500`). |

## Color Class Table  Ref

Add template level spacing to each element section. 
| Class | Description |
|-------|-------------|
| `.sts` | Section Space Top (dynamic) - Applies top spacing to sections based on screen size using custom properties. |
| `.sbs` | Section Space Bottom (dynamic) - Applies bottom spacing to sections based on screen size using custom properties. |
| `.ste` | Element Space Top (dynamic) - Applies top spacing to elements based on screen size using custom properties. |
| `.sbe` | Element Space Bottom (dynamic) - Applies bottom spacing to elements based on screen size using custom properties. |




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

| Class | Description |
|-------|-------------|
| `.sts` | Section Space Top (dynamic) - Applies top spacing to sections based on screen size using custom properties. |
| `.sbs` | Section Space Bottom (dynamic) - Applies bottom spacing to sections based on screen size using custom properties. |
| `.ste` | Element Space Top (dynamic) - Applies top spacing to elements based on screen size using custom properties. |
| `.sbe` | Element Space Bottom (dynamic) - Applies bottom spacing to elements based on screen size using custom properties. |





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

## Appendix - Variables Reference

| **Variable**                                    | **Description**                                                                 |
|-------------------------------------------------|---------------------------------------------------------------------------------|
| `--color-background`                            | Base background color for the site.                                             |
| `--color-text`                                  | Default text color.                                                             |
| `--color-link`                                  | Color for links.                                                                |
| `--color-primary--type1`                        | Darker primary color for type1 typography.                                      |
| `--color-primary--type2`                        | Medium primary color for type2 typography.                                      |
| `--color-primary--type3`                        | Lighter primary color for type3 typography.                                     |
| `--color-secondary--type1`                      | Darker secondary color for type1 typography.                                    |
| `--color-secondary--type2`                      | Medium secondary color for type2 typography.                                    |
| `--color-secondary--type3`                      | Lighter secondary color for type3 typography.                                   |
| `--color-accent--type1`                         | Darker accent color for type1 typography.                                       |
| `--color-accent--type2`                         | Medium accent color for type2 typography.                                       |
| `--color-accent--type3`                         | Lighter accent color for type3 typography.                                      |
| `--font-family-base`                            | Default font family for the body text.                                          |
| `--font-size-base`                              | Base font size for general text.                                                |
| `--line-height-base`                            | Line height for general text.                                                   |
| `--font-weight-normal`                          | Font weight for normal text.                                                    |
| `--font-weight-bold`                            | Font weight for bold text.                                                      |
| `--gutter-section-desktop`                      | Gutter space for sections in desktop view.                                      |
| `--gutter-section-mobile`                       | Gutter space for sections in mobile view.                                       |
| `--gutter-element-desktop`                      | Gutter space for elements in desktop view.                                      |
| `--gutter-element-mobile`                       | Gutter space for elements in mobile view.                                       |
| `--media-small`                                 | Base width for small devices (phones).                                          |
| `--media-medium`                                | Base width for medium devices (tablets).                                        |
| `--media-large`                                 | Base width for large devices (laptops).                                         |
| `--media-xlarge`                                | Base width for extra-large devices (large desktops).                            |
| `--media-mobile-portrait`                       | Mobile devices in portrait orientation (standard phone view).                   |
| `--media-mobile-landscape`                      | Mobile devices in landscape orientation (phone held sideways).                 |
| `--media-tablet-portrait`                       | Tablet devices in portrait mode.                                                |
| `--media-tablet-landscape`                      | Tablet devices in landscape mode.                                               |
| `--typography--font--default`                   | Default font family for typography.                                             |
| `--typography--font-family--type1`              | Font family for Hero Title typography.                                          |
| `--typography--font-family--type2`              | Font family for Hero Subtitle typography.                                       |
| `--typography--font-family--type3`              | Font family for Section Headings typography.                                    |
| `--typography--font-family--type4`              | Font family for Large Text Blocks typography.                                   |
| `--typography--font-family--type5`              | Font family for Paragraph Text typography.                                      |
| `--typography--font-family--type6`              | Font family for Smaller Text typography.                                        |
| `--typography--font-family--type7`              | Font family for Call-to-Action Text typography.                                 |
| `--typography--font-family--type8`              | Font family for Navigation Links typography.                                    |
| `--typography--font-family--type9`              | Font family for Footer Text typography.                                         |
| `--typography--font-family--type10`             | Font family for Highlighted Text typography.                                    |
| `--typography--font-family--type11`             | Font family for Testimonials typography.                                        |
| `--typography--font-family--type12`             | Font family for Blog Post Titles typography.                                    |
| `--typography--font-family--type13`             | Font family for Button Text typography.                                         |
| `--typography--font-size--desktop--type1`       | Font size for Hero Title in desktop view.                                       |
| `--typography--font-size--tablet--type1`        | Font size for Hero Title in tablet view.                                        |
| `--typography--font-size--mobile--type1`        | Font size for Hero Title in mobile view.                                        |
| `--typography--font-size--desktop--type2`       | Font size for Hero Subtitle in desktop view.                                    |
| `--typography--font-size--tablet--type2`        | Font size for Hero Subtitle in tablet view.                                     |
| `--typography--font-size--mobile--type2`        | Font size for Hero Subtitle in mobile view.                                     |
| `--typography--font-size--desktop--type3`       | Font size for Section Headings in desktop view.                                 |
| `--typography--font-size--tablet--type3`        | Font size for Section Headings in tablet view.                                  |
| `--typography--font-size--mobile--type3`        | Font size for Section Headings in mobile view.                                  |
| `--typography--font-size--desktop--type4`       | Font size for Large Text Blocks in desktop view.                                |
| `--typography--font-size--tablet--type4`        | Font size for Large Text Blocks in tablet view.                                 |
| `--typography--font-size--mobile--type4`        | Font size for Large Text Blocks in mobile view.                                 |
| `--typography--font-size--desktop--type5`       | Font size for Paragraph Text in desktop view.                                   |
| `--typography--font-size--tablet--type5`        | Font size for Paragraph Text in tablet view.                                    |
| `--typography--font-size--mobile--type5`        | Font size for Paragraph Text in mobile view.                                    |
| `--typography--font-size--desktop--type6`       | Font size for Smaller Text in desktop view.                                     |
| `--typography--font-size--tablet--type6`        | Font size for Smaller Text in tablet view.                                      |
| `--typography--font-size--mobile--type6`        | Font size for Smaller Text in mobile view.                                      |
| `--typography--font-size--desktop--type7`       | Font size for Call-to-Action Text in desktop view.                              |
| `--typography--font-size--tablet--type7`        | Font size for Call-to-Action Text in tablet view.                               |
| `--typography--font-size--mobile--type7`        | Font size for Call-to-Action Text in mobile view.                               |
| `--typography--font-size--desktop--type8`       | Font size for Navigation Links in desktop view.                                 |
| `--typography--font-size--tablet--type8`        | Font size for Navigation Links in tablet view.                                  |
| `--typography--font-size--mobile--type8`        | Font size for Navigation Links in mobile view.                                  |
| `--typography--font-size--desktop--type9`       | Font size for Footer Text in desktop view.                                      |
| `--typography--font-size--tablet--type9`        | Font size for Footer Text in tablet view.                                       |
| `--typography--font-size--mobile--type9`        | Font size for Footer Text in mobile view.                                       |
| `--typography--font-size--desktop--type10`      | Font size for Highlighted Text in desktop view.                                 |
| `--typography--font-size--tablet--type10`       | Font size for Highlighted Text in tablet view.                                  |
| `--typography--font-size--mobile--type10`       | Font size for Highlighted Text in mobile view.                                  |
| `--typography--font-size--desktop--type11`      | Font size for Testimonials in desktop view.                                     |
| `--typography--font-size--tablet--type11`       | Font size for Testimonials in tablet view.                                      |
| `--typography--font-size--mobile--type11`       | Font size for Testimonials in mobile view.                                      |
| `--typography--font-size--desktop--type12`      | Font size for Blog Post Titles in desktop view.                                 |
| `--typography--font-size--tablet--type12`       | Font size for Blog Post Titles in tablet view.                                  |
| `--typography--font-size--mobile--type12`       | Font size for Blog Post Titles in mobile view.                                  |
| `--typography--font-size--desktop--type13`      | Font size for Button Text in desktop view.                                      |
| `--typography--font-size--tablet--type13`       | Font size for Button Text in tablet view.                                       |
| `--typography--font-size--mobile--type13`       | Font size for Button Text in mobile view.                                       |
