# ls-command
 This is my interpretation of the ls command created with node. It's a customised command called 'dls' that will list all the files in a directory. These files will also show up in a color-coded pattern, just like the way it does for the regular ls command. The files will be colored magenta, and the directories, cyan. 
 
<h3>Issues faced & resolution:</h3>
I got a couple of errors when trying to use the chalk package because it's an ES6 module. The main error I was getting was: <strong>Error [ERR_REQUIRE_ESM]: Must use import to load ES Module</strong>. 


I resolved this by adding the line, <strong>"type": "module"</strong> to my package.json file and changing the way I added my packages: switched from require to import.

<h3>Technology used:</h3>

- JavaScript
- GitHub
- The Chalk package


<h3>Screenshot:</h3>
<img width="580" alt="Screen Shot 2022-05-15 at 6 45 31 PM" src="https://user-images.githubusercontent.com/40691059/168478791-c13142a0-285b-4925-8cce-9097609dfa20.png">
