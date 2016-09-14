<img src="http://www.reactjsprogram.com/images/reactjsprogram-500.png" width="250" align="right">

React.js Program's "React Native" course Curriculum
========

####For more information on React.js Program, [click here](http://reactjsprogram.com)

##Objective
Build a functioning Polls app with React Native on Android and iOS.

<img src="http://www.reactjsprogram.com/images/PollsPreview.gif" width="480" height="433">

## Notes
The goal here is to give you just enough guidance for you to struggle without drowning. Note that the steps below are just suggestions. The ideal situation is you look at the completed project, then you build it. However, if you're not up for such things, feel free to follow the (vague by design) steps below. If you get stuck, all steps have coinciding branches for you to reference as a last case scenario.

##Step 0: Examine the Final Product
 * You'll be building the app in the GIF above. Get familiar with it's functionality, the different route transitions, how it differs on iOS and Android.

##Step 1: /HelloWorld
Before we dive into building the app, let's just make sure we have a Hello World app working on both Android and iOS.

 * Create a new project using react-native init
 * Create and configure your .babelrc file if you want babel-root-import
 * Create an app directory and in your app directory create and configure your index.js file
 * Have index.android.js and index.ios.js render your 'app/index.js' file
 * Verify your app works on both Android and iOS (if you're building for both platforms)

##Step 2: /FacebookSDK
We're going to use Facebook to Authenticate. Let's install the Facebook SDK into our React Native app so we can do that.

 * npm install --save react-native-fbsdk
 * Follow [this guide](https://medium.freecodecamp.com/installing-the-facebook-sdk-into-a-react-native-android-and-ios-app-69439bd97a99#.1njr8v2ye)
 * Add a LoginButton from react-native-fbsdk to your index.js view to verify you properly installed the SDK.

##Step 3: /FirstRoute
Let's have Navigator control our routes now.

 * Create a Splash view which just renders "Splash" for now.
 * Create a PollsNavigator component which is going to handle routing and route transitions. Have renderScene return the Splash view you just created.
 * Have configureScene render its default transitions for both android and iOS.
 * Create an AppContainer component which will be the main root file of your app and have it render your Navigator you just created.

## Step 4: /PreSplash
Let's create our PreSplash view that is going to be shown as the app checks that we're authenticated.

 * First create some universal styles for your app. Create a 'app/styles/index.js' file and export two objects from it, 'colors' and 'fontSizes'. Add appropriate properties to each.
 * Find a logo for your App and save it under 'app/images/logo.png'. You can use the one I use located [here](https://github.com/ReactjsProgram/React-Native-Curriculum/blob/progress/app/images/logo.png)
 * Create a PreSplash component which is going to just render your logo. Add some animations to it to give the user some feedback.
 * In AppContainer add a default prop of 'isAuthenticating' and set it to true. Now instead of rendering your Navigator, only render your Navigator if 'this.props.isAuthenticating' isn't true. If it is true, then render your PreSplash component you just created.

## Congrats!
If you got through this, great job. If you're reading this and you've made it this far, be proud. This was a pretty advanced project. Take a look at my code and compare to what we did differently.

<img src='http://www.reactjsprogram.com/images/tyler-mcginnis.png' width="100px" align="left"/> Suggestion or just want to say thanks? You can find me on Twitter at [@tylermcginnis33](http://twitter.com/tylermcginnis33)