// commands
npx create-expo-app@latest --template react-navigation/template 
// used to create cricheros1 app with feed and updaes in bottome fotter section and profile and settings as buttons in middle of the page

// --------- navigation/screens/home.tsx showing the text and profile and settings buttons on clicking them will show that screens ----

// ========== how the layout formed ================

// the given code was having app returning <navigator /> element which was created from 


const HomeTabs = createBottomTabNavigator({      // home and updates will appear at footer b/c of createBottomTabNavigator
  screens: { 
          Home:{}
          updates: {}
          }
}

const RootStack = createNativeStackNavigator({
  screens: {

    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },

    profile:{},
    
    settigns:{
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
  
    NotFound:{}
  }

export const Navigation = createStaticNavigation(RootStack);  
// HomeTabs build with createBottomTabNavigator used in RootStack which is built with createNativeStackNavigator, which is used in creating Navigation component using createStaticNavigation

// the layout is determined by the Navigator types you chose and how they are nested.
// Logic: By design, this navigator renders a persistent tab bar at the bottom of the screen.
// The Component: HomeTabs wraps the Home and Updates screens. As long as you are "inside" the HomeTabs section of your app, that footer will remain visible.

//  The reason Profile and Settings appear in the "middle" (or cover the whole screen) is that they are siblings to the HomeTabs inside the RootStack.

// Nesting Logic: Your RootStack is the top-level container. It treats HomeTabs, Profile, and Settings as separate "pages."

// Layering: When you navigate from Home to Profile, the Stack Navigator pushes the Profile screen on top of the entire HomeTabs interface.

// Modal Behavior: For Settings, you specifically added presentation: 'modal'. On iOS, this makes the screen slide up from the bottom and sit in the "middle" or top of the view with rounded corners, partially overlaying the screen behind it.

Component	NavigatorType	        Visual Result
HomeTabs	BottomTabNavigator	  Displays a Footer bar with icons for "Home" and "Updates".
Profile	  NativeStackNavigator	Pushes a new full-screen over the tabs.
Settings	NativeStackNavigator	Opens as a Modal (overlay) because of the presentation: 'modal' option.

// // ----------How the "Switch" Happens
In your RootStack configuration:

If the active route is HomeTabs, you see the footer.

If you navigate to Profile, the Stack Navigator says: "I will now hide the HomeTabs component and show the Profile component instead." Because Profile is not a screen inside HomeTabs, it does not "inherit" the footer.

When Profile is a sibling of Home inside the HomeTabs, the Tab Navigator manages it. This means:
Persistent UI: The tabBar remains rendered at the bottom.
State Preservation: Switching between "Feed" and "Profile" doesn't "unmount" the tab bar.  

Key Considerations
The "Back" Button: When Profile is inside the tabs, it usually won't show a "Back" arrow in the header because the Tab Navigator treats screens as top-level destinations.
The Settings Modal: If you keep Settings in the RootStack, it will still slide up and cover the tabs. This is standard UX practice (e.g., the Instagram or Twitter settings usually cover the bottom navigation).

  // -------- diff b.w createNativeStackNavigator v/s createStaticNavigation --------

  createNativeStackNavigator defines what the navigation looks like (the UI), while createStaticNavigation defines how the app is initialized (the Logic).

  It is easy to get these two confused because they share similar names, but they serve completely different purposes. createNativeStackNavigator defines what the navigation looks like (the UI), while createStaticNavigation defines how the app is initialized (the Logic).

1. createNativeStackNavigator (The "What")
This is a Navigator. It creates a stack-based navigation pattern where new screens slide in from the right (on iOS) or fade/slide up (on Android).
What it does: It uses the native APIs of iOS and Android (UINavigationController and Fragment) to provide smooth, high-performance transitions that feel like "real" apps.
Where to use it: Use it whenever you want a standard screen-to-screen flow (e.g., clicking a list item to see its details).
Location: Usually defined as a variable (like RootStack) to list out your screens.

2. createStaticNavigation (The "How")
This is a Utility function introduced in React Navigation 7 to simplify how you wrap your app.
What it does: It takes your configured "Static" navigator (like the RootStack in your code) and turns it into a valid React Component that you can render in your App.tsx.
The "Static" shift: In older versions, you had to manually create a <NavigationContainer> and nest <Stack.Navigator> and <Stack.Screen> components. createStaticNavigation automates this based on a JavaScript object.
Where to use it: Use it exactly once in your entry file (usually App.tsx or index.js).


// // How they work together
In your specific code, you are using the Static API flow. Here is the lifecycle:

Define the UI: You use createNativeStackNavigator to define the screens.
const RootStack = createNativeStackNavigator({ screens: { ... } });

Initialize the App: You pass that definition into createStaticNavigation.
export const Navigation = createStaticNavigation(RootStack);

Render: In your App.js, you simply render <Navigation />.

You don't choose between them—you use them together(createNativeStackNavigator, createStaticNavigation). 
However, you must choose between the Static API (what you are using) and the Component API.

Use Static (Your current way): If you want a clean, object-based configuration and automatic Type-Script support for your routes.
Use Component (Old way): If you need to dynamically change the screens or the navigator structure based on complex logic inside the render function.
  
//============== defenitions


// questions



// 
