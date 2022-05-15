# ls-command
 This is my interpretation of the ls command created with node. It's a customised command called 'dls' that will list all the files in a directory. These files will also show up in a color-coded pattern, just like the way it does for the regular ls command. The files willbe colored pink, and the directories, maroon. 
 
<h3>Issues faced & resolution:</h3>
I got a couple of errors when trying to use the chalk package because it's an ES6 module. The main error I was getting was: <strong>Error [ERR_REQUIRE_ESM]: Must use import to load ES Module</strong>. 


I resolved this by adding the line, <strong>"type": "module"</strong> to my package.json file and changing the way I added my packages: switched from require to import.

<h3>Technology used:</h3>

- HTML
- CSS
- JavaScript
- GitHub
- Netlify
- The Chalk package

<h3>Link to site:</h3>

<h3>Screenshot:</h3>
