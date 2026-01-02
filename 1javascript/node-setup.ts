npm init 
npx tsc --init
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

      
      
      
