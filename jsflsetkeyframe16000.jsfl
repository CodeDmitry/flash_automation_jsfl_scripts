/*\
|*| This script will insert a keyframe on the last valid frame of the animation(16000).
|*| Flash breaks on animations longer than 16000 frames.
|*| Saves a lot of time manually going to last visible frame, scrolling, inserting frame multiple times.
\*/
(function(timeline) {
    timeline.insertKeyframe(16000);
})(fl.getDocumentDOM().getTimeline());