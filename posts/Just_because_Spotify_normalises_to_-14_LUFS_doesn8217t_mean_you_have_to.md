# Just because Spotify normalises to -14 LUFS, doesn&#8217;t mean you have to!



As you may have heard, Spotify normalises to -14 LUFS.

Meaning they have processes in place to make sure that all music is played at [roughly the same loudness](https://artists.spotify.com/help/article/loudness-normalization?ref=sug_helpHome).

This happens when using either their desktop or mobile apps.

***Unlock a bundle of [free resources](https://unlockyoursound.com/free) to help you create and release your music***

---

What is LUFS?
-------------

LUFS stands for Loudness Units Relative To Full Scale. It was primarily designed for broadcast to enable loudness normalisation, but more and more we are seeing this unit being used in music to measure relative loudness between songs and albums.

More info on [Loudness Units](https://en.wikipedia.org/wiki/LKFS).

---

Why are they doing this?
------------------------

The major platforms have been [doing this for a while now](/online-loudness/). Spotify once reduced their playback level from -11 LUFS integrated to -14. Meaning they reduced their target level by 3dB / 3LU.

The reason they are doing this is for user experience.

One of the number one complaints from users is inconsistencies in volume.

Loudness management works to remedy this.

---

What does this mean to me?
--------------------------

Many will have you believe that this means that you have to match it. They will tell you that you must master to that level for the best possible result.

This is misguided advice.

And worse still, it completely defeats the purpose of the platforms implementing [loudness management](/online-loudness/) in the first place!

[+ Mastering in Logic Pro X — The Basics](https://unlockyoursound.com/mastering-logic-pro-x/)

---

So how does it work?
--------------------

When a master gets distributed to their platform, Spotify analyses the relative loudness of the song and simply turns it up or down to match their target playback level using simple, non-destructive gain changes.

No different to pulling the fader down on a track.

They do also have a limiter in place, but it must be understood that it’s not there to do the normalising, it’s there to prevent overs when changing the gain going in. [Further reading](https://artists.spotify.com/help/article/loudness-normalization?ref=sug_helpHome).

Here’s a practical example:

Let’s say I master a song to -10 LUFS integrated.

Spotify’s target playback level is -14 LUFS integrated.

1 LU is the equivalent of 1 dB. So they turn down my master by 4dB.

That’s it! No damage was done. All they did was simply turn it down like you would using a simple volume control.

The platforms that do this are generally quite coy about how and what number they target. However curious and enthusiastic engineers the world over have measured the output of the respective platforms and shared that information online.

This is great. But as always, people take these things way too literally, and before you know it everyone is talking about creating separate masters for each platform.

Unfortunately, though, this mindset completely defeats the point of loudness management. Worse still, it’s forcing people down a path where they make decisions based on some arbitrary number as opposed to the merit of the audio itself.

---

So do I ignore it?
------------------

No. You don’t ignore it. You just make yourself aware of it.

If anything, you should take this information as permission to do what’s best for the master.

For example, let’s say you master something to around -9 LUFS integrated, with a true peak ceiling of -1.0 dBTP, and it sounds great…

Great!

It will sound great no matter what platforms choose to turn it up or turn it down.

Conversely, back in the CD days, it was common practice to master something beyond its potential just to compete. The problem now is that those songs are being turned down by the platforms. What was a loud song yesteryear is now just an over-compressed one that’s no louder than anything else. If it still sounds great, that means it was the right loudness and dynamics for the song. Often, it was not.

---

So how do I know what the right loudness for the song is?
---------------------------------------------------------

The loudness potential (AKA the loudness sweet-spot) is when you push the master to the point just before you degrade the quality of it.

*The view is always best at the edge of the cliff, but too far and you fall off*. Paraphrased from an [Ian Shepherd](http://productionadvice.co.uk) quote

That sounds simple enough, but it’s not that easy to find unless you know how.

Here are just a couple of ways to go about it.

---

Method 1: Using a constant-gain limiter
---------------------------------------

I sometimes use Slate Digital FG-X. It’s a quick and dirty way to increase volume to my [mastering level](/fixed-monitoring-benefits/). It has a big gain dial bang in the middle of it and it pretty much always does what I expect it to do.

Technically it’s an intelligent clipper as opposed to a limiter. I typically have a limiter after this as well, but as this is a clipper, it actually makes it easier to find the loudness potential, due to the fact that you’ll find distortion sooner than you would with a clean limiter.

### So is it as simple as that?

No. No because when we turn something up, we are always of the impression that it sounds better. Louder usually equals better to our ears even if it isn’t. That’s why it’s important when we are mastering to remove the bias for louder and thus make an objective judgement on our processing.

Fortunately [Slate FG-X](http://www.soundonsound.com/reviews/slate-digital-fgx) makes this really easy to do via a feature called Constant Gain Monitoring. Simply turn on Constant Gain Monitoring and increase the gain until you hear distortion. FG-X turns down the output as you increase the output. This way the loudness is constant and the only change you can hear is the difference in dynamics and any distortion that may be introduced. Turn it up until it starts to sound crushed then back off a bit.

Now you’re roughly at the loudness potential of the mix (assuming the EQ has already been balanced). Go there, back off a bit, turn off constant gain, and and now the mix will now play back at it’s optimal loudness.

The same method can be applied to any other processor that has a constant gain feature. FG-X just happens to be one of them.

[![fg-x constant gain](https://unlockyoursound.io/wp-content/uploads/2017/08/fg-x-edit.jpg)](https://unlockyoursound.io/wp-content/uploads/2017/08/fg-x-edit.jpg)

FG-X’s Constant Gain Monitoring makes for a quick and easy way to find the dynamic sweet spot in your music.


---

Method 2: Loudness matching the master against the mix
------------------------------------------------------

The following process allows you to make a fair A/B comparison between your master and the untouched mix.

In your DAW, create a new track (separate from the one with my mastering processing on). Then go back to your mastering track and pull the fader down until the loudness of the master matches that of the (unmastered) mix.

Once they’re matched in loudness, flick between the two during playback and make an objective judgement about your work. If you find that you prefer your master over the untouched mix, then you have nailed it. If you don’t then you may have overcooked it. Rinse and repeat.

If this seems a bit laborious, there are also some great tools on the market to make things easier. Tools such as Ian Shepherd’s [Perception Plugin](https://transactions.sendowl.com/stores/5983/47984).

Another tool that I highly recommend is [HOFA 4U+ BlindTest](https://hofa-plugins.de/en/plugins/4u-blindtest/). This allows you to do conduct your own blind tests as it “rolls the dice” for you so you can choose which version sounds best without any bias. It uses Loudness Units for compensating variances in loudness. This is a very good move considering that LUFS is likely to be widely adopted as a standard for measuring loudness going forward. And best of all, it’s free!

---

Now back to the numbers!
------------------------

Please don’t take this advice as *ignore the numbers*, but more as *don’t prioritise them*.

I often check the numbers after printing the first master. I do this offline using [Orban Loudness Meter](https://www.orban.com/meter/).

Why do I check them? Just to make sure I am not way off.

For example, if it came in at -20 LUFS integrated, I would look to see if I could increase that number a bit, but only if the material allowed me to. If it doesn’t want to go higher, I generally won’t push it.

This of course is rare in popular music.

Once again, I must stress that this is all assuming a balanced mix with balanced EQ. If those things aren’t where they need to be, then the loudness potential will already be low. Mastering is knowing when that is or is not the case. Sometimes you’ll discover a lack of balance after doing your loudness processing. That’s ok, it’s common to have to cycle through your chain to find the potential in all things EQ, loudness, and dynamics.

