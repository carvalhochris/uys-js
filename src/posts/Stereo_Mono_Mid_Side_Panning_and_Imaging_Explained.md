# Stereo, Mono, Mid, Side, Panning, and Imaging Explained



I find there to be many misconceptions in understanding stereo.

So I thought I would clarify some things.

Many thanks to Aliki Rodgers for his contributions.

Table of Contents
-----------------

* [What is Mono?](#what-is-mono)
* [What is Stereo?](#what-is-stereo)
* [How we localise sound in the stereo field](#how-we-localise-sound-in-the-stereo-field)
  + [Interaural Intensity Difference](#interaural-intensity-difference)
  + [Interaural Time Difference](#interaural-time-difference)
* [How to get a wide a stereo image](#how-to-get-a-wide-a-stereo-image)
* [Stereo Balancing vs True Panning](#stereo-balancing-vs-true-panning)
* [Where does Pan Law come into all of this?](#where-does-pan-law-come-into-all-of-this)
* [What do Stereo Spreaders or Wideners do?](#what-do-stereo-spreaders-or-wideners-do)
* [What is Mid/Side?](#what-is-midside)
* [What Mid/Sum is](#what-midsum-is)
* [What Side/Difference is](#what-sidedifference-is)
* [What’s Mid/Side for?](#whats-midside-for)
* [Bonus: How is Mid/Side decoded back into L and R?](#bonus-how-is-midside-decoded-back-into-l-and-r)
* [That’s all, Folks!](#thats-all-folks)

What is Mono?
-------------

Mono (short for monophonic) means **one channel** of audio. Stereo means more than one. When you record a vocal into your DAW using **one microphone** and **one channel** on your interface, that is mono. Mono is **one**.

When we have a mono signal in our DAW, eventually it gets sent to a stereo bus. It’s technically still mono information, but that same mono signal is now sent both to L and R. This is what creates a centre image.

**Mono information** in a stereo environment equals **centre information**. As our ears hear the same thing from either side at the **same volume** and at the **same time**, our brains localise that as **centre**. This makes sense as that’s how it works in the real world. When a sound comes from in front of us, it reaches both ears at the same time and at the same intensity. That’s how we know it came from in front of us.

What is Stereo?
---------------

From this [Wikipedia article](https://en.wikipedia.org/wiki/Stereo_(disambiguation))

> *Stereo or stereophonic sound is the reproduction of sound using two or more independent audio channels*

Couldn’t have said it better myself. In music, we use the left and right configuration of stereo as to create a three dimensional sound stage which would be impossible with just a single channel (mono). How would you make something sound like it’s coming from the left if you only had one speaker directly in front of you? You couldn’t.

How we localise sound in the stereo field
-----------------------------------------

### Interaural Intensity Difference

This is quite simple and easy to simulate on either headphones or speakers. Simply having a higher intensity of the same sound coming from one channel to the other, localises it as such. If there is more of the same guitar coming from the left channel than the right, our brains will localise that as further to the left whether we are monitoring on speakers or headphones.

The difference in intensity between the sound reaching your left ear and your right isn’t simply a matter of volume alone. You have to consider that by the time it reaches your right ear, your head has masked the sound in some way, further distorting the signal in a way that is more tonal. This, as well as **interaural time difference**are theoretically reasons why monitoring stereo between speakers and headphones are very different.

[+ Mastering in Logic Pro X : The Basics](https://unlockyoursound.com/mastering-logic-pro-x/)

### Interaural Time Difference

This is fundamentally the reason why headphones don’t produce a true stereo image. In the real world, when a sound comes from the left, the right ear hears the same thing, just slightly **later** than the left ear does. Our brain uses this information (as well as IID) to localise the sound source. This difference in timing between left and right is known as **interaural time difference**. In headphones our left ear only hears the left channel and the right only hears the right. If you pan an instrument halfway to the left, the right ear also hears it, just with no variance in time like there would be with speakers.

[More information on IID and ITD](https://en.wikipedia.org/wiki/Sound_localization#ITD_and_IID)

How to get a wide a stereo image
--------------------------------

A wide stereo image is when a sound seems to be coming from multiple angles, like a wall of sound. Something much bigger than what would be possible if we only had one speaker. Take an orchestra for example. It would be practically impossible to fully convey that using just one microphone and one mono speaker. We’d either capture and reproduce the sound in stereo or we would capture mono recordings and pan them apart in the mix stage. Or both!

Stereo width is achieved when what comes out of the left is **different** to that of the right. For example, if I’m tracking guitars, I will record the same part twice and pan them left and right respectively. This is effective because they are two different pieces of audio even if I am playing the same riff. This gives off a sensation of width. A technique that is very commonplace in rock and metal music.

However, if I made only one recording, panned it hard left, duplicated the **exact same** audio, and panned that hard right, i’d only achieve the illusion of centre. This is a pointless exercise as I might have well just kept the one copy panned to the middle. The effect is the same.

A narrow image is where L and R are very similar or the same. A wide image is where L and R are more different. A truly wide image has some of both. Panning is your friend. If you want width, be sure to have a panning strategy down early in in the production phase. Stereo is a stage. Treat it as such.

Stereo Balancing vs True Panning
--------------------------------

Normally, when you ‘pan’ a stereo track, you’re actually turning one channel up and turning the other down (relatively speaking). This is actually called stereo balancing. This is likely the default behaviour of your DAW when you are panning a stereo track. However, if your DAW supports True Panning, it’s a different beast. With this method, both channels (left and right) actually pan (move) in the direction you specify, as opposed to one being turned up relative to the other. I’ll give you an example.

Imagine a situation where you had a stereo audio track in your DAW, and on that track was an audio clip, and in that audio clip you somehow had a piano on the left channel, but a vocalist on the right.

When you use the pan pot in ‘stereo balancing mode’ and pan to the left, you’re simply turning the vocalist down and the piano up.

However, with ‘true panning’, you’re panning (moving) the vocalist over to the left to join the piano. Nothing on the right, both piano and vox to the left.

Different DAWs support this in different ways so it’s important to know whether that pan pot you are using is in fact a true panner or a stereo balancer. In the context of a mono track, it has to be a panner as there is no L and R channels to balance there. But as discussed, a stereo balancer just changes the relative volumes of L and R.

Where does Pan Law come into all of this?
-----------------------------------------

Without pan law, anything panned to the middle doubles in power. Pan law compensates for this by attenuating by 3dB on anything that is panned to the centre. This way, when you pan something from left to right, the apparent volume is consistent throughout the movement. There is actually more than one standard for pan law, yet another rabbit hole i’ve chosen to pass on for the sake of this article. However, I do recommend you [read further](https://en.wikipedia.org/wiki/Pan_law).

[+ Mixing in Logic Pro X : The Basics](https://unlockyoursound.com/mixing-logic-pro-x/)

What do Stereo Spreaders or Wideners do?
----------------------------------------

They simply take your stereo information and further manipulate the L and R channels so they are **more different**, resulting in a wider stereo image. They usually do this by manipulating the relative phase between the two channels.

You can use these on mono signals to convert the information to stereo. Often stereo spreaders can be used at varying amounts over various frequency bands.

Spreaders are quite blunt instruments however. They can only work with what’s there. If you are trying to make a mono signal into a wide one, it’s always a compromise. This is especially true when you sum the mix to mono at a later stage. The disparity in phase between L and R will create phase related issues in a mono monitoring environment.

This is why I personally feel it’s usually better to go back to the mix and further refine your strategy. A full, wide mix doesn’t come from widening tools. It comes from a well **thought out** stereo mix.

Some tools use sum/difference processing (AKA Mid/Side) to increase the difference between Left and Right, resulting in a wider image. That nicely brings us onto one of the most misunderstood conceptions in audio today…

What is Mid/Side?
-----------------

Mid/Side is actually Sum and Difference. Let’s break that one down!

What Mid/Sum is
---------------

L + R. Exactly the same as summing to mono.

What Side/Difference is
-----------------------

L – R. The difference between left and right. The same as taking a stereo file and flipping the polarity of one channel. That’s actually how it works.

What’s Mid/Side for?
--------------------

Mid/Side allows you to treat the sum and difference channels independently. In my opinion it can have a place in mastering if used in a well informed manner.

When mastering for example, you may want to increase gain on the side channel to widen the stereo image. As you are increasing the level of the side channel, you are increasing the difference between left and right, thus producing a wider image. Conversely, if you increase the mid/sum channel, you are reducing the difference between left and right, thus narrowing the image. You never actually lose or gain any new content, you simply convert it.

To give you a more real world example, you may want to apply a low cut filter on the side channel with a view of converting everything below the cutoff frequency into mono/sum/centre information. This is how mono makers work. Again, you haven’t lost any energy below the cutoff here, you’ve simply converted it.

All being said, I wouldn’t practice any of this just because it’s there and because you can. Mid/Side processing is not any better than regular stereo processing. It’s just different. In stereo you are treating either or both channels. In Mid/Side, you are treating both or the difference between the two. That is fundamentally the difference.

Bonus: How is Mid/Side decoded back into L and R?
-------------------------------------------------

You won’t ever need to do this when using Mid/Side plugins yourself, however it is very simple and worth knowing.

The method of decoding a Mid/Side signal back to L and R is as follows:

L = (M+S)/2 (Mid summed with side)  
R = (M-S)/2 (Mid minus side)

The division by 2 is there simply because the summing process nets a doubling of power of the original stereo signal. We simply negate 3dB to return to unity gain.

Hopefully this really basic arithmetic can help you understand what mid/side truly is.

[Source and more info on Mid/Side](https://www.gearslutz.com/board/so-much-gear-so-little-time/478912-mid-side-primer-encoding-decoding.html)

That’s all, Folks!
------------------

That’s everything I wanted to set straight with regard to what all these things actually mean and I do hope it has brought some clarity where needed or just reassurance on what you already expected to be true. Please let me know if you have any questions or concerns about any of this using the comments below. I look forward to discussing further with you!

Happy imaging!

