# **Where To Start**

## Components

If you need to make a new component, create a new directory with the name of the component in the `./client/src/components` directory. Then make a file with the name(s) of your component(s) in the newly created directory.

For implementation, it is almost as simple as plug and play for your code. Just insert the call for the component where it needs to go in either the pages, or another component you wish to put it in.

## Pages

Anything you need to add or change, can safely be done so with the pages components.

## App.js

For the most part, this component needs minimal editing unless you are working on styling or routing.

## /utils

The `/utils` file folder has boiler plate code in `API.js`. Api's and front-end database queries will go here. The back-end will be written (if required) to complete the calls and make the requests go where needed.

## Backend

For now, any files that are entirely commented out, or has `boiler` in it's name can be changed. These files have good references on working code for what they were originally meant for. We can change these files, or rewrite them completely as long as we keep the reference points for as long as we need.

We should change the names of these files later, but for now, it's good to keep their current names to see what is most important to change in the backend.

## NPM

For installing the proper packages, go to the root for the project and type:

`yarn install`

Running this, yarn will install all the dependencies in the needed directories using instruction from the root `package.json`.

Always use `yarn add`. Don't use `npm intall` or `npm i`. This will mess with the yarn.lock otherwise, and will make life a lot more interesting than it needs to be.

Make sure you're in the proper directory for the installation of the needed packages. If it needs to be in the back end, make sure you are in the root directory. Otherwise if it's a front-end package, make sure you are in the `/client` directory before doing `yarn add`.

# **Images**

* abstract-art-artistic-1020315: Photo by rawpixel.com from Pexels 

# **To Do**

* implement full functionality with comments
* Implement login with google auth and custom login for the site.
* add markdown functionality with comments/posts
* possible picture link or even any link shown on hover
* Styling
* Clean up post area (Make it look more forum...y, make it look more forumy)
* Code cleanup, eg: get rid of console logs, redundant code, etc.