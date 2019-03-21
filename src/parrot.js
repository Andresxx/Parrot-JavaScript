export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};
const fly= {
    baseSpeed : 12,
    loadFactor: 9,

    getSpeedOfEuropean(){
        return this.baseSpeed;
    },

    getSpeedOfAfrican(numberOfCoconuts){
        return Math.max(0, this.baseSpeed - this.loadFactor * numberOfCoconuts);
    },

    getSpeedOfNorwegian(isNailed,voltage){
        const baseSpeedWithVoltage = Math.min(24, voltage * this.baseSpeed);
        return (isNailed)? 0 : baseSpeedWithVoltage;        
    }
}

export class Parrot {
    constructor(type, numberOfCoconuts, voltage, isNailed) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        switch (this.type) {

            case PARROT_TYPES.EUROPEAN:
                const european = Object.assign(fly).getSpeedOfEuropean();
                return european;
            case PARROT_TYPES.AFRICAN:
                const african =Object.assign(fly).getSpeedOfAfrican(this.numberOfCoconuts);
                return african;
            case PARROT_TYPES.NORWEGIAN_BLUE:
                const norwegian = Object.assign(fly).getSpeedOfNorwegian(this.isNailed,this.voltage)
                return norwegian;
        }
        throw new Error("Should be unreachable");
    }
}
