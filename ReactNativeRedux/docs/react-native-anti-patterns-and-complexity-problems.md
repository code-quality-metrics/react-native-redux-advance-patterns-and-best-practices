# React native anti patterns and main problems

Some of the worst architectural anti patterns I've found in real world apps that adds complexity

## Separation of router state and App state

Using the view to run app logic that glues router state and app state to redirect.

Efficiency cost of this needless extra rendering.

Complexity of logic flow spread all around.

Race conditions with deep linking redirection between router and thunks, and the need to prepare views to render without data due to this.

## Separation of actions and reducers complexity

[Actions and reducers separation redux](./actions-and-reducers-separation-redux.md)

## Network middleware

Look like using a network middleware is common on Redux world, explore this a bit more...

Is using a Network middleware creates a simpler/better architecture than using just an API library?

Do not trigger actions from within a network middleware, this creates a huge complexity problem.

How to handle general errors from APIs that trigger same actions without fucking up the app?

## Network detection & Retrying

How to handle network detection & retrying?

## Using components as Controllers

People that doesn't love themselves creates components wait for mounting and then triggers app logic.

Most probably your component doesn't need to exist, hook up directly to the store!
