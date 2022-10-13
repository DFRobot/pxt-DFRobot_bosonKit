//% weight=100 color=#0fbc11 icon="\uf0b2"
//% groups="['Analog', 'Digital', 'Heartbeat', 'RGB LED Strip lights', 'Servo']"
namespace BosonKit {

    let beattime1 = 0;
    let beattime2 = 0;
    let beattime3 = 0;
    let averagetime = 0;

    let _brightness = 255;
    let rgb_pin = -1;
    let neopixel_buf: Buffer;
    let ledsum = -1;

    /**
     * read rotation sensor analog value
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin rotation sensor (i1)" 
    //% group="Analog"
    //% weight=100
    export function bos0001_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read light intensity
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin light intensity (i4)"
    //% group="Analog" 
    //% weight=98
    export function bos0004_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read steam sensor analog value
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin steam sensor (i6)"
    //% group="Analog" 
    //% weight=96
    export function bos0006_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read flame sensor analog value
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin flame sensor (i7)"
    //% group="Analog" 
    //% weight=94
    export function bos0007_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read sound sensor analog value
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin sound sensor (i9)" 
    //% group="Analog"
    //% weight=92
    export function bos0009_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read grayscale sensor analog value
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin grayscale sensor (i10)"
    //% group="Analog" 
    //% weight=90
    export function bos0010_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read temperature
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin temperature (i11)"
    //% group="Analog" 
    //% weight=88
    export function bos0011_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round((100 * value * (3.3 / 10.24)) * 3.3 / 10.24) / 100;
    }

    /**
     * read soil moisture
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin soil moisture (i16)" 
    //% group="Analog"
    //% weight=86
    export function bos0038_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    /**
     * read humidity sensor analog value
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin humidity sensor (i18)"
    //% group="Analog" 
    //% weight=84
    export function bos0041_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round(value / 10);
    }

    /**
     * read waterproof temperature
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin waterproof temperature (i19)"
    //% group="Analog" 
    //% weight=82
    export function bos0042_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        let n_Vref: number = 3.3;
        let n_Voltage_Value: number = ((value / 1024.0) * n_Vref);
        let n_Rt: number = ((n_Voltage_Value * 10.0) / (n_Vref - n_Voltage_Value));
        if (((0.593 > n_Rt) || (n_Rt > 331.498))) {
            return -1;
        }
        else {
            return Math.round(((1177692.5 / (3950 + (298.15 * (Math.log((n_Rt / 10.0)))))) - 270.35) * 100) / 100;
        }

    }

    /**
     * read ultrasonic distance
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin ultrasonic distance sensor (i22)"
    //% group="Analog" 
    //% weight=80
    export function bos0045_rotation(pin: AnalogPin): number {

        let value: number = Math.round(10 * pins.analogReadPin(pin) * (100 / 1023)) / 10;
        return value;
    }

    /**
     * read SHT30 humidity
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin SHT30 humidity (i27)"
    //% group="Analog" 
    //% weight=78
    export function bos0056_rotation(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round(value / 10);
    }

    /**
     * read pH sensor V2 
     * @param pin to pin ,eg: "analog pin"
     */

    //% block="read pin %pin pH sensor V2 (i28)"
    //% group="Analog" 
    //% weight=76
    export function bos0061_rotation(pin: AnalogPin): number {

        let map: number = 1024;
        let aref: number = 3300;
        let _neutralVoltage: number = 1500.0;
        let _acidVoltage: number = 2032.44;
        let voltage: number = pins.analogReadPin(pin) / map * aref;
        let slope: number = (7.0 - 4.0) / ((_neutralVoltage - 1500.0) / 3.0 - (_acidVoltage - 1500.0) / 3.0);
        let intercept: number = 7.0 - slope * (_neutralVoltage - 1500.0) / 3.0;
        let _phValue: number = Math.round(slope * (voltage - 1500.0) / 3.0 + intercept);
        return _phValue;
    }

    /**
     * write bright light LED analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value bright light LED (o1)"
    //% group="Analog" 
    //% value.min=0 value.max=1023
    //% weight=74
    export function bos0016_a_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    /**
     * write LED module analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value LED module (o2r o2g o2b)"
    //% group="Analog" 
    //% value.min=0 value.max=1023
    //% weight=72
    export function bos0017_a_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    // //% block="analog write pin %pin to %value Green LED Module (o2g)"
    // //% group="Analog" 
    // //% value.min=0 value.max=1023
    // //% weight=70
    // export function bos0017_G_a(pin: AnalogPin, value: number): void {

    //     pins.analogWritePin(pin, value);
    // }

    // //% block="analog write pin %pin to %value Blue LED Module (o2b)"
    // //% group="Analog" 
    // //% value.min=0 value.max=1023
    // //% weight=68
    // export function bos0017_B_a(pin: AnalogPin, value: number): void {

    //     pins.analogWritePin(pin, value);
    // }

    /**
     * write RGB LED strip lights analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value RGB LED strip lights(o4)"
    //% group="Analog" 
    //% value.min=0 value.max=1023
    //% weight=66
    export function bos0019_a_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    /**
     * write buzzer module analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value buzzer module(o5)" 
    //% group="Analog"
    //% value.min=0 value.max=1023
    //% weight=64
    export function bos0020_a_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    /**
     * write fan module analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value fan module (o6)"
    //% group="Analog" 
    //% value.min=0 value.max=1023
    //% weight=62
    export function bos0021_a_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    /**
     * write motor control module analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value motor control module (o9)" 
    //% group="Analog"
    //% value.min=0 value.max=1000
    //% weight=60
    export function bos0024_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    /**
     * write servo control module analog value
     * @param pin to pin ,eg: "analog pin"
     * @param value to value ,eg: "analog value"
     */

    //% block="analog write pin %pin to %value servo control module (o10)" 
    //% group="Analog"
    //% value.min=0 value.max=1023
    //% weight=58
    export function bos0025_a_rotation(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    /**
     * read push button digital value
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="read pin %pin push button (i2b i2r i2y)" 
    //% group="Digital"
    //% weight=100
    export function bos0002_rotation(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    // //% block="read pin %pin red push button (i2r)" 
    // //% group="Digital"
    // //% weight=98
    // export function bos0002_R(pin: DigitalPin): number {

    //     let value: number = pins.digitalReadPin(pin);
    //     return value;
    // }

    // //% block="read pin %pin yellow push button (i2y)" 
    // //% group="Digital"
    // //% weight=96
    // export function bos0002_Y(pin: DigitalPin): number {

    //     let value: number = pins.digitalReadPin(pin);
    //     return value;
    // }

    /**
     * read locking switch digital value
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="read pin %pin self locking switch (i3)" 
    //% group="Digital"
    //% weight=94
    export function bos0003_rotation(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    /**
     * read tilt sensor digital value
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="read pin %pin tilt sensor (i5)" 
    //% group="Digital"
    //% weight=92
    export function bos0005_rotation(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    /**
     * read touch sensor digital value
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="read pin %pin touch sensor (i8)"
    //% group="Digital" 
    //% weight=90
    export function bos0008_rotation(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    /**
     * read conductivity sensor digital value
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="read pin %pin conductivity sensor (i12)" 
    //% group="Digital"
    //% weight=88
    export function bos0012_rotation(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    /**
     * read motion sensor digital value
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="read pin %pin motion sensor (i13)" 
    //% group="Digital"
    //% weight=86
    export function bos0013_rotation(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    /**
     * write bright light LED digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value bright light LED (o1)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=84
    export function bos0016_d_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    /**
     * write LED module digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value LED module (o2r o2g o2b)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=82
    export function bos0017_d_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    // //% block="digital write pin %pin to %value Green LED Module (o2g)" 
    // //% group="Digital"
    // //% value.min=0 value.max=1
    // //% weight=80
    // export function bos0017_G_d(pin: DigitalPin, value: number): void {

    //     pins.digitalWritePin(pin, value);
    // }

    // //% block="digital write pin %pin to %value Blue LED Module (o2b)" 
    // //% group="Digital"
    // //% value.min=0 value.max=1
    // //% weight=78
    // export function bos0017_B_d(pin: DigitalPin, value: number): void {

    //     pins.digitalWritePin(pin, value);
    // }

    /**
     * write RGB LED strip lights digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value RGB LED strip lights (o4)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=76
    export function bos0019_d_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    /**
     * write buzzer module sensor digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value buzzer module (o5)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=74
    export function bos0020_d_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    /**
     * write fan module digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value fan module (o6)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=72
    export function bos0021_d_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    /**
     * write voice recorder sensor digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value voice recorder (o7)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=70
    export function bos0022_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    /**
     * write servo control module digital value
     * @param pin to pin ,eg: "digital pin"
     * @param value to value ,eg: "digital value"
     */

    //% block="digital write pin %pin to %value servo control module (o10)" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=68
    export function bos0025_d_rotation(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    /**
     * heart rate sensor init
     * @param pin to pin ,eg: "digital pin"
     */

    //% block="init pin %pin heart rate sensor (i20)" 
    //% group="Heartbeat"
    //% weight=100
    export function init_bos0043(pin: DigitalPin): void {

        pins.setEvents(pin, PinEventType.Touch);
        switch (pin) {
            case DigitalPin.P0: control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P1: control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P2: control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P3: control.onEvent(EventBusSource.MICROBIT_ID_IO_P3, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P4: control.onEvent(EventBusSource.MICROBIT_ID_IO_P4, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P5: control.onEvent(EventBusSource.MICROBIT_ID_IO_P5, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P6: control.onEvent(EventBusSource.MICROBIT_ID_IO_P6, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P7: control.onEvent(EventBusSource.MICROBIT_ID_IO_P7, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P8: control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P9: control.onEvent(EventBusSource.MICROBIT_ID_IO_P9, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P10: control.onEvent(EventBusSource.MICROBIT_ID_IO_P10, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P11: control.onEvent(EventBusSource.MICROBIT_ID_IO_P11, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P12: control.onEvent(EventBusSource.MICROBIT_ID_IO_P12, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P13: control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P14: control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P15: control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P16: control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            default: break;
        }
        beattime1 = 0;
        beattime2 = 0;
    }

    /**
     * read heart rate (bpm)
     */

    //% block="read heart rate (bpm) (i20)" 
    //% group="Heartbeat"
    //% weight=50
    export function bos0043_rotation(): number {
        if (averagetime == 0) {
            return 0;
        }
        let value: number = Math.round(29000 / averagetime);
        return value;
    }

    /**
     * initialize RGB strip
     * @param pin to pin ,eg: "digital pin"
     * @param num to num ,eg: "0~7"
     */

    //% block="initialize RGB strip at pin %pin with %num leds"
    //% group="RGB LED Strip lights"
    //% num.min=1 num.max=7 num.defl=3
    //% weight=100
    export function M011_00184_init(pin: DigitalPin, num: number): void {
        rgb_pin = pin;
        neopixel_buf = pins.createBuffer(3 * num);
        for (let i = 0; i < 3 * num; i++) {
            neopixel_buf[i] = 0;
        }
        ledsum = num;
    }

    /**
     * set RGB LED brightness
     * @param brightness to brightness ,eg: "0~255"
     */

    //% block="set brightness %brightness"
    //% group="RGB LED Strip lights"
    //% brightness.min=0 brightness.max=255 brightness.defl=255
    //% weight=90
    export function M011_00184_brightness(brightness: number): void {

        _brightness = brightness;
    }

    /**
     * Set up lights
     * @param from to start ,eg: "1~7"
     * @param to to end ,eg: "1~7"
     */

    //% block="leds from %from to %to"
    //% group="RGB LED Strip lights"
    //% from.min=1 from.max=7 from.defl=1
    //% to.min=1 to.max=7 to.defl=2
    //% weight=80
    export function M011_00184_ledRange(from: number, to: number): number {
        return ((from - 1) << 16) + (2 << 8) + (to);
    }

    /**
     * Set the display color of lights and lights
     * @param index to index ,eg: "1~7"
     * @param color to color ,eg: "color"
     */

    //% block="led %index show color %color"
    //% group="RGB LED Strip lights"
    //% index.min=1 index.max=7 index.defl=1
    //% color.shadow="colorNumberPicker"
    //% weight=70
    export function M011_00184_setIndexColor(index: number, color: number): void {
        let f = index - 1;
        let t = index - 1;
        let r = (color >> 16) * (_brightness / 255);
        let g = ((color >> 8) & 0xFF) * (_brightness / 255);
        let b = ((color) & 0xFF) * (_brightness / 255);

        if ((index - 1) > 15) {
            if ((((index - 1) >> 8) & 0xFF) == 0x02) {
                f = (index - 1) >> 16;
                t = (index - 1) & 0xff;
            } else {
                f = 0;
                t = -1;
            }
        }
        for (let i = f; i <= t; i++) {
            neopixel_buf[i * 3 + 0] = Math.round(g)
            neopixel_buf[i * 3 + 1] = Math.round(r)
            neopixel_buf[i * 3 + 2] = Math.round(b)
        }
        ws2812b.sendBuffer(neopixel_buf, rgb_pin);

    }

    /**
     * Set the display color
     * @param rgb to rgb ,eg: "rgb"
     */

    //% block="show color %rgb"
    //% group="RGB LED Strip lights"
    //% weight=60
    //% rgb.shadow="colorNumberPicker"
    export function M011_00184_showColor(rgb: number) {
        let r = (rgb >> 16) * (_brightness / 255);
        let g = ((rgb >> 8) & 0xFF) * (_brightness / 255);
        let b = ((rgb) & 0xFF) * (_brightness / 255);
        for (let i = 0; i < 3 * ledsum; i++) {
            if ((i % 3) == 0)
                neopixel_buf[i] = Math.round(g)
            if ((i % 3) == 1)
                neopixel_buf[i] = Math.round(r)
            if ((i % 3) == 2)
                neopixel_buf[i] = Math.round(b)
        }
        ws2812b.sendBuffer(neopixel_buf, rgb_pin)
    }

    /**
     * shift pixels
     * @param offset to offset ,eg: "offset"
     */

    //% block="shift pixels by %offset"
    //% group="RGB LED Strip lights"
    //% weight=52
    export function M011_00184_shift(offset: number): void {
        let steps = ledsum
        if(offset > steps){
            for (let i = 0; i < 16 * steps; i++) {
                neopixel_buf[i] = 0;
            }
        }
        if (ledsum > 1 && offset != 0){
            if (offset > 0)
            {
                for (let i = steps - 1; i >= offset; i--)
                {
                    neopixel_buf[i*3] = neopixel_buf[(i - offset)*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i - offset)*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i - offset)*3+2]
                }
                for (let i = 0; i < offset; i++)
                {
                    neopixel_buf[i*3] = 0
                    neopixel_buf[i*3+1] = 0
                    neopixel_buf[i*3+2] = 0
                }
            }
            else
            {
                for (let i = 0; i <= steps - Math.abs(offset); i++)
                {
                    neopixel_buf[i*3] = neopixel_buf[(i + Math.abs(offset))*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i + Math.abs(offset))*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i + Math.abs(offset))*3+2]
                }
                for (let i = steps - Math.abs(offset); i < steps; i++)
                {
                    neopixel_buf[i*3] = 0
                    neopixel_buf[i*3+1] = 0
                    neopixel_buf[i*3+2] = 0
                }
            }
            ws2812b.sendBuffer(neopixel_buf, rgb_pin)
        }
    }

    /**
     * rotate pixels
     * @param offset to offset ,eg: "offset"
     */

    //% block="rotate pixels by %offset"
    //% group="RGB LED Strip lights"
    //% weight=51
    export function M011_00184_rotate(offset: number): void {
        let steps = ledsum
        if(offset > 0){
            offset = offset % steps;
        }else{
            offset = Math.abs(offset) % steps;
            offset = -offset;
        }
        if (ledsum > 1 && offset != 0){
            if (offset > 0){
                let offdata = pins.createBuffer(3 * offset);
                for (let i = 0; i < offset; i++){
                    offdata[i*3] = neopixel_buf[(steps - offset + i)*3]
                    offdata[i*3+1] = neopixel_buf[(steps - offset + i)*3+1]
                    offdata[i*3+2] = neopixel_buf[(steps - offset + i)*3+2]
                }
                for (let i = steps - 1; i >= offset; i--)
                {
                    neopixel_buf[i*3] = neopixel_buf[(i - offset)*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i - offset)*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i - offset)*3+2]
                }
                for (let i = 0; i < offset; i++)
                {
                    neopixel_buf[i*3] = offdata[i*3]
                    neopixel_buf[i*3+1] = offdata[i*3+1]
                    neopixel_buf[i*3+2] = offdata[i*3+2]
                }
                ws2812b.sendBuffer(neopixel_buf, rgb_pin)
            }
            else{
                let offdata = pins.createBuffer(3 * Math.abs(offset));
                for (let i = 0; i < Math.abs(offset); i++){
                    offdata[i*3] = neopixel_buf[i*3]
                    offdata[i*3+1] = neopixel_buf[i*3+1]
                    offdata[i*3+2] = neopixel_buf[i*3+2]
                }
                for (let i = 0; i <= steps - Math.abs(offset); i++)
                {

                    neopixel_buf[i*3] = neopixel_buf[(i + Math.abs(offset))*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i + Math.abs(offset))*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i + Math.abs(offset))*3+2]
                }
                for (let i = steps - Math.abs(offset); i < steps; i++)
                {
                    neopixel_buf[i*3] = offdata[(i - steps + Math.abs(offset))*3]
                    neopixel_buf[i*3+1] = offdata[(i - steps + Math.abs(offset))*3+1]
                    neopixel_buf[i*3+2] = offdata[(i - steps + Math.abs(offset))*3+2]
                }
                ws2812b.sendBuffer(neopixel_buf, rgb_pin)
            }
        }
    }

    /**
     * clear all
     */

    //% block="clear all"
    //% group="RGB LED Strip lights"
    //% weight=50
    export function M011_00184_off(): void {

        M011_00184_showColor(0);
    }

    /**
     * red green blue
     * @param red to red ,eg: "0~255"
     * @param green to green ,eg: "0~255"
     * @param blue to blue ,eg: "0~255"
     */

    //% block="red %red green %green blue %blue"
    //% group="RGB LED Strip lights"
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% weight=40
    export function M011_00184_rgb(red: number, green: number, blue: number): number {

        return (red << 16) + (green << 8) + (blue);
    }

    /**
     * RGB LED show gradient color
     * @param start to start ,eg: "1~7"
     * @param end to end ,eg: "1~7"
     * @param startHue to startHue ,eg: "0~360"
     * @param endHue to endHue ,eg: "0~360"
     */

    //% weight=50
    //% group="RGB LED Strip lights"
    //% startHue.defl=1
    //% endHue.defl=360
    //% startHue.min=0 startHue.max=360
    //% endHue.min=0 endHue.max=360
    //% start.min=1 start.max=7 start.defl=1
    //% end.min=1 end.max=7 end.defl=5
    //% block="RGB LED %start to %end show gradient color from %startHue to %endHue"
    //% inlineInputMode=inline
    export function  M011_00184_ledRainbow(start: number, end: number, startHue: number, endHue: number) {
   
        start = start - 1
        end = end - 1
        if ((end < start)) {
            let num = end;
            end = start;
            start = num;
        }

        start = Math.max(start, 0);
        start = Math.min(start, ledsum);
        end = Math.max(end, 0);
        end = Math.min(end, ledsum);
        let steps = end - start + 1;
        
        // startHue = startHue >> 0;
        // endHue = endHue >> 0;
        const saturation = 100;
        const luminance = 50;
        // let steps = ledsum + 1;
        // const direction = HueInterpolationDirection.Clockwise;

        //hue
        const h1 = startHue;
        const h2 = endHue;
        const hDistCW = ((h2 + 360) - h1) % 360;
        const hStepCW = Math.idiv((hDistCW * 100), steps);
        // const hDistCCW = ((h1 + 360) - h2) % 360;
        // const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
        let hStep: number = hStepCW;
        // if (direction === HueInterpolationDirection.Clockwise) {
        //     hStep = hStepCW;
        // } else if (direction === HueInterpolationDirection.CounterClockwise) {
        //     hStep = hStepCCW;
        // } else {
        //     hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
        // }
        const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

        //sat
        const s1 = saturation;
        const s2 = saturation;
        const sDist = s2 - s1;
        const sStep = Math.idiv(sDist, steps);
        const s1_100 = s1 * 100;

        //lum
        const l1 = luminance;
        const l2 = luminance;
        const lDist = l2 - l1;
        const lStep = Math.idiv(lDist, steps);
        const l1_100 = l1 * 100

        //interpolate
        if (steps === 1) {
            writeBuff(start, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
        } else {
            writeBuff(start, hsl(startHue, saturation, luminance));
            for (let i = start + 1; i < start + steps - 1; i++) {
                const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                const s = Math.idiv((s1_100 + i * sStep), 100);
                const l = Math.idiv((l1_100 + i * lStep), 100);
                writeBuff(0 + i, hsl(h, s, l));
            }
            writeBuff(start + steps - 1, hsl(endHue, saturation, luminance));
        }
        ws2812b.sendBuffer(neopixel_buf, rgb_pin)
    }

    /**
     * set 9g servo module angle
     * @param pin to pin ,eg: "analog pin"
     * @param angle to angle ,eg: "0~180"
     */

    //% block="9g servo module pin %pin angle %angle" 
    //% group="Servo"
    //% angle.min=0 angle.max=180
    //% weight=36
    export function ser0045_rotation(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }

    function pinCallback(): void {
        beattime3 = input.runningTime();
        averagetime = ((beattime3 - beattime2) + (beattime2 - beattime1)) / 2;
        beattime2 = beattime3;
        beattime1 = beattime2;
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }

    function writeBuff(index: number, rgb: number) {

        if (index < ledsum){
            let r = ((rgb >> 16) * (_brightness / 255));
            let g = (((rgb >> 8) & 0xFF) * (_brightness / 255));
            let b = (((rgb) & 0xFF) * (_brightness / 255));
            neopixel_buf[index * 3 + 0] = Math.round(g)
            neopixel_buf[index * 3 + 1] = Math.round(r)
            neopixel_buf[index * 3 + 2] = Math.round(b)
        }
    }

    function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;

        return ((r & 0xFF) << 16) | ((g & 0xFF) << 8) | (b & 0xFF);
    }
}