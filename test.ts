
basic.forever(function() {
    if(Boson.bos0003(DigitalPin.P1) == 1){
        Boson.bos0017_d(DigitalPin.P8, 1)
    }else{
    Boson.bos0017_d(DigitalPin.P8, 0)
    }
})