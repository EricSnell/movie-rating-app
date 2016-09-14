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

loggedIn        = (Boolean) for Navigation and UserReviewContainer

mainUserId      = (String) for Navigation (logged in user)
mainUsername    = (String) for UserContainer (logged in user)
mainUserFavorits= (Array of Strings) for UserContainer (logged in user)
mainUserReviews = (Array of Object) for UserContainer (logged in user)

loginOverlay    = (Boolean) for display of overlay
TopFiveOverlay  = (Boolean) for display of overlay

movieId         = (String) for MovieContainer
movieName       = (String) for MovieContainer
movieImage      = (String) for MovieContainer
movieOverview   = (String) for MovieContainer
movieReviews    = (Array of Objects) for MovieContainer

starRating      = (Int) for UserReviewContainer

userId          = (String) for UserContainer
username        = (String) for UserContainer
usersTop5       = (Array of Strings) for UserContainer
usersReviews    = (Array of Objects) for UserContainer



# ACTIONS                 : COMPONENTS TO DISPATCH

### Fetch actions
  * Add new user          : LogInOverlay
  * Add favorites         : TopFiveOverlay
  * Get reviews           : MovieContainer
  * Add review            : UserReviewContainer
  * Get user              : LogInOverlay, MovieContainer
  * Get Recent movies(API): Home
  * Find movie(API)       : Home
  * Get Movie info(API)   : Home, MovieContainer, UserContainer



### Actions
  * Toggle LogInOverlay   : LogInOverlay, Navigation
  * Toggle Top5Overlay    : LogInOverlay, TopFiveOverlay
  * Star rating           : UserReviewContainer
