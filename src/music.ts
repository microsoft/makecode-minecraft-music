declare const enum MusicDisc {
    //% block="C418 - 11"
    Eleven,
    //% block="C418 - 13"
    Thirteen,
    //% block="C418 - blocks"
    Blocks,
    //% block="C418 - cat"
    Cat,
    //% block="C418 - chirp"
    Chirp,
    //% block="C418 - far"
    Far,
    //% block="C418 - mall"
    Mall,
    //% block="C418 - mellohi"
    Mellohi,
    //% block="C418 - stal"
    Stal,
    //% block="C418 - strad"
    Strad,
    //% block="C418 - wait"
    Wait,
    //% block="C418 - ward"
    Ward,
    //% block="Lena Raine - otherside"
    Otherside,
    //% block="Lena Raine - Pigstep"
    Pigstep,
    //% block="Aaron Cherof - Relic"
    Relic,
    //% block="Samuel Aberg - 5"
    Five
}

//% color=#E30FC0 weight=55 icon="\uf025"
//% groups='["Notes", "Sound", "Music Discs", "Volume"]'
namespace music {
    /**
     * Play a Minecraft music disc.
     * @param builtInMusicDisc a built-in Minecraft music disc you wish to play
     */
    //% group="Music Discs" weight=60
    //% block="play music disc $builtInMusicDisc in background ||at $position"
    //% position.shadow=minecraftCreatePositionCamera
    //% help=github:makecode-minecraft-music/docs/play-disc
    export function playMusic(builtInMusicDisc: MusicDisc, position?: Position): void {
        const positionString = position ? position.toString() : "~ ~ ~";
        player.execute(`playsound ${minecraftTrackName(builtInMusicDisc)} @a ${positionString} ${music.volumeInGameUnits}`);
    }

    function minecraftTrackName(musicDisc: MusicDisc) {
        switch (musicDisc) {
            case MusicDisc.Eleven: return "record.11";
            case MusicDisc.Thirteen: return "record.13";
            case MusicDisc.Five: return "record.5"
            case MusicDisc.Blocks: return "record.blocks";
            case MusicDisc.Cat: return "record.cat";
            case MusicDisc.Chirp: return "record.chirp";
            case MusicDisc.Far: return "record.far";
            case MusicDisc.Mall: return "record.mall";
            case MusicDisc.Mellohi: return "record.mellohi";
            case MusicDisc.Stal: return "record.stal";
            case MusicDisc.Strad: return "record.strad";
            case MusicDisc.Wait: return "record.wait";
            case MusicDisc.Ward: return "record.ward";
            case MusicDisc.Otherside: return "record.otherside";
            case MusicDisc.Pigstep: return "record.pigstep";
            case MusicDisc.Relic: return "record.relic";
            default: throw `Unrecognized MusicDisc enum value: ${musicDisc}`;
        }
    }
}
