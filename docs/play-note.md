# play a Music Note

Play a music note from our note selector on different Minecraft-specified instruments.

```sig
music.playNote(Note.C, Instrument.Chime, music.beat(BeatFraction.Sixteenth))
```

This block uses the Minecraft `/playsound` command underneath to allow for all the users to hear the note on the specified instrument.

## Parameters


* **note**: the frequency to be played
* **instrument**: the musical instrument that the frequency will be played on
* **millis**: the number of milliseconds to pause after playing the note


```package
makecode-minecraft-music=github:microsoft/makecode-minecraft-music
```