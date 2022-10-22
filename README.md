# MoviesFinder Application(Frontend)

## Desctiption

This is Frontend-part of my new application for searching for movies that had been developed by using React.

- #### Technologies
  - HTML
  - CSS
  - JavaScript
  - React

* #### App features

1. Authorization. Since there's no backend part of this project yet, I implemented emulation of authorization. So, the auth form does not check anything yet. To log in into the App, just click 'Enter'.

2. There are certain amount of main components. These are TopList, PacketList, InlineList, Movie. These are representing packet of movies depending on some parameters. I used these ones almost at all the pages. By clicking on one of the items that those components have you can check out the information about each film in details at the page 'Movie'(id in path).

3. At the page 'Search' you can fill the search form in and find some films you'd like to add to Collection or watch. The API is free, so to increase the posibillaty of successful finding I recommend you to fill in all the inputs.

4. At pages that have mounted InlineList component I implemented dynamic pagination. Just scroll down to end of the page to load new part of films. Also, you can sort these lists by clicking on Select element 'Sort by'.

5. You can save a film to your Collection by clicking on the save button in InlineList or Movie page. Check these film out in your Collection section.

6. You'll be able to find your personal information at the page 'Profile'. These features are not available at the moment. At this page you can also log out.

- #### Architecture of Application

  This application has been build according to functional programming paradigm by using functional components.

  1. To get all the data objects I'm using the API class. Also, as the page had been loaded I memoize some constant information to aviod additional requersts.

  2. To avoid the props drilling I'm using the Context feature. I drilled 2-3 props through 2-3 components though to avoid confusion of contexts.

* #### Achivements

  Developed the skill of using React-hooks such as useState, useEffect, useContext, useRef, useMemo. Also developed skills of using React-router features and npm packets.

* #### Deployment
  You can try using my app by the following link: \*\*\*.

Thank you for checking the app out!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
