# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Sunnyside agency landing page solution](#frontend-mentor---sunnyside-agency-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Links

- Solution URL:
- Live Site URL:

## My process

### Built with

- HTML / CSS / JavaScript

### What I learned

- CSS
  - Adjust `background-image`'s position with `background-position`
  - Add underline that overlaps with text by pesudo element `::after`
    ```css
    .learn-more a::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0; /* Adjust the vertical positioning */
      width: 110%;
      height: 0.5rem; /* Set the thickness of the underline */
      border-radius: 10px;
      z-index: -1;
      transform: translate(-50%, 1px);
    }
    ```
  - Make triangle with `border`
    ```css
    .mobile-menu nav {
      display: none;
      padding: 2em;
      position: absolute;
      top: 12%;
      left: 5%;
      right: 5%;
      z-index: 1;
      background-color: var(--white);
      color: var(--dark-grayish-blue);
    }

    .mobile-menu nav::before {
      content: '';
      position: absolute;
      top: -30px;
      right: 0; 
      width: 0;
      height: 0;
      border-left: 50px solid transparent; /* Make the triangle */
      border-bottom: 50px solid #fff; /* Make the triangle, adjust to match nav's background color */
    }
    ```


### Continued development

- Some animations.