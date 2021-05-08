namespace SpriteKind {
    export const Comet = SpriteKind.create()
}
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
    music.knock.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Comet, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey4: Sprite = null
let bogey: Sprite = null
let bogey2: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . 6 6 6 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . . 
    . . . . . . 6 6 . . . . . . . . . 
    . . 2 2 . 6 6 6 6 6 6 . . . . . . 
    . 2 4 4 b 9 9 9 9 9 9 6 . . . . . 
    2 4 5 5 b 8 8 8 8 8 8 6 6 6 6 . . 
    . 2 4 4 b 8 8 8 8 8 8 6 . . . . . 
    . . 2 2 . 6 6 6 6 6 6 . . . . . . 
    . . . . . . 6 6 . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . . 
    . . . . . . . 6 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
music.powerUp.play()
game.onUpdateInterval(5000, function () {
    bogey2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 9 . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . . 9 9 9 9 9 4 . . . . 
        . . . . . 8 8 8 8 8 8 4 5 . . . 
        . . . . . 8 8 8 8 8 8 4 5 . . . 
        . . . . . . 9 9 9 9 9 4 . . . . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . . . 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey2.setVelocity(-100, 0)
    bogey2.setPosition(160, randint(5, 115))
    bogey2.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(15000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . . . 2 2 . . . . . 
        . . . 2 2 2 2 . 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    bogey.setVelocity(-80, 0)
    bogey.setPosition(160, randint(5, 120))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2500, function () {
    bogey4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . 4 3 3 3 3 . . . . . . 
        . . . . 4 3 2 2 2 e e . . e . . 
        . . . . 4 3 2 2 e e . e . . . . 
        . . . . 4 3 2 2 2 e . . e . . . 
        . . . . . 4 3 3 3 3 . . . . e . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Comet)
    bogey4.setVelocity(-100, 0)
    bogey4.setPosition(160, randint(5, 115))
    bogey4.setFlag(SpriteFlag.AutoDestroy, false)
})
game.onUpdateInterval(1000, function () {
    bogey2 = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey2.setVelocity(-100, 0)
    bogey2.setPosition(160, randint(5, 115))
    bogey2.setFlag(SpriteFlag.AutoDestroy, true)
})
