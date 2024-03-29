# Sky Scanner

Sky Scanner utilizes three of NASA's open data API's to provide photos and information by user selected date

## Why Sky Scanner

Three words: Practice, empathy, and fun!

As a teaching assistant at a coding bootcamp, I like to practice my skills, as well as create example code for my students. As our team explores ways to teach the use of custom events to our students, alongside the basics of asynchronous programming, I think it's important to go through the experience my students are about to have!

Plus...space is cool. Who doesn't want to see something from space!?

This site is based on our *Eyes on the Sky* project.

## Tools

The API's featured in this site are sourced from [NASA's open API project](https://api.nasa.gov/)

#### APOD

>One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
*NASA*

#### NeoWs

>NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.

#### Mars Rover Photos
>This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.

*All descriptions are sourced from [NASA](https://api.nasa.gov/)*
## How to run Sky Scanner
Before beginning make sure that you have REST api simulator like [json-server](https://www.npmjs.com/package/json-server#alternative-port) as well as a command line HTTP server like [http-server](https://www.npmjs.com/package/http-server). The following instructions are optimized for those node package modules.

1. Clone down the project
```
      git clone git@github.com:MoSilvera/Cohrot37_eyes_on_the_sky.git
```

2. Make a directory at the root of the file called api
```
    mkdir api
```

3. Cd into that directory and make a file called database.json
```
    cd api && touch database.json
```

4. Open the database.json file in your preferred editor, add the following code to the file
```
    {
        "keys":[
            {
                "id": 0,
                "key": ${YOUR KEY HERE}$
            }
        ]
    }
```

5. Replace `${YOUR KEY HERE}$` with an API key generated by [NASA](https://api.nasa.gov/)

6. Start json server on port 3003 by running this command while in the api directory
```
    json-server -p 3003 -w database.json
```

7. Cd into the root of the project and start http-server
```
    hs -o
```

8. Start exploring!

## Notes

 Sky Scanner is an ever evolving work in progress! There is currently no styling in the app (I'm hoping to rally the UI/UX students into helping out!) and both code and documentation is written in the hopes of clarifying the processes for other junior developers. Expanded space exploring features to come!
