


//% weight=100 color=#0fbc11 icon="\uf0b2"
//% groups="['Analog', 'Digital', 'Heartbeat', 'RGB', 'Servo']"
namespace BosonKit {

    let beattime1 = 0;
    let beattime2 = 0;
    let beattime3 = 0;
    let averagetime = 0;

    let _brightness = 255;
    let rgb_pin = -1;
    let neopixel_buf: Buffer;
    let ledsum = -1;

    //% block="read pin %pin Rotation Sensor value" 
    //% group="Analog"
    //% weight=50
    export function bos0001(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin light"
    //% group="Analog" 
    //% weight=100
    export function bos0004(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin Steam Sensor value"
    //% group="Analog" 
    //% weight=46
    export function bos0006(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin Flame Sensor value"
    //% group="Analog" 
    //% weight=44
    export function bos0007(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin Sound Sensor value" 
    //% group="Analog"
    //% weight=42
    export function bos0009(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin Infrared Proximity Sensor value"
    //% group="Analog" 
    //% weight=40
    export function bos0010(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin temperature"
    //% group="Analog" 
    //% weight=95
    export function bos0011(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round((100 * value * (3.3 / 10.24)) * 3.3 / 10.24) / 100;
    }

    //% block="read pin %pin soil moisture" 
    //% group="Analog"
    //% weight=90
    export function bos0038(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin Humidity Sensor Sensor value"
    //% group="Analog" 
    //% weight=34
    export function bos0041(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin waterproof temperature"
    //% group="Analog" 
    //% weight=85
    export function bos0042(pin: AnalogPin): number {

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

    //% block="read pin %pin Ultrasonic Distance Sensor"
    //% group="Analog" 
    //% weight=30
    export function bos0045(pin: AnalogPin): number {

        let value: number = Math.round(10 * pins.analogReadPin(pin) * (100 / 1023));
        return value;
    }


    //% block="read pin %pin air humidity SHT30"
    //% group="Analog" 
    //% weight=80
    export function bos0056(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value / 10;
    }

    //% block="read pin %pin pH Sensor V2 value"
    //% group="Analog" 
    //% weight=26
    export function bos0061(pin: AnalogPin): number {

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

    //% block="LED String Light pin %pin analog write %value"
    //% group="Analog" 
    //% value.min=0 value.max=1023
    //% weight=24
    export function bos0019_a(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    //% block="Buzzer Module pin %pin analog write %value" 
    //% group="Analog"
    //% value.min=0 value.max=1023
    //% weight=22
    export function bos0020_a(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    //% block="Fan Module pin %pin analog write %value"
    //% group="Analog" 
    //% value.min=0 value.max=1023
    //% weight=20
    export function bos0021_a(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    //% block="Motor Controller Module pin %pin analog write %value" 
    //% group="Analog"
    //% value.min=0 value.max=1000
    //% weight=18
    export function bos0024(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);
    }

    //% block="read pin %pin Blue Push Button value" 
    //% group="Digital"
    //% weight=98
    export function bos0002_B(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Red Push Button value" 
    //% group="Digital"
    //% weight=96
    export function bos0002_R(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Yellow Push Button value" 
    //% group="Digital"
    //% weight=94
    export function bos0002_Y(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Self Locking Switch value" 
    //% group="Digital"
    //% weight=92
    export function bos0003(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Tilt Switch value" 
    //% group="Digital"
    //% weight=88
    export function bos0005(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Touch Sensor value"
    //% group="Digital" 
    //% weight=82
    export function bos0008(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Conductivity Switch value" 
    //% group="Digital"
    //% weight=74
    export function bos0012(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="read pin %pin Motion Sensor value" 
    //% group="Digital"
    //% weight=72
    export function bos0013(pin: DigitalPin): number {

        let value: number = pins.digitalReadPin(pin);
        return value;
    }

    //% block="init pin %pin Heart Rate sensor" 
    //% group="Heartbeat"
    //% weight=65
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

    //% block="read Heart Rate (times per minute)" 
    //% group="Heartbeat"
    //% weight=64
    export function bos0043(): number {
        if (averagetime == 0) {
            return 0;
        }
        let value: number = Math.round(29000 / averagetime);
        return value;
    }

    //% block="LED String Light pin %pin digital write %value" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=54
    export function bos0019_d(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    //% block="Buzzer Module pin %pin digital write %value" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=50
    export function bos0020_d(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    //% block="Fan Module pin %pin digital write %value" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=46
    export function bos0021_d(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    //% block="Voice Recorder Module pin %pin digital write %value" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=42
    export function bos0022(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    //% block="Servo Controller Module pin %pin digital write %value" 
    //% group="Digital"
    //% value.min=0 value.max=1
    //% weight=38
    export function bos0025(pin: DigitalPin, value: number): void {

        pins.digitalWritePin(pin, value);
    }

    //% block="init RGB LED strip pin %pin Number of lights %num"
    //% group="RGB"
    //% weight=100
    export function M011_00184_init(pin: DigitalPin, num: number): void {
        rgb_pin = pin;
        neopixel_buf = pins.createBuffer(16 * num);
        for (let i = 0; i < 16 * num; i++) {
            neopixel_buf[i] = 0;
        }
        ledsum = num;
    }

    //% block="Set the brightness of the RGB LED strip  %brightness"
    //% group="RGB"
    //% weight=90
    export function M011_00184_brightness(brightness: number): void {

        _brightness = brightness;
    }

    //% block="RGB LED strip from %from to %to"
    //% group="RGB"
    //% weight=80
    export function M011_00184_ledRange(from: number, to: number): number {
        return ((from - 1) << 16) + (2 << 8) + (to);
    }

    //% block="RGB LED strip %index show color %color"
    //% group="RGB"
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
        //ws2812b.sendBuffer(neopixel_buf, rgb_pin);

    }

    //% weight=60
    //% group="RGB"
    //% rgb.shadow="colorNumberPicker"
    //% block="show color %rgb"
    export function M011_00184_showColor(rgb: number) {
        let r = (rgb >> 16) * (_brightness / 255);
        let g = ((rgb >> 8) & 0xFF) * (_brightness / 255);
        let b = ((rgb) & 0xFF) * (_brightness / 255);
        for (let i = 0; i < 16 * ledsum; i++) {
            if ((i % 3) == 0)
                neopixel_buf[i] = Math.round(g)
            if ((i % 3) == 1)
                neopixel_buf[i] = Math.round(r)
            if ((i % 3) == 2)
                neopixel_buf[i] = Math.round(b)
        }
        //ws2812b.sendBuffer(neopixel_buf, rgb_pin)
    }

    //% block="Set the slake of the RGB LED strip"
    //% group="RGB"
    //% weight=50
    export function M011_00184_off(): void {

        M011_00184_showColor(0);
    }

    //% block="red %red green %green blue %blue"
    //% group="RGB"
    //% weight=40
    export function M011_00184_rgb(red: number, green: number, blue: number): number {

        return (red << 16) + (green << 8) + (blue);
    }

    //% block="9g Metal Gear Micro Servo pin %pin angle %angle" 
    //% group="Servo"
    //% weight=36
    export function ser0045(pin: AnalogPin, angle: number): void {

        // let value: number = pins.analogReadPin(pin);
        // return value;
    }

    function pinCallback(): void {
        beattime3 = input.runningTime();
        averagetime = ((beattime3 - beattime2) + (beattime2 - beattime1)) / 2;
        beattime2 = beattime3;
        beattime1 = beattime2;
    }
}