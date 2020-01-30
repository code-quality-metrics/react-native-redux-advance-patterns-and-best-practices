# React Native Redux Best Practices

## ![✔] 1 Don't use react-navigaton or alike

**TL;DR:** Don't use react-navigation, having a second state for the navigator creates the necessity of using the view as the glue between Redux state and Navigation state, we recommend using https://github.com/faceyspacey/redux-first-router, this makes navigation part of Redux state simplifying everything.

**Otherwise:** You will find yourself with a huge nested navigator, triggering navigation changes from different parts of your code and writting logic that needs both the navigation state and the redux state in the view since this is the only place in the app that have both of them, this will be specially problematic in large apps.

<br/><br/>

## ![✔] 2 Name your actions consistently

In the Flux world there are two main ways of naming actions, the name of the event, or the name of the effects or sequence of events that is being triggered, its common to mix those two in applications so choose one and stick with it.

### Name of events

- loginFormSubmitClicked
- logoutButtonClicked
- newGameDataReceived
- userModalButtonClicked

### Name of effects

- loginUser
- logoutUser
- appendNewGameDataToGameHistory
- openUserModal

Originally was common to see the name of events in Flux applications, but more and more and opting to use the name of the effects, this one in MHO appears to have the most information compacted in the name, you can deduce more easily what trigger the effects than what is going to happen.

In large applications its a good idea to prepend the name of the action with its module or whatever unit of separation of concerns you use e.g.

`AD::TRACK_VIEW_REQUEST`
or
`[AD] TRACK_VIEW_REQUEST`

TODO: Do not use the view to access the store if it is not necessary

TODO: KISS