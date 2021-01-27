while (true) {
    if (input.acceleration(Dimension.X) > 5 || input.acceleration(Dimension.X) < 5) {
        light.setAll(color.rgb(0, 255, 0))
        music.pewPew.playUntilDone()
    } else {
        light.rainbowAnimation
    }
    
}
