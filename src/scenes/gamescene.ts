// import { volumeManager } from "./plugins/volumebar"

import { addConfetti } from "../plugins/confetti.ts"
import { positionSetter } from "../plugins/positionsetter.ts"

export function gamescene() {
	return scene("gamescene", () => {
		// volumeManager()
		
		add([
			sprite("osaka"),
			anchor("center"),
			pos(center()),
			positionSetter(),
		])

		addConfetti({ pos: center() })
		
		onClick(() => {
			addConfetti({ pos: center() })
		})

		if ('__TAURI__' in window) debug.log("running on desktop!!")
	})
}