# REACT COMPONENTS

### Login Overlay
-[] LoginOverlay     ->    Displays welcome message, text input for username/password, button to log in/register, and option to just browse

### Top Five Overlay
-[] TopFiveOverlay   ->    5 Text inputs, Submit button

### Navigation bar
-[] Navigation       ->    Holds link to Home, a search field for movies, a link to users User page

### Home Page (movie list)
-[] Home             ->    Displays List of most recent Movies populated by API call as links to MovieContainer

### Individual Movie Page
-[] MovieContainer   ->    Title of movie, it's poster image, it's overview and list of Reviews components
-[] Reviews          ->   StarRater static component, reviewer info from database
-[] UserReviewContainer -> Contains StarRatingComponent component and input for written review for user to submit

### StarRatingComponent package information
*< https://www.npmjs.com/package/react-star-rating-component >*

### User Profile Page
-[] UserContainer    ->   Displays username, users top 5 movies as links to movie pages, list of users reviews



# STATE

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



# ACTIONS

### Fetch actions
  * Add new user          : LogInOverlay
  * Retrieve user         : LogInOverlay
  * Add favorites         : TopFiveOverlay
  * Get Recent movies(API): Home
  * Find movie(API)       : Home
  * Get Movie info(API)   : Home, Movie Page, User Page
  * Get User info         : Movie Page



### Actions
  * Toggle LogInOverlay : LogInOverlay, Navigation
  * Toggle Top5Overlay  : LogInOverlay, TopFiveOverlay
  * Star rating         : UserReviewContainer
