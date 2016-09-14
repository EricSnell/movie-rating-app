
/*---------- FRONT END -----------*/

# BASIC FEATURES

## Login / Register Overlay (LoginOverlay)
  1. User enters username and password
  2. Button to retrieve user or add new user to database
  3. Option to continue to the app without logging in or registering

## Registering New User Overlay (TopFiveOverlay)
  1. User prompted to enter their Top 5 favorite movies in text fields
  2. Button to submit to the database

## Navigation Bar (Navigation)
  1. Logo / Name of app links to Home Page
  2. Link to User's Page (if not a user, links to Log In Overlay)

## Home Page (Home)
  1. Text / Search field for movie names
  2. Button to make api request for movie title
  3. Initially displays list of movies (arranged by release date)
  4. Use movie poster image as the display
  5. Movie image acts as a link to the Movie Page

## Movie Page (MovieContainer)
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

## User Page (UserContainer)
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


## StarRater
  * Change icon to a burnt marshmallow



/*------------ BACK END --------------*/

# Using PostgreSQL / Knex

## API
  * The Movie DB
  * API Key = 415baa6d5ed6520aa2b2f22827e5db1d
  * Documentation
    1. http://docs.themoviedb.apiary.io/#
    2. https://www.themoviedb.org/documentation/api

# Each User in DB Will Have:
  * id    
  * username  
  * favorites
  * reviews (includes movie id, rating, written review)

# Each Movie Reviewed in DB Will Have:
  * id
  * title
  * image
  * overview
  * reviews
