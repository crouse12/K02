//% weight=0 color=#3CB371 icon="\uf0ad"
namespace KSB037 {

    export enum move {
        //% block="forward"
        forward,
        //% block="back"
        back,
        //% block="right"
        right,
        //% block="left"
        left,
        //% block="stop"
        stop
    }
    export enum move1 {
        //% block="clockwise"
        clockwise,
        //% block="counterclockwise"
        counterclockwise,
        //% block="stopmotor"
        stopmotor
    }
    export enum motor {
        //% block="motor1"
        motor1,
        //% block="motor2"
        motor2
    }
    
   
    //% blockId="car" block="car %myMove speed (0~1023) %power"
    //% weight=30
    //% power.min=0 power.max=1023
    export function car(myMove: move, power: number) {
        switch (myMove) {
        case move.forward: 
            pins.digitalWritePin(DigitalPin.P8, 1);
            pins.digitalWritePin(DigitalPin.P12, 1);
            pins.analogWritePin(AnalogPin.P1, power);
            pins.analogWritePin(AnalogPin.P2, power);
        case move.back: 
            pins.digitalWritePin(DigitalPin.P8, 0);
            pins.digitalWritePin(DigitalPin.P12, 0);
            pins.analogWritePin(AnalogPin.P1, power);
            pins.analogWritePin(AnalogPin.P2, power);
        case move.right: 
            pins.digitalWritePin(DigitalPin.P8, 0);
            pins.digitalWritePin(DigitalPin.P12, 1);
            pins.analogWritePin(AnalogPin.P1, power);
            pins.analogWritePin(AnalogPin.P2, power);
        case move.left: 
            pins.digitalWritePin(DigitalPin.P8, 1);
            pins.digitalWritePin(DigitalPin.P12, 0);
            pins.analogWritePin(AnalogPin.P1, power);
            pins.analogWritePin(AnalogPin.P2, power);
        case move.stop:
            pins.analogWritePin(AnalogPin.P1, 0);
            pins.analogWritePin(AnalogPin.P2, 0);
        }
    }
/** 
    //% blockId="motorstatus" block="start %myMotor as  %myMove1 speed (0~1023) %power"
    //% weight=50
    //% power.min=0 power.max=1023
    export function motorstatus(myMotor: motor, myMove1: move1, power: number) {
        let a=-1;
        switch (myMotor) {
            case motor.motor1:
                a=0;
                break;
            case motor.motor2:
                a=1;
                break;
        }
        switch (myMove1){
            case move1.clockwise:

                break;
            case move1.counterclosewise:

                break;
            case move1.stopmotor:

                break;
        }
    }
    function pin(pin: number,power: number)
    {
    }
*/
}
