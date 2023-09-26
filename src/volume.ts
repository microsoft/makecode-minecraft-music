namespace music {
    const GAME_VOLUME_MIN = 0.0;
    const GAME_VOLUME_MAX = 1.0;
    const INPUT_VOLUME_MIN = 0;
    const INPUT_VOLUME_MAX = 100;

    // "game units" are what /playsound and /music commands expect for their volume parameters
    export let volumeInGameUnits: number = GAME_VOLUME_MAX;

    /**
     * Returns the current output volume that will be used by sound and music
     * commands. This is separate from the Minecraft settings for volume!
     */
    //% blockId=sound_get_volume block="volume"
    //% 
    //% help=sound/volume
    //% weight=69
    //% group="Volume"
    //% blockGap=8
    export function volume(): number {
        return Math.map(volumeInGameUnits, GAME_VOLUME_MIN, GAME_VOLUME_MAX, INPUT_VOLUME_MIN, INPUT_VOLUME_MAX);
    }

    /**
     * Set the default output volume to be used by sound and music commands.
     * This is separate from the Minecraft settings for volume!
     * @param volume the volume 0...100
     */
    //% blockId=sound_set_volume block="set volume %volume"
    //% volume.min=0 volume.max=100
    //% volume.defl=50
    //% help=sound/set-volume
    //% weight=70
    //% group="Volume"
    //% blockGap=8
    export function setVolume(volume: number): void {
        volumeInGameUnits = Math.map(volume, INPUT_VOLUME_MIN, INPUT_VOLUME_MAX, GAME_VOLUME_MIN, GAME_VOLUME_MAX);
    }

    /**
     * Stop any sounds that are playing
     */
    //% group="Volume" weight=80
    //% block="stop all sounds"
    export function stopSounds(): void {
        player.execute("stopsound @a");
    }
}
