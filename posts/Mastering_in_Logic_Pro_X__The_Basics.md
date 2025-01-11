# Mastering in Logic Pro X : The Basics



**Mastering in Logic Pro X is absolutely possible, even with just stock plugins!**

Many get lost though.

Not because they don’t know, but because they don’t know what they are aiming for.

Perhaps you can relate!

This article should help you get going, so you can confidently make great sounding masters for your music.

I’ve broken it down into a series of actionable steps.

***You can also download a [FREE PDF version](https://unlockyoursound.com/free/) of this guide so you always have it to hand!***

---

Table of Contents
-----------------

* [How To Prepare Your Mix(es)](#how-to-prepare-your-mixes)
* [Calibrate Your Mastering Level](#calibrate-your-mastering-level)
* [Gain Stage Your Reference Track(s)](#gain-stage-your-reference-tracks)
* [Set The Ceiling](#set-the-ceiling)
* [Find Loudness](#find-loudness)
* [Problem Solving](#problem-solving)
* [Bounce/Export](#bounceexport)

---

How To Prepare Your Mix(es)
---------------------------

There are many articles and cheat sheets out there that tell you things in absolutes like needing 6 dB of headroom and such.

In digital, that’s not so important.

All you need to do is make sure you have a great mix that isn’t clipping.

If you are confident in the sound of the mix then just bounce it down to a 24 bit wav file.

Then master the wav mix in a brand new session another day with fresh ears.

Give your brain time to forget about it for a bit!

You might even to choose to take up to a week between mixing and mastering the same song, without once listening to the mix in between. Your call.

With regard to peak headroom, here is an [article](https://unlockyoursound.com/headroom) I wrote about it.

The gist of it is that it doesn’t matter, as you can adjust gain in the mastering session anyway.

Just make sure there is an appropriate amount of dynamics in the music.

If you would like a general guideline, around 14 dB of difference between peak and RMS in the loudest moments in the mix is a good place to start.

Peak headroom (space between peak value and 0 full scale) doesn’t matter so much.

[+ Mixing in Logic Pro X : The Basics](https://unlockyoursound.com/mixing-logic-pro-x/)

---

Calibrate Your Mastering Level
------------------------------

This bit is huge.

Measuring EQ, dynamics, and loudness are not things you can rely solely on meters for. However, they can (and will) work as a supplement to your hearing, but nothing more than that.

This is why it’s ever so important to [calibrate your mastering level](https://unlockyoursound.com/monitoring-spotify/) and stick to it.

I wrote an [easy-to-follow guide](https://unlockyoursound.com/monitoring-spotify/) on how to do that using simply your ears, your amp/speakers, and Spotify.

---

Gain Stage Your Reference Track(s)
----------------------------------

Now that you have [set up your monitoring level](https://unlockyoursound.com/monitoring-spotify/), you may also choose to use a reference track in the mastering session.

There is only one tip you need to know about using reference tracks…

**Turn them down (or up) to your mastering level!**

That way, there is no loudness bias between your master and the reference track.

The easiest way to do this is to use a gain utility on the reference track until it’s playing back at your mastering level. Do this by ear and make adjustments along the way so that comparisons are always fair.

Remember, a slight difference in loudness also equates to a difference in how we perceive dynamics and frequency balance (EQ). It’s just a [psychoacoustic](https://en.wikipedia.org/wiki/Psychoacoustics) reality we have to deal with.

[+ Gain Staging in Logic Pro X](https://unlockyoursound.com/gain-staging-logic-pro-x/)

---

Set The Ceiling
---------------

As you probably know, a limiter is very much a usual suspect in your mastering chain.

Not because it makes things louder (because it doesn’t) but because they allow you to adjust the gain of the track whilst retaining a peak ceiling.

This means that if necessary, we can make it louder without clipping. This is the true purpose of a peak limiter.

Now what I am going to advise here is to use Logic Pro X’s Adaptive Limiter.

Load it as the final plugin in your chain and set the ceiling to -1.0 with True Peak Detection turned on.

[![mastering logic pro x adaptive limiter](https://unlockyoursound.io/wp-content/uploads/2018/06/Screen-Shot-2018-06-27-at-19.44.58-300x176.png)](https://unlockyoursound.io/wp-content/uploads/2018/06/Screen-Shot-2018-06-27-at-19.44.58.png)

Now it’s set up, you don’t have to look at it again. You probably want to make sure it’s not applying any extra gain by default, so make sure the gain dial is at 0dB.


---

Find Loudness
-------------

This where we start to work backwards, at least as far as the order of plugins in your chain is concerned.

Before, I mentioned how playback volume has a huge bearing on how we perceive frequency balance and dynamics. This is where we work to minimise that variable.

Earlier, I shared [this article](https://unlockyoursound.com/monitoring-spotify/) on how to set up your monitoring level.

Now that’s done, it’s time to raise the mix to your playback level. You can do this by ear now, slowly turning up your mix via a gain stage before the limiter, until you start to feel it’s loud enough for listening purposes.

[+ 6 Useful Metering Plug-ins for Mastering Audio](https://unlockyoursound.com/metering-plugins-mastering/)

---

Problem Solving
---------------

Now that you are close to the goal, any issues with regard to dynamics and EQ will start to make themselves apparent.

Now you can work your way back into the chain, tackling these specific issues. Such issues could be unbalanced frequencies, dynamics, or distortion at the limiter’s ceiling.

Use the tools at your disposal to solve the problems. If there are no problems, have the courage to believe that and move onto the final step.

---

Bounce/Export
-------------

This is where you actually create the master files. Simply use the Bounce command in Logic Pro X and select the appropriate formats for where you want to submit your music.

Tip: If you are uploading your music to an online distributor or Soundcloud, definitely use WAVE (.wav) as your format. The platforms will encode it to their chosen lossy format (MP3, AAC, Ogg etc) on their end.

Tip: Dither your master. Don’t worry so much about which dither. Any dither is better than truncation distortion!

Happy mastering!

