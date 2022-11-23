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
    - Feed (Signed out/ new user)
    ![Wireframe of feed and popular profiles](/src/assets/wireframe-visitors-desktop.jpg)
    - Feed (Signed in user)
    ![Wireframe of feed and popular profiles, nav bar changed](/src//assets/wireframes-feed-desktop.jpg)
    - Sign in
    ![Wireframe for sign in form](/src/assets/wireframe-signin-desktop.jpg)
    - Sign up
    ![Wireframe for sign up form](/src/assets/wireframe-signup-desktop.jpg)
    - Create post
    ![Wireframe to creating a post](/src/assets/wireframe-createpost-desktop.jpg)
    - Edit post
    ![Wireframe to editing a post](/src/assets/wireframe-editpost-desktop.jpg)
    - Edit profile
    ![Wireframe to editing profile](/src/assets/wireframe-editProfile-desktop.jpg)
    - Edit username
    ![Wireframe to edit username](/src/assets/wireframe-changeusername-desktop.jpg)
    - Edit password
    ![Wireframe to change password](/src/assets/wireframe-changepassword-desktop.jpg)
- Mobile
    - Feed
    ![Wireframe of feed in a mobile version, also showing dropdown functionality](/src/assets/wireframe-mobile-feed-dropdown.jpg)
    - Sign in

    ![Wireframe for sign in form on mobile](/src/assets/wireframe-signin-mobile.jpg)

    - Sign up

    ![Wireframe for sign up form on mobile](/src/assets/wireframe-signup-mobile.jpg)

    - Create post

    ![Wireframe to create a post on mobile](/src/assets/wireframe-createpost-mobile.jpg)

    - Edit post

    ![Wireframe to edit post on mobile](/src/assets/wireframe-editpost-mobile.jpg)

    - Edit profile

    ![Wireframe to edit profile on mobile](/src/assets/wireframe-editpost-mobile.jpg)

    - Edit username

    ![Wireframe to edit username on mobile](/src/assets/wireframe-changeusername-mobile.jpg)

    - Edit password

    ![Wireframe to change password on mobile ](/src/assets/wireframe-changepassword-mobile.jpg)

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

### Feed -

- This will be the landing page of the website, as soon as a user visits the website they will be able to view most recent posts, search bar to search for posts, popular profiles and a navbar which will be used to navigate around the website and a sign in/up links.

![Screenshot of the landing page of "FitnessBlogz"](/src/assets/features-feed.jpg)

### Navbar -

#### Signed out - 

- The Nav bar will change depending on the user status, whether they are logged in or out.
The logo and title on the will be links to the home/feed page, for when a user is down browsing around the website they can just look at most recent posts.
- In the Image below you can see that the navbar is only showing 'Feed', 'Sign in' and 'Sign up', this is shown like this as a visitor has no access to the features that a logged in user has.
- If they already have an account they can just sign in, else, users need to create an account.
Visitors will still be able to view posts, profiles and most popular profiles, but won't be able to have all the features a registered user has.

![Navigation bar showing logged out users features](/src/assets/features-navbar-signedOut.jpg)

#### Signed in -

- When a user has logged in the navbar will change showing all the features available, 'Sign up' link is gone,  'Add post', 'Liked' and 'Profile' links appear on the navbar
- Users will now be able to add posts by clicking on the 'Add post' and be redirected to the add post form. 
- Liked link will allow users to view a list of posts that they have liked, this way they can see all posts that are relevant to them.
- The 'Profile' link will allow users to visit their own profile and be able to edit and make changes to their profile if needed


![Navigation bar showing rest of the features available to sign in user](/src/assets/features-navbar-signedIn.jpg)

#### Dropdown Mobile -

The navbar will have a dropdown for mobile versions -

- Signed out

![](/src/assets/features-dropdown-signedOut.jpg)

- Signed in

![](/src/assets/features-dropdown-signedIn.jpg)



#### Hover and active page features -

- The final feature will be the hover and active page features
- When a user is hovering over any of the links in the navbar the background color and text color of the link will be inverted to add a bit of interactivity.
- When a user is on a certain page/link, the page/link that they have selected will always remain with a white background and black text to help users know which page they are on.

![Navbar, links user is hovering or the website they are on will be highlighted](/src/assets/features-navabr-hover.jpg)

### Search bar -

- Search bar feature will be used to look for certain posts, can use the post title or the profile name to filter out the post

![Search bar filtering out posts](/src/assets/search-desktop.jpg)

### Sign up and Sign in

- Sign up Form

![Sign up form on desktop](/src/assets/features-signup-desktop.jpg)

- Sign in Form

![Sign in form on desktop](/src/assets/features-signin-desktop.jpg)

### Create, edit and delete posts - 

- Add post, select on the 'Add post' when signed in

![Creating post form](/src/assets/features_add_post-desktop.jpg)

- Edit - 

![Edit post form](/src/assets/features-editPost-desktop.jpg)

- Delete - 

![Delete button on post dropdown](/src/assets/features-delete_post.jpg)


### Create, edit and delete comments -

- Leaving a comment the user needs to be signed in, click on a pot and scroll under the post, there will be a comment form which will allow you to 'post' when there is comment in the comment form

![Comment form on desktop](/src/assets/features-commentForm-desktop.jpg)

- Leaving a comment

![Comment form with content and button available to handle submit](/src/assets/features-commenting-desktop.jpg)

- Comment posted, dropdown now available, you can edit, or you can select the trash bin to delete the comment

![Comment Edit and Delete dropdown](/src/assets/features-comment-dropdown.jpg)

- Edit form for comments

![Comment edit form](/src/assets/features-comment-edited.jpg)


### Like and comment features

- Every time a user like a post or leaves a comment the like and comment count will update according to the number of like and comments below the pot

![Post has one like and 12 comments](/src/assets/features-commentLike-count.jpg)

<hr>

## Mobile Version -

- Feed -

![Mobile version of the feed](/src/assets/features-mobile.jpg)

- Search -

![Search bar on mobile version](/src/assets/search-mobile.jpg)

- Sign up Form

![Sign up form on mobile](/src/assets/features-signup-mobile.jpg)

- Sign in Form

![Sign in form on mobile](/src/assets/features-signin-mobile.jpg)

- Create, Edit and Delete -

- Add post -

![Creating post form, mobile verion](/src/assets/features-addPost-mobile.jpg)

- Edit -

![Edit post form on mobile version](/src/assets/features-editPost-mobile.jpg)

- Delete

![Delete post button to delete post](/src/assets/features-delete_post.jpg)


- Comment Form

![Comment form for mobile](/src/assets/features-commentForm-mobile.jpg)

- Edit comment Form

![Comment edit form for mobile](/src/assets/features-commentEdit-mobile.jpg)


<hr>

## Technologies Used

- Languages
    - HTML
    - CSS
    - Javascript
    - Python
- Frameworks and Libraries 
    - React
    - React Bootstrap
    - Django
    - Github
    - Gitpod
    - Heroku
    - Balsamiq
    - Pep8
    - Cloudinary
    - PostgreSQL
    - Bootstrap

<hr>

## Testing 

- Navbar testing - 

![js code for navbar tests](/src/assets/tests-navbar.jpg)

- Tests passed

![terminal result, tests passing](/src/assets/tests-navbar-passed.jpg)

### Manual testing -

- Profile created - Demostrate with API - 
    - To test whether profiles for user have been created I sign up by navigating to the sign up page

    - When I am on the sign up form, I enter a username, password and confirm my password to make sure that it is the correct one

    - The 3 input fields cannot be left empty, if it has been left empty, an error message will pop up with 'This field may not be blank'
    This is working as it should be

    ![Alert message for empty input fields](/src/assets/tests-signup-fields.jpg)

    - If username already exists, user cannot create an account using the same name, password must also be over 8 letters or the form will show user another message

    ![Error message, user exists and password is too weak](/src/assets/tests-user-exists-passwordweak.jpg)

    - Passwords need to match or profile will not be created
    ![Error message telling users that the 2 password fields do not match](/src/assets/tests-passwords-unmatched.jpg)

    - To test this works, currently there are only 3 profiles, I am going to create one for a user called Romeo, and if it all works as it should, in the API it should show that there are 4 profiles now, Antonio, ivan, marcel AND Romeo.
    - Sign up form working as it should be!

    ![4 Profiles in API, profile creation working](/src/assets/tests-profile-created.jpg)

<hr>

- Posts created - Demostrate with API
    - Looking at the front end the profile 'Antonio' post count, it says there are 10 posts under the profile, I have gone through the post list and counted and there are 10 posts.
    ![](/src/assets/tests-profilePosts-front.jpg)

    - To prove this furthur, I have check in the API and it does match the front as shown below..
    ![API showing 10 posts count, matching the front end profile post count](/src/assets/tests-profilePosts-api.jpg)

    - Creating post form does work, we are going to use the same example as above, the profile has 10 posts, I will fill a create post form with the values 'Tests' for the title and desription with the image as the websites logo. For this to work, the users posts count will be 11, in the API it will be the same, and on the posts page thee new post will be there.

    ![Correct form is created when users select 'Add post'](/src/assets/tests-createPost-form.jpg)
    ![Posts page, showing test post](/src/assets/tests-feed-post.jpg)
    ![Profile post count shows 11](/src/assets/tests-profileIncrement-front.jpg) 
    ![API showing profile posts count is 11](/src/assets/tests-increment-api.jpg)

    - Looking at all the evidence, the create post is working as it should be

<hr>

- Like button functions testing -

    - The like button will not let users like posts if they are not logged in

    ![Message appears on like button telling users to log in](/src/assets/tests-like-log-in.jpg)

    - The like button will not let users like their own posts

    ![Message telling users that they cannot like their own posts](/src/assets/tests-like-own-post.jpg)

    - When users like the post two things will happend, the like heart is going to turn red and the like button is going to increment, and the post will be saved in the users 'Liked' section

    ![Like button is now collor red and number has gone up from 0 -> 1](/src/assets/tests-like-button-works.jpg)

    ![Liked page, has the post that was liked by user](/src/assets/tests-like-page.jpg)

<hr>

- Correct number of comments, comment uploaded
    - Comment form does work, only shows when user is logged in, comments dispayed to all users, but comment form only for logged in users.
    Here the user is logged off, and can only view comments
    If you look at the count, there is 1 comment and the comment label has incremented according the number of comments

    ![Comments displayed below post for everyone](/src/assets/tests-comments-sign-in.jpg)

    - Comment form does work, comment count increments, and comment is posted below

    ![Comment form for people that are signed](/src/assets/tests-comment-form.jpg)

    - To demonstrate that all these tests work, we look at the like and comment count in the API and they match the front end, so it is working as it should be!

    ![API showing like and comments count are 1, just as in the front end](/src/assets/tests-comment-api.jpg)

    - Editing comment form does work, comment number stays the same, the drop down option does work, and as you can see below, the comment has been edited

    ![Comment form below post](/src/assets/tests-comment-edit.jpg)
    ![Comment section reading 'Editing comment'](/src/assets/tests-comment-editED.jpg)

    - Deleting comment works, when I click on the dropdown and select the trash can the comment is deleted and comment count is decremented. There was only one comment below this post, as you can see now, there are no comments
    ![Dropdown option on comments, trash can](/src/assets/tests-comment-delete.jpg)
    ![Comment deleted, no comments to show](/src/assets/tests-comment-deleted.jpg)

<hr>

- Following and Unfollowing 
    - Follow and unfollow features appears next to profile names. If user selects their own profile, the follow button is disabled, as they cannot follow themselves.
    ![User is in their own profile and follow button is disabled](/src/assets/tests-follow-user.jpg)
    - When a user follows a profile, the USERS following count will increase, and the profiles followers count that they are have just followed will go up, and the the follow button will toggle from 'Follow' to 'Unfollow' depending on the following status
    ![Follow button on profiles, on profile page and most followed profiles](/src/assets/tests-follow-feature.jpg)
    ![Follow button has been toggled to unfollow](/src/assets/tests-follow-unfollow.jpg)

<hr>

- Edit Post -
    - A logged in user will be able to edit their posts, to test this I will be changing the Test post. To be able to edit, you need to be the post owner, logged in and then the three dropdown dots will appear allowing you to edit or delete a post.
    - Delete button does work, when the user selects this button the post is deleted...

    ![Post edit dropdown, showing edit button and trashcan button for delete](/src/assets/tests-edit-post-dropdown.jpg)

    - When you select the edit button you get redirect to the post/edit url, as seen on the URL in the image below

    ![Edit form showing content of the post that is eing edited and the URL matching the post number](/src/assets/tests-edit-post-editpage.jpg)
    
    - Finally on the image below you will see the post being changed 
    to 'Edit test', this shows that the edit form is working and the post content has been changed.

    ![Image of the post details, updated reflecting on the changes that have been made](/src/assets/tests-edit-post-EDITED.jpg)

<hr>

- Edit Profile - 
    - The user has three options when editing their profile, they can edit the bio and image, username and then passwords.
    - The user clicks on the droppdown and these 3 options appear
    ![](/src/assets/tests-edit-profile-dropdown.jpg)
    - In the image below the user is taken to the edit form, you can change your bio, and below the image it says image, and is displaying your current image.
    ![](/src/assets/tests-edit-profile.jpg)
    - Now you can see that the changes have been applied and that the edit form is working
    ![](/src/assets/tests-edit-profile-changed.jpg)
    - When users select the username on the dropdown they are taken to this username form where users can change their username, when they click save, the changes are made. This is shown in the profile page
    ![](/src/assets/tests-edit-username.jpg)
    - This is the password form that allows you to change your password, I made the change, signed out, signed in with the new password and it works as it should
    ![](/src/assets/tests-edit-password.jpg)

- The search bar is working as it should, I type in the name of a post or name and it does return the posts containing the keyword that was inputted.
In this image below I am searching for 'ivan' and all his posts are returnt

![Search bar returning posts that match the search keyword 'ivan'](/src/assets/tests-searchbar.jpg)

- When I search for a certain post, the search bar does as wanted and returns a post with the title matching 'our gym'

![Search bar returning posts that match the search keyword 'our gym'](/src/assets/tests-searchbar-post.jpg)

- These tests show that the correct posts and profiles are being returnt

### Website efficiency -

- Lighthouse results for desktop
    - Feed
    ![Lighthouse result for the feed page](/src/assets/lighthouse-desktop-feed.jpg)
    - Liked
    ![Lighthouse result for the Liked page](/src/assets/lighthouse-desktop-liked.jpg)
    - Profile
    ![Lighthouse result for the profile page](/src/assets/lighthouse-desktop-profile.jpg)
    - Sign in
    ![Lighthouse result for the sign in page](/src/assets/lighthouse-desktop-signin.jpg)
    - Post
    ![Lighthouse result for the/a post page](/src/assets/lighthouse-desktop-post.jpg)
    - Sign up
    ![Lighthouse result for the signup page](/src/assets/lighthouse-desktop-signup.jpg)
    - Add post
    ![Lighthouse result for the create post form](/src/assets/lighthouse-desktop-create-post.jpg)

- Lighthouse results for mobile
    - Feed
    - Liked
    - Profile
    - Sign in
    - Post
    - Sign up
    - Add post

### Use ESlint to rest the whole website and individual files?

### W3C for CSS validation

Do the components within the navbar render?
Does the navbar change according to whether the user is signed in or no?

<hr>

## Deployment

<hr>

## Credits

<hr>

## Bugs / Unfinished features

- I wasn't able to implement a message that pops up when a user signs in or out, unfortunatly  didn't have to the time to do this. But website does have features that lets users know whether they are signed in or not, cannot like or leave comments under posts, will be told to sign in or up.
- Bug 1 - CSS styling was off, in the image below you can see that the follow button on the profile page is not the same as the follow button on the most popular profiles box. I solved this issue with going to the Button.module.css file and adding the changes, it is now sorted.
![Follow button on profile page is displaying the wrong style](/src/assets/bug1.jpg)
- Bug 2 - As I was doing the testing, the 2nd bug I found was the 'Unfollow' button was not toggling as it should. The unfollow button worked fine in the most followed profiles, but on the profile page it was not working. This bug was happening because I did not pass the (profile) in the handleUnfollow, after I did this it started working at should
![The unfollow button is stuck on how it is, it does not togggle](/src/assets/bug2-unfollow-not-toggle.jpg)
![The code in the image is the solution to bug, just need to pass profile in the handleUnfollow](/src/assets/bug2-solved.jpg)

<hr>

## Future Ideas 

- Sign up using email
- Email users to confirm account
- Pop up message
- Messaging system, be able to contact usres, only if they allow users to contact them
- 

## Acknowledgments

<hr>

- Images: From cloudinary sample pictures, the form picture
- Code institute - Biggest acknowledgement goes to code institute for allowing me to use the API created in the walkthrough to video to make this project. I was able to get an inspiration of what to do for my project because of the moments project.
- Slack - Slack was my next best friend as when I was getting errors in my project I was able to jump onto slack and look for related queries or just drop a comment and ask for help.
Code institute tutors were great, 'jo_ci' was so great with helping me with my doubts!
- Tutor - Next acknowledgement is for my tutor Marcel, I recently just got him but I could tell straight away he meant buisness and he was great. Any questions, ideas, or topics I wanted to discuss he helped and guided me well until I understood. 
