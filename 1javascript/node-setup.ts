npm init -y
npm i typescript --save-dev   or $ npm install --save-dev typescript @types/node

npx tsc --init // (without above npm i typescript --save-dev this won't work) or do this  npm install -g tsc to globally add this once

// -- use  @tsc-ignore on above any line to escape typescript 


// --------- problem with package.json and tsconfig file is 

Module system mismatch: The package.json was set to CommonJS, but the code used ES module imports. 
I changed "type" to "module" and adjusted the TypeScript configuration to use "module": "nodenext" and "moduleResolution": "nodenext" for proper ES module support in Node.js.

    //changes need to be done to package.json and tsconfig.json 

    type: "module"  // in package.json

// tsconfig.json
"module": "nodenext",
"target": "esnext",

    // ============= tsconfig options comparison ======

    Key Differences:
module: "nodenext" vs "ESNext"
nodenext:

✅ Node.js-specific - Follows Node.js module resolution exactly
✅ Enforces .js extensions in imports (by design)
✅ Hybrid support - Handles both ESM and CommonJS based on package.json
✅ Best for Node.js apps - Most accurate for Node.js runtime
ESNext:

⚠️ Generic ES modules - Not Node.js-specific
⚠️ Doesn't enforce .js extensions - More lenient
⚠️ May compile but fail at runtime in Node.js
👍 Good for bundlers (webpack, esbuild) that handle resolution


target: "esnext" vs "ES2020"

esnext:
Latest ECMAScript features (moving target)
Changes as new ECMAScript versions release
Minimal transpilation

ES2020:
Fixed to ES2020 features
Stable, won't change
Good browser/Node.js compatibility (Node 14+)
    
Which to use?
Your current config (BETTER for Node.js):
✅ Correct Node.js module behavior
✅ Latest JS features
✅ Requires .js extensions (as designed)

Alternative config:
⚠️ Skips .js extensions but may cause runtime errors
⚠️ Less strict, might miss issues
👍 Only use with bundlers

Recommendation: Stick with "module": "nodenext" for Node.js projects - it's the most accurate and prevents runtime surprises!

// ------------- redis ---------
$ docker run -d -p 6379:6379 redis    
docker exec -it 08b4b25517aa redis-cli

    
// ------------- index.js--------

import express from 'express';
const app = express()
const PORT = 3000;


app.get('/',(req,res) =>{
    console.log('received request', req)
    res.send('Hello from Express home route!    ');

})

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})



// -------- tsconfig--------- 
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    // "module": "nodenext",
    "module": "esnext",
    "target": "esnext",
    "types": ["node"],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,




      // ---------- package.json --------

  "scripts": {
    "build": "tsc -b",
    "start": "node ./dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

// ---------- adding .env.local, cors ----------
      npm i dotenv @types/dotenv cors @types/cors

import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '.env.local' });

const app = express()
app.use(cors({ origin: 'http://localhost:8081' }));

      
      
      
