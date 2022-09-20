<h5 align="center">
    <img src="docs/webpackimporter.png">
</h5>

## 📚 About
🚀 Lightweight and easy to use importer to work on webpack using aseprite assets.

## 🔎 Features
- Its just one file
- Can load and handle multiple atlas files
- Edit all your sprites names directly on aseprite

## 💻 Usage
Use the export feature on aseprite (Ctrl+E) to export your atlas.png with the json in your project folder
```jscript
//Import the assets.js

import { asepriteConfig } from './assets.js';

//Import the files in your index

import atlasImg from '../assets/img/testAtlas.png';
import atlasJson from '../assets/atlas-sources/atlas.json';

//Then simply use the asepriteConfig to initialize all your atlas data

asepriteConfig([atlasImg], [atlasJson]);

//You can then start calling the createAsset function in any script you want

import { createAsset } from './assets';

createAsset({atlas:"Atlas Number", name:"Sprite Name", size:"Sprite Size", x:"X Position", y:"Y Position"}, "Your canvas context", Callback(Info, Image));
```

## 📌 License
This project is under the GPL-3.0 License. Take a look at the [LICENSE](LICENSE) file for more details.