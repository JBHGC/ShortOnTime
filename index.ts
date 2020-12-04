// Map Folder/Files
class MapLevel {
    mapHeight: number;
    mapWidth: number;
    mapSize: number;

    constructor( l: number, w: number ){
        this.mapHeight = l;
        this.mapWidth = w;
        this.mapSize = this.mapHeight * this.mapWidth;


    }
}

// Character Folder/Files
interface Character {
    hp:number,
    sp:number,
    atk:number,
    def:number,
    mv:number,
    inventory:Array<object>,
    // Hidden Stats
    maxHP:number,
    maxSP:number,
    maxInventorySize:number

}

// Item Folder/Files

interface Item {
    readonly name:string,
    readonly description:string,
}

interface Armor extends Item {
    readonly bodyPart:string,
    readonly def:number
}
let chest: Armor={ name:"", description:"A simple piece of armor that contains simple", bodyPart:"", def:5 }

interface Weapon extends Item {
    readonly weaponType:string,
    readonly atk:number
}

// Main File

function buildMap( Map:object ){

}

function main(): void{
    
}

//Character Test
let jay: Character={ hp:135, sp:50, atk:45, def:20, mv:4, inventory:[], maxHP:120, maxSP:200, maxInventorySize:5 } // BST:200

//Map Test
const plains = new MapLevel(15, 15);