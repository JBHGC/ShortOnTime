class MapLevel {
    readonly mapHeight:number;
    readonly mapWidth:number;
    mapName:string;
    readonly mapSize:number;

    constructor( l: number, w: number, n: string ){
        this.mapHeight = l;
        this.mapWidth = w;
        this.mapName = n;
        this.mapSize = this.mapHeight * this.mapWidth;


    }
}

interface Character {
    hp:number,
    sp:number,
    atk:number,
    def:number,
    inventory:Array<object>,
    // Hidden Stats
    maxHP:number,
    maxSP:number,
    maxInventorySize:number

}
let jay: Character={ hp:135, sp:50, atk:45, def:20, inventory:[], maxHP:120, maxSP:200, maxInventorySize:5 } // BST:200

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

function createMap( Map:object ){

}

function displayLandscape(Map:object): void{

}

function main(): void{
    
}