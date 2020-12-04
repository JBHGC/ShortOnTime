// Map Folder/Files
var MapLevel = /** @class */ (function () {
    function MapLevel(l, w) {
        this.mapHeight = l;
        this.mapWidth = w;
        this.mapSize = this.mapHeight * this.mapWidth;
    }
    return MapLevel;
}());
var chest = { name: "", description: "A simple piece of armor that contains simple", bodyPart: "", def: 5 };
// Main File
function buildMap(Map) {
}
function main() {
}
//Character Test
var jay = { hp: 135, sp: 50, atk: 45, def: 20, mv: 4, inventory: [], maxHP: 120, maxSP: 200, maxInventorySize: 5 }; // BST:200
//Map Test
var plains = new MapLevel(15, 15);
