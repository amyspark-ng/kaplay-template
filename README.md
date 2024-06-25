# Kaplay Template (by amyspark-ng & niceEli)
Template for the web game library [KAPLAY](https://kaplayjs.com/), which helps you to make games fast and fun!
* Running `kaplay v3001.0.0-alpha.10`

It works with vite and tauri for desktop builds

## Development
### Structure
- `/src` is code<br>
- `/src-tauri/` contains:
	- build folders<br>
	- window settings (`tauri.conf.json`)<br>
- `/assets` has all the assets, to load one you'd do `loadSprite("osaka", "sprites/osaka.png")` no need for `loadRoot()`

### Building
- **`pnpm dev`** runs the game in a window
- **`pnpm build`** builds the game and puts it in `/src-tauri/target/release`
	- `web:` can be put before both for web development

- If you use vscode tasks they will be put in `builds` folder
^ Also has support for butler and sending builds to itch.io

### Setup
1. Have a pc
2. Have node downloaded
3. Have rust downloaded (to use tauri)
4. Have pnpm downloaded (for managing packages)
5. Clone this using `git clone https://github.com/amyspark-ng/kaplay-template`, remember to update the remote if you're planning to use github!
6. After downloading, do `pnpm install` on the root of the project on a **cmd** (command prompt) to install all the dependencies needed for it to work
7. After that, you're going to do `pnpm dev` or `pnpm web:dev`<br>
^ `pnpm dev` for desktop might take a bit the first time
8. When you're done working, you can do `pnpm build` or `pnpm web:build` to build the project
	* **WEB**: It will be on `/dist/`, you can zip it _(having the index.html on the root)_ and upload it to itch.io or newgrounds if you wish
	* **DESKTOP**: It will be on `src-tauri/target/release/`, only the .exe file is needed to run the game.<br>
	^ If you want an installer such as `msi` or `nsis` they're on `src-tauri/target/release/bundle/`

^ You can use the vscode tasks i've set up to zip them and send them to `/builds/`, there's also one for zipping and sending directly to itch.io!<br>

9. That's it! Happy coding ;)

### **BIG NOTE:** <br>
Desktop builds are 100% safe, don't believe me? You're looking the repository with the source code for the template, and also:<br>
* Here's the source code of tauri (for desktop builds): https://github.com/tauri-apps/tauri<br> 
* Here's the source code of vite (for rendering): https://github.com/vitejs/vite<br>
* Here's the source code of pnpm: https://github.com/pnpm/pnpm<br>

If you want windows defender to not bother you, you'll have to pay a very very expensive fine!!
* https://signmycode.com/windows-code-signing

## Other
### Game identification: 
- Please update your product name and identifier on `src/tauri/tauri.conf.json`<br>
> https://tauri.app/v1/api/config/
Recommend searching for "name_here" or "your name here" or similar things 
- You can get the icons replacing the [app-icon.png](app-icon.png) with a square image and doing `pnpm tauri icon` or `cargo tauri icon` and it should generate them for you, tauri.conf.json is configured for them to work
- "Save file" is in `%localappdata%/${bundle.identifier}/EBWebView/Default/Local Storage/leveldb`
	- **NOT EDITABLE**
- Conditional compiling: 
	- Desktop: `'__TAURI__' in window`

### Dev:
- It automatically updates on save, also uses any npm client
- Can use typescript AND javascript (as long as it's module and not cjs)
- Is hosted on localhost:8000
^ You can change it in `vite.config.mts` in `server.port`

<br>

![Repost if you dip your  in the wendy's frosty](app-icon.png "Repost if you dip your  in the wendy's frosty")