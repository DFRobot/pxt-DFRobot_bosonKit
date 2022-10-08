
basic.forever(function() {
    if(BosonKit.bos0003(DigitalPin.P1) == 1){
        BosonKit.bos0017_d(DigitalPin.P8, 1)
    }else{
    BosonKit.bos0017_d(DigitalPin.P8, 0)
    }
})