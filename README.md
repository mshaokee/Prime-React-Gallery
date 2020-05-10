# GALLERY OF SHAOKEE MOUA

## Description

In this project we had to create a Gallery of photos, and when those photos are clicked they should show their description. Also we must add a like button that increments the amount of likes by 1 every time we click it. To do this we had to make sure our server and client was running. My first step was to make sure that server was working with our GET request, then using axios, which is similar to ajax for jQuery. Understanding "this" and "state" were crucial to send our data down to the child components. I decided to get the images to display on the DOM first, creating a new component called GalleryList and using props to receive data from the App.js component. Afterwards knowing I would have to click on each individual image, I created the GalleryItem which handles my click event for the description and displaying my images. The last part was getting my add like function to work properly by calling it through props into a function in App.js. This was challenging because we just learned React, but with the skills we've acquired from jQuery and Databases, I know I could solve this challenge.

## SCREEN SHOTS

![](images/example1.png)

![](images/example2.png)

## INSTALLATION

#### SET UP
[x] -npm install
[x] -Create Gallery folders/files
[x] -Set up basic components
[x] -grab 6 photos

#### GET / BASE
[x] -componentDidMount get function
[x] -get function axios in app.js
    [x] -setState to response.data from server
[x] -pass info from App to GalleryList through props
[x] -map through list of gallery data
    [x] -clarify using JSON.stingify to see array
    [x] -maps through images
[x] -GalleryList to display images through props
    [x] -call photos through props again, must have key
[x] -clicks => swaps image to description (conditional rendering)
    [x] -make button description and handleClick func
    [x] -state that sets description to false
    [x] -setState in handleClick, opposite of state. that way it can toggle back and forth
    [x] -create detail variable, if statement, do details which will render description
[x] -include likes and like button
[x] -like button click = PUT axios `/gallery/like/:id`
    [x] -create add like function
    [x] -path add like function all the way through Gallery List/Gallery Item
    [x] -must use another props that is being passed along into the function with parameters
[x] -update gallery when like clicked


## BUILT WITH
* Javascript
* React
* React-Redux
* HTML
* CSS

## ACKNOWLEDGEMENT
Thank you to Prime Digital Academy and my cohort Lamport!
