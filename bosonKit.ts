




//debug12
const OBLOQ_DEBUG = false
const OBLOQ_MQTT_DEFAULT_SERVER = true
//DFRobot easy iot
const OBLOQ_MQTT_EASY_IOT_SERVER_CHINA = "iot.dfrobot.com.cn"
const OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL = "api.beebotte.com"
const OBLOQ_MQTT_EASY_IOT_SERVER_EN = "iot.dfrobot.com"
const OBLOQ_MQTT_EASY_IOT_SERVER_TK = "api.thingspeak.com"
const OBLOQ_MQTT_EASY_IOT_PORT = 1883
//other iot
const OBLOQ_MQTT_USER_IOT_SERVER = "---.-----.---"
const OBLOQ_MQTT_USER_IOT_PORT = 0
//topic max number
const OBLOQ_MQTT_TOPIC_NUM_MAX = 5
//wrong type
const OBLOQ_ERROR_TYPE_IS_SUCCE = 0
const OBLOQ_ERROR_TYPE_IS_ERR = 1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT = -1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE = -2
const OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT = -3
const OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT = -4
const OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE = -5
const OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE = -6
//data type
const OBLOQ_STR_TYPE_IS_NONE = ""
const OBLOQ_BOOL_TYPE_IS_TRUE = true
const OBLOQ_BOOL_TYPE_IS_FALSE = false
const OBLOQ_WEBHOOKS_URL = "maker.ifttt.com"
//topics name
enum TOPIC {
    topic_0 = 0,
    topic_1 = 1,
    topic_2 = 2,
    topic_3 = 3,
    topic_4 = 4
}


//% block="bosonKit"
//% weight=100 color=#0fbc11 icon="\uf0b2"
//% groups="['Sensor', 'Actuator']"
namespace bosonKit {


    export enum BosonSensorAnalogRead {
        //% blockId="bosonAnalogReadRotation" block="rotation module (i1)"
        BosonRotation = 1,
        //% blockId="bosonAnalogReadLightIntensity" block="light intensity (i4)"
        BosonLightIntensity = 2,
        //% blockId="bosonAnalogReadSteam" block="steam sensor (i6)"
        BosonSteam = 3,
        //% blockId="bosonAnalogReadFlame" block="flame sensor (i7)"
        BosonFlame = 4,
        //% blockId="bosonAnalogReadSound" block="sound sensor (i9)"
        BosonSound = 5,
        //% blockId="bosonAnalogReadGrayscale" block="grayscale sensor (i10)"
        BosonGrayscale = 6,
        //% blockId="bosonAnalogReadTemperature" block="temperature (i11)"
        BosonTemperature = 7,
        //% blockId="bosonAnalogReadSoilMoisture" block="soil moisture(i16)"
        BosonSoilMoisture = 8,
        //% blockId="bosonAnalogReadHumidity" block="humidity sensor (i18)"
        BosonHumidity = 9,
        //% blockId="bosonAnalogReadWaterproofTemperature" block="waterproof temperature (i19)"
        BosonWaterproofTemperature = 10,
        //% blockId="bosonAnalogReadUltrasonicDistance" block="ultrasonic distance sensor (i22)"
        BosonUltrasonicDistance = 11,
        //% blockId="bosonAnalogReadSHT30Humidity" block="SHT30 humidity (i27)"
        BosonSHT30Humidity = 12,
        //% blockId="bosonAnalogReadPhV2" block="pH sensor V2 (i28)"
        BosonV2Ph = 13
    }
    
    export enum BosonSensorAnalogWrite {
        //% blockId="bosonAnalogWriteBrightLightLed" block="bright light LED (o1)"
        BosonBrightLightLed = 1,
        //% blockId="bosonAnalogWriteLed" block="LED module (o2r o2g o2b)"
        BosonLed = 2,
        //% blockId="bosonAnalogWriteRgbStripLights" block="RGB LED strip lights(o4)"
        BosonRgbStripLights = 3,
        //% blockId="bosonAnalogWriteBuzzer" block="buzzer module(o5)"
        BosonBuzzer = 4,
        //% blockId="bosonAnalogWriteFan" block="fan module (o6)"
        BosonFan = 5,
        //% blockId="bosonAnalogWriteMotor" block="motor control module (o9)"
        BosonMotor = 6,
        //% blockId="bosonAnalogWriteServo" block="servo control module (o10)"
        BosonServo = 7
    }
    
    
    export enum BosonSensorDigitalRead {
        //% blockId="bosonDigitalReadPushButton" block="push button (i2b i2r i2y)"
        BosonPushButton = 1,
        //% blockId="bosonDigitalReadSelfLockingSwitch" block="self locking switch (i3)"
        BosonSelfLockingSwitch = 2,
        //% blockId="bosonDigitalReadTilt" block="tilt sensor (i5)"
        BosonTilt = 3,
        //% blockId="bosonDigitalReadTouch" block="touch sensor (i8)"
        BosonTouch = 4,
        //% blockId="bosonDigitalReadConductivity" block="conductivity sensor (i12)"
        BosonConductivity = 5,
        //% blockId="bosonDigitalReadMotion" block="motion sensor (i13)"
        BosonMotion = 6
    }
    
    export enum BosonSensorDigitalWrite {
        //% blockId="bosonDigitalWriteBrightLightLed" block="bright light LED (o1)"
        BosonBrightLightLed = 1,
        //% blockId="bosonDigitalWriteLed" block="LED module (o2r o2g o2b)"
        BosonLed = 2,
        //% blockId="bosonDigitalWriteRgbStripLights" block="RGB LED strip lights (o4)"
        BosonRgbStripLights = 3,
        //% blockId="bosonDigitalWriteBuzzer" block="buzzer module (o5)"
        BosonBuzzer = 4,
        //% blockId="bosonDigitalWriteFan" block="fan module (o6)"
        BosonFan = 5,
        //% blockId="bosonDigitalWriteVoiceRecorder" block="voice recorder (o7)"
        BosonVoiceRecorder = 6,
        //% blockId="bosonDigitalWriteServo" block="servo control module (o10)"
        BosonServo = 7,
    }

    export enum SERVERS {
        //% blockId=SERVERS_China block="EasyIoT_CN"
        China,
        //% blockId=SERVERS_English block="EasyIoT_EN"
        English,
        //% blockId=SERVERS_Siot block="SIOT"
        Siot
    }

    export class PacketaMqtt {
        /**
         * Obloq receives the message content.
         */
        public message: string;
    }

    //serial
    let OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_SERIAL_TX = SerialPin.P2
    let OBLOQ_SERIAL_RX = SerialPin.P1
    //wifi
    let OBLOQ_WIFI_SSID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_PASSWORD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_IP = "0.0.0.0"
    //mqtt//*
    let OBLOQ_MQTT_PORT = 0
    let OBLOQ_MQTT_SERVER = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_PWD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_ID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_TOPIC = [["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"]]
    //http
    let OBLOQ_HTTP_IP = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_HTTP_PORT = 8080
    let OBLOQ_HTTP_BUSY = OBLOQ_BOOL_TYPE_IS_FALSE
    //state
    let OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
    let OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    //callback
    let OBLOQ_MQTT_CB: Action[] = [null, null, null, null, null]
    //commands
    let OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
    //animation
    let OBLOQ_WIFI_ICON = 1
    let OBLOQ_MQTT_ICON = 1
    //event
    let OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_FALSE
    //mode
    let OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE


    let OBLOQ_WEBHOOKS_KEY = ""
    let OBLOQ_WEBHOOKS_EVENT = ""
    let microIoT_WEBHOOKS_KEY = ""
    let microIoT_WEBHOOKS_EVENT = ""
    let microIoT_THINGSPEAK_KEY = ""
    let OBLOQ_MQTT_EASY_IOT_SIOT = ""
    let microIoT_BEEBOTTE_Token = ""
    let G_city = 0;

    

    let beattime1 = 0;
    let beattime2 = 0;
    let beattime3 = 0;
    let averagetime = 0;

    let _brightness = 255;
    let rgb_pin = -1;
    let neopixel_buf: Buffer;
    let ledsum = -1;


    /**
     * Read value from BOSON analog sensor 
     * @param pin to pin ,eg: "pin"
     * @param type to type ,eg: "BosonSensorAnalogRead.BosonTemperature"
     */

    //% block="analog read pin %pin %type" 
    //% group="Sensor"
    //% weight=100
    export function bosonAnalogRead(pin: AnalogPin, type: BosonSensorAnalogRead): number {

        let value: number = 0;
        switch (type) {
            case BosonSensorAnalogRead.BosonTemperature: value = temperatureSensor(pin); break;
            case BosonSensorAnalogRead.BosonHumidity: value = humiditySensor(pin); break;
            case BosonSensorAnalogRead.BosonWaterproofTemperature: value = waterproofTemperatureSensor(pin); break;
            case BosonSensorAnalogRead.BosonUltrasonicDistance: value = ultrasonicDistanceSensor(pin); break;
            case BosonSensorAnalogRead.BosonSHT30Humidity: value = humiditySht30(pin); break;
            case BosonSensorAnalogRead.BosonV2Ph: value = V2pHSensor(pin); break;
            default: value = pins.analogReadPin(pin); break;
        }
        return value;
    }

    /**
     * Write analog value(0-1023) to BOSON analog sensor
     * @param pin to pin ,eg: "pin"
     * @param value to value, eg: "0~1023"
     * @param type to type ,eg: "BosonSensorAnalogWrite.BosonMotor"
     */

    //% block="analog write pin %pin to %value %type" 
    //% group="Sensor"
    //% value.min=0 value.max=1023
    //% weight=90
    export function bosonAnalogWrite(pin: AnalogPin, value: number, type: BosonSensorAnalogWrite): void {

        switch (type) {
            case BosonSensorAnalogWrite.BosonMotor: if (value > 1000) { value = 1000; } pins.analogWritePin(pin, value); break;
            default: pins.analogWritePin(pin, value); break;
        }

    }

    /**
     * Read value from BOSON digital sensor 
     * @param pin to pin ,eg: "pin"
     * @param type to type ,eg: "BosonSensorDigitalRead.BosonConductivity"
     */

    //% block="digital read pin %pin %type" 
    //% group="Sensor"
    //% weight=80
    export function bosonDigitalRead(pin: DigitalPin, type: BosonSensorDigitalRead): number {

        let value: number = 0;
        switch (type) {
            case BosonSensorDigitalRead.BosonConductivity: value = pins.digitalReadPin(pin); break;
            default: value = pins.digitalReadPin(pin); break;
        }
        return value;
    }

    /**
     * Write digital value(0/1) to BOSON digital sensor
     * @param pin to pin ,eg: "pin"
     * @param value to value, eg: "0~1"
     * @param type to type ,eg: "BosonSensorDigitalWrite.BosonBrightLightLed"
     */

    //% block="digital write pin %pin to %value %type"
    //% group="Sensor"
    //% value.min=0 value.max=1
    //% weight=70
    export function bosonDigitalWrite(pin: DigitalPin, value: number, type: BosonSensorDigitalWrite): void {
        switch (type) {
            case BosonSensorDigitalWrite.BosonBrightLightLed: pins.digitalWritePin(pin, value); break;
            default: pins.digitalWritePin(pin, value); break;
        }
    }

    /**
     * Initialize heart rate sensor
     * @param pin to pin ,eg: "pin"
     */

    //% block="init pin %pin heart rate sensor (i20)" 
    //% group="Sensor"
    //% weight=60
    //% advanced=true
    export function heartrateInit(pin: DigitalPin): void {

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
     * Get heart rate(bpm)
     */

    //% block="read heart rate (bpm) (i20)" 
    //% group="Sensor"
    //% weight=50
    //% advanced=true
    export function heartrateRead(): number {
        if (averagetime == 0) {
            return 0;
        }
        let value: number = Math.round(29000 / averagetime);
        return value;
    }

    /**
     * Initialize a given number of LEDs on the RGB LED strip at a specific pin
     * @param pin to pin ,eg: "pin"
     * @param num to num ,eg: "1~7"
     */

    //% block="initialize RGB strip at pin %pin with %num leds"
    //% group="Actuator"
    //% num.min=1 num.max=7 num.defl=3
    //% weight=100
    export function m01100184Init(pin: DigitalPin, num: number): void {
        rgb_pin = pin;
        neopixel_buf = pins.createBuffer(3 * num);
        for (let i = 0; i < 3 * num; i++) {
            neopixel_buf[i] = 0;
        }
        ledsum = num;
    }

    /**
     * Set the brightness of RGB lights
     * @param brightness to brightness ,eg: "0~255"
     */

    //% block="set brightness %brightness"
    //% group="Actuator"
    //% brightness.min=0 brightness.max=255 brightness.defl=255
    //% weight=90
    //% advanced=true
    export function m01100184Brightness(brightness: number): void {

        _brightness = brightness;
    }

    /**
     * The LED positions where you wish to begin and end
     * @param from to start ,eg: "1~7"
     * @param to to end ,eg: "1~7"
     */

    //% block="leds from %from to %to"
    //% group="Actuator"
    //% from.min=1 from.max=7 from.defl=1
    //% to.min=1 to.max=7 to.defl=2
    //% weight=80
    export function m01100184LedRange(from: number, to: number): number {
        return ((from - 1) << 16) + (2 << 8) + (to);
    }

    /**
     * The designated LED shows a given color
     * @param index to index ,eg: "1~7"
     * @param color to color ,eg: "color"
     */

    //% block="led %index show color %color"
    //% group="Actuator"
    //% index.min=1 index.max=7 index.defl=1
    //% color.shadow="colorNumberPicker"
    //% weight=70
    export function m01100184SetIndexColor(index: number, color: number): void {
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
     * All LEDs show a given color
     * @param rgb to rgb ,eg: "rgb"
     */

    //% block="show color %rgb"
    //% group="Actuator"
    //% weight=60
    //% rgb.shadow="colorNumberPicker"
    export function m01100184ShowColor(rgb: number) {
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
     * Shift LEDs forward and clear with zeros
     * @param offset to offset ,eg: "offset"
     */

    //% block="shift pixels by %offset"
    //% group="Actuator"
    //% weight=52
    export function m01100184Shift(offset: number): void {
        let steps = ledsum
        if (offset > steps) {
            for (let i = 0; i < 16 * steps; i++) {
                neopixel_buf[i] = 0;
            }
        }
        if (ledsum > 1 && offset != 0) {
            if (offset > 0) {
                for (let i = steps - 1; i >= offset; i--) {
                    neopixel_buf[i * 3] = neopixel_buf[(i - offset) * 3]
                    neopixel_buf[i * 3 + 1] = neopixel_buf[(i - offset) * 3 + 1]
                    neopixel_buf[i * 3 + 2] = neopixel_buf[(i - offset) * 3 + 2]
                }
                for (let i = 0; i < offset; i++) {
                    neopixel_buf[i * 3] = 0
                    neopixel_buf[i * 3 + 1] = 0
                    neopixel_buf[i * 3 + 2] = 0
                }
            }
            else {
                for (let i = 0; i <= steps - Math.abs(offset); i++) {
                    neopixel_buf[i * 3] = neopixel_buf[(i + Math.abs(offset)) * 3]
                    neopixel_buf[i * 3 + 1] = neopixel_buf[(i + Math.abs(offset)) * 3 + 1]
                    neopixel_buf[i * 3 + 2] = neopixel_buf[(i + Math.abs(offset)) * 3 + 2]
                }
                for (let i = steps - Math.abs(offset); i < steps; i++) {
                    neopixel_buf[i * 3] = 0
                    neopixel_buf[i * 3 + 1] = 0
                    neopixel_buf[i * 3 + 2] = 0
                }
            }
            ws2812b.sendBuffer(neopixel_buf, rgb_pin)
        }
    }

    /**
     * Rotate LEDs forward
     * @param offset to offset ,eg: "offset"
     */

    //% block="rotate pixels by %offset"
    //% group="Actuator"
    //% weight=51
    //% advanced=true
    export function m01100184Rotate(offset: number): void {
        let steps = ledsum
        if (offset > 0) {
            offset = offset % steps;
        } else {
            offset = Math.abs(offset) % steps;
            offset = -offset;
        }
        if (ledsum > 1 && offset != 0) {
            if (offset > 0) {
                let offdata = pins.createBuffer(3 * offset);
                for (let i = 0; i < offset; i++) {
                    offdata[i * 3] = neopixel_buf[(steps - offset + i) * 3]
                    offdata[i * 3 + 1] = neopixel_buf[(steps - offset + i) * 3 + 1]
                    offdata[i * 3 + 2] = neopixel_buf[(steps - offset + i) * 3 + 2]
                }
                for (let i = steps - 1; i >= offset; i--) {
                    neopixel_buf[i * 3] = neopixel_buf[(i - offset) * 3]
                    neopixel_buf[i * 3 + 1] = neopixel_buf[(i - offset) * 3 + 1]
                    neopixel_buf[i * 3 + 2] = neopixel_buf[(i - offset) * 3 + 2]
                }
                for (let i = 0; i < offset; i++) {
                    neopixel_buf[i * 3] = offdata[i * 3]
                    neopixel_buf[i * 3 + 1] = offdata[i * 3 + 1]
                    neopixel_buf[i * 3 + 2] = offdata[i * 3 + 2]
                }
                ws2812b.sendBuffer(neopixel_buf, rgb_pin)
            }
            else {
                let offdata = pins.createBuffer(3 * Math.abs(offset));
                for (let i = 0; i < Math.abs(offset); i++) {
                    offdata[i * 3] = neopixel_buf[i * 3]
                    offdata[i * 3 + 1] = neopixel_buf[i * 3 + 1]
                    offdata[i * 3 + 2] = neopixel_buf[i * 3 + 2]
                }
                for (let i = 0; i <= steps - Math.abs(offset); i++) {

                    neopixel_buf[i * 3] = neopixel_buf[(i + Math.abs(offset)) * 3]
                    neopixel_buf[i * 3 + 1] = neopixel_buf[(i + Math.abs(offset)) * 3 + 1]
                    neopixel_buf[i * 3 + 2] = neopixel_buf[(i + Math.abs(offset)) * 3 + 2]
                }
                for (let i = steps - Math.abs(offset); i < steps; i++) {
                    neopixel_buf[i * 3] = offdata[(i - steps + Math.abs(offset)) * 3]
                    neopixel_buf[i * 3 + 1] = offdata[(i - steps + Math.abs(offset)) * 3 + 1]
                    neopixel_buf[i * 3 + 2] = offdata[(i - steps + Math.abs(offset)) * 3 + 2]
                }
                ws2812b.sendBuffer(neopixel_buf, rgb_pin)
            }
        }
    }

    /**
     * Turn off all LEDs
     */

    //% block="clear all"
    //% group="Actuator"
    //% weight=50
    export function m01100184Off(): void {

        m01100184ShowColor(0);
    }

    /**
     * Convert red, green and blue channels into a RGB color
     * @param red to red ,eg: "0~255"
     * @param green to green ,eg: "0~255"
     * @param blue to blue ,eg: "0~255"
     */

    //% block="red %red green %green blue %blue"
    //% group="Actuator"
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% weight=40
    //% advanced=true
    export function m01100184Rgb(red: number, green: number, blue: number): number {

        return (red << 16) + (green << 8) + (blue);
    }

    /**
     * LED strip shows gradient color
     * @param start to start ,eg: "1~7"
     * @param end to end ,eg: "1~7"
     * @param startHue to startHue ,eg: "0~360"
     * @param endHue to endHue ,eg: "0~360"
     */

    //% weight=50
    //% group="Actuator"
    //% startHue.defl=1
    //% endHue.defl=360
    //% startHue.min=0 startHue.max=360
    //% endHue.min=0 endHue.max=360
    //% start.min=1 start.max=7 start.defl=1
    //% end.min=1 end.max=7 end.defl=5
    //% block="RGB LED %start to %end show gradient color from %startHue to %endHue"
    //% inlineInputMode=inline
    //% advanced=true
    export function m01100184LedRainbow(start: number, end: number, startHue: number, endHue: number) {

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
     * Servo rotates to a specific angle
     * @param pin to pin ,eg: "pin"
     * @param angle to angle ,eg: "0~180"
     */

    //% block="9g servo module pin %pin angle %angle" 
    //% group="Actuator"
    //% angle.min=0 angle.max=180
    //% weight=36
    export function setServoAngle(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }

    /**
     * 
     * @param ssid to ssid ,eg: "yourSSID"
     * @param password to password ,eg: "yourPASSWORD"
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */

    //% blockId=WiFi_IoT_UART_WIFI_setup
    //% block="Wi-Fi configure|Pin set:|receiving data (green wire): %receive|sending data (blue wire): %send|Wi-Fi:|name: %ssid|password: %password|start connection"
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% weight=35
    export function wifiInit(receive: SerialPin, send: SerialPin, ssid: string, password: string): void {
        OBLOQ_WIFI_SSID = ssid
        OBLOQ_WIFI_PASSWORD = password
        OBLOQ_SERIAL_TX = send
        OBLOQ_SERIAL_RX = receive
        Obloq_serial_init()
        for (let i = 0; i < 3; i++) {
                obloqWriteString("|1|1|\r")
                basic.pause(100)
            }
        obloqWriteString("|1|4|\r")
        basic.pause(2000)
        Obloq_start_connect_http()
    }

    /**
     * @param user to user ,eg: ""
     * @param pwd to pwd ,eg: ""
     * @param topic to topic ,eg: ""
     * @param server to receive ,eg: 
     * @param ip to ip ,eg: 
    */

    //% blockId=WiFi_IoT_UART_mqtt_setup
    //% block="MQTT configure|IoT_ID(user):%user|IoT_PWD(password):%pwd|Topic(default topic_0):%topic|server:%server||IP:%ip"
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% SERVER.fieldEditor="gridpicker" SERVER.fieldOptions.columns=2
    //% weight=33
    export function mqttSetup(/*mqtt*/user: string, pwd: string, topic: string, server: SERVERS, ip?: string):
        void {
        //OBLOQ_WIFI_SSID = SSID
        // OBLOQ_WIFI_PASSWORD = PASSWORD
        OBLOQ_MQTT_PWD = pwd
        OBLOQ_MQTT_ID = user
        OBLOQ_MQTT_TOPIC[0][0] = topic
        OBLOQ_MQTT_EASY_IOT_SIOT = ip
        //OBLOQ_SERIAL_TX = send
        //OBLOQ_SERIAL_RX = receive
        Obloq_start_connect_mqtt(server, "connect mqtt")
    }

    /**
     * Send a message.
     * @param top set top, eg: top
     * @param mess set mess, eg: mess
    */
    
    //% blockId=WiFi_IoT_UART_mqtt_send_message_more
    //% block="send message %mess |to %top"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% weight=31
    export function mqttSendMessageMore(mess: string, top: TOPIC): void {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_MQTT_INIT) {
            return
        }
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        switch (top) {
            case TOPIC.topic_0: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[0][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_1: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[1][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_2: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[2][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_3: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[3][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_4: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[4][0] + "|" + mess + "|\r"); break;
        }
    }

    /**
     * Disconnect the serial port.
      * @param IOT_TOPIC ,eg: "yourIotTopic"
    */
    
    //% blockId=WiFi_IoT_UART_mqtt_add_topic
    //% block="subscribe additional %top |: %IOT_TOPIC"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% weight=29
    export function mqttAddTopic(top: TOPIC, IOT_TOPIC: string): void {
        OBLOQ_MQTT_TOPIC[top][0] = IOT_TOPIC
        if (!OBLOQ_MQTT_INIT || OBLOQ_WORKING_MODE_IS_STOP) return

        let _timeout = 0
        if (OBLOQ_MQTT_TOPIC[top][0] != "x" && OBLOQ_MQTT_TOPIC[top][1] == "false") {
            subTopic(<string>OBLOQ_MQTT_TOPIC[top][0])
        } else {
            return
        }

        while (_timeout < 1000) {
            if (OBLOQ_ANSWER_CMD == "SubOk") {
                OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                OBLOQ_MQTT_TOPIC[top][1] = "true"
                break
            } else if (OBLOQ_ANSWER_CMD == "SubFailure") {
                OBLOQ_WRONG_TYPE = "mqtt subtopic failure"
                return
            }
            basic.pause(1)
            _timeout += 1
        }
        if (_timeout >= 1000 && OBLOQ_ANSWER_CMD != "SubOk") {
            OBLOQ_WRONG_TYPE = "mqtt subtopic timeout"
        } else {
            OBLOQ_MQTT_TOPIC[top][1] = "true"
        }
    }

    /**
     * This is an MQTT listener callback function, which is very important.
     * The specific use method can refer to "example/ObloqMqtt.ts"
    */
    
    //% blockId=WiFi_IoT_UART_mqtt_callback_user_more block="on received %top"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% useLoc="Obloq.Obloq_mqtt_callback_user_more"
    //% weight=27
    export function mqttCallbackUserMore(top: TOPIC, cb: (message: string) => void) {
        Obloq_mqtt_callback_more(top, () => {
            const packet = new PacketaMqtt()
            packet.message = OBLOQ_ANSWER_CONTENT
            cb(packet.message)
        });
    }

    /**
     * The HTTP get request.url(string):URL:time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */

    //% weight=25
    //% blockId=WiFi_IoT_UART_http_get
    //% block="http(get) | url %url| timeout(ms) %time"
    //% advanced=false

    export function httpGet(url: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|1|http://" + OBLOQ_HTTP_IP + /*":" + OBLOQ_HTTP_PORT +*/ "/" + url + "|\r")

        return Obloq_http_wait_request(time)
    }

    /**
     * The HTTP post request.url(string): URL; content(string):content
     * time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=23
    //% blockId=WiFi_IoT_UART_http_post
    //% block="http(post) | url %url| content %content| timeout(ms) %time"

    export function httpPost(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|2|http://" + OBLOQ_HTTP_IP + /*":" + OBLOQ_HTTP_PORT +*/ "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }

    /**
     * The HTTP put request,Obloq.put() can only be used for http protocol!
     * url(string): URL; content(string):content; time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */

    //% weight=21
    //% blockId=WiFi_IoT_UART_http_put
    //% block="http(put) | url %url| content %content| timeout(ms) %time"

    export function httpPut(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|3|http://" + OBLOQ_HTTP_IP + /*":" + OBLOQ_HTTP_PORT +*/ "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }

    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param IP to IP ,eg: "0.0.0.0"
     * @param PORT to PORT ,eg: 80
    */
    //% weight=50
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=WiFi_IoT_UART_http_setup
    //% block=" configure http | ip: %IP| start connection"

    export function httpSetup(IP: string):
        void {
        OBLOQ_HTTP_IP = IP
        //OBLOQ_HTTP_PORT = PORT
    }

    /**
     * Get the software version.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */

    //% weight=10
    //% blockId=WiFi_IoT_UART_get_version
    //% block="get version"
    export function getVersion(): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "GetVersion") {
                return OBLOQ_ANSWER_CONTENT
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return "timeout"
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "GetVersion") {
                    return "timeout"
                }
                else {
                    return OBLOQ_ANSWER_CONTENT
                }
            }
        }
        return OBLOQ_STR_TYPE_IS_NONE
    }




    function temperatureSensor(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round((100 * value * (3.3 / 10.24)) * 3.3 / 10.24) / 100;
    }

    function humiditySensor(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round(value / 10);
    }

    function waterproofTemperatureSensor(pin: AnalogPin): number {

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

    function ultrasonicDistanceSensor(pin: AnalogPin): number {

        let value: number = Math.round(10 * pins.analogReadPin(pin) * (100 / 1023)) / 10;
        return value;
    }

    function humiditySht30(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round(value / 10);
    }

    function V2pHSensor(pin: AnalogPin): number {

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

        if (index < ledsum) {
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


    //% advanced=true shim=obloq::obloqSetTxBufferSize
    function obloqSetTxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=obloq::obloqSetRxBufferSize
    function obloqSetRxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=obloq::obloqEventOn
    function obloqEventOn(): void {
        return
    }

    //% advanced=true shim=obloq::obloqClearRxBuffer
    function obloqClearRxBuffer(): void {
        return
    }

    //% advanced=true shim=obloq::obloqClearTxBuffer
    function obloqClearTxBuffer(): void {
        return
    }

    //% advanced=true shim=obloq::obloqforevers
    function obloqforevers(a: Action): void {
        return
    }

    function obloqWriteString(text: string): void {
        serial.writeString(text);
    }





    function Obloq_serial_init(): void {
        let data = "";
        //First send data through usb, avoid the first data scrambled.
        obloqWriteString("123");
        data = serial.readString();
        data = serial.readString();
        data = serial.readString();

        serial.redirect(OBLOQ_SERIAL_TX, OBLOQ_SERIAL_RX, BaudRate.BaudRate9600);
        obloqSetTxBufferSize(300);
        obloqSetRxBufferSize(300);
        obloqWriteString("\r");

        data = serial.readString();
        OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqClearRxBuffer();
        obloqClearTxBuffer();
        onEvent();
    }

    function Obloq_connect_wifi(): number {
        if (OBLOQ_WIFI_CONNECTED == OBLOQ_BOOL_TYPE_IS_TRUE) {
            return OBLOQ_ERROR_TYPE_IS_SUCCE
        }

        OBLOQ_WIFI_ICON = 1
        let timeout = 10000  //Set the default timeout period 10s.
        timeout = timeout < 100 ? 100 : timeout //Timeout minimum resolution 100ms

        let timeout_count_max = timeout / 100
        let timeout_count_now = 0
        if (OBLOQ_WIFI_CONNECT_FIRST) {
            //serial init
            if (!OBLOQ_SERIAL_INIT) {
                Obloq_serial_init()
            }
            //show icon
            //Obloq_wifi_icon_display()
            // for (let i = 0; i < 3; i++) {
            //     obloqWriteString("|1|1|\r")
            //     basic.pause(100)
            // }
            obloqWriteString("|2|1|" + OBLOQ_WIFI_SSID + "," + OBLOQ_WIFI_PASSWORD + "|\r") //Send wifi account and password instructions
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_FALSE
        }

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if ((timeout_count_now + 1) % 3 == 0) {
                //Obloq_wifi_icon_display()
            }
            if (OBLOQ_ANSWER_CMD == "WifiConnected") {
                OBLOQ_WIFI_IP = OBLOQ_ANSWER_CONTENT
                return OBLOQ_ERROR_TYPE_IS_SUCCE
            } else if (OBLOQ_ANSWER_CMD == "WifiConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE
            }
            basic.pause(100)
            timeout_count_now += 1
            if (timeout_count_now > timeout_count_max) {
                //basic.showIcon(IconNames.No)
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT
            }
            basic.pause(100);
        }
        return OBLOQ_ERROR_TYPE_IS_ERR
    }

    function Obloq_connect_mqtt(): void {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|1|" + OBLOQ_MQTT_SERVER + "|" + OBLOQ_MQTT_PORT + "|" + OBLOQ_MQTT_ID + "|" + OBLOQ_MQTT_PWD + "|\r")
    }

    function subTopic(topic: string): void {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|2|" + topic + "|\r")
    }

    function Obloq_mqtt_callback_more(top: TOPIC, a: Action): void {
        switch (top) {
            case TOPIC.topic_0: OBLOQ_MQTT_CB[0] = a; break;
            case TOPIC.topic_1: OBLOQ_MQTT_CB[1] = a; break;
            case TOPIC.topic_2: OBLOQ_MQTT_CB[2] = a; break;
            case TOPIC.topic_3: OBLOQ_MQTT_CB[3] = a; break;
            case TOPIC.topic_4: OBLOQ_MQTT_CB[4] = a; break;
        }
    }

    function Obloq_connect_iot(): number {
        OBLOQ_MQTT_ICON = 1
        let iconnum = 0
        let _timeout = 0
        let __timeout = 0

        Obloq_connect_mqtt()

        while (_timeout < 10000) {
            if (_timeout % 50 == 0) {
                //Obloq_mqtt_icon_display()
                iconnum += 1;
            }
            if (OBLOQ_ANSWER_CMD == "MqttConneted") {
                break
            } else if (OBLOQ_ANSWER_CMD == "MqttConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE
            }
            basic.pause(1)
            _timeout += 1

        }
        if (_timeout >= 5000 && OBLOQ_ANSWER_CMD != "MqttConneted") {
            return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT
        }
        for (let i = 0; i < OBLOQ_MQTT_TOPIC_NUM_MAX; i++) {
            if (OBLOQ_MQTT_TOPIC[i][0] != "x" && OBLOQ_MQTT_TOPIC[i][1] == "false") {
                subTopic(<string>OBLOQ_MQTT_TOPIC[i][0])
            } else {
                continue
            }
            __timeout = _timeout + 2000
            while (_timeout < __timeout) {
                if (_timeout % 50 == 0) {
                    //Obloq_mqtt_icon_display()
                    iconnum += 1
                }
                if (iconnum > 3) {//动画一次以上
                    if (OBLOQ_ANSWER_CMD == "SubOk") {
                        OBLOQ_MQTT_TOPIC[i][1] = "true";
                        OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                        break
                    } else if (OBLOQ_ANSWER_CMD == "SubFailure") {
                        return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE
                    }
                }
                basic.pause(1)
                _timeout += 1
            }
            if (_timeout >= __timeout) {
                if (OBLOQ_ANSWER_CMD != "SubOk") {
                    OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                    return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT
                } else {
                    OBLOQ_MQTT_TOPIC[i][1] = "true";
                    OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                }
            }
        }
        return OBLOQ_ERROR_TYPE_IS_SUCCE
        //basic.showString("ok")
    }

    function Obloq_start_connect_http(): void {
        OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_TRUE
        let ret = Obloq_connect_wifi()
        if (OBLOQ_DEBUG) { basic.showNumber(ret) }
        switch (ret) {
            case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
                OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect timeout"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect failure"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_ERR: {
                basic.showNumber(ret)
                basic.showIcon(IconNames.No)
                while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
            } break
        }
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    function Obloq_start_connect_mqtt(SERVER: SERVERS, connectStart: string): void {
        OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_TRUE
        if (OBLOQ_MQTT_DEFAULT_SERVER) {
            if (SERVER == SERVERS.China) {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_CHINA
            } else if (SERVER == SERVERS.English) {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_EN
            }
            else {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SIOT
            }
            OBLOQ_MQTT_PORT = OBLOQ_MQTT_EASY_IOT_PORT
        } else {
            OBLOQ_MQTT_SERVER = OBLOQ_MQTT_USER_IOT_SERVER
            OBLOQ_MQTT_PORT = OBLOQ_MQTT_USER_IOT_PORT
        }

        let ret = 0
        if (connectStart == "connect wifi") {
            ret = Obloq_connect_wifi()
            if (OBLOQ_DEBUG) { basic.showNumber(ret) }
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                    OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "wifi connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "wifi connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        if (connectStart == "connect wifi" || connectStart == "connect mqtt") {
            ret = Obloq_connect_iot();
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt subtopic timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt subtopic failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    function Obloq_http_wait_request(time: number): string {
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            basic.pause(100)
            if (OBLOQ_ANSWER_CMD == "200") {//http请求成功
                OBLOQ_ANSWER_CMD = "";
                return OBLOQ_ANSWER_CONTENT //返回消息
            } else if (OBLOQ_ANSWER_CMD == "-1") {//获取数据失败
                Obloq_http_wrong_animation("requestFailed")
                OBLOQ_ANSWER_CMD = "";
                return OBLOQ_STR_TYPE_IS_NONE
            } else if (OBLOQ_ANSWER_CMD == "1") {//http请求字段错误
                Obloq_http_wrong_animation("requestFailed")
                OBLOQ_ANSWER_CMD = "";
                return OBLOQ_STR_TYPE_IS_NONE
            }

            _timeout += 1
            if (_timeout > timeout) {
                Obloq_http_wrong_animation("timeOut")
                return OBLOQ_STR_TYPE_IS_NONE
            }
        }

        return OBLOQ_STR_TYPE_IS_NONE
    }

    function Obloq_http_wrong_animation(wrongType: string): void {
        if (wrongType == "requestFailed") {  //http 请求失败或者字段错误动画
            basic.showIcon(IconNames.No, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showIcon(IconNames.No, 10)
                basic.pause(50)
            }
        } else if (wrongType == "timeOut") { //http 请求超时动画
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `, 10)
                basic.pause(50)
            }
        }
        basic.pause(150)
        basic.clearScreen()
    }

    function onEvent() {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        //basic.showString("A")
        OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqEventOn()
        //control.onEvent(<number>32, <number>1, Obloq_serial_recevice,16); // register handler
        serial.onDataReceived('\r', Obloq_serial_recevice)
        //control.onEvent(32, 1, Obloq_serial_recevice)
    }

    function Obloq_serial_recevice(): void {
        //basic.showString("B")
        let Obloq_message_str = serial.readString()
        let size = Obloq_message_str.length
        let item = Obloq_message_str

        if (item.indexOf("|4|1|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConneted"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConnectFailure"
            OBLOQ_ANSWER_CONTENT = item.substr(9, size - 2 - 9)
            return
        } else if (item.indexOf("|4|1|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubCeiling"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            OBLOQ_WRONG_TYPE = "mqtt pulish failure"
            return
        } else if (item.indexOf("|4|1|4|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnected"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|4|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|5|") != -1) {//|4|1|5|topic|message|
            let str = item.substr(7, size - 2 - 7)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)

            serial.writeLine(OBLOQ_ANSWER_CONTENT)
            switch (OBLOQ_ANSWER_CMD) {
                case OBLOQ_MQTT_TOPIC[0][0]: { if (OBLOQ_MQTT_CB[0] != null) obloqforevers(OBLOQ_MQTT_CB[0]); } break;
                case OBLOQ_MQTT_TOPIC[1][0]: { if (OBLOQ_MQTT_CB[1] != null) obloqforevers(OBLOQ_MQTT_CB[1]); } break;
                case OBLOQ_MQTT_TOPIC[2][0]: { if (OBLOQ_MQTT_CB[2] != null) obloqforevers(OBLOQ_MQTT_CB[2]); } break;
                case OBLOQ_MQTT_TOPIC[3][0]: { if (OBLOQ_MQTT_CB[3] != null) obloqforevers(OBLOQ_MQTT_CB[3]); } break;
                case OBLOQ_MQTT_TOPIC[4][0]: { if (OBLOQ_MQTT_CB[4] != null) obloqforevers(OBLOQ_MQTT_CB[4]); } break;
            }
            return
        } else if (item.indexOf("|4|1|6|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PingOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "GetVersion"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//version
            return
        } else if (item.indexOf("|1|3|", 0) != -1) {
            if (OBLOQ_MQTT_INIT) {
                OBLOQ_ANSWER_CMD = "Heartbeat"
                OBLOQ_ANSWER_CONTENT = "OK"
            }
            return
        } else if (item.indexOf("|2|1|", 0) != -1) {

            OBLOQ_ANSWER_CMD = "WifiDisconnect"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            if (OBLOQ_MQTT_INIT || OBLOQ_HTTP_INIT || OBLOQ_WIFI_CONNECTED) {
                OBLOQ_WRONG_TYPE = "wifi disconnect"
            }
            return
        } else if (item.indexOf("|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnecting"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            //serial.writeNumber(12)
            return
        } else if (item.indexOf("|2|3|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnected"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//IP addr
            return
        } else if (item.indexOf("|2|4|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|3|", 0) != -1) {//|3|errcode|message|
            let str = item.substr(3, size - 2 - 3)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            return
        } else {
            return
        }
    }

}
