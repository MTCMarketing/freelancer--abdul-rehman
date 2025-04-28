# Custom Classes for Typography Variants

These classes apply different typography schemes to elements by adjusting the font family and font sizes for desktop, tablet, and mobile devices. You can assign a typography scheme to elements by adding one of the following classes: `.t1`, `.t2`, or `.t3`.

**Disclaimer:**  
All padding, margins, fonts (family, size, responsive), colors, backgrounds, and other spacing or styling properties are defined via a template convention. This allows sites to be rapidly changed and customized if they follow the established convention.

---

## **Custom Spacing Classes**

These classes are used to control the spacing (margins and paddings) of elements on different screen sizes (desktop and mobile). They utilize the predefined CSS variables for consistent spacing across the site.

### **Classes:**

- **`.mt-lg`**: Adds a large margin to the top of an element for desktop screens.
- **`.mt-sm`**: Adds a small margin to the top of an element for mobile screens.
- **`.mb-lg`**: Adds a large margin to the bottom of an element for desktop screens.
- **`.mb-sm`**: Adds a small margin to the bottom of an element for mobile screens.
- **`.pt-lg`**: Adds a large padding to the top of an element for desktop screens.
- **`.pt-sm`**: Adds a small padding to the top of an element for mobile screens.
- **`.pb-lg`**: Adds a large padding to the bottom of an element for desktop screens.
- **`.pb-sm`**: Adds a small padding to the bottom of an element for mobile screens.

### **Example Usage:**

```html
<div class="mt-lg">Content with large top margin (desktop)</div>
<div class="mt-sm">Content with small top margin (mobile)</div>
<div class="mb-lg">Content with large bottom margin (desktop)</div>
<div class="mb-sm">Content with small bottom margin (mobile)</div>
```

# Custom Classes for Color Variants

These classes apply different color schemes to elements by adjusting the primary, secondary, and accent colors. You can assign a color scheme to elements by adding one of the following classes: `.c1`, `.c2`, or `.c3`.

---

## Classes:

### `.c1`: Applies color scheme type 1
- **Primary color:** `#003366`
- **Secondary color:** `#003366`
- **Accent color:** `#ffa500`

### `.c2`: Applies color scheme type 2
- **Primary color:** `#003366`
- **Secondary color:** `#003366`
- **Accent color:** `#ffa500`

### `.c3`: Applies color scheme type 3
- **Primary color:** `#003366`
- **Secondary color:** `#003366`
- **Accent color:** `#ffa500`

---

## Example Usage:

```html
<div class="c1">Content with color scheme type 1</div>
<div class="c2">Content with color scheme type 2</div>
<div class="c3">Content with color scheme type 3</div>
```

# Custom Classes for Typography Variants

These classes apply different typography schemes to elements by adjusting the font family and font sizes for desktop, tablet, and mobile devices. You can assign a typography scheme to elements by adding one of the following classes: `.t1`, `.t2`, or `.t3`.

---

## Classes:

### `.t1`: Applies typography scheme type 1
- **Font family:** `var(--typography--font-family--type1)`
- **Desktop font size:** `var(--typography--font-size--desktop--type1)`
- **Tablet font size:** `var(--typography--font-size--tablet--type1)`
- **Mobile font size:** `var(--typography--font-size--mobile--type1)`

### `.t2`: Applies typography scheme type 2
- **Font family:** `var(--typography--font-family--type2)`
- **Desktop font size:** `var(--typography--font-size--desktop--type2)`
- **Tablet font size:** `var(--typography--font-size--tablet--type2)`
- **Mobile font size:** `var(--typography--font-size--mobile--type2)`

### `.t3`: Applies typography scheme type 3
- **Font family:** `var(--typography--font-family--type3)`
- **Desktop font size:** `var(--typography--font-size--desktop--type3)`
- **Tablet font size:** `var(--typography--font-size--tablet--type3)`
- **Mobile font size:** `var(--typography--font-size--mobile--type3)`

---

## Example Usage:

```html
<div class="t1">Content with typography scheme type 1</div>
<div class="t2">Content with typography scheme type 2</div>
<div class="t3">Content with typography scheme type 3</div>
```


