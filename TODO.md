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
[] -clicks => swaps image to description (conditional rendering)
[] -include likes and like button
[] -like button click = PUT axios `/gallery/like/:id`
[] -update gallery when like clicked