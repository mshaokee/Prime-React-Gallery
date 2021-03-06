# Gallery of Shaokee Moua

## Description

In this project we had to create a Gallery of photos, and when those photos are clicked they should show their description. Also we must add a like button that increments the amount of likes by 1 every time we click it. To do this we had to make sure our server and client was running. My first step was to make sure that server was working with our GET request, then using axios, which is similar to ajax for jQuery. Understanding "this" and "state" were crucial to send our data down to the child components. I decided to get the images to display on the DOM first, creating a new component called GalleryList and using props to receive data from the App.js component. Afterwards knowing I would have to click on each individual image, I created the GalleryItem which handles my click event for the description and displaying my images. The last part was getting my add like function to work properly by calling it through props into a function in App.js. This was challenging because we just learned React, but with the skills we've acquired from jQuery and Databases, I know I could solve this challenge.

## Screen Shots

![](images/example1.png)

![](images/example2.png)

## Prerequisites 

Software required to run this application

* [Node.js](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)
* [Nodemon](https://nodemon.io/)

## Installation

1.) Open source code editor and run ```npm install```

2.) Run ```npm start``` in your terminal

3.) Open ```http://localhost:5000``` in your browser

## Usage

1.) You can click on images to see their description then click view image to go back to the image

2.) You can click add like to add to the likes under a specified image

## Built With
* Javascript
* React
* React-Redux
* HTML
* CSS

## Acknowledgement

Thank you to Prime Digital Academy for helping me build my foundations and my cohort Lamport for their wonderful suppport!

