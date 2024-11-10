ServerEvents.recipes(e => {
    // Hamter Ingot
    e.shapeless("1x kubejs:hamter_ingot", [
        "3x minecraft:netherite_block",
        "3x minecraft:diamond_block"
    ])
    e.shapeless("9x kubejs:hamter_ingot", [
        "1x kubejs:block_of_hamter"
    ])
    // Block of Hamter
    e.shapeless("1x kubejs:block_of_hamter", [
        "9x kubejs:hamter_ingot"
    ])
    // Brad Ingot
    e.shapeless("1x kubejs:brad_ingot", [
        "3x minecraft:netherite_block",
        "3x kubejs:block_of_hamter"
    ])
    e.shapeless("9x kubejs:brad_ingot", [
        "1x kubejs:block_of_brad"
    ])
    // Brad Skin Ingot
    e.shapeless("1x kubejs:brad_skin_ingot", [
        "1x kubejs:brad_ingot",
        "1x minecraft:blue_dye"
    ])
    e.shapeless("9x kubejs:brad_skin_ingot", [
        "1x kubejs:block_of_brad_skin"
    ])
    // Block of Brad
    e.shapeless("1x kubejs:block_of_brad", [
        "9x kubejs:brad_ingot"
    ])
    // Block of Brad Skin
    e.shapeless("1x kubejs:block_of_brad_skin", [
        "1x kubejs:block_of_brad",
        "1x minecraft:blue_dye"
    ])
    e.shapeless("1x kubejs:block_of_brad_skin", [
        "9x kubejs:brad_skin_ingot"
    ])
    // Brad Sword
    e.shaped("1x kubejs:brad_sword", [
        " A ",
        " A ",
        " B "
    ], {
        A: "kubejs:block_of_brad",
        B: "minecraft:stick"
    })
    // Brad Skin Sword
    e.shapeless("1x kubejs:brad_skin_sword", [
        "1x kubejs:brad_sword",
        "1x minecraft:blue_dye"
    ])
    e.shaped("1x kubejs:brad_skin_sword", [
        " A ",
        " A ",
        " B "
    ], {
        A: "kubejs:block_of_brad_skin",
        B: "minecraft:stick"
    })
    // Cheese
    e.shapeless("1x kubejs:cheese", [
        "1x minecraft:milk_bucket",
        "1x minecraft:yellow_dye"
    ])
    // Hamburger
    e.shaped("1x kubejs:hamburger", [
        " A ",
        " B ",
        " A "
    ], {
        A: "minecraft:bread",
        B: "minecraft:cooked_beef"
    })
    // Cheeseburger
    e.shapeless("1x kubejs:cheeseburger", [
        "1x kubejs:hamburger",
        "1x kubejs:cheese"
    ])
    // Compressed Cobblestone
    e.shapeless("1x kubejs:compressed_cobblestone", [
        "9x minecraft:cobblestone"
    ])
    // Brad Boots
    e.shaped("1x kubejs:brad_boots", [
        "   ",
        "A A",
        "A A"
    ], {
        A: "kubejs:block_of_brad"
    })
    // Brad Skin Boots
    e.shapeless("1x kubejs:brad_skin_boots", [
        "1x kubejs:brad_boots",
        "1x minecraft:blue_dye"
    ])
    e.shaped("1x kubejs:brad_skin_boots", [
        "   ",
        "A A",
        "A A"
    ], {
        A: "kubejs:block_of_brad_skin"
    })
    // Hamter Sword
    e.shaped("1x kubejs:hamter_sword", [
        " A ",
        " A ",
        " B "
    ], {
        A: "kubejs:hamter_ingot",
        B: "minecraft:stick"
    })
    // Hamter Hat
    e.shaped("1x kubejs:hamter_hat", [
        "AAA",
        "A A",
        "   "
    ], {
        A: "kubejs:hamter_ingot"
    })
})