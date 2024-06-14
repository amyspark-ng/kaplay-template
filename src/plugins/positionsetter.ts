export function positionSetter() {
	let offset = vec2()
	
	return {
		id: "setterAnimation",
		require: [ "pos" ],
		distance: 1,
		beingPositioned: false,
		isMouseInside() {
			// Calculate the object's bounding box
			let minX, minY, maxX, maxY;

			// Adjust coordinates based on the anchor point
			switch (this.anchor) {
				case 'topleft':
					minX = this.pos.x;
					minY = this.pos.y;
					maxX = this.pos.x + this.width;
					maxY = this.pos.y + this.height;
				break;
				case 'center':
					minX = this.pos.x - this.width / 2;
					minY = this.pos.y - this.height / 2;
					maxX = this.pos.x + this.width / 2;
					maxY = this.pos.y + this.height / 2;
				break;
				// Add more cases for other anchor points if needed
				default:
					// Default to 'topleft' if anchor point is not recognized
					minX = this.pos.x;
					minY = this.pos.y;
					maxX = this.pos.x + this.width;
					maxY = this.pos.y + this.height;
				break;
			}

			// Check if mouse coordinates are within the bounding box
			return mousePos().x >= minX && mousePos().x <= maxX && mousePos().y >= minY && mousePos().y <= maxY;		
		},
		update() {
			if (this.parent.is("setterAnimation")) return
			
			if (isKeyDown("shift") && isKeyDown("control")) this.distance = 50
			else if (isKeyDown("shift")) this.distance = 5
			else if (isKeyDown("control")) this.distance = 10 
			else this.distance = 1

			if (isKeyPressedRepeat("up")) {
				this.pos.y -= this.distance
				debug.log(this.pos)
			}
			
			if (isKeyPressedRepeat("down")) {
				this.pos.y += this.distance
				debug.log(this.pos)
			}

			if (isKeyPressedRepeat("left")) {
				this.pos.x -= this.distance
				debug.log(this.pos)
			}
				
			if (isKeyPressedRepeat("right")) {
				this.pos.x += this.distance
				debug.log(this.pos)
			}

			if (isMousePressed("left")) offset = mousePos().sub(this.pos) 
			if (isMouseDown("left") && this.isMouseInside()) {
				
				this.pos = mousePos().sub(offset)
				
				this.pos.x += mouseDeltaPos().x
				this.pos.y += mouseDeltaPos().y
				debug.log(this.pos)
			}
		},
		draw() {
			if (!this.isMouseInside()) return
			drawRect({
				width: this.width,
				height: this.height,
				anchor: this.anchor,
				outline: {width: 2, color: BLUE},
				fill: false,
			})
		}
	}
}