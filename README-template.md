# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot](./images/Screenshot%20(144).png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned
Through this project,I learnt about handling user interactions and how to conditionally render elements. I had to figure out how to apply the appropriate styles based on the current rating.
Event handling is my highlight of this project because for a while, I couldn't figure out how to get the submit button to work when it is clicked on.The code below helped:
```js
submitButton.addEventListener('click', () => {
  window.location.href = 'submit.html';
});
```
window.location.href also took a while to figure out but I guess that is what "understanding the problem to be able to ask the right questions" is all about.


### Continued development
In future projects, I plan to focus on understanding the use of Event handlers better. I also want to be able to create multiple page functionality using Javascript.

## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Saheedatt)
