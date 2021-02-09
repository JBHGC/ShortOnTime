// Map Folder/Files
/** "Blueprint" map class which allows basic map creation */
class MapLevel {
    readonly mapHeight: number;
    readonly mapWidth: number;
    readonly mapSize: number;

    constructor( l: number, w: number ){
        this.mapHeight = l;
        this.mapWidth = w;
        this.mapSize = this.mapHeight * this.mapWidth;


    }
}

// Character Folder/Files
/** Base Living Character with fighting abilities */
interface Character {
    status:Array<string>, // Possible statuses: Alive, Dead, Poisoned, Asleep, Blinded, Stunned
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
/** Base Item interface for pretty much everything that can go into an inventory */
interface Item {
    readonly name:string,
    readonly description:string,
}

interface Armor extends Item {
    readonly bodyPart:string,
    readonly def:number
}
let chest: Armor={ name:"", description:"A simple piece of armor", bodyPart:"", def:5 }

interface Weapon extends Item {
    readonly weaponType:string,
    readonly atk:number
}

// Consumables
interface Ammo extends Item {
    readonly ammoType:string
}

interface Healing extends Item {
    readonly health:number,
    readonly effect:string
}

// Containers which hold only certain types of items
interface AmmoBag extends Item {
    readonly slots:Array<Ammo> 
}

interface MedBag extends Item {
    readonly slots:Array<Healing>
}

// Main File

function buildMap( grid:object ){
    console.log(grid)
    for(let each in grid){
        console.log
    }

}

function main(): void{
    console.log(plains)
    console.log(jay)
    console.log("testing")
    buildMap(plains)
    
}

//Character Test
const jay: Character={
     status: ["Alive"],
     hp:135, 
     sp:50, 
     atk:45, 
     def:20, 
     mv:4, 
     inventory:[], 
     maxHP:120, 
     maxSP:200, 
     maxInventorySize:5 
    } // BST:200

//Map Test
const plains = new MapLevel(16, 14);

main()