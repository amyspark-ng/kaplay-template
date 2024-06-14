
# Development
## Structure
- `/src` is code<br>
- `/src-tauri/` contains:
  - build folders<br>
  - window settings (`tauri.conf.json`)<br>
- `/public/assets` is all the assets<br>

## Building
- **`pnpm dev`** runs the game in a window
- **`pnpm build`** builds the game and puts it in `/src-tauri/target/release`

`web:` can be put before for web development

## Other
- It automatically updates on save and uses any npm client
- Can use typescript AND javascript (as long as it's module and not cjs)