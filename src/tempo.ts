enum BeatFraction {
    //% block=1
    Whole = 1,
    //% block="1/2"
    Half = 2,
    //% block="1/4"
    Quarter = 4,
    //% block="1/8"
    Eighth = 8,
    //% block="1/16"
    Sixteenth = 16,
    //% block="2"
    Double = 32,
    //% block="4",
    Breve = 64
}

namespace music {
    export let beatsPerMinute = 120;

    /**
     * Returns the duration of a beat in milliseconds
     */
    //% blockId=sound_beat
    //% block="$fraction|beat"
    //% group="Tempo"
    //% weight=49
    //% blockGap=8
    export function beat(fraction?: BeatFraction): number {
        if (fraction == null) fraction = BeatFraction.Whole;
        let beat = 60000 / Math.max(beatsPerMinute, 0.1);
        switch (fraction) {
            case BeatFraction.Half: return Math.round(beat / 2);
            case BeatFraction.Quarter: return Math.round(beat / 4);
            case BeatFraction.Eighth: return Math.round(beat / 8);
            case BeatFraction.Sixteenth: return Math.round(beat / 16);
            case BeatFraction.Double: return Math.round(beat * 2);
            case BeatFraction.Breve: return Math.round(beat * 4);
            default: return Math.round(beat);
        }
    }

    /**
     * Returns the tempo in beats per minute. This is the tempo use by blocks in this extension, NOT the tempo of the currently playing music in Minecraft.
     * Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.
     */
    //% help=github:makecode-minecraft-music/docs/tempo
    //% blockId=sound_tempo
    //% block="tempo (bpm)"
    //% group="Tempo"
    //% weight=40
    //% blockGap=8
    export function tempo(): number {
        return beatsPerMinute;
    }

    /**
     * Change the tempo by the specified amount. This only affects the other tempo blocks in this extension, NOT the tempo of the currently
     * playing music in Minecraft.
     * @param bpm The change in beats per minute to the tempo, eg: 20
     */
    //% help=github:makecode-minecraft-music/docs/change-tempo-by
    //% blockId=sound_change_tempo
    //% block="change tempo by (bpm)|$bpm"
    //% bpm.defl=20
    //% group="Tempo"
    //% weight=39
    //% blockGap=8
    export function changeTempoBy(bpm: number): void {
        setTempo(beatsPerMinute + bpm);
    }

    /**
     * Sets the tempo to the specified amount. This only affects the other tempo blocks in this extension, NOT the tempo of the currently
     * playing music in Minecraft.
     * @param bpm The new tempo in beats per minute
     */
    //% help=github:makecode-minecraft-music/docs/set-tempo
    //% blockId=sound_set_tempo
    //% block="set tempo to (bpm)|$bpm"
    //% bpm.defl=120
    //% bpm.min=4
    //% bpm.max=1000
    //% group="Tempo"
    //% weight=38
    //% blockGap=8
    export function setTempo(bpm: number): void {
        if (isNaN(bpm)) return;
        if (bpm > 0) {
            beatsPerMinute = Math.max(0.1, bpm);
        }
    }

    /**
     * Pauses for the given amount of time
     * @param millis The time to pause in milliseconds
     */
    //% help=github:makecode-minecraft-music/docs/pause
    //% blockId=sound_rest
    //% block="pause for $millis"
    //% millis.shadow=sound_beat
    //% group="Tempo"
    //% weight=37
    export function pause(millis: number): void {
        loops.pause(millis)
    }
}