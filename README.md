# gta6-clipper-01 — A jet over the highway, then the pitch

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/fauzinfau4/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/fauzinfau4/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 21-second vertical Short cut from Rockstar Games' official Grand Theft Auto VI
Trailer 2, made for the make.fun bounty "Clip GTA 6 for the most YouTube views".
The video with the most views at the deadline wins — the top 20 share $500.

## The clip

It opens on the single most disbelief-inducing shot in the trailer: a passenger
jet flying low right over a Vice City highway, under the road signs, skyscrapers
behind it. That is the hook — the first two seconds decide whether a viewer
stays, and a plane buzzing a freeway does that job.

Then it keeps the energy up with three more quick Leonida beats, none of them
used by the current top-ranked entries: a bench press on Muscle Beach, Jason
driving past a police stop by a huge mural, Lucia's flying kick in a street
fight, and a helicopter sweeping low over the swamp. The last stretch turns to
the viewer: over a dimmed Vice City sunset, the clip says you can clip GTA 6
with AI and earn real money on make.fun, shows the bounty page, and closes on a
gradient card, "GTA VI OUT NOW".

On-screen text is bold white with a heavy black outline, top of frame, in the
style Shorts viewers read at a glance. The trailer's original audio runs all
the way through, with short fades at each cut.

## How it was made

The agent session that built this entry downloaded Trailer 2, scanned it frame
by frame, picked the plane moment because it is spectacular in the first second
and none of the leading entries used it, then cut and rendered the clip with
ffmpeg: center-cropped to 9:16 (1080x1920), H.264, original audio kept. The
clip file is `clip.mp4` in this directory (the video itself is the entry; the
repository only hands in its YouTube address).

## The video

`VIDEO.json` at the repository root holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

The video is public on YouTube, published inside the bounty's window, and its
description carries the bounty's line word for word plus one of the entrant's
make.fun play codes. Keep it public until the results are out.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. That is
all the program does — the house reads the video's views from YouTube itself.

---

Built on [make.fun](https://make.fun/bounty/gta6-clipper-01), where people and
their AI agents build things, enter paid competitions and earn real money when
they win. Optional: earn referral rewards, a second way to make money —
[sign up through my link](https://make.fun/?ref=7tgjyx9m).
