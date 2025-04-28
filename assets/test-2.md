# Robust Header/Menu Convention

This guide provides a standardized approach for creating consistent, customizable header and menu structures for websites. It uses HTML for structure, CSS for styling, and optional JavaScript for interactivity. This system allows for easy customization and ensures SEO-friendly, cross-browser compatible navigation.


# Menu Types Overview

This document outlines the different menu types you can use in your website navigation. These types can be easily incorporated into your site's header to provide various interactive elements such as dropdowns, hover-triggered sections, and more. Each type is styled with CSS, and the behavior is defined by simple interactions like hovering or clicking.

## Supported Menu Types:
- **Dropdown Menu** (`menu-item-dropdown`)
- **Hover Section Menu** (`menu-item-hover-section`)
- **Columns Menu** (`hover-section` with `column`)
- **Basic Menu Item** (`menu-item`)
- **Full-Screen Hover Section** (`menu-item-hover-section` with full-screen section)
- **Stacked Dropdown Menus** (`menu-item-stacked-dropdown`)

---

## 1. **Dropdown Menu** (`menu-item-dropdown`)

- **Purpose**: Displays a sub-menu when the user hovers over or clicks on a parent menu item.
- **Behavior**: When the user hovers over a parent item, a list of additional options (the dropdown) appears directly beneath it.
- **Use Case**: Ideal for when you need to group multiple links under one category without taking up extra space in the navigation bar.

### Example:
```html
<li class="menu-item menu-item-dropdown">
  <a href="#">Services</a>
  <ul class="dropdown">
    <li><a href="#">Web Development</a></li>
    <li><a href="#">SEO Services</a></li>
    <li><a href="#">Marketing</a></li>
  </ul>
</li>




# Menu Types Overview

This document outlines the different menu types you can use in your website navigation. These types can be easily incorporated into your site's header to provide various interactive elements such as dropdowns and hover-triggered sections. Each type is styled with CSS, and the behavior is defined by simple interactions like hovering or clicking.

## 1. **Dropdown Menu** (`menu-item-dropdown`)

- **Purpose**: Displays a sub-menu when the user hovers over or clicks on a parent menu item.
- **Behavior**: When the user hovers over a parent item, a list of additional options (the dropdown) appears directly beneath it.
- **Use Case**: Ideal for when you need to group multiple links under one category without taking up extra space in the navigation bar.

### Example:
```html
<li class="menu-item menu-item-dropdown">
  <a href="#">Services</a>
  <ul class="dropdown">
    <li><a href="#">Web Development</a></li>
    <li><a href="#">SEO Services</a></li>
    <li><a href="#">Marketing</a></li>
  </ul>
</li>




## HTML Structure

The following is the basic structure of a navigation menu:

```html
<nav class="main-navigation">
  <ul class="menu">
    <li class="menu-item">
      <a href="#">Home</a>
    </li>
    <li class="menu-item menu-item-dropdown">
      <a href="#">Services</a>
      <ul class="dropdown">
        <li><a href="#">Web Design</a></li>
        <li><a href="#">SEO</a></li>
        <li><a href="#">Digital Marketing</a></li>
      </ul>
    </li>
    <li class="menu-item menu-item-hover-section">
      <a href="#">About Us</a>
      <div class="hover-section">
        <div class="column">
          <h3>Our Story</h3>
          <p>Some text...</p>
        </div>
        <div class="column">
          <h3>Our Values</h3>
          <p>Some text...</p>
        </div>
      </div>
    </li>
    <li class="menu-item">
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>
```

# Key HTML Class Explanation

This section provides an overview of the key HTML classes used in the navigation system.

- **`.main-navigation`**: The wrapper around the entire navigation.
- **`.menu`**: The main list of navigation items.
- **`.menu-item`**: A basic item in the navigation.
- **`.menu-item-dropdown`**: Indicates a dropdown item with sub-menu.
- **`.dropdown`**: The unordered list inside the dropdown menu.
- **`.menu-item-hover-section`**: Indicates a section that will appear when hovered, expanding into a large section with columns.
- **`.hover-section`**: The large section that appears below the header when hovered.
- **`.column`**: Individual column inside the section.


# CSS Styling & Variables

```css
.main-navigation {
  background-color: var(--primary-color);
  padding: 10px;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu-item {
  position: relative;
}

.menu-item a {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

.menu-item:hover > a {
  background-color: var(--secondary-color);
}

.menu-item-dropdown:hover .dropdown,
.menu-item-hover-section:hover .hover-section {
  display: block;
}

.dropdown,
.hover-section {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--accent-color);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.column {
  width: 50%;
  float: left;
  padding: 10px;
}

.menu-item-dropdown:hover .dropdown li,
.menu-item-hover-section:hover .hover-section .column {
  display: block;
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }

  .column {
    width: 100%;
  }
}
```
