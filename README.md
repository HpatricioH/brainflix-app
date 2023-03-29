# BrainFlix Project 

Welcome to BrainFlix! This project is a result of a refactoring effort to modernize an old codebase and explore the benefits of using TypeScript as the main programming language. With TypeScript, we can bring static typing, improved tooling, and other modern language features to our code, making it more maintainable and less prone to errors. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add, like, delete comments 
- Interact with the section next videos 
- Like videos

### Screenshot

![](./Screenshot.jpg)


## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Custom Hooks 
- Mobile-first approach
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/)
- APIs created for the project using Typescript


### What I learned

This project was an opportunity for me to learn and experiment with TypeScript, and I gained a deeper understanding of its capabilities and benefits throughout the development process. Some of the major learnings include:

  * How to leverage TypeScript's type system to catch errors and improve the overall reliability of my code.

  * Using interfaces to define clear and consistent data structures across my codebase.

  * Working with modern web development practices such as responsive design and interactive elements, while using TypeScript to ensure a more robust and maintainable codebase.

  * Understanding the benefits of TypeScript's tooling, such as code highlighting, autocompletion, and debugging capabilities.

Overall, this project has allowed me to develop my skills and knowledge in TypeScript, and I'm excited to continue using it in future projects.

Code snippets:

```ts
interface VideoPlayerProps {
  singleVideo: Videos | null
  setDeleteComment: (value: boolean) => void
  setLikedComment: (value: boolean) => void
}

 const handleClick = async (id:string) => {
    try {
      await deleteComments({ videoId: singleVideo?.id, commentId: id })
      setDeleteComment(true)
    } catch (error) {
      console.log(error)
    }
  }
```

## Author

- Github - [Patricio Huerta](https://github.com/HpatricioH)
- LinkedIn - [@PatricioHuerta](www.linkedin.com/in/patricio-huerta)
