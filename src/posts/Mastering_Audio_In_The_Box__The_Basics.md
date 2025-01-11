# Mastering Audio In The Box : The Basics



The goal of this article is to serve as a **primer for anyone wanted to get started mastering tracks using only digital tools “in the box”**. Not everything that mastering engineers do can be found in this article. Yet I can confidently say that this will work as a good **foundation** for anyone wanting to get started mastering their own tracks.

The Purpose Of Mastering
------------------------

The goal is to create the highest quality **production master** for your music. A good master presents your music in the best possible light. It should also translate well to the widest range of playback media.

Every mix has it’s own unique properties and thus finding the optimal EQ, imaging, and dynamics is not a matter of applying blanket rules to everything. Instead it’s about finding the **unique qualities** of the audio and working to optimise everything around them.

One of the biggest mistakes you can make in mastering is to do something without **purpose**. Just because compression is sometimes used in mastering, it doesn’t mean your mix needs it. When you reach for that next plugin, ask yourself if you are doing this for a **reason**, to solve a **problem**, or if you’re just doing it because it’s a done thing.

Remember, the goal when mastering is to create a master that sounds great. If the mix already sounds great, then don’t hesitate to do **very little or even nothing** in terms of sonic processing. As [Ian Shepherd](http://productionadvice.co.uk) says, *Do no harm*.

Now we’ve got the more philosophical stuff out of the way, let’s get practical!

Monitoring
----------

Mastering is largely monitoring. Every decision you make in mastering is based on **what you hear** so, naturally, the quality of one’s monitoring is very important.

Now I’m not an acoustician, but what I do know is that the **placement of your speakers** is fundamental. The first place you should look is in the official documentation of your speakers. They should have a guide in there about what the **optimal position** is based on the design of the speaker – so follow that firstly.

Now that your speaker placement is optimal, logically the next step is to assess the way the room affects imaging. Generally treating **first reflection points** with broadband acoustic panels (not foam) is the best place to start.

However, before you start spending your hard earned cash on panels, I strongly recommend reaching out to a reputable acoustics company first. More often than not they will offer a **free consultation**. There are also measurement tools such as [Room EQ Wizard.](https://www.roomeqwizard.com/) These things can help you measure your room’s response so you can take action neutralising it yourself.

Assuming you have done the best you can, the next thing is to look at setting the appropriate output level for your mastering. This is extremely important. Setting a [fixed monitoring level](https://unlockyoursound.com/fixed-monitoring-benefits/) is one of the most liberating things you can do.

Why? Because it allows you to start measuring things like EQ, dynamics, and loudness using **only your ears**. This means you’ll be less dependent on meters and arbitrary numbers.

In this [blog](https://unlockyoursound.com/monitoring-spotify/), I take you through how to set this up using Spotify. You should also consider Bob Katz’ [K-System](http://www.aes.org/technical/documentDownloads.cfm?docID=65) for monitor calibration.

Tools
-----

Your DAW likely has the necessary tools for you to make great masters at home. You don’t need anything special. As long as you have access to EQs, compressors, limiters, and other basic processors that we already use in production and mixing, it’s very likely you won’t need anything new.

  

Loudness
--------

Now this is a very **hot** topic (excuse the pun) in mastering today. Some will advise you with specific LUFS and RMS values, some will say just master as loud as possible. In my view, none of this is the right mentality for mastering.

My philosophy is to master to the **unique loudness potential** of the material. If you do this, your master will always SOUND loud even if it isn’t played back any louder than anything else. Professional mastering engineers know how to find the **loudness potential** and have spent their entire careers producing great masters based on this principle.

Headroom
--------

This is the least eye-grabbing subject here but it is very important. Some will tell you that you need 6dB of headroom in the mix prior to mastering. But this isn’t true. The mastering engineer can easily create a gain stage in their chain and give themselves all of the headroom they feel they need.

Prior to mastering, as long as the mix isn’t clipping, it really **does not** matter what the peak level is; what’s more important is the **dynamic headroom** available as described later in this article under **micro dynamics**.

Gain Structure
--------------

The way you structure gain through the processing chain is very important. It’s important for a few reasons.

Imagine your mix is already peaking at -1 dBFS. You then do some subtle EQ adjustments, possibly raising the even peak higher. Now by the time you load a compressor, you have zero headroom for the threshold. At this point it’s already compressing the material aggressively even when the threshold is near zero. Now you have to go back and adjust the gain going into the compressor. This is why it’s always good to have a gain utility at the beginning of your chain.

Another scenario is when using analogue modelling plugins. Here you may have to manage input gain just to find the sweet-spot or avoid too much distortion. These plugins tend to have a nominal level which should be documented in their respective manuals.

Now you may feel that lowering the gain at the top of your chain decreases loudness too much. That’s fine because you can compensate with an increase of gain further down the chain, such as after your compressor, and/or going into your limiter.

Peak limiting
-------------

When it comes to using limiters, I recommend only using their in-built gain functions for last minute loudness adjustments as opposed to using it for maximising. Have a gain stage before it that brings your master to the right loudness. That way, when you are bypassing the limiter, the loudness is constant and the only difference you hear is the gain reduction. Keep an eye on your peak meters though as bypassing the limiter will likely cause clipping at the output stage.

Workflow
--------

So what do you do first? Well, assuming you have calibrated your output level, you are now liberated to measure the loudness of your audio by ear.

As you bring the loudness up to a comfortable listening level, your ears can start to confidently measure the tonality and dynamics of the material. This is why it’s important to listen to a lot of music at that same monitoring level so that your ears learn how things ‘should’ sound. This makes it much easier for you to intuitively know what to do.

This is why I use Spotify to [calibrate my monitoring.](https://unlockyoursound.com/monitoring-spotify/) Spotify normalises loudness. Couple that with the fact that I’ve listened to a lot of music at the same level, in the same environment, I can be confident in how things should sound. Yet if was to be constantly changing things, I’d have no reference point and more importantly, no means to be confident in my decision making.

Using reference tracks
----------------------

If you want reference a song that’s already out there, the solution is very simple. Buy it, download it, and import it into your DAW on a separate audio track.

Now the next step is essential.

Take your reference track and **adjust the volume** until it plays back at your listening level. If you don’t do this, and the reference is obscenely loud, you will run the risk of over-processing your master just so you can compare dynamics and EQ. It doesn’t make sense to use a reference when it’s playing back louder than your master. Turn it down (if it’s louder) so you can refer to it’s EQ and dynamics fairly.

Micro Dynamics
--------------

Micro dynamics play a large part of finding the loudness potential in a track. It refers to the short term dynamics of the program material. You can measure this using any meter that allows you to simultaneously monitor the peak and RMS values of the audio.

Some meters such as [bx\_meter](http://www.brainworx-music.de/en/plugins/bx_meter) from plugin alliance actually represent the micro dynamics in real time using a unit call DR. DR represents the difference in peak and RMS values in a given moment. There are no ideal numbers that apply across the board, but it’s a good thing to keep an eye on.

If you crush the DR during mixing, the mastering engineer will have little dynamic headroom with which to work. As is the case with every stage of the music production chain, you can only work with the information that is present in the material. However it is possible that a relatively low DR value might just be right for a particular mix, at it’s loudest moment. It’s not about more or less here, it’s about finding what’s optimal for the material. Can you hear everything in a way that still has depth and a sense of space? If so, you’re on the right track. Do you get a sense that it’s crushed and lacking punch? Then check the DR values for that moment in the track, as it might give you a clue as to why.

It’s a common misconception that low DR values equal higher loudness. It can be a significant variable but DR alone doesn’t fully take into account the subjective nature of loudness and how much EQ plays a part in it. If your high RMS level is mostly coming from low-end material, this will generally appear to be quieter than higher register material of the same DR value. DR is just one piece of the **loudness puzzle**.

Macro Dynamics
--------------

Macro dynamics, as opposed to micro, refer more to the overall dynamics of the program (track/song/album). This can be measured with units such as LRA (Loudness Range) or you can simply measure it subjectively with your ears.

Equalisation
------------

EQ is one of our closest and oldest friends in mastering. Gentle, broad stroke EQ adjustments can really make a difference to the quality of the end product and can even play a large role in the perception of dynamics and loudness in our tracks. Think of EQ as a **mixing desk for frequencies**. It’s another opportunity to (re)balance the elements via their frequency content. EQ in mastering is generally very subtle. My goal is to make it sound better (where necessary) without it sounding like it’s been EQ’d.

When EQing in mastering, always be sure to use the output gain of the EQ plugin to **balance loudness** when you are ABing its effect on the audio. If you don’t do this, your ear’s **bias for louder** will impair your judgement on the EQ curve you have applied.

When it comes to more surgical EQ movements, this is usually a matter of isolating any problem frequency and attenuating it. In mastering, of course, you can only take this so far and more often than not it’s a matter of balancing the solution against the compromise of applying such deep EQ adjustments across a printed mix. This is part of the art of mastering. Sometimes you have to accept that fixing something is beyond the scope of the mastering process; trying too hard to solve them can cause as many problems as you solve.

Peak Level
----------

Peak level refers to the absolute highest amplitude value of the waveform. Confusingly, however, there are several different kinds of peak level. Inside your DAW you have something called full scale.

**Full scale** is the scale on which digital audio is measured. It refers to the highest value of 0dB as the highest and negative infinity for the lowest. Peaks inside the digital world can also be described as ‘sample peaks’ or simply ‘peaks’. But they don’t take into account these things called ISPs (Inter-sample peaks).

ISPs are the peaks that are created when a digital-to-analogue converter creates an analogue signal from your digital waveform.

Remember that digital audio represents a waveform as a series of discrete snapshots (samples). This then gets converted into a continuous waveform in the analogue domain via your [DAC](https://en.wikipedia.org/wiki/Digital-to-analog_converter).

Digital peak values don’t account for the values between the samples (ISPs). These can often be higher than the highest measured (sample) peak value.

This is where True Peak metering comes in. True Peaks meters are used to approximate ISPs prior to analogue conversion.

I recommend that your highest true peak level in the master doesn’t exceed -1.0. Not only does this leave plenty of headroom for ISPs but it also accommodates the eventuality of higher peak levels after [lossy](https://en.wikipedia.org/wiki/Lossy_compression) conversion.

Final Formats
-------------

The production master is the **master copy**, the copy from which all other copies are derived from. For the most part, you will only have **one master** and that one master will be pushed out to various distribution platforms via an online aggregator.

The format of this master is usually a wave file(s) at a sample rate of 44.1kHz and a bit depth of 16 bits. Exceptions to this can be made if you are submitting for iTunes separately as a **Mastered For iTunes** submission. To find out more about MfiT, check out this [document from Apple](https://images.apple.com/itunes/mastered-for-itunes/docs/mastered_for_itunes.pdf) about how it works. It makes for very good reading!

Further Learning
----------------

I hope this article has provided you with some mindsets and principles to help you get started mastering your own tracks.

Happy mastering!

