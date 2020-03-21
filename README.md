# React Native Redux Advanced Patterns and Best Practices

An in-depth exploration of React Native and Redux, the idea is to create a best practices guide and avoid the Flux/Redux pain points as much as possible.

## TL;DR

Redux doesn't improve much on the original Flux design by facebook, you are better find a library with a single store, decent state management and the router state inside the app state like Mobx, Cerebral.js, Vuex, Baobab.js, etc.

If you don't have an option because "Redux is Industry Standard"(It's not) then follow our practial "Lipstick on a Redux" Guide :)

## Original Flux

In order to know better flux and react we will quickly go through some history and leasons learned using React + The original Flux dispatcher.

We know the many benefits or unidirectional data flow vs MVC in the frontend, so that's not covered here.

![Original Flux 0](./ReactNativeRedux/docs/original-flux-0.png)

View triggers actions, actions can be synchronous or asynchronous and can dispatch n ammount of times, simple right?

![Original Flux 1](./ReactNativeRedux/docs/original-flux-1.png)

One of the first problems we encounter when using Flux is that you need to plan how to organize your state in different stores. E.g. UserStore, TodosStore, SettingsStore.

The problem with this is that you will eventually find that one store requires another store to finish processing before being able to process its own state thus creating a dependency between store, this can be solved in two ways:

1) Refactor your state in a way you don't need to use waitFor, but now you are designing your state based on "not having stores dependendencies" which could lead to "inconsistent design as your application grows" [waitFor leads to wrong design](https://github.com/facebook/flux/issues/209), (this looks like the preffered solution by most people, Redux doesn't even seems to have it).

2) Add waitFor to your stores.

More reading on this: [Combining stores](https://gist.github.com/gaearon/d77ca812015c0356654f).

The other big problem with having several stores is about readability, in the Original Flux you can have an action `updateTodoAction` that triggers several actions like `updateTodoStarted`, `updateTodo`, `updateTodoFinished`, if you open it, you won't know what this causes in the state, your dispatches could be potentially used in 25 different stores (or reducers) which makes it really hard to create a mental picture of what happens in that action.

More reading about this on Redux: [Actions and Reducers Separation Redux](actions-and-reducers-separation-redux.md)

![Original Flux 2](./ReactNativeRedux/docs/original-flux-2.png)

One big step taken into the right direction was to use a single store, libraries like [Baobab.js](https://github.com/Yomguithereal/baobab) and [Immutable.js](https://github.com/immutable-js/immutable-js) killed the pain of having to think about multiple stores, you have actions that directly manipulate the state converting the actions into an isolated unit of effects, you only need to open one file to know everything there is to know about that action! You can also ready more about that here [Actions and Reducers Separation Redux](actions-and-reducers-separation-redux.md).

![Original Flux 3](./ReactNativeRedux/docs/original-flux-3.png)

TODO...

![Original Flux 4](./ReactNativeRedux/docs/original-flux-4.png)

TODO...