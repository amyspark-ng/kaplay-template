import { GameObj } from "kaplay";

let score = 0
let scoreText:GameObj;

function spawnOsakas(amount = rand(10, 15)) {
	for (let i = 0; i < amount; i++) {
		add([
			sprite("osaka"),
			anchor("center"),
			pos(vec2(rand(0, width()), rand(scoreText.height + 10, height() - 50))),
			area(),
			scale(rand(0.1, 0.15)),
			"osaka",
		])
	}
}

export function gamescene() {
	return scene("gamescene", () => {
		score = getData("score") ? getData("score") :  0

		let hasStartedGame = false

		add([
			rect(width(), height()),
			color('__TAURI__' in window ? BLUE : RED),
			anchor("center"),
			pos(center()),
		])

		scoreText = add([
			text("", {
			}),
			pos(),
			anchor("topleft"),
			color(BLACK),
			z(2),
			{
				update() {
					this.text = `Score: ${score}\nOsakas left: ${get("osaka").length}`
				}
			}
		])

		spawnOsakas()

		onClick("osaka", (osaka) => {
			if (!hasStartedGame) {
				hasStartedGame = true
				play("music", { loop: true })
			}

			destroy(osaka)
			score++
			
			// play("click", { detune: rand(-100, 100) })
			if (get("osaka").length == 0) {
				spawnOsakas()
				setData("score", score)
			}
		})
	})
}