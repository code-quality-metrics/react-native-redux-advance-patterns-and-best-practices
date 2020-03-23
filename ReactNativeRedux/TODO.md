# TODO

- [x] Add Redux
- [x] Add react-navigation
- [x] Implement Login
- [x] Show State in React Native Dev Tools
- [x] Add firebase SDK
- [x] Implement user login without redux using firebase
- [x] How to know if a user is logged in in Firebase?
- [x] Remove semicolons
- [x] Hoes does the user object looks like? => {x:'D'}
- [x] Designed data for user in redux store
- [x] Create user and firebase actions and reducers
- [x] Where should we put external events? => ./events
- [x] Trigger a firebase action on firebase.onAuthStateChanged
- [x] Integrate firebase with Redux user and firebase
- [x] Send to master and change docs
- [x] Quick React Navigation reading
- [x] Which navigator is best for this app? => Switch + Stack
- [x] Add switch navigator for login flow
- [x] Redirect logged in user to homepage when logged in
- [x] Fix prettier
- [x] Pivot to BoomAndBust
- [x] Add settings button to menu
- [x] Create settings page
- [x] Add logout button to settings page
- [x] Add Detox
- [x] Fix firebase bug
- [x] Add action naming consistency rule
- [x] Create documentation about the consequences of redux action/reducer separation and compare it with React + Baobab.js
- [x] Block upturn code references
- [x] Implement user is logged out detection on startup
- [x] Implement login with Thunks
- [x] Redirect logged in user to SignUp when not logged in
- [x] Implement Logout with Thunks
- [x] Document that thunks are not considered actions by Redux, hence they don't log (they don't have types)
- [x] Use the event listener of firebase both for login and logout to avoid replicating logic
- [x] Define goals of Code Quality
- [x] Define the app to be constructed
- [x] Use BuilderX and find out how good is it and its limits
- [x] => Good to spit code but you have to refactor the code on each copy/paste, better to design first and code after design if final to avoid extra work

- [ ] Design the App on BuilderX

- [ ] Add Native Base
- [x] How to show Errors on the login/signup screen? => lets just show them on a pop up
- [ ] Create a popup system
- [ ] Create login screen with Native Base
- [ ] Integrate Native Base in Signup/Login flow
- [ ] Create user settings View with Native Base

- [ ] Talk with David the wide range of signup/login protocols there are


- [ ] Add Router Complexity
- [ ] Create a bunch of screen to create routing complexity
- [ ] Add deep linking into a page with tabs to create more routing complexity
- [ ] Create a needs to render a component just to glue router and app state and then redirect or something

- [ ] Reducer complexity

- [ ] Network Middleware Complexity
- [ ] Create a Network Middleware
- [ ] Create same Network libray
- [ ] Trigger action from withing the network middleware using interceptors

- [ ] Create an unecessary View controller component

- [ ] Create a map of the app

- [ ] Research selectors https://github.com/reduxjs/reselect
- [ ] Fix inconsistencies with prettier and eslint

- [ ] Find out about catching on thunks and react https://github.com/facebook/react/issues/6895, https://github.com/facebook/react/issues/6895#issuecomment-281405036, https://github.com/facebook/react/issues/7617
- [ ] Add error screen
- [ ] Document the naming of actions, what happened vs what does it do?
- [ ] Move to https://rnfirebase.io/
- [ ] Add redux forms, we want to log what the user is doing in actions! document it

- [ ] Create the ideal App using Redux

- [ ] Create a better app using just vainilla JS

- [ ] Add https://logrocket.com/
- [ ] Read about AppsFlyer
- [ ] https://redux-observable.js.org/

## Later

- [ ] Research about performance https://reactjs.org/docs/perf.html
- [ ] native loading screen + also RN loading?

## Boilerplates

https://blog.nativebase.io/launching-react-native-dating-app-with-backend-539400d1aea6

## Other Frameworks

https://mobx.js.org/README.html

## Routing

https://wix.github.io/react-native-navigation/#/docs/Usage
https://medium.com/@sibelius/how-we-save-1m-hours-of-development-using-react-navigation-3681f2f907c9
https://blog.expo.io/re-writing-react-navigation-stack-db6a376522b1
https://medium.com/async-la/a-stately-guide-to-react-navigation-with-redux-1f90c872f96e
https://medium.com/@jan.hesters/building-a-react-native-app-with-complex-navigation-using-react-navigation-85a479308f52
https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b