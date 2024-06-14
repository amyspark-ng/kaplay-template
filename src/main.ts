import kaplay from "kaplay"
import "kaplay/global"
import { loadEverything } from "./loader"

kaplay({
	width: 1024,
	height: 576,
	stretch: true,
	letterbox: true,
})

loadEverything()

go("gamescene")