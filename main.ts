controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 4 . . . . . . . . 
        . . . . . . 2 4 5 5 . . . . . . 
        . . . . . . 4 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 9 . . . . . . . 
    . . . . . 6 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . 9 6 2 2 2 6 2 6 8 . . . . . . 
    . 9 6 2 2 2 6 2 6 8 9 9 9 9 . . 
    . 9 6 2 2 2 6 2 6 8 . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . . . . 6 . . . . . . . . . . 
    . . . . . 6 6 6 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        . . . . . . 8 9 9 9 8 . . . . . 
        . . . . . . 8 9 9 9 8 . . . . . 
        . . . . . . 8 9 9 9 8 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
