npm init -y
npm i typescript --save-dev
npx tsc --init // (without above npm i typescript --save-dev this won't work) or do this  npm install -g tsc to globally add this once

// -- use  @tsc-ignore on above any line to escape typescript 


// --------- problem with package.json and tsconfig file is 

Module system mismatch: The package.json was set to CommonJS, but the code used ES module imports. 
    I changed "type" to "module" and adjusted the TypeScript configuration to use "module": "nodenext" and "moduleResolution": "nodenext" for proper ES module support in Node.js.


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

      
      
      
