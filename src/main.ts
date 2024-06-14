import kaplay from "kaplay"
import "kaplay/global"

kaplay({
	width: 800,
	height: 600,
	stretch: true,
	letterbox: true,
})

import { gamescene } from "./gamescene"

function loader() {
	loadSprite("osaka", "assets/osaka.png")
	loadSound("music", "assets/music.ogg")
	loadSound("click", "assets/saataandagi.ogg")

	gamescene()
}

loader()
go("gamescene")