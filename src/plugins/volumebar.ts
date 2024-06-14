
// import { Key } from "kaplay";
// import { GameState } from "../gamestate.ts"

// let bg;
// let volumeText;
// let soundElements;
// let volumeBars;

// export function addSoundElements() {
// 	bg = add([
// 		rect(width() / 6, 80, { radius: 2.5 }),
// 		pos(width() / 2, 0),
// 		anchor("top"),
// 		color(BLACK),
// 		stay(),
// 		opacity(0.75),
// 		z(999999999),
// 		"volElement",
// 	])
	
// 	volumeText = bg.add([
// 		text("VOLUME"),
// 		pos(0, bg.height - 12),
// 		anchor("center"),
// 		scale(0.6),
// 		z(9999999999),
// 		"volElement",
// 		{
// 			update() {
// 				if (GameState.sound.volume > 0) this.text = `VOLUME ${GameState.sound.volume.toFixed(1) * 100}%`
// 				else this.text = "MUTED"
// 			}
// 		}
// 	])

// 	// bars
// 	for (let i = 0; i < 10; i++) {
// 		bg.add([
// 			pos(-67 + i * 15, 30),
// 			rect(10, bg.height - 40, { radius: 1 }),
// 			opacity(0),
// 			anchor("center"),
// 			z(99999999999),
// 			"volElement",
// 			"bar",
// 			{
// 				volume: 0.1 * (i + 1),
// 				update() {
// 					if (GameState.sound.volume.toFixed(1) < this.volume.toFixed(1)) this.opacity = 0.1
// 					else this.opacity = 1
// 				}
// 			}
// 		])
// 	}

// 	soundElements = get("volElement", { recursive: true })
// 	volumeBars = get("bar", { recursive: true })
// }

// export function volumeManager() {
// 	volume(GameState.sound.volume)
	
// 	let changeVolTune = 0
// 	let waitingTimer = wait(0)

// 	let soundManager = add([
// 		stay(),
// 		{
// 			update() {
// 				GameState.sound.volume = GameState.sound.volume.toFixed(1)
// 				GameState.sound.volume = parseFloat(GameState.sound.volume)
// 				changeVolTune = map(GameState.sound.volume, 0, 1, -250, 0)

// 				if (isKeyPressed("-")) {
// 					if (GameState.sound.volume > 0) {
// 						GameState.sound.volume -= 0.1
// 						volume(GameState.sound.volume)
// 					}
// 					this.trigger("show")
// 				}

// 				else if (isKeyPressed("+")) {
// 					if (GameState.sound.volume <= 0.9) {
// 						GameState.sound.volume += 0.1
// 						volume(GameState.sound.volume)
// 					}
// 					this.trigger("show")
// 				}
// 			}
// 		}
// 	])

// 	soundManager.on("hide", () => {
// 		if (get("volElement").length === 0) return
		
// 		soundElements.forEach(soundElement => {
// 			destroy(soundElement)
// 		});
// 	})

// 	soundManager.on("show", () => {
// 		if (get("volElement").length === 0) addSoundElements()

// 		waitingTimer.cancel()
// 		waitingTimer = wait(1, () => {
// 			soundManager.trigger("hide")
// 		})
// 		play("volumeChange", { detune: changeVolTune })
// 	})

// 	onCharInput((ch) => {
// 		let n = parseInt(ch)
// 		// is a number
// 		if (!isNaN(n)) {
// 			GameState.sound.volume = n / 10
// 			volume(GameState.sound.volume)
// 			soundManager.trigger("show")
// 		}			
// 	})

// 	return soundManager;
// }