# Robust Header/Menu Convention

This guide provides a standardized approach for creating consistent, customizable header and menu structures for websites. It uses HTML for structure, CSS for styling, and optional JavaScript for interactivity. This system allows for easy customization and ensures SEO-friendly, cross-browser compatible navigation.

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

The following CSS uses variables to allow for easy customization of colors, fonts, and other styles.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #e74c3c;
  --primary-font-family: 'Arial', sans-serif;
}

body {
  font-family: var(--primary-font-family);
}

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

