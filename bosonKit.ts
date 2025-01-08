


//% block="bosonKit"
//% weight=100 color=#0fbc11 icon="\uf0b2"
//% groups="['Sensor', 'Actuator', 'Display', 'Obloq']"
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
        BosonV2Ph = 13,
        //% blockId="bosonAnalogReadWaterLevel" block="water level sensor (i31)"
        BosonWaterLevel = 14
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

    export enum Servers {
        //% blockId=serversChina block="EasyIoT_CN"
        China,
        //% blockId=serversEnglish block="EasyIoT_EN"
        English,
        //% blockId=serversSiot block="SIOT"
        Siot
    }

    // topics name
    export enum TOPIC {
        Topic0 = 0,
        Topic1 = 1,
        Topic2 = 2,
        Topic3 = 3,
        Topic4 = 4
    }

    // topics name
    export enum YRAW {
        //% block="0"
        Y0 = 0,
        //% block="1"
        Y1 = 1,
        //% block="2"
        Y2 = 2,
        //% block="3"
        Y3 = 3
    }

    export class PacketaMqtt {
        /**
         * Obloq receives the message content.
         */
        public message: string;
    }


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



    //serial
    let obloqSerialInitFlag = OBLOQ_BOOL_TYPE_IS_FALSE
    let obloqSerialTx = SerialPin.P2
    let obloqSerialRx = SerialPin.P1
    //wifi
    let obloqWifiSsid = OBLOQ_STR_TYPE_IS_NONE
    let obloqWifiPassword = OBLOQ_STR_TYPE_IS_NONE
    let obloqWifiIp = "0.0.0.0"
    //mqtt//*
    let obloqMqttPort = 0
    let obloqMqttServer = OBLOQ_STR_TYPE_IS_NONE
    let obloqMqttPwd = OBLOQ_STR_TYPE_IS_NONE
    let obloqMqttId = OBLOQ_STR_TYPE_IS_NONE
    let obloqMqttTopic = [["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"]]
    //http
    let obloqHttpIp = OBLOQ_STR_TYPE_IS_NONE
    let obloqHttpPort = 8080
    let obloqHttpBusy = OBLOQ_BOOL_TYPE_IS_FALSE
    //state
    let obloqWifiConnected = OBLOQ_BOOL_TYPE_IS_FALSE
    let obloqWifiConnectFirst = OBLOQ_BOOL_TYPE_IS_TRUE
    let obloqMqttInit = OBLOQ_BOOL_TYPE_IS_FALSE
    let obloqHttpInit = OBLOQ_BOOL_TYPE_IS_FALSE
    //callback
    let obloqMqttCallback: Action[] = [null, null, null, null, null]
    //commands
    let obloqAnswerCmd = OBLOQ_STR_TYPE_IS_NONE
    let obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
    let obloqWrongType = OBLOQ_STR_TYPE_IS_NONE
    //animation
    let obloqWifiIcon = 1
    let obloqMqttIcon = 1
    //event
    let obloqMqttEvent = OBLOQ_BOOL_TYPE_IS_FALSE
    //mode
    let obloqWorkingModeIsMqtt = OBLOQ_BOOL_TYPE_IS_FALSE
    let obloqWorkingModeIsHttp = OBLOQ_BOOL_TYPE_IS_FALSE
    let obloqWorkingModeIsStop = OBLOQ_BOOL_TYPE_IS_TRUE


    let obloqWebhooksKey = ""
    let obloqWebhooksEvent = ""
    let microIoTWebhooksKey = ""
    let microIoTWebhooksEvent = ""
    let microIoTThingspeakKey = ""
    let obloqMqttEasyIotSiot = ""
    let microIoTBeebotteToken = ""
    let gcity = 0;



    let beattime1 = 0;
    let beattime2 = 0;
    let beattime3 = 0;
    let averagetime = 0;

    let _brightness = 255;
    let rgb_pin = -1;
    let neopixel_buf: Buffer;
    let ledsum = -1;

    // OLED
    const IIC_MAX_TRANSFER_SIZE = 32;
    const SSD1306_CHARGEPUMP = 0x8D
    const SSD1306_COLUMNADDR = 0x21
    const SSD1306_COMSCANDEC = 0xC8
    const SSD1306_COMSCANINC = 0xC0
    const SSD1306_DISPLAYALLON = 0xA5
    const SSD1306_DISPLAYALLON_RESUME = 0xA4
    const SSD1306_DISPLAYOFF = 0xAE
    const SSD1306_DISPLAYON = 0xAF
    const SSD1306_EXTERNALVCC = 0x01
    const SSD1306_INVERTDISPLAY = 0xA7
    const SSD1306_MEMORYMODE = 0x20
    const SSD1306_NORMALDISPLAY = 0xA6
    const SSD1306_PAGEADDR = 0x22
    const SSD1306_SEGREMAP = 0xA0
    const SSD1306_SETCOMPINS = 0xDA
    const SSD1306_SETCONTRAST = 0x81
    const SSD1306_SETDISPLAYCLOCKDIV = 0xD5
    const SSD1306_SETDISPLAYOFFSET = 0xD3
    const SSD1306_SETHIGHCOLUMN = 0x10
    const SSD1306_SETLOWCOLUMN = 0x00
    const SSD1306_SETMULTIPLEX = 0xA8
    const SSD1306_SETPRECHARGE = 0xD9
    const SSD1306_SETSEGMENTREMAP = 0xA1
    const SSD1306_SETSTARTLINE = 0x40
    const SSD1306_SETVCOMDETECT = 0xDB
    const SSD1306_SWITCHCAPVCC = 0x02
    const SSD1306_WRITEDATA = 0x40
    const SSD1306_WRITECMD = 0x80
    let frameBuffer: number[] = [];
    let cursorX = 0;
    let cursorY = 0;
    let oledArdress = 0x3C;
    let brushColor = 1;
    let cursorLine = 1;
    const basicFont: string[] = [
        "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"/*" "*/,
        "\x00\x00\x18\x3c\x3c\x3c\x18\x18\x18\x00\x18\x18\x00\x00\x00\x00"/*"!"*/,
        "\x00\x63\x63\x63\x22\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"/*"\"*/,
        "\x00\x00\x00\x36\x36\x7f\x36\x36\x36\x7f\x36\x36\x00\x00\x00\x00"/*"#"*/,
        "\x0c\x0c\x3e\x63\x61\x60\x3e\x03\x03\x43\x63\x3e\x0c\x0c\x00\x00"/*"$"*/,
        "\x00\x00\x00\x00\x00\x61\x63\x06\x0c\x18\x33\x63\x00\x00\x00\x00"/*"%"*/,
        "\x00\x00\x00\x1c\x36\x36\x1c\x3b\x6e\x66\x66\x3b\x00\x00\x00\x00"/*"&"*/,
        "\x00\x30\x30\x30\x60\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"/*"'"*/,
        "\x00\x00\x0c\x18\x18\x30\x30\x30\x30\x18\x18\x0c\x00\x00\x00\x00"/*"("*/,
        "\x00\x00\x18\x0c\x0c\x06\x06\x06\x06\x0c\x0c\x18\x00\x00\x00\x00"/*")"*/, //10
        "\x00\x00\x00\x00\x42\x66\x3c\xff\x3c\x66\x42\x00\x00\x00\x00\x00"/*"*"*/,
        "\x00\x00\x00\x00\x18\x18\x18\xff\x18\x18\x18\x00\x00\x00\x00\x00"/*"+"*/,
        "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x18\x18\x18\x30\x00\x00"/*","*/,
        "\x00\x00\x00\x00\x00\x00\x00\xff\x00\x00\x00\x00\x00\x00\x00\x00"/*"-"*/,
        "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x18\x18\x00\x00\x00\x00"/*"."*/,
        "\x00\x00\x01\x03\x07\x0e\x1c\x38\x70\xe0\xc0\x80\x00\x00\x00\x00"/*"/"*/,
        "\x00\x00\x3e\x63\x63\x63\x6b\x6b\x63\x63\x63\x3e\x00\x00\x00\x00"/*"0"*/,
        "\x00\x00\x0c\x1c\x3c\x0c\x0c\x0c\x0c\x0c\x0c\x3f\x00\x00\x00\x00"/*"1"*/,
        "\x00\x00\x3e\x63\x03\x06\x0c\x18\x30\x61\x63\x7f\x00\x00\x00\x00"/*"2"*/,
        "\x00\x00\x3e\x63\x03\x03\x1e\x03\x03\x03\x63\x3e\x00\x00\x00\x00"/*"3"*/, //20
        "\x00\x00\x06\x0e\x1e\x36\x66\x66\x7f\x06\x06\x0f\x00\x00\x00\x00"/*"4"*/,
        "\x00\x00\x7f\x60\x60\x60\x7e\x03\x03\x63\x73\x3e\x00\x00\x00\x00"/*"5"*/,
        "\x00\x00\x1c\x30\x60\x60\x7e\x63\x63\x63\x63\x3e\x00\x00\x00\x00"/*"6"*/,
        "\x00\x00\x7f\x63\x03\x06\x06\x0c\x0c\x18\x18\x18\x00\x00\x00\x00"/*"7"*/,
        "\x00\x00\x3e\x63\x63\x63\x3e\x63\x63\x63\x63\x3e\x00\x00\x00\x00"/*"8"*/,
        "\x00\x00\x3e\x63\x63\x63\x63\x3f\x03\x03\x06\x3c\x00\x00\x00\x00"/*"9"*/,
        "\x00\x00\x00\x00\x00\x18\x18\x00\x00\x00\x18\x18\x00\x00\x00\x00"/*":"*/,
        "\x00\x00\x00\x00\x00\x18\x18\x00\x00\x00\x18\x18\x18\x30\x00\x00"/*";"*/,
        "\x00\x00\x00\x06\x0c\x18\x30\x60\x30\x18\x0c\x06\x00\x00\x00\x00"/*"<"*/,
        "\x00\x00\x00\x00\x00\x00\x7e\x00\x00\x7e\x00\x00\x00\x00\x00\x00"/*"="*/, //30
        "\x00\x00\x00\x60\x30\x18\x0c\x06\x0c\x18\x30\x60\x00\x00\x00\x00"/*">"*/,
        "\x00\x00\x3e\x63\x63\x06\x0c\x0c\x0c\x00\x0c\x0c\x00\x00\x00\x00"/*"?"*/,
        "\x00\x00\x3e\x63\x63\x6f\x6b\x6b\x6e\x60\x60\x3e\x00\x00\x00\x00"/*"@"*/,
        "\x00\x00\x08\x1c\x36\x63\x63\x63\x7f\x63\x63\x63\x00\x00\x00\x00"/*"A"*/,
        "\x00\x00\x7e\x33\x33\x33\x3e\x33\x33\x33\x33\x7e\x00\x00\x00\x00"/*"B"*/,
        "\x00\x00\x1e\x33\x61\x60\x60\x60\x60\x61\x33\x1e\x00\x00\x00\x00"/*"C"*/,
        "\x00\x00\x7c\x36\x33\x33\x33\x33\x33\x33\x36\x7c\x00\x00\x00\x00"/*"D"*/,
        "\x00\x00\x7f\x33\x31\x34\x3c\x34\x30\x31\x33\x7f\x00\x00\x00\x00"/*"E"*/,
        "\x00\x00\x7f\x33\x31\x34\x3c\x34\x30\x30\x30\x78\x00\x00\x00\x00"/*"F"*/,
        "\x00\x00\x1e\x33\x61\x60\x60\x6f\x63\x63\x37\x1d\x00\x00\x00\x00"/*"G"*/, //40
        "\x00\x00\x63\x63\x63\x63\x7f\x63\x63\x63\x63\x63\x00\x00\x00\x00"/*"H"*/,
        "\x00\x00\x3c\x18\x18\x18\x18\x18\x18\x18\x18\x3c\x00\x00\x00\x00"/*"I"*/,
        "\x00\x00\x0f\x06\x06\x06\x06\x06\x06\x66\x66\x3c\x00\x00\x00\x00"/*"J"*/,
        "\x00\x00\x73\x33\x36\x36\x3c\x36\x36\x33\x33\x73\x00\x00\x00\x00"/*"K"*/,
        "\x00\x00\x78\x30\x30\x30\x30\x30\x30\x31\x33\x7f\x00\x00\x00\x00"/*"L"*/,
        "\x00\x00\x63\x77\x7f\x6b\x63\x63\x63\x63\x63\x63\x00\x00\x00\x00"/*"M"*/,
        "\x00\x00\x63\x63\x73\x7b\x7f\x6f\x67\x63\x63\x63\x00\x00\x00\x00"/*"N"*/,
        "\x00\x00\x1c\x36\x63\x63\x63\x63\x63\x63\x36\x1c\x00\x00\x00\x00"/*"O"*/,
        "\x00\x00\x7e\x33\x33\x33\x3e\x30\x30\x30\x30\x78\x00\x00\x00\x00"/*"P"*/,
        "\x00\x00\x3e\x63\x63\x63\x63\x63\x63\x6b\x6f\x3e\x06\x07\x00\x00"/*"Q"*/, //50
        "\x00\x00\x7e\x33\x33\x33\x3e\x36\x36\x33\x33\x73\x00\x00\x00\x00"/*"R"*/,
        "\x00\x00\x3e\x63\x63\x30\x1c\x06\x03\x63\x63\x3e\x00\x00\x00\x00"/*"S"*/,
        "\x00\x00\xff\xdb\x99\x18\x18\x18\x18\x18\x18\x3c\x00\x00\x00\x00"/*"T"*/,
        "\x00\x00\x63\x63\x63\x63\x63\x63\x63\x63\x63\x3e\x00\x00\x00\x00"/*"U"*/,
        "\x00\x00\x63\x63\x63\x63\x63\x63\x63\x36\x1c\x08\x00\x00\x00\x00"/*"V"*/,
        "\x00\x00\x63\x63\x63\x63\x63\x6b\x6b\x7f\x36\x36\x00\x00\x00\x00"/*"W"*/,
        "\x00\x00\xc3\xc3\x66\x3c\x18\x18\x3c\x66\xc3\xc3\x00\x00\x00\x00"/*"X"*/,
        "\x00\x00\xc3\xc3\xc3\x66\x3c\x18\x18\x18\x18\x3c\x00\x00\x00\x00"/*"Y"*/,
        "\x00\x00\x7f\x63\x43\x06\x0c\x18\x30\x61\x63\x7f\x00\x00\x00\x00"/*"Z"*/,
        "\x00\x00\x3c\x30\x30\x30\x30\x30\x30\x30\x30\x3c\x00\x00\x00\x00"/*"["*/, //60
        "\x00\x00\x80\xc0\xe0\x70\x38\x1c\x0e\x07\x03\x01\x00\x00\x00\x00"/*"\\"*/,
        "\x00\x00\x3c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x3c\x00\x00\x00\x00"/*"}"*/,
        "\x08\x1c\x36\x63\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"/*"^"*/,
        "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\x00\x00\x00"/*"_"*/,
        "\x18\x18\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"/*"'"*/,
        "\x00\x00\x00\x00\x00\x3c\x46\x06\x3e\x66\x66\x3b\x00\x00\x00\x00"/*"a"*/,
        "\x00\x00\x70\x30\x30\x3c\x36\x33\x33\x33\x33\x6e\x00\x00\x00\x00"/*"b"*/,
        "\x00\x00\x00\x00\x00\x3e\x63\x60\x60\x60\x63\x3e\x00\x00\x00\x00"/*"c"*/,
        "\x00\x00\x0e\x06\x06\x1e\x36\x66\x66\x66\x66\x3b\x00\x00\x00\x00"/*"d"*/,
        "\x00\x00\x00\x00\x00\x3e\x63\x63\x7e\x60\x63\x3e\x00\x00\x00\x00"/*"e"*/, //70
        "\x00\x00\x1c\x36\x32\x30\x7c\x30\x30\x30\x30\x78\x00\x00\x00\x00"/*"f"*/,
        "\x00\x00\x00\x00\x00\x3b\x66\x66\x66\x66\x3e\x06\x66\x3c\x00\x00"/*"g"*/,
        "\x00\x00\x70\x30\x30\x36\x3b\x33\x33\x33\x33\x73\x00\x00\x00\x00"/*"h"*/,
        "\x00\x00\x0c\x0c\x00\x1c\x0c\x0c\x0c\x0c\x0c\x1e\x00\x00\x00\x00"/*"i"*/,
        "\x00\x00\x06\x06\x00\x0e\x06\x06\x06\x06\x06\x66\x66\x3c\x00\x00"/*"j"*/,
        "\x00\x00\x70\x30\x30\x33\x33\x36\x3c\x36\x33\x73\x00\x00\x00\x00"/*"k"*/,
        "\x00\x00\x1c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x1e\x00\x00\x00\x00"/*"l"*/,
        "\x00\x00\x00\x00\x00\x6e\x7f\x6b\x6b\x6b\x6b\x6b\x00\x00\x00\x00"/*"m"*/,
        "\x00\x00\x00\x00\x00\x6e\x33\x33\x33\x33\x33\x33\x00\x00\x00\x00"/*"n"*/,
        "\x00\x00\x00\x00\x00\x3e\x63\x63\x63\x63\x63\x3e\x00\x00\x00\x00"/*"o"*/,
        "\x00\x00\x00\x00\x00\x6e\x33\x33\x33\x33\x3e\x30\x30\x78\x00\x00"/*"p"*/,
        "\x00\x00\x00\x00\x00\x3b\x66\x66\x66\x66\x3e\x06\x06\x0f\x00\x00"/*"q"*/,
        "\x00\x00\x00\x00\x00\x6e\x3b\x33\x30\x30\x30\x78\x00\x00\x00\x00"/*"r"*/,
        "\x00\x00\x00\x00\x00\x3e\x63\x38\x0e\x03\x63\x3e\x00\x00\x00\x00"/*"s"*/,
        "\x00\x00\x08\x18\x18\x7e\x18\x18\x18\x18\x1b\x0e\x00\x00\x00\x00"/*"t"*/,
        "\x00\x00\x00\x00\x00\x66\x66\x66\x66\x66\x66\x3b\x00\x00\x00\x00"/*"u"*/,
        "\x00\x00\x00\x00\x00\x63\x63\x36\x36\x1c\x1c\x08\x00\x00\x00\x00"/*"v"*/,
        "\x00\x00\x00\x00\x00\x63\x63\x63\x6b\x6b\x7f\x36\x00\x00\x00\x00"/*"w"*/,
        "\x00\x00\x00\x00\x00\x63\x36\x1c\x1c\x1c\x36\x63\x00\x00\x00\x00"/*"x"*/,
        "\x00\x00\x00\x00\x00\x63\x63\x63\x63\x63\x3f\x03\x06\x3c\x00\x00"/*"y"*/,
        "\x00\x00\x00\x00\x00\x7f\x66\x0c\x18\x30\x63\x7f\x00\x00\x00\x00"/*"z"*/,
        "\x00\x00\x0e\x18\x18\x18\x70\x18\x18\x18\x18\x0e\x00\x00\x00\x00"/*"{"*/,
        "\x00\x00\x18\x18\x18\x18\x18\x00\x18\x18\x18\x18\x18\x00\x00\x00"/*"|"*/,
        "\x00\x00\x70\x18\x18\x18\x0e\x18\x18\x18\x18\x70\x00\x00\x00\x00"/*"}"*/,
        "\x00\x00\x3b\x6e\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"/*"~"*/,
    ]


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
    //% advanced=true
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
        pins.servoWritePin(pin, angle);
    }

    /**
     * Used to set the I2C address and initialization configuration of the OLED display
     * @param address to address ,eg: 0x3C
    */

    //% block="OLED 128*64 init address 0x3C"
    //% group="Display"
    //% weight=34
    //% advanced=true
    export function oledInit() {
        oledBegin();
    }

    /**
     * Display letters, numbers, symbols, and other text information on the specified line
     * @param row to row ,eg: 1
     * @param str to str ,eg: "hello"
    */

    //% block="OLED 128*64 Row $row display $str"
    //% group="Display"
    //% row.min=1 row.max=4
    //% weight=32
    //% advanced=true
    export function oledInLine(row: number, str: string) {
        setCursorLine(row);
        writeCharLine(str);
    }

    /**
     * Display letters, numbers, symbols, and other text information at specified coordinates
     * @param str to str ,eg: "hello"
     * @param x to x ,eg: "42"
     * @param y to y ,eg: bosonKit.YRAW.Y1
    */

    //% block="OLED 128*64 display $str at position X: $x Y: 16*$y"
    //% group="Display"
    //% weight=30
    //% advanced=true
    export function oledInXY(str: string, x: number, y: YRAW) {
        setCursor(x, y * 16);
        for (let c of str) {
            writeChar(c);
        }
    }

    /**
     * Clear all content from the display screen
    */

    //% block="OLED 128*64 clear"
    //% group="Display"
    //% weight=28
    //% advanced=true
    export function oledClear() {
        fillScreen(0);
    }

    /**
     * WIFI initialization
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
     * @param ssid to ssid ,eg: "yourSSID"
     * @param password to password ,eg: "yourPASSWORD"
    */

    //% block="Wi-Fi configure|Pin Rx:%receive|Pin Tx:%send|Wi-Fi name:%ssid|Wi-Fi password:%password|start connection"
    //% group="Obloq"
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% weight=26
    export function wifiInit(receive: SerialPin, send: SerialPin, ssid: string, password: string): void {
        obloqWifiSsid = ssid;
        obloqWifiPassword = password;
        obloqSerialTx = send;
        obloqSerialRx = receive;
        obloqSerialInit();
        for (let i = 0; i < 3; i++) {
            obloqWriteString("|1|1|\r");
            basic.pause(100);
        }
        obloqWriteString("|1|4|\r");
        basic.pause(2000);
        obloqStartConnectHttp();
    }

    /**
     * MQTT initialization
     * @param user to user ,eg: "yourApiKey"
     * @param pwd to pwd ,eg: "yourSecretKey"
     * @param topic to topic ,eg: "yourIotTopic"
     * @param server to receive ,eg: Servers.China
    */

    //% block="MQTT configure|IoT_ID(user):%user|IoT_PWD(password):%pwd|Topic(default Topic0):%topic|server:%server||IP(SIOT):%ip"
    //% group="Obloq"
    //% server.fieldEditor="gridpicker" server.fieldOptions.columns=2
    //% weight=24
    export function mqttInit(user: string, pwd: string, topic: string, server: Servers, ip?: string):
        void {
        //obloqWifiSsid = SSID
        // obloqWifiPassword = PASSWORD
        obloqMqttPwd = pwd
        obloqMqttId = user
        obloqMqttTopic[0][0] = topic
        obloqMqttEasyIotSiot = ip
        //obloqSerialTx = send
        //obloqSerialRx = receive
        obloqStartConnectMqtt(server, "connect mqtt")
    }

    /**
     * MQTT sends a message.
     * @param mess set mess, eg: "message"
     * @param top set top, eg: TOPIC.Topic0
    */

    //% block="send message %mess |to %top"
    //% group="Obloq"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% weight=22
    export function mqttSendMessageMore(mess: string, top: TOPIC): void {
        while (obloqWorkingModeIsStop) { basic.pause(20) }
        if (!obloqMqttInit) {
            return
        }
        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        switch (top) {
            case TOPIC.Topic0: obloqWriteString("|4|1|3|" + obloqMqttTopic[0][0] + "|" + mess + "|\r"); break;
            case TOPIC.Topic1: obloqWriteString("|4|1|3|" + obloqMqttTopic[1][0] + "|" + mess + "|\r"); break;
            case TOPIC.Topic2: obloqWriteString("|4|1|3|" + obloqMqttTopic[2][0] + "|" + mess + "|\r"); break;
            case TOPIC.Topic3: obloqWriteString("|4|1|3|" + obloqMqttTopic[3][0] + "|" + mess + "|\r"); break;
            case TOPIC.Topic4: obloqWriteString("|4|1|3|" + obloqMqttTopic[4][0] + "|" + mess + "|\r"); break;
        }
    }

    /**
     * Add a topic subscription
     * @param topic set topic, eg: TOPIC.Topic0
     * @param topString set topString, eg: "yourIotTopic"
    */

    //% block="subscribe additional %topic |: %topString"
    //% group="Obloq"
    //% topic.fieldEditor="gridpicker" topic.fieldOptions.columns=2
    //% weight=20
    //% advanced=true
    export function mqttAddTopic(topic: TOPIC, topString: string): void {
        obloqMqttTopic[topic][0] = topString
        if (!obloqMqttInit || obloqWorkingModeIsStop) return

        let _timeout = 0
        if (obloqMqttTopic[topic][0] != "x" && obloqMqttTopic[topic][1] == "false") {
            subTopic(<string>obloqMqttTopic[topic][0])
        } else {
            return
        }

        while (_timeout < 1000) {
            if (obloqAnswerCmd == "SubOk") {
                obloqAnswerCmd = OBLOQ_STR_TYPE_IS_NONE
                obloqMqttTopic[topic][1] = "true"
                break
            } else if (obloqAnswerCmd == "SubFailure") {
                obloqWrongType = "mqtt subtopic failure"
                return
            }
            basic.pause(1)
            _timeout += 1
        }
        if (_timeout >= 1000 && obloqAnswerCmd != "SubOk") {
            obloqWrongType = "mqtt subtopic timeout"
        } else {
            obloqMqttTopic[topic][1] = "true"
        }
    }

    /**
     * This is an MQTT listener callback function, which is very important.
    */

    //% block="on received %top"
    //% group="Obloq"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% useLoc="Obloq.Obloq_mqtt_callback_user_more"
    //% weight=19
    //% advanced=true
    export function mqttCallbackUserMore(top: TOPIC, cb: (message: string) => void) {
        obloqMqttCallbackMore(top, () => {
            const packet = new PacketaMqtt()
            packet.message = obloqAnswerContent
            cb(packet.message)
        });
    }

    /**
     * The HTTP get request
     * @param time set timeout, eg: 10000
    */

    //% block="http(get) url %url timeout(ms) %time"
    //% group="Obloq"
    //% advanced=true
    //% weight=18
    export function httpGet(url: string, time: number): string {
        while (obloqWorkingModeIsStop) { basic.pause(20) }
        if (!obloqHttpInit)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        obloqWriteString("|3|1|http://" + obloqHttpIp + /*":" + obloqHttpPort +*/ "/" + url + "|\r")

        return obloqHttpWaitRequest(time)
    }

    /**
     * The HTTP post request.
     * @param time set timeout, eg: 10000
    */

    //% block="http(post) url %url content %content timeout(ms) %time"
    //% group="Obloq"
    //% advanced=true
    //% weight=17
    export function httpPost(url: string, content: string, time: number): string {
        while (obloqWorkingModeIsStop) { basic.pause(20) }
        if (!obloqHttpInit)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        obloqWriteString("|3|2|http://" + obloqHttpIp + /*":" + obloqHttpPort +*/ "/" + url + "," + content + "|\r")

        return obloqHttpWaitRequest(time)
    }

    /**
     * The HTTP put request
     * @param time set timeout, eg: 10000
    */


    //% block="http(put) url %url content %content timeout(ms) %time"
    //% group="Obloq"
    //% advanced=true
    //% weight=16
    export function httpPut(url: string, content: string, time: number): string {
        while (obloqWorkingModeIsStop) { basic.pause(20) }
        if (!obloqHttpInit)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        obloqWriteString("|3|3|http://" + obloqHttpIp + /*":" + obloqHttpPort +*/ "/" + url + "," + content + "|\r")

        return obloqHttpWaitRequest(time)
    }

    /**
     * HTTP initialization
     * @param ip to ip ,eg: "0.0.0.0"
    */

    //% block="configure http IP: %ip start connection"
    //% group="Obloq"
    //% weight=15
    //% advanced=true
    export function httpInit(ip: string):
        void {
        obloqHttpIp = ip
        //obloqHttpPort = PORT
    }

    /**
     * Get the obloq version
    */

    //% block="get version"
    //% group="Obloq"
    //% weight=14
    //% advanced=true
    export function getVersion(): string {
        while (obloqWorkingModeIsStop) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        obloqWriteString("|1|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (obloqAnswerCmd == "GetVersion") {
                return obloqAnswerContent
            } else if (obloqAnswerCmd == "timeout") {
                return "timeout"
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (obloqAnswerCmd != "GetVersion") {
                    return "timeout"
                }
                else {
                    return obloqAnswerContent
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

    function obloqSerialInit(): void {
        let data = "";
        //First send data through usb, avoid the first data scrambled.
        obloqWriteString("123");
        data = serial.readString();
        data = serial.readString();
        data = serial.readString();

        serial.redirect(obloqSerialTx, obloqSerialRx, BaudRate.BaudRate9600);
        obloqSetTxBufferSize(300);
        obloqSetRxBufferSize(300);
        obloqWriteString("\r");

        data = serial.readString();
        obloqSerialInitFlag = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqClearRxBuffer();
        obloqClearTxBuffer();
        onEvent();
    }

    function obloqConnectWifi(): number {
        if (obloqWifiConnected == OBLOQ_BOOL_TYPE_IS_TRUE) {
            return OBLOQ_ERROR_TYPE_IS_SUCCE
        }

        obloqWifiIcon = 1
        let timeout = 10000  //Set the default timeout period 10s.
        timeout = timeout < 100 ? 100 : timeout //Timeout minimum resolution 100ms

        let timeoutCountMax = timeout / 100
        let timeoutCountNow = 0
        if (obloqWifiConnectFirst) {
            //serial init
            if (!obloqSerialInitFlag) {
                obloqSerialInit()
            }
            //show icon
            //Obloq_wifi_icon_display()
            // for (let i = 0; i < 3; i++) {
            //     obloqWriteString("|1|1|\r")
            //     basic.pause(100)
            // }
            obloqWriteString("|2|1|" + obloqWifiSsid + "," + obloqWifiPassword + "|\r") //Send wifi account and password instructions
            obloqWifiConnectFirst = OBLOQ_BOOL_TYPE_IS_FALSE
        }

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if ((timeoutCountNow + 1) % 3 == 0) {
                //Obloq_wifi_icon_display()
            }
            if (obloqAnswerCmd == "WifiConnected") {
                obloqWifiIp = obloqAnswerContent
                return OBLOQ_ERROR_TYPE_IS_SUCCE
            } else if (obloqAnswerCmd == "WifiConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE
            }
            basic.pause(100)
            timeoutCountNow += 1
            if (timeoutCountNow > timeoutCountMax) {
                //basic.showIcon(IconNames.No)
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT
            }
            basic.pause(100);
        }
        return OBLOQ_ERROR_TYPE_IS_ERR
    }

    function obloqConnectMqtt(): void {
        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        obloqWriteString("|4|1|1|" + obloqMqttServer + "|" + obloqMqttPort + "|" + obloqMqttId + "|" + obloqMqttPwd + "|\r")
    }

    function subTopic(topic: string): void {
        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        obloqWriteString("|4|1|2|" + topic + "|\r")
    }

    function obloqMqttCallbackMore(top: TOPIC, a: Action): void {
        switch (top) {
            case TOPIC.Topic0: obloqMqttCallback[0] = a; break;
            case TOPIC.Topic1: obloqMqttCallback[1] = a; break;
            case TOPIC.Topic2: obloqMqttCallback[2] = a; break;
            case TOPIC.Topic3: obloqMqttCallback[3] = a; break;
            case TOPIC.Topic4: obloqMqttCallback[4] = a; break;
        }
    }

    function obloqConnectIot(): number {
        obloqMqttIcon = 1
        let iconnum = 0
        let _timeout = 0
        let __timeout = 0

        obloqConnectMqtt()

        while (_timeout < 10000) {
            if (_timeout % 50 == 0) {
                //Obloq_mqtt_icon_display()
                iconnum += 1;
            }
            if (obloqAnswerCmd == "MqttConneted") {
                break
            } else if (obloqAnswerCmd == "MqttConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE
            }
            basic.pause(1)
            _timeout += 1

        }
        if (_timeout >= 5000 && obloqAnswerCmd != "MqttConneted") {
            return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT
        }
        for (let i = 0; i < OBLOQ_MQTT_TOPIC_NUM_MAX; i++) {
            if (obloqMqttTopic[i][0] != "x" && obloqMqttTopic[i][1] == "false") {
                subTopic(<string>obloqMqttTopic[i][0])
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
                    if (obloqAnswerCmd == "SubOk") {
                        obloqMqttTopic[i][1] = "true";
                        obloqAnswerCmd = OBLOQ_STR_TYPE_IS_NONE
                        break
                    } else if (obloqAnswerCmd == "SubFailure") {
                        return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE
                    }
                }
                basic.pause(1)
                _timeout += 1
            }
            if (_timeout >= __timeout) {
                if (obloqAnswerCmd != "SubOk") {
                    obloqAnswerCmd = OBLOQ_STR_TYPE_IS_NONE
                    return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT
                } else {
                    obloqMqttTopic[i][1] = "true";
                    obloqAnswerCmd = OBLOQ_STR_TYPE_IS_NONE
                }
            }
        }
        return OBLOQ_ERROR_TYPE_IS_SUCCE
        //basic.showString("ok")
    }

    function obloqStartConnectHttp(): void {
        obloqWorkingModeIsHttp = OBLOQ_BOOL_TYPE_IS_TRUE
        let ret = obloqConnectWifi()
        if (OBLOQ_DEBUG) { basic.showNumber(ret) }
        switch (ret) {
            case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
                obloqWifiConnected = OBLOQ_BOOL_TYPE_IS_TRUE
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                obloqWrongType = "wifi connect timeout"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                obloqWrongType = "wifi connect failure"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_ERR: {
                basic.showNumber(ret)
                basic.showIcon(IconNames.No)
                while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
            } break
        }
        obloqHttpInit = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqWorkingModeIsStop = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    function obloqStartConnectMqtt(SERVER: Servers, connectStart: string): void {
        obloqWorkingModeIsMqtt = OBLOQ_BOOL_TYPE_IS_TRUE
        if (OBLOQ_MQTT_DEFAULT_SERVER) {
            if (SERVER == Servers.China) {
                obloqMqttServer = OBLOQ_MQTT_EASY_IOT_SERVER_CHINA
            } else if (SERVER == Servers.English) {
                obloqMqttServer = OBLOQ_MQTT_EASY_IOT_SERVER_EN
            }
            else {
                obloqMqttServer = obloqMqttEasyIotSiot
            }
            obloqMqttPort = OBLOQ_MQTT_EASY_IOT_PORT
        } else {
            obloqMqttServer = OBLOQ_MQTT_USER_IOT_SERVER
            obloqMqttPort = OBLOQ_MQTT_USER_IOT_PORT
        }

        let ret = 0
        if (connectStart == "connect wifi") {
            ret = obloqConnectWifi()
            if (OBLOQ_DEBUG) { basic.showNumber(ret) }
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                    obloqWifiConnected = OBLOQ_BOOL_TYPE_IS_TRUE
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    obloqWrongType = "wifi connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    obloqWrongType = "wifi connect failure"
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
            ret = obloqConnectIot();
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    obloqWrongType = "mqtt subtopic timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    obloqWrongType = "mqtt subtopic failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    obloqWrongType = "mqtt connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    obloqWrongType = "mqtt connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        obloqMqttInit = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqWorkingModeIsStop = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    function obloqHttpWaitRequest(time: number): string {
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            basic.pause(100)
            if (obloqAnswerCmd == "200") {//http请求成功
                obloqAnswerCmd = "";
                return obloqAnswerContent //返回消息
            } else if (obloqAnswerCmd == "-1") {//获取数据失败
                obloqHttpWrongAnimation("requestFailed")
                obloqAnswerCmd = "";
                return OBLOQ_STR_TYPE_IS_NONE
            } else if (obloqAnswerCmd == "1") {//http请求字段错误
                obloqHttpWrongAnimation("requestFailed")
                obloqAnswerCmd = "";
                return OBLOQ_STR_TYPE_IS_NONE
            }

            _timeout += 1
            if (_timeout > timeout) {
                obloqHttpWrongAnimation("timeOut")
                return OBLOQ_STR_TYPE_IS_NONE
            }
        }

        return OBLOQ_STR_TYPE_IS_NONE
    }

    function obloqHttpWrongAnimation(wrongType: string): void {
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
        if (!obloqSerialInitFlag) {
            obloqSerialInit()
        }
        //basic.showString("A")
        obloqMqttEvent = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqEventOn()
        //control.onEvent(<number>32, <number>1, obloqSerialRecevice,16); // register handler
        serial.onDataReceived('\r', obloqSerialRecevice)
        //control.onEvent(32, 1, obloqSerialRecevice)
    }

    function obloqSerialRecevice(): void {
        //basic.showString("B")
        let Obloq_message_str = serial.readString()
        let size = Obloq_message_str.length
        let item = Obloq_message_str

        if (item.indexOf("|4|1|1|1|", 0) != -1) {
            obloqAnswerCmd = "MqttConneted"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|1|2|", 0) != -1) {
            obloqAnswerCmd = "MqttConnectFailure"
            obloqAnswerContent = item.substr(9, size - 2 - 9)
            return
        } else if (item.indexOf("|4|1|2|1|", 0) != -1) {
            obloqAnswerCmd = "SubOk"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|1|", 0) != -1) {
            obloqAnswerCmd = "SubCeiling"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|2|", 0) != -1) {
            obloqAnswerCmd = "SubFailure"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|1|", 0) != -1) {
            obloqAnswerCmd = "PulishOk"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|2|", 0) != -1) {
            obloqAnswerCmd = "PulishFailure"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            obloqWrongType = "mqtt pulish failure"
            return
        } else if (item.indexOf("|4|1|4|1|", 0) != -1) {
            obloqAnswerCmd = "MqttDisconnected"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|4|2|", 0) != -1) {
            obloqAnswerCmd = "MqttDisconnectFailure"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|5|") != -1) {//|4|1|5|topic|message|
            let str = item.substr(7, size - 2 - 7)
            let num = str.indexOf("|")
            obloqAnswerCmd = str.substr(0, num)
            obloqAnswerContent = str.substr(num + 1, str.length - obloqAnswerCmd.length - 1)

            serial.writeLine(obloqAnswerContent)
            switch (obloqAnswerCmd) {
                case obloqMqttTopic[0][0]: { if (obloqMqttCallback[0] != null) obloqforevers(obloqMqttCallback[0]); } break;
                case obloqMqttTopic[1][0]: { if (obloqMqttCallback[1] != null) obloqforevers(obloqMqttCallback[1]); } break;
                case obloqMqttTopic[2][0]: { if (obloqMqttCallback[2] != null) obloqforevers(obloqMqttCallback[2]); } break;
                case obloqMqttTopic[3][0]: { if (obloqMqttCallback[3] != null) obloqforevers(obloqMqttCallback[3]); } break;
                case obloqMqttTopic[4][0]: { if (obloqMqttCallback[4] != null) obloqforevers(obloqMqttCallback[4]); } break;
            }
            return
        } else if (item.indexOf("|4|1|6|1|", 0) != -1) {
            obloqAnswerCmd = "UnSubOk"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|1|", 0) != -1) {
            obloqAnswerCmd = "UnSubFailure"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|2|", 0) != -1) {
            obloqAnswerCmd = "UnSubFailure"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|1|", 0) != -1) {
            obloqAnswerCmd = "PingOk"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|2|", 0) != -1) {
            obloqAnswerCmd = "GetVersion"
            obloqAnswerContent = item.substr(5, size - 2 - 5)//version
            return
        } else if (item.indexOf("|1|3|", 0) != -1) {
            if (obloqMqttInit) {
                obloqAnswerCmd = "Heartbeat"
                obloqAnswerContent = "OK"
            }
            return
        } else if (item.indexOf("|2|1|", 0) != -1) {

            obloqAnswerCmd = "WifiDisconnect"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            if (obloqMqttInit || obloqHttpInit || obloqWifiConnected) {
                obloqWrongType = "wifi disconnect"
            }
            return
        } else if (item.indexOf("|2|2|", 0) != -1) {
            obloqAnswerCmd = "WifiConnecting"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            //serial.writeNumber(12)
            return
        } else if (item.indexOf("|2|3|", 0) != -1) {
            obloqAnswerCmd = "WifiConnected"
            obloqAnswerContent = item.substr(5, size - 2 - 5)//IP addr
            return
        } else if (item.indexOf("|2|4|", 0) != -1) {
            obloqAnswerCmd = "WifiConnectFailure"
            obloqAnswerContent = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|3|", 0) != -1) {//|3|errcode|message|
            let str = item.substr(3, size - 2 - 3)
            let num = str.indexOf("|")
            obloqAnswerCmd = str.substr(0, num)
            obloqAnswerContent = str.substr(num + 1, str.length - obloqAnswerCmd.length - 1)
            return
        } else {
            return
        }
    }

    // OLED 128*64
    function writeBuffer(data: number[], len: number) {
        let remain = len;
        let i = 0;
        while (remain > 0) {
            let currentTransferSize = (remain > IIC_MAX_TRANSFER_SIZE) ? 32 : remain;
            if (remain > IIC_MAX_TRANSFER_SIZE) {
                pins.i2cWriteBuffer(oledArdress, pins.createBufferFromArray(data.slice(i * IIC_MAX_TRANSFER_SIZE, i * IIC_MAX_TRANSFER_SIZE + currentTransferSize)), true);
            } else {
                pins.i2cWriteBuffer(oledArdress, pins.createBufferFromArray(data.slice(i * IIC_MAX_TRANSFER_SIZE, i * IIC_MAX_TRANSFER_SIZE + currentTransferSize)), false);
            }
            remain = remain - currentTransferSize;
            i = i + 1;
        }
    }

    function writeByte(reg: number, data: number) {
        writeBuffer([reg, data], 2);
    }

    function writeBufferPixel(x: number, y: number, color: number) {
        if (x < 0 || x > 127 || y < 0 || y > 63) return;
        let addr = x + Math.floor(y / 8) * 128;
        if (color == 1) {
            frameBuffer[addr] |= (0x01 << (y % 8)) & 0xFF;
        } else {
            frameBuffer[addr] &= ~((0x01 << (y % 8)) & 0xFF);
        }
    }

    function setRefreshRange(reg: number, columnStart: number, columnEnd: number, rowStart: number, rowEnd: number) {
        writeByte(reg, SSD1306_COLUMNADDR);
        writeByte(reg, columnStart);
        writeByte(reg, columnEnd);
        writeByte(reg, SSD1306_PAGEADDR);
        writeByte(reg, rowStart);
        writeByte(reg, rowEnd);
    }

    function regionalRefresh(x: number, y: number, width: number, height: number) {
        let xe = x + width - 1;
        let ye = y + height - 1;

        if (x < 0) x = 0;
        if (x > 127) x = 127;
        if (y < 0) y = 0;
        if (y > 63) y = 63;

        if (xe < 0) xe = 0;
        if (xe > 127) xe = 127;
        if (ye < 0) ye = 0;
        if (ye > 63) ye = 63;

        let data;
        if (xe < x) {
            data = xe;
            xe = x;
            x = data;
        }
        if (ye < y) {
            data = ye;
            ye = y;
            y = data;
        }
        width = xe - x + 1;
        height = ye - y + 1;

        let widthSize = Math.floor((xe - x + 1) / 16);
        let widthSizeRemainder = (xe - x + 1) % 16;
        let pageaddrLow = Math.floor(y / 8);
        let pageaddrHight = Math.floor(ye / 8);
        let index = 0;

        for (let i = pageaddrLow; i <= pageaddrHight; i++) {
            setRefreshRange(SSD1306_WRITECMD, x, x + width - 1, i, i);
            let j = 0;
            for (j = 0; j < widthSize; j++) {
                index = i * 128 + x + j * 16;
                for (let k = 0; k < 16; k++) {
                    writeByte(SSD1306_WRITEDATA, frameBuffer[index + k]);
                }
                // writeBuffer([SSD1306_WRITEDATA].concat(frameBuffer.slice(index, index + 16)), 16+1);

            }
            if (widthSizeRemainder) {
                index = i * 128 + x + j * 16;
                for (let k = 0; k < widthSizeRemainder; k++) {
                    writeByte(SSD1306_WRITEDATA, frameBuffer[index + k]);
                }
                // writeBuffer([SSD1306_WRITEDATA].concat(frameBuffer.slice(index, index + widthSizeRemainder)), widthSizeRemainder + 1);
            }
        }
    }

    function setRotaion(rotation: number) {
        let buf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 8; i++) {
            setRefreshRange(SSD1306_WRITECMD, 0, 127, i, i);
            let j;
            for (j = 0; j < 8; j++) {
                for (let k = 0; k < 16; k++) {
                    writeByte(SSD1306_WRITEDATA, buf[k]);
                }
            }
        }
        if (rotation == 0) {
            writeByte(SSD1306_WRITECMD, 0xa0);
            writeByte(SSD1306_WRITECMD, 0xc0);
        } else if (rotation == 180) {
            writeByte(SSD1306_WRITECMD, 0xa1);
            writeByte(SSD1306_WRITECMD, 0xc8);
        } else {
            writeByte(SSD1306_WRITECMD, 0xa1);
            writeByte(SSD1306_WRITECMD, 0xc8);
        }
        regionalRefresh(0, 0, 128, 64);
    }

    function fillScreen(color: number) {
        if (color) {
            for (let i = 0; i < 1024; i++) {
                frameBuffer[i] = 0xff;
            }
        } else {
            for (let i = 0; i < 1024; i++) {
                frameBuffer[i] = 0x00;
            }
            regionalRefresh(0, 0, 128, 64);
        }
    }

    function fillInLine(line: number, color: number) {
        line = (line < 1) ? 1 : (line > 4) ? 4 : line;
        if (color) {
            for (let i = 0; i < 256; i++) {
                frameBuffer[(line - 1) * 256 + i] = 0xff;
            }
        } else {
            for (let i = 0; i < 256; i++) {
                frameBuffer[(line - 1) * 256 + i] = 0x00;
            }
        }
        regionalRefresh(0, (line - 1) * 16, 128, 16);
    }

    function setBrushColor(color: number) {
        brushColor = color;
    }

    function setCursor(x: number, y: number) {
        if (x < 0) x = 0;
        if (x > 127) x = 127;
        if (y < 0) y = 0;
        if (y > 63) y = 63;
        cursorX = x;
        cursorY = y;
    }

    function setCursorLine(line: number) {
        line = (line < 1) ? 1 : (line > 4) ? 4 : line;
        cursorLine = line % 4;
        if (cursorLine == 0)
            cursorLine = 4;
    }

    function writeChar(char: string) {
        let c = basicFont[char.charCodeAt(0) - 32];
        let data: number[] = [];
        if (cursorX + 8 > 127) {
            cursorY += 16;
            cursorX = 0;
        }
        if (cursorY > 64)
            return;
        for (let i = 0; i < 16; i++) {
            data.push(c.charCodeAt(i));
        }
        showMatrix(cursorX, cursorY, 8, 16, data, true);
        cursorX += 8;
    }

    function writeCharLine(str: string) {
        let X = 0;
        let Y = 16 * (cursorLine - 1);
        fillInLine(cursorLine, brushColor == 1 ? 0 : 1);
        for (let c of str) {
            c = basicFont[c.charCodeAt(0) - 32];
            let data: number[] = [];
            if (X + 8 > 128)
                return;
            for (let i = 0; i < 16; i++) {
                data.push(c.charCodeAt(i));
            }
            showMatrix(X, Y, 8, 16, data, true);
            X += 8;
        }
    }

    function showMatrix(x: number, y: number, width: number, height: number, data: number[], coverage: boolean) {
        if (x > 127 || y > 63) return;
        if (height % 8 != 0) return;
        let i, j, k;
        let _x, _y;
        let widthSize = Math.floor(width / 8);
        let heightSize = Math.floor(height / 8);
        _x = x;
        _y = y;
        for (i = 0; i < height; i++) {
            if (_y > 63) break;
            for (j = 0; j < widthSize; j++) {
                let _data = data[i + j];
                for (k = 0; k < 8; k++) {
                    if (_x > 127) break;
                    if (_data & 0x80) {
                        writeBufferPixel(_x, _y, brushColor == 1 ? 1 : 0);
                    } else {
                        if (coverage) {
                            writeBufferPixel(_x, _y, brushColor == 1 ? 0 : 1);
                        }
                    }
                    _data <<= 1;
                    _data &= 0xff;
                    _x++;
                }
            }
            _x = x;
            _y++;
        }
        regionalRefresh(x, y, width, height);
    }

    function oledBegin() {
        // init frameBuffer
        for (let i = 0; i < 1024; i++) {
            frameBuffer.push(0);
        }

        writeByte(SSD1306_WRITECMD, SSD1306_DISPLAYOFF);
        writeByte(SSD1306_WRITECMD, SSD1306_SETDISPLAYCLOCKDIV);
        writeByte(SSD1306_WRITECMD, 0xF0); // Increase speed of the display max ~96Hz
        writeByte(SSD1306_WRITECMD, SSD1306_SETMULTIPLEX);
        writeByte(SSD1306_WRITECMD, 0x3F);
        writeByte(SSD1306_WRITECMD, SSD1306_SETDISPLAYOFFSET);
        writeByte(SSD1306_WRITECMD, 0x00);
        writeByte(SSD1306_WRITECMD, SSD1306_SETSTARTLINE);
        writeByte(SSD1306_WRITECMD, SSD1306_CHARGEPUMP);
        writeByte(SSD1306_WRITECMD, 0x14);
        writeByte(SSD1306_WRITECMD, SSD1306_MEMORYMODE);
        writeByte(SSD1306_WRITECMD, 0x00);
        writeByte(SSD1306_WRITECMD, SSD1306_SEGREMAP);
        writeByte(SSD1306_WRITECMD, SSD1306_COMSCANINC);
        writeByte(SSD1306_WRITECMD, SSD1306_SETCOMPINS);
        writeByte(SSD1306_WRITECMD, 0x12);
        writeByte(SSD1306_WRITECMD, SSD1306_SETCONTRAST);
        writeByte(SSD1306_WRITECMD, 0xCF);
        writeByte(SSD1306_WRITECMD, SSD1306_SETPRECHARGE);
        writeByte(SSD1306_WRITECMD, 0xF1);
        writeByte(SSD1306_WRITECMD, SSD1306_DISPLAYALLON_RESUME);
        writeByte(SSD1306_WRITECMD, SSD1306_NORMALDISPLAY);
        writeByte(SSD1306_WRITECMD, 0x2e); // stop scroll
        writeByte(SSD1306_WRITECMD, SSD1306_DISPLAYON);
        setRotaion(180);
        fillScreen(0);
        setBrushColor(1);
    }
}
