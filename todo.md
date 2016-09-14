# REACT COMPONENTS

### Login Overlay
-[x] LoginOverlay     ->    Displays welcome message, text input for username, button to log in/register, and option to just browse

### Top Five Overlay
-[x] TopFiveOverlay   ->    5 Text inputs, Submit button

### Navigation bar
-[x] Navigation       ->    Holds link to Home and a link to users User page

### Home Page (movie list)
-[x] Home             ->    Displays a search field and list of most recent Movies as links to the Movie Page populated  

### Individual Movie Page
-[x] MovieContainer   ->    Title of movie, it's poster image, it's overview and list of Reviews components
-[x] Reviews          ->   StarRater static component, reviewer info from database
-[x] UserReviewContainer -> Contains StarRatingComponent component and input for written review for user to submit

### StarRatingComponent package information
*< https://www.npmjs.com/package/react-star-rating-component >*

### User Profile Page
-[x] UserContainer    ->   Displays username, users top 5 movies as links to movie pages, list of users reviews



# STATE         

userId          = (String) ID of logged in user
movieId         = (String) Returned ID of found movie

loggedIn        = boolean: if false, hide UserReviewContainer (can't submit reviews unless a user). Navigation bar User page link displays LoginOverlay
loginOverlay    = boolean: if false, hides overlay. If true, shows overlay
TopFiveOverlay  = boolean

movieName       = (String) for Movie Page
movieImage      = (String) for Movie Page
movieOverview   = (String) for Movie Page
movieReviews    = (Array of Objects) for Movie Page

starRating      = (Int) for UserReviewContainer

username        = (String) for User Page
usersTop5       = (Array of Strings) for User Page
usersReviews    = (Array of Objects) for User Page



# ACTIONS                 : COMPONENTS TO DISPATCH

### Fetch actions
  * Add new user          : LogInOverlay
  * Add favorites         : TopFiveOverlay
  * Add review            : Movie Page
  * Get user              : LogInOverlay, Movie Page
  * Get Recent movies(API): Home
  * Find movie(API)       : Home
  * Get Movie info(API)   : Home, Movie Page, User Page



### Actions
  * Toggle LogInOverlay   : LogInOverlay, Navigation
  * Toggle Top5Overlay    : LogInOverlay, TopFiveOverlay
  * Star rating           : UserReviewContainer
