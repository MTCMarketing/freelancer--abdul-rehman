import React, { useState, useEffect, useRef } from 'react'
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({
    home: false,
    services: false,
    pages: false,
    blog: false
  })

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarOpen(!isDesktopSidebarOpen)
  }

  const closeMenus = () => {
    setIsMobileMenuOpen(false)
    setIsDesktopSidebarOpen(false)
  }

  const toggleMenuItem = (item: string) => {
    setExpandedItems({
      ...expandedItems,
      [item as keyof typeof expandedItems]: !expandedItems[item as keyof typeof expandedItems]
    })
  }

  // Prevent scrolling when mobile menu or desktop sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen || isDesktopSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen, isDesktopSidebarOpen])

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`backdrop-overlay ${isMobileMenuOpen || isDesktopSidebarOpen ? 'active' : ''}`}
        onClick={closeMenus}
      ></div>

      {/* Desktop Menu */}
      <nav className="desktop-navbar">
        <div className="desktop-navbar-container">
          {/* Logo */}
          <div className="desktop-navbar-logo">
            <div className="desktop-logo-icon">
             <img src="src/assets/logo/white-logo.svg" alt="" />
            </div>
            
          </div>

          {/* Desktop Menu Links */}
          <div className="desktop-menu-links">
            <div className="desktop-menu-item">
              <a href="#">Home <span ><RiArrowDropDownLine className="arrow-react" /></span></a>
            </div>
            <div className="desktop-menu-item">
              <a href="#">About</a>
            </div>
            <div className="desktop-menu-item">
              <a href="#">Services <span className="dropdown-rrow"><RiArrowDropDownLine className="arrow-react" /></span></a>
            </div>
            <div className="desktop-menu-item">
              <a href="#">Pages <span className="dropdown-arrw"><RiArrowDropDownLine className="arrow-react" /></span></a>
            </div>
            <div className="desktop-menu-item">
              <a href="#">Blog <span className="dropdown-arro"><RiArrowDropDownLine className="arrow-react" /></span></a>
            </div>
            <div className="desktop-menu-item">
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Right side elements */}
          <div className="desktop-navbar-right">
            {/* Call Button */}
            <div className="desktop-call-button" onClick={toggleDesktopSidebar}>
              <div className="call-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z" fill="white" />
                </svg>
              </div>
              <div className="call-info">
                <div className="call-text">Make A Call</div>
                <div className="call-number">+000 (123) 456 88</div>
              </div>
            </div>
            
            {/* Menu Toggle Button */}
            <button className="desktop-menu-toggle" onClick={toggleDesktopSidebar}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* New Desktop Sidebar Menu (only visible on large screens) */}
      <div className={`desktop-sidebar ${isDesktopSidebarOpen ? 'open' : ''}`}>
        <div className="desktop-sidebar-header">
          <div className="desktop-sidebar-logo">
            <div className="logo-icon">
              <img src="src/assets/logo/black-logo.svg" alt="" />
            </div>
          
          </div>
          <button className="close-btn" onClick={toggleDesktopSidebar}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
            </svg>
          </button>
        </div>

        <div className="sidebar-description">
          <p>Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.</p>
        </div>

        <div className="desktop-sidebar-contact">
          <h3>Contact Info</h3>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7C3AED" />
            </svg>
            <span>Main Street, Melbourne, Australia</span>
          </div>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#7C3AED" />
            </svg>
            <span>info@example.com</span>
          </div>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#7C3AED" />
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#7C3AED" />
            </svg>
            <span>Mod-friday, 09am -05pm</span>
          </div>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z" fill="#7C3AED" />
            </svg>
            <span>+1100234909</span>
          </div>
        </div>

        <button className="contact-us-btn">Contact Us</button>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <svg className='social' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="mobile-navbar">
        <div className="mobile-navbar-container">
          {/* Logo */}
          <div className="mobile-navbar-logo">
            <div className="mobile-logo-icon">
              <img src="src/assets/logo/white-logo.svg" alt="" />
            </div>
            
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="mobile-logo">
            <div className="logo-icon">
              <img src="src/assets/logo/black-logo.svg" alt="" />
            </div>
            
          </div>
          <button className="close-btn" onClick={toggleMobileMenu}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
            </svg>
          </button>
        </div>

        <div className="mobile-menu-links">
          <div className="mobile-menu-item">
            <a href="#">Home</a>
            <button 
              className="expand-btn" 
              onClick={() => toggleMenuItem('home')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-item">
            <a href="#">About</a>
          </div>
          
          <div className="mobile-menu-item">
            <a href="#">Services</a>
            <button 
              className="expand-btn" 
              onClick={() => toggleMenuItem('services')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-item">
            <a href="#">Pages</a>
            <button 
              className="expand-btn" 
              onClick={() => toggleMenuItem('pages')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-item">
            <a href="#">Blog</a>
            <button 
              className="expand-btn" 
              onClick={() => toggleMenuItem('blog')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-item">
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="mobile-contact-info">
          <h3>Contact Info</h3>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7C3AED" />
            </svg>
            <span>Main Street, Melbourne, Australia</span>
          </div>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#7C3AED" />
            </svg>
            <span>info@example.com</span>
          </div>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#7C3AED" />
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#7C3AED" />
            </svg>
            <span>Mod-friday, 09am -05pm</span>
          </div>
          
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z" fill="#7C3AED" />
            </svg>
            <span>+1100234909</span>
          </div>
        </div>

        <button className="contact-us-btn">Contact Us</button>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
