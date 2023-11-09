// Taken from pxt-microbit /libs/core/music.ts,
// but limited to Minecraft's note range (F#3 - F#5)
//
// This needs to map to frequency and not minecraft pitch
// for compatibility with the "note" field editor
enum Note {
    //% block=F#3
    //% blockIdentity=music.noteFrequency enumval=185
    FSharp3 = 185,
    //% blockIdentity=music.noteFrequency enumval=196
    G3 = 196,
    //% block=G#3
    //% blockIdentity=music.noteFrequency enumval=208
    GSharp3 = 208,
    //% blockIdentity=music.noteFrequency enumval=220
    A3 = 220,
    //% blockIdentity=music.noteFrequency enumval=233
    Bb3 = 233,
    //% blockIdentity=music.noteFrequency enumval=247
    B3 = 247,
    //% blockIdentity=music.noteFrequency enumval=262
    C4 = 262,
    //% block=C#4
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp4 = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D4 = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb4 = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E4 = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F4 = 349,
    //% block=F#4
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp4 = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G4 = 392,
    //% block=G#4
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp4 = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A4 = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb4 = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B4 = 494,
    //% blockIdentity=music.noteFrequency enumval=523
    C5 = 523,
    //% block=C#5
    //% blockIdentity=music.noteFrequency enumval=555
    CSharp5 = 555,
    //% blockIdentity=music.noteFrequency enumval=587
    D5 = 587,
    //% blockIdentity=music.noteFrequency enumval=622
    Eb5 = 622,
    //% blockIdentity=music.noteFrequency enumval=659
    E5 = 659,
    //% blockIdentity=music.noteFrequency enumval=698
    F5 = 698,
    //% block=F#5
    //% blockIdentity=music.noteFrequency enumval=740
    FSharp5 = 740,
}

namespace music {
    /**
     * Plays a note similar to a Minecraft note block.
     * @param note pitch of the tone to play in Hertz (Hz)
     * @param instrument instrument to play the note as
     */
    //% group="Notes"
    //% weight=90
    //% blockGap=8
    //% blockId=minecraft_music_play_note
    //% block="play|note $note|on $instrument||and pause for $millis"
    //% note.shadow=minecraft_note_frequency
    //% note.defl="Note.C4"
    //% instrument.shadow=minecraft_instrument
    //% millis.shadow=sound_beat
    //% help=github:makecode-minecraft-music/docs/play-note
    export function playNote(note: number, instrument: number, millis?: number): void {
        const soundId: string = _instrumentMinecraftId(instrument);
        const pitch: string = _frequencyToMinecraftPitch(note);
        player.execute(`playsound ${soundId} @a ~ ~ ~ ${music.volumeInGameUnits} ${pitch}`)

        // use == here to check for null and undefined
        if (millis == undefined) {
            millis = beat(BeatFraction.Whole);
        }

        if (millis > 0) {
            loops.pause(millis);
        }
    }

    /**
     * Gets the frequency of a note in Hertz.
     * @param note the note name
     */
    //% weight=50
    //% blockId=minecraft_note_frequency block="$note"
    //% shim=TD_ID
    //% note.fieldEditor="minecraftnote" note.defl="262"
    //% note.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% group="Notes"
    //% blockGap=8
    //% help=github:makecode-minecraft-music/docs/play-note
    export function noteFrequency(note: Note): number {
        return note;
    }

    export function _frequencyToMinecraftPitch(frequencyHz: number): string {
        // The minecraft note scale runs from F#3 (pitch .5) to F#5 (pitch 2.0).
        const pitch = Math.map(frequencyHz, 185, 740, .5, 2.0);
        return _formatFloatForMinecraftCommand(pitch);
    }

    // This is just number.toFixed(3)
    function _formatFloatForMinecraftCommand(input: number): string {
        const thousandths = input.toPrecision(4);
        return thousandths.toString();
    }
}