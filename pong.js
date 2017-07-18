let canHit = ""
let brightness = 0
let ball: game.LedSprite = null
let x = 0
let direction = 0
basic.forever(() => {
    x = x + direction
    if (brightness == 255) {
        brightness = 0
    } else {
        brightness = 255
    }
    if (x == -1) {
        direction = 0
        canHit = "0"
        led.setBrightness(brightness)
    }
    if (x == 5) {
        direction = 0
        canHit = "0"
        led.setBrightness(brightness)
    }
    if (direction != 0) {
        ball.change(LedSpriteProperty.X, direction)
        if (ball.get(LedSpriteProperty.X) == 0) {
            canHit = "a"
        }
        if (ball.get(LedSpriteProperty.X) == 4) {
            canHit = "b"
        }
    }
    basic.pause(150)
})
input.onButtonPressed(Button.AB, () => {
    ball.delete()
    direction = 0
    if (Math.randomBoolean()) {
        x = 0
        canHit = "a"
    } else {
        x = 4
        canHit = "b"
    }
    ball = game.createSprite(x, 2)
    led.setBrightness(255)
})
input.onButtonPressed(Button.A, () => {
    if (canHit == "a") {
        direction = 1
        canHit = "0"
    }
})
input.onButtonPressed(Button.B, () => {
    if (canHit == "b") {
        direction = -1
        canHit = "0"
    }
})
direction = 0
if (Math.randomBoolean()) {
    x = 0
    canHit = "a"
} else {
    x = 4
    canHit = "b"
}
ball = game.createSprite(x, 2)
led.setBrightness(255)
