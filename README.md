# vue.code-challenge

> Role: Frontend Developer

> Department: Core Development

> Reports to: Frontend Software Development Manager

> Time Allocation: 2 days

## Overview

The purpose of this code test is to help us understand your style of coding, technical proficiency and decision-making process.

We are looking at how you approach a problem and how closely you can follow a specification. Remember to show off your ability to write readable code that is maintainable and scalable.

If you struggle with understanding the requirements, please forward your questions to your recruiter, so that we can assist you.

## Requirements

We develop UI libraries for web apps, but also for Smart/Connected TV apps that have limited system resources available. Demonstrate your ability to build a web app in TypeScript with Vue.JS. We use vue-class-components internally but it’s not required.

See: https://vuejs.org/v2/guide/typescript.html

You are required to build a simple application with a horizontal carousel displaying thumbnails of video content retrieved from the provided API endpoint and allow the user to watch the videos with a video player.  You should also provide satisfactory unit tests for the carousel and its interactions. We use jest internally but use any test suite you are comfortable with.

The following requirements for UI Components

- Horizontal carousel
- Video player

The following requirements for the carousel

- Must not use a third-party/open-source carousel library
- Must have unit tests. We are more interested in demonstrating how you structure your code to be testable and which areas you priorities writing unit tests for more than the test coverage.
- Clicking on a carousel item will start playing the movie in the player
- Carousel must paginate one page at a time
- Show carousel pagination controls when hovering the carousel
- Carousel must show 5 items per page on desktop and 2 items per page on mobile

The following requirements for the Video player Component

- Can use video.js as the video player library
- Custom Play/Pause button for video player.

The following requirements for UI Styling

- Carousel:
- Height: 600px
- Carousel margin (x-axis): 40px
- Items gutter: 10px
- Items focus style: 2px border #FFD700
- Play/Pause button
- Focus style: Background #FFD700

Available resources

- API endpoint: http://hybridtv.ss7.tv/techtest/movies.json
- Icons
- Play button: http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png
- Pause button: http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png

Submission rules

- You will have two days to complete the code challenge.
- Clone this repository and create a new repository in your own GitHub account (Please don't fork this repository in GitHub). Create a new branch for the code challenge and commit your changes on those branches. When you are done, please create pull requests for your changes into main so we can review the pull requests.
- There are many different possible solutions and approaches to the challenge. We are not looking a specific solution but instead are more interested in your approach, how you've implemented your solution and how you structure & format your code.
- You should try to follow SOLID principles as a general guideline.
- Once completed, please send your repo url for review.

## Project setup

```

yarn install

```

### Compiles and hot-reloads for development

```

yarn serve

```

### Compiles and minifies for production

```

yarn build

```

### Run your unit tests

```

yarn test:unit

```

### Run your end-to-end tests

```

yarn test:e2e

```

### Lints and fixes files

```

yarn lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```

```
