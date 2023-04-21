# Chuck Norris Joke Generator 

## About this Project
Hello! I'm Patrick and I created this Chuck Norris Joke Generator

I built this apoplication using react as part of the software immersive course I am studying iwth at general assemebly.

To begin with I created a set of User Stories to defien the parts of the application that I need to design and build to show my newly learnt skills with react and api's

I had a minimum viable product requirement for this project which included: 

- Add a new item to a list
- Mark the item as complete/favorite/(watch, read, listen) later/flag/etc
- Edit an item from a list
- Remove an item from a list
- Clear/delete all items
- Clear/delete only marked items
- Fetch data from at least one 3rd party API using Axios or fetch.
- Make frequent Git commits with descriptive messages, explaining your commit.
- Use React Router to handle multiple pages/views.


For this project after hunting around the internet for an api that I felt I wanted to use, I can across the chucknorris joke api at chucknorris.io. This api suit my project perfectly and had some additional addons including a category filter which I utilised in this project.


## Planning

### User Stories

Here are my user stories:

As a user I need to be able to get jokes from the app on a button click
As a user I want to be able to store my favourite jokes
As a user a want to be able to flag our highlight my favourites of these selected jokes
As a user I want to be able to delete sperate jokes from my favourites
As a user I want to be able to clear all my favourites with one button click
As a user I should be able to edit or add to the jokes in some way


### Wireframes

As part of my planning I designed a rough wireframe and then a more detailed wireframe for each of the pages that I am going to create for the application. Below is  the basic wireframes for my app

![Homepage Basic wireframe](./Planning/Wireframes/homepage-basic-wire-frame.png)
![Favourites Basic wireframe](./Planning/Wireframes/favourites-basic-wireframe.png)



### Colors and Fonts

I like to spend quite a bit of bit on exploring colours and fonts with my work as I feel that they are an extremely important part of the aesthetic feel of any page or application. 


#### Colours
Here are my explorations into color

![Favourites Detailed wireframe](./Planning/Wireframes/chuck-norris-color-exploration.png)

I decided to look at how his movies had been portrayed and noticed a particular them for using high contrast yellow & red. I then picked the particular hex's from these and modified them slightly to my chosen color and added a pair of neutrals (white and black).

#### Fonts

Here are my exploration into fonts:

![Colour Exploration](./Planning/Wireframes/chuck-norris-font-exploration.png)

I wanted a font that had a feel for old style action movies, kind of simialr to the A team. I eventually found a classic style stencil font that felt like the right one called 'Stardos Stencil' (top left) which was the most legible whilst also have the styling that I wanted.

I took all the exploration from above and created a background using photoshop, I wanted to bring some fo the general chuck norris asetetics to the background and found a license free transparent png of him form one of his movies. I also added an explosion which I edited the sky out of an overlayed onto the gradient background. I also wanted something to fill the upper corners and balance the image, so I found some illustrator vectors of apache helicopters as this was similar to som eof the movie featured images I had found for the colour exploration.

Here is the finalised detailed wireframes I created:

![Homepage Detailed wireframe](./Planning/Wireframes/homepage-detailed-wireframe.png)
![Favourites Detailed wireframe](./Planning/Wireframes/favourites-detailed-wireframe.png)

## Features

Here is a list of the features that I created for my application

- Users can pull a random Chuck Norris Joke from the Api
- The joke is displayed on the main joke generator screen 
- A particular joke can be picked from a category of jokes and then the make me laugh button pulls from this category
- Jokes can be saved to favourites and viewed on the favourites page
- favourited jokes can be flagged to highlight them
- favourited jokes can have select emojis added to them to emphisize them
- jokes can be deleted individually from the favourites or  a user can delete all at once with a button.
- app has conditional styling to help with UI on flagging.

## Techonologies and Languages Used

- Javascript
- React 
- CSS
- Adobe Photoshop
- Adobe Illustrator


## How to use the App

When loaded the app should look like this:

