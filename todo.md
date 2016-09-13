# COMPONENTS

-[] Navigation      -->   Holds link to Home, a search field for movies, a link to users User page

-[] Home            -->   Displays List of most recent Movies populated by API call as links to MovieContainer

-[] MovieContainer  -->   Title of movie, it's poster image, it's overview and list of Reviews components
-[] Reviews          -->   StarRater static component, reviewer info from database
-[] UserReviewContainer -> Contains StarRater component and input for written review for user to submit
-[] StarRater        -->   Displays clickable stars (may not need, installed module instead)

-[] UserContainer   -->   Displays username, users top 5 movies as links to movie pages, and UserReview component
-[] UserReview      -->   Displays users list of reviews for movies, with static StarRater, image of movie that links to it's movie page, and written review

-[] LoginOverlay    -->   Displays welcome message, text input for username/password, button to log in/register, and option to just browse

-[] TopFiveOverlay  -->   5 Text inputs, Submit button


# STATE

loggedIn        = boolean: if false, hide UserReviewContainer (can't submit reviews unless a user). Navigation bar User page link displays LoginOverlay
loginOverlay    = boolean: if false, hides overlay. If true, shows overlay
movieName       = (String) for Movie Page
movieImage      = (String) for Movie Page
movieOverview   = (String) for Movie Page
userStars       = (Int) for Movie Page
usernameDisplay = (String) for User Page
topFiveDisplay  = (Array of Strings) for User Page
