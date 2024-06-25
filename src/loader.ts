import { gamescene } from "./scenes/gamescene.ts"

export function loadEverything() {
	loadSprite("osaka", "osaka.png")
	
	loadSound("volumeChange", "sounds/volumeChange.wav")

	loadSound("music", "sounds/music.ogg")
	loadSound("click", "sounds/saataandagi.ogg")

	gamescene()
}