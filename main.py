while True:
    if input.acceleration(Dimension.X) > 5 or input.acceleration(Dimension.X) < 5 :
        light.set_all(color.rgb(0,255,0))
        music.pew_pew.play_until_done()
    else:
        light.rainbow_animation
