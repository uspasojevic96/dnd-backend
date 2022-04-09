

//check character ownership
// roll stat
// change name
// change class
// change alignment
// pick deity
// add item
// remove item
// roll dice
// perform action

// create character
// save character
// load character 
export default class Character {

    private name : string;
    private class : string;
    //private alignment : string;
    private strength : number;
    private dexterity : number;
    private constitution : number;
    private intelligence : number;
    private wisdom : number;
    private charisma : number;

    // Creates new character
    constructor (nameOrCharacter) {
        if (typeof nameOrCharacter === 'string') {
            this.name = nameOrCharacter;
            this.class = "Fighter";
            this.strength = this.rollStat();
            this.dexterity = this.rollStat();
            this.constitution = this.rollStat();
            this.intelligence = this.rollStat();
            this.wisdom = this.rollStat();
            this.charisma = this.rollStat();
        } else {
            for (const field of Object.keys(nameOrCharacter)) {
                this[field] = nameOrCharacter[field];
            }
        }
    };

    // public static loadCharacter (playerID, characterID) {

    // };

    // public static returnLoadedCharacter () {
    //     console.log(`returning loaded character charmenu to player menu: ${loadedCharacter}`)
    //     Player.addCharacter(loadedCharacter);
    // };

    private rollStat () {
        let roll;
        let droppedRoll = 0;
        let rollResults : number [] = [0, 0 ,0];
        let j = 0;
        for (let k = 0; k<4; k++){
            roll = Math.ceil(Math.random()*5)+1;
            //console.log(`Rolling ${roll}`);
            if (droppedRoll === 0) {
                droppedRoll = roll;
               // console.log(`dropped roll is ${droppedRoll}`);
            } else if (roll < droppedRoll) {
                rollResults [j] = droppedRoll;
                j++;
                droppedRoll = roll;
               // console.log(`dropped roll is ${droppedRoll}`);
            } else {
                rollResults [j] = roll;
                j++;
            };
                
                
            };
            let totalRoll = rollResults[0] + rollResults[1] + rollResults[2];
                //console.log(`Final stat ${totalRoll}`);
                return totalRoll;
        };
    
    // public static addItem (itemName){

    // };

    // public static removeItem (itemName) {

    // };

    // public static listItem (itemName) {

    // };
};

