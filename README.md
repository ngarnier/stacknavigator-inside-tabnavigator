This repo is meant to reproduce a bug on Android when using a StackNavigator inside a TabNavigator.

# Reproduction of the bug

`npm install`  
`npm start`  

Then, launch the app on Android (using an emulator like Genymotion or a real device). Navigate to the second ('World') tab. This error should be displayed (if you use development mode, otherwise the app will just crash):

```
Cannot add a child that doesn't have a YogaNode to a parent without a measure function! (Trying to add a 'ReactRawTextShadowNode' to a 'LayoutShadowNode')
```

# Origin of the bug

The bug is triggered by the fact that in the StackNavigator in `./src/components/World/index.js`, the route is using the following option (you can notice the bug doesn't happen on the "Hello" tab, which is not using this option): 

```
    navigationOptions: {
      header: 'none',
    }, 
```