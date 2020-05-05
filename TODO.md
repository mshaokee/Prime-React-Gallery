# TO DO list


## SET UP
[x] -npm install
[x] -Create Gallery folders/files
[x] -Set up basic components
[x] -grab 6 photos

## GET / BASE
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