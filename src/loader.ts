import { gamescene } from "./gamescene"

export function loadEverything() {
	loadSprite("osaka", "assets/osaka.png")
	
	loadSound("volumeChange", "assets/volumeChange.wav")

	loadSound("music", "assets/music.ogg")
	loadSound("click", "assets/saataandagi.ogg")

	gamescene()
}