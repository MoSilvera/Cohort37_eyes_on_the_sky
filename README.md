# Sky Scanner

Sky Scanner is an app that utilizes three of NASA's open data API's to provide photos and information by user selected date

## Why Sky Scanner

As a teaching assistant at a coding bootcamp, I am always trying to keep my skills sharp, as well as create example code for my students. As our team explores ways to teach the use of custom events to our students, alongside the basics of asynchronous programming, I find it important to go through the experience my students are about to have.
This site is based on our *Eyes on the Sky* project.

## Tools

The API's featured in this site are sourced from [NASA's Open API project](https://api.nasa.gov/)

#### APOD

>One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
*NASA*

#### NeoWs

>NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.

#### Mars Rover Photos
>This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.

## How to run Sky Scanner
1. Clone down the project to your computer. You can use the terminal command
     ```git clone git@github.com:MoSilvera/Cohrot37_eyes_on_the_sky.git```

2. Make a directory at the root of the file called api
    ```mkdir api```

3. Cd into that directory and make a file called database.json
    ```cd api && touch database.json```



