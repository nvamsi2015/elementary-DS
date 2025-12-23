
//  =========== commands for stickersmash ================
npx create-expo-app@latest StickerSmash
cd StickerSmash

Template	                  Description
default	          Default template. Designed to build multi-screen apps. Includes recommended tools such as Expo CLI, Expo Router library and TypeScript configuration enabled. Suitable for most apps.
blank	            Installs minimum required npm dependencies without configuring navigation.
blank-typescript	A Blank template with TypeScript enabled.
tabs	            Installs and configures file-based routing with Expo Router and TypeScript enabled.
bare-minimum	    A Blank template with native directories (android and ios) generated. Runs npx expo prebuild during the setup.


  // =========== --example  ================
  
Use this option to initialize a project using an example from expo/examples.

For example:

Running npx create-expo-app --example with-router sets up a project with the Expo Router library
Running npx create-expo-app --example with-react-navigation sets up a project similar to the default template, but configured with plain React Navigation library

// ========= reset-project script to remove the boilerplate code:

npm run reset-project

npx expo start

// ============ Adding navigation for sticersmash app =======


We'll add a bottom tab navigator to our app and reuse the existing Home and About screens to create a tab layout (a common navigation pattern in many social media apps like X or BlueSky).
  We'll also use the stack navigator in the Root layout so the +not-found route displays over any other nested navigators.

// ============ building screen =========

npx expo install expo-image
