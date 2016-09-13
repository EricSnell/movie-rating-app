
/*---------- FRONT END -----------*/

# BASIC FEATURES

## Login / Register Overlay
1. User enters username and password
2. Button to retrieve user or add new user to database
3. Option to continue to the app without logging in or registering

## Registering New User Overlay
1. User prompted to enter their Top 5 favorite movies in text fields
2. Button to submit to the database

## Navigation Bar
1. Logo / Name of app links to Home Page
2. Text / Search field for movie names
3. Button to make api call for movie title
4. Link to User's Page (if not a user, links to Log In Overlay)

## Home Page
1. Displays list of movies (arranged by release date)
2. Use movie poster image as the display
3. Movie image acts as a link to the Movie Page

## Movie Page
1. Displays name, poster image, and overview of the movie
2. Displays individual user reviews that contain:
  * The users username as a link to their User Page
  * The users star rating given to the movie
  * The users written review of the movie
  * The users Top 5 movies as poster images, linking to their Movie Pages
3. Section for logged in user to rate and review movie:
  * Clickable star rating (1 - 5)
  * Text area for user to write written review
  * Button to submit to the database

## User Page
1. Displays username and Top 5 movies as poster images, linking to their Movie Pages
2. Shows a list of their reviews. Each review contains:
  * Poster image of the movie that links to Movie Page
  * Users star rating (1 - 5) for the movie
  * Users written review of the movie


# EXTRA FEATURES

## If Registering New User
1. User 'checks' movie genres they like from list
2. Button for user to submit
3. Prompt user to enters 5 favorite movies from each genre they 'checked', allowing users to search and select each movie
4. Button to submit data to the database



/*------------ BACK END --------------*/

# PostgreSQL

## API
* The Movie DB
* API Key = *< 415baa6d5ed6520aa2b2f22827e5db1d >*
* Documentation
  1. *< http://docs.themoviedb.apiary.io/# >*
  2. *< https://www.themoviedb.org/documentation/api >*

# Each User Will Have:
* Username
* Password
* 5 favorite movies
* Ratings given for movies (movie title with value of 1 -5)
* Written reviews for movies
