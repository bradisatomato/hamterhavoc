function makeJunkFood(name, event) {
    event.create(name).food(f => {
        f
            .saturation(0)
            .effect("poison", 600, 0, 1)
            .eaten(ctx => {
                ctx.player.tell("Junk food's bad for you")
            });
    })
}

StartupEvents.registry("item", e => {
    e.create("brad_boots", "boots").tier("netherite");
    e.create("brad_ingot");
    e.create("brad_skin_boots", "boots").tier("netherite");
    e.create("brad_skin_ingot");
    e.create("brad_skin_sword", "sword").tier("netherite");
    e.create("brad_sword", "sword").tier("netherite");
    e.create("cheese").food(f => {
        f
            .saturation(3);
    });
    makeJunkFood("cheeseburger", e);
    makeJunkFood("french_fries", e);
    makeJunkFood("hamburger", e);
    e.create("hamter_hat", "helmet").tier("netherite");
    e.create("hamter_ingot");
    e.create("hamter_sword", "sword").tier("netherite");
})

StartupEvents.registry("block", e => {
    e.create("block_of_brad_skin");
    e.create("block_of_brad");
    e.create("block_of_hamter");
    e.create("compressed_cobblestone")
    e.create("pure_black_block");
    e.create("pure_white_block");
})

ItemEvents.modification(e => {
    e.modify("kubejs:brad_boots", i => {
        i.armorProtection = 10000;
        i.armorToughness = 10000;
        i.armorKnockbackResistance = 1;
    })
    e.modify("kubejs:brad_skin_boots", i => {
        i.armorProtection = 10000;
        i.armorToughness = 10000;
        i.armorKnockbackResistance = 1;
    })
    e.modify("kubejs:brad_skin_sword", i => {
        i.attackDamage = 10000;
        i.attackSpeed = 0.1;
    })
    e.modify("kubejs:brad_sword", i => {
        i.attackDamage = 10000;
        i.attackSpeed = 0.1;
    })
    e.modify("kubejs:hamter_hat", i => {
        i.armorProtection = 100;
        i.armorToughness = 6;
        i.armorKnockbackResistance = 1;
    })
    e.modify("kubejs:hamter_sword", i => {
        i.attackDamage = 150;
        i.attackSpeed = 1;
    })
})