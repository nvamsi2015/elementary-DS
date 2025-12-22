git clone
npm install
npx prisma generate
npm run build
// "scripts": {               this is what i had in package.json
//     "build": "tsc -b"
//   },
// }
node dist/index.js   // to run the application from  build file instead of using docker

// ----------- to start the server using docker -------------

create a file named Dockerfile in the root directory of your project and add the following code to it:

// -------- deployment errors ----------
https://nextjs.org/docs/messages/failed-to-find-server-action
