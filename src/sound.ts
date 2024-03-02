enum Sound {
    Blaze,
    //% block="Bucket Splash"
    BucketSplash,
    //% block="Cat Hiss"
    CatHiss,
    //% block="Cat Meow"
    CatMeow,
    //% block="Cat Purr"
    CatPurr,
    //% block="Cat Purreow"
    CatPurreow,
    //% block="Chicken"
    Chicken,
    //% block="Click"
    Click,
    //% block="Cow"
    Cow,
    //% block="Creeper"
    Creeper,
    //% block="Dolphin"
    Dolphin,
    //% block="Drink"
    Drink,
    //% block="Drowned"
    Drowned,
    //% block="Eat"
    Eat,
    //% block="Elder Guardian"
    ElderGuardian,
    //% block="Endermen"
    Endermen,
    //% block="Explode"
    Explode,
    //% block="Fall Damage"
    FallDamage,
    //% block="Fire"
    Fire,
    //% block="Firework"
    Firework,
    //% block="Firework (Large)"
    FireworkLarge,
    //% block="Firework (Twinkle)"
    FireworkTwinkle,
    //% block="Fizz"
    Fizz,
    //% block="Fuse"
    Fuse,
    //% block="Ghast"
    Ghast,
    //% block="Horse"
    Horse,
    //% block="Hurt"
    Hurt,
    //% block="Level Up"
    LevelUp,
    //% block="Lightning Impact"
    LightningImpact,
    //% block="Llama"
    Llama,
    //% block="Pig"
    Pig,
    //% block="Player Attack"
    PlayerAttack,
    //% block="Player Die"
    PlayerDie,
    //% block="Player Hurt"
    PlayerHurt,
    //% block="Rain"
    Rain,
    //% block="Sheep"
    Sheep,
    //% block="Skeleton"
    Skeleton,
    //% block="Slime"
    Slime,
    //% block="Spider"
    Spider,
    //% block="Splash"
    Splash,
    //% block="Thunder"
    Thunder,
    //% block="Totem"
    Totem,
    //% block="Trident"
    Trident,
    //% block="Villager (Haggle)"
    VillagerHaggle,
    //% block="Villager (No)"
    VillagerNo,
    //% block="Villager (Yes)"
    VillagerYes,
    //% block="Wolf Bark"
    WolfBark,
    //% block="Wolf Growl"
    WolfGrowl,
    //% block="Wolf Whine"
    WolfWhine,
    //% block="Zombie"
    Zombie,
}

namespace music {
    /**
     * Plays a Minecraft game sound.
     * @param sound the sound to play, eg: Sound.Blaze
     */
    //% weight=90
    //% blockId=sound_play_sound block="play|sound $sound||and pause for $millis" blockGap=8
    //% millis.shadow=sound_beat
    //% parts="headphone"
    //% useEnumVal=1
    //% group="Sound"
    //% help=github:makecode-minecraft-music/docs/play-sound
    export function playSound(sound: Sound, millis?: number): void {
        player.execute(`playsound ${minecraftSoundId(sound)} @a ~ ~ ~ ${music.volumeInGameUnits}`)

        // use == here to check for null and undefined
        if (millis == undefined) {
            millis = beat(BeatFraction.Whole);
        }

        if (millis > 0) {
            loops.pause(millis);
        }
    }

    function minecraftSoundId(sound: Sound) {
        switch (sound) {
            case Sound.Blaze: return 'mob.blaze.breathe';
            case Sound.BucketSplash: return 'bucket.empty_water';
            case Sound.CatHiss: return 'mob.cat.hiss';
            case Sound.CatMeow: return 'mob.cat.meow';
            case Sound.CatPurr: return 'mob.cat.purr';
            case Sound.CatPurreow: return 'mob.cat.purreow';
            case Sound.Chicken: return 'mob.chicken.say';
            case Sound.Click: return 'random.click';
            case Sound.Cow: return 'mob.cow.say';
            case Sound.Creeper: return 'mob.creeper.say';
            case Sound.Dolphin: return 'mob.dolphin.play';
            case Sound.Drink: return 'random.drink';
            case Sound.Drowned: return 'mob.drowned.say';
            case Sound.Eat: return 'random.eat';
            case Sound.ElderGuardian: return 'mob.elderguardian.curse';
            case Sound.Endermen: return 'mob.endermen.scream';
            case Sound.Explode: return 'random.explode';
            case Sound.FallDamage: return 'damage.fallbig';
            case Sound.Fire: return 'fire.fire';
            case Sound.Firework: return 'firework.blast';
            case Sound.FireworkLarge: return 'firework.large_blast';
            case Sound.FireworkTwinkle: return 'firework.twinkle';
            case Sound.Fizz: return 'random.fizz';
            case Sound.Fuse: return 'random.fuse';
            case Sound.Ghast: return 'mob.ghast.affectionate_scream';
            case Sound.Horse: return 'mob.horse.angry';
            case Sound.Hurt: return 'random.hurt';
            case Sound.LevelUp: return 'random.levelup';
            case Sound.LightningImpact: return 'ambient.weather.lightning.impact';
            case Sound.Llama: return 'mob.llama.spit';
            case Sound.Pig: return 'mob.pig.say';
            case Sound.PlayerAttack: return 'game.player.attack.strong';
            case Sound.PlayerDie: return 'game.player.die';
            case Sound.PlayerHurt: return 'game.player.hurt';
            case Sound.Rain: return 'ambient.weather.rain';
            case Sound.Sheep: return 'mob.sheep.say';
            case Sound.Skeleton: return 'mob.skeleton.say';
            case Sound.Slime: return 'mob.slime.squish';
            case Sound.Spider: return 'mob.spider.say';
            case Sound.Splash: return 'random.splash';
            case Sound.Thunder: return 'ambient.weather.thunder';
            case Sound.Totem: return 'random.totem';
            case Sound.Trident: return 'item.trident.hit';
            case Sound.VillagerHaggle: return 'mob.villager.haggle';
            case Sound.VillagerNo: return 'mob.villager.no';
            case Sound.VillagerYes: return 'mob.villager.yes';
            case Sound.WolfBark: return 'mob.wolf.bark';
            case Sound.WolfGrowl: return 'mob.wolf.growl';
            case Sound.WolfWhine: return 'mob.wolf.whine';
            case Sound.Zombie: return 'mob.zombie.say';
        }

        throw `Unrecognized sound enum value ${sound}`;
    }
}