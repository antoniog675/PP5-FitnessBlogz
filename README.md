# FitnessBlogz

## About the website - 
<hr>

![Am I Responsive image](/src/assets/pp5_amiresponsive.jpg)

This website is designed to be an Instagram like page where users post pictures, put a title and description on their posts. They will also be able to like, comments on posts and also be able to follow and unfollow profiles.

This site is targeted for people who are into fitness, for users who like to look for inspiration from other people working towards the same goal. Users will also be able to share their stories and their journey towards a healthier lifestyle, users can also share different meals they are having that is full of protein, high in nutrients and low on carbs.

[- Live Website -](https://fitness-blogz.herokuapp.com/)

[- API Repo -](https://github.com/antoniog675/drf-api-pp5)

<hr>

## Contents -

1.[User Experience](#user-experience)

2.[Features](#features)

3.[Technologies Used](#technologies-used)

4.[Testing](#testing)

5.[Deployment](#deployment)

6.[Finished Product](#finished-product)

7.[Credits](#credits)

8.[Bugs](#bugs)

9.[Acknowledgments](#acknowledgments)

<hr>

## User Experience

### User Stories -
- Navigation and Authentication
    -  Navbar - As a user I can view a navbar from every page to be able to navigate around the website/app

    - Routing - as a user I can use the navbar to navigate through pages quickly so that I can view content seamlessly withoout page refresh

    - Authentication (Sign in) - as a user I can sign in with my credentials in order to access functionality for a logged in user

    - Authentication (Sign up) - As a user I can create an account so that I have access to all the features as a signed up user

    - Logged out - As a user I can tell when I have logged out and access to website features gets removed

    - Refresh access tokens - As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

    - Navbar conditional rendering - as a logged out user I can see sign in and sign up options to be able to create an account


- Posts, like, commenting and viewing
    - Avatar - As a user I can view user's avatars so that I can easily identify users of the application

    - Create posts - as a logged in user I can create posts so that I can share my posts with people
 
    - View post - As a user I can view the details of a post, the title, description, likes and comments

    - Like post - As a logged in user I can like a post, as a logged out user I am unable to like posts

- Posts page - View most recent posts
    - View most recent posts - as a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the content

    - Search profiles - As a user I can search for profiles so I can see the posts of my favourite athelete or account

    - View liked posts - As a logged in user I can view a list of all the posts I have liked so I can view the posts I most enjoyed

    - Infinite scroll - as a user I can keep scrolling though posts so that all posts are loaded rather then selecting next and have a new page load

    - Edit and delete posts - As a signed in user I can edit and delete my posts incase I have errors or need to update/delete my post

    - Comment on posts - As a signed in user I can post a comment under a post so I can share my opinion with the community

    - View comments under a post - As a user I can view comments under a post and see when the post was created so that I can follow the conversation between different users or myself

- Profile 
    - Profile page - As a user I can visit and see description of a certain profile so I can get to know them better

    - Popular profiles - As a user I can see a list of the most followed profiles so I can see the most popular profiles

    - User details - As a user I can see a profiles name, bio, image and most recent posts, so I can get to know a profile better

    - Follow and unfollow profiles - As a signed in user I can follow and unfollow profiles so I can show my support to a persons profile

    - Edit profile - As a signed in user I can edit my image and bio in case I need to update them

    - Update username and passwords - As a signed in user I can update my username and password so that my account is kept safe

At the start of the project all the user stories were on the todo list, after the 1st sprint the navbar and authentication, after that was the 2nd sprint, where we tackled the posts

Todo

![Todo user stories](/src/assets/todo_userstories.jpg)

Tackling the posts - 2nd sprint

![User stories in progress](/src/assets/sprint_2_todo.jpg)

The image below shows all user stories completed an implemented

![User stories completed](/src/assets/todo_completed.jpg)


### Structure -

#### ERD - 

![Entity Relationship Diagram](/src/assets/PP5-API.jpg)

- The User model is going to be the django default model - We will use user (PK) owner which will have a OneToOne relationship and on_delete=models.CASCADE.

- User Model ---> id (BigAuto), username (Char) and password (Char)

- Profile Model ---> id (BigAuto), owner (OneToOne), created_at (DateTime), updated_at (DateTime), name (Char), content, (Text), image (Image)

- Followers Model ---> id (BigAuto), owner-following (ForeignKeyUser), followed (ForeignKeyUser), created_at (DateTime)

- Comments Model ---> id (BigAuto), owner (ForeignKey), post(ForeignKey), created_at (DateTime), updated_at(DateTime), content (Text)

- Post Model ---> id (BigAuto), owner (ForeignKey), created_at (DateTime), upadted_at(DateTime), title (Char), content(Text), image (Image)

- Like Model ---> id (BigAuto), owner (ForeignKey), post (ForeignKey), created_at (DateTime) 


### Skeleton -
#### Wireframe -
- Desktop
    - Feed
    - Sign in
    - Sign up
    - Create post
    - Edit and delete post
    - Edit profile
    - Edit username
    - Edit password
- Mobile
    - Feed
    - Sign in
    - Sign up
    - Create post
    - Edit and delete post
    - Edit profile
    - Edit username
    - Edit password

### Surface -
#### Color scheme -
- The website is going to have a very simple design, black, white, and grey.
- The Navbar is going to have a black background design with fonts within  being white, so that there are no issues with contrast
- Sign in and Sign up buttons are going to be black with a white font, when hovered over the colours will invert.
-Apart from that the buttons for adding comments, posts and edits will be grey with white fonts, and when hovered over the colours will invert
#### Fonts -
- Fonts used for this project are 'Josefin Sans' for the title and sub-headings of the website

- The 2nd font used is 'Exo' which is going to be used for users description, and other paragraphs


<hr>

## Features

### Feed

### Navbar

### Search bar

### Sign up and Sign in

### Create, edit and delete posts

### Create, edit and delete comments

### Like and comment features

<hr>

## Technologies Used

<hr>

## Testing 

- Navbar testing

- Testing for users sign in and sign up

- Does the correct post load up when selected

- Does the correct profile load up when selected

- Number of likes and comments correct 

### Website efficiency

### Use ESlint to rest the whole website and individual files?

### W3C for CSS validation

Do the components within the navbar render?
Does the navbar change according to whether the user is signed in or no?

<hr>

## Deployment

<hr>

## Finished Product

<hr>

## Credits

<hr>

## Bugs

<hr>

## Acknowledgments

<hr>

Images: From cloudinary sample pictures, the form picture
