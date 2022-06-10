// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002050a050505050a05050505050a05030809090909090909090909090909090708090909090909090909090909090907080909060c09090909090909090909070809090d0b09090909090909090909070809090909090909090909090909090708090909090909090909090909090907080909090909090909090909090909070a09090909090909090909090909090a080909090909060c09090909090909070809090909090d0b090909090909090708090909090909090909090909090907080909090909090909090909090e09070809090909090909090909090909090708090909090909090909090909090907040a0a01010101010a010101010a0103`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
