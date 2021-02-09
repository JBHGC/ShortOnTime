// Map Folder/Files
/** "Blueprint" map class which allows basic map creation */
var MapLevel = /** @class */ (function () {
    function MapLevel(l, w) {
        this.mapHeight = l;
        this.mapWidth = w;
        this.mapSize = this.mapHeight * this.mapWidth;
    }
    return MapLevel;
}());
var chest = { name: "", description: "A simple piece of armor", bodyPart: "", def: 5 };
// Main File
function buildMap(grid) {
    console.log(grid);
    for (var each in grid) {
        console.log;
    }
}
function main() {
    console.log(plains);
    console.log(jay);
    console.log("testing");
    buildMap(plains);
}
//Character Test
var jay = {
    status: ["Alive"],
    hp: 135,
    sp: 50,
    atk: 45,
    def: 20,
    mv: 4,
    inventory: [],
    maxHP: 120,
    maxSP: 200,
    maxInventorySize: 5
}; // BST:200
//Map Test
var plains = new MapLevel(16, 14);
main();
