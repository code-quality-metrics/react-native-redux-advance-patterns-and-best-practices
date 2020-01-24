# React Native Redux Best Practices

## ![✔] 1 Don't use react-navigaton or alike

**TL;DR:** Don't use react-navigation, having a second state for the navigator creates the necessity of using the view as the glue between Redux state and Navigation state, we recommend using https://github.com/faceyspacey/redux-first-router, this makes navigation part of Redux state simplifying everything.

**Otherwise:** You will find yourself with a huge nested navigator, triggering navigation changes from different parts of your code and writting logic that needs both the navigation state and the redux state in the view since this is the only place in the app that have both of them, this will be specially problematic in large apps.

<br/><br/>

KISS