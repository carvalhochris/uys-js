# How Much Headroom Is Needed For Mastering?



In this article, we discuss the concept of headroom in mixing and mastering.

What is headroom?
-----------------

Headroom generally refers to the difference, measured in decibels, between zero (full scale / 0dbFS) and the peak value of the signal itself.

I’m sure you’ve heard about the *rule of thumb* advising that you should leave 6dB of headroom for the mastering engineer. This isn’t bad advice but it’s not to be taken too literally. I’m going to break this one down for you as there is a lot of confusion as to why.

First of all, there is **no significance** to the value of 6 dB.

Technically, the amount of headroom that a mastering engineer **needs** is **zero**, as long as it’s not clipping.

For example, if I receive a mix-down for me to master, the very first thing I will do is make a gain movement to where I want it to be prior to processing. I do this by ear as I work in a fixed monitoring setting.

However, what really matters, and what this is massively confused with is…

Dynamics
--------

Dynamics, AKA dynamic range, refers to the variance in level of a given signal. Something that is highly dynamic has a larger range of volume, and something that is less dynamic is generally considered more *dense* or *compressed*.

When it comes to dynamics, mastering engineers can only work with the information that’s given to them. If you send a mix that had a brick-wall limiter on the mix bus, reducing the dynamics by 8 dB, that’s 8dB that the mastering engineer will never see.

That’s 8dB of information you have shaved off the top your audio prior to mastering. By doing this, the mastering engineer’s job is 8dB harder to do.

Let me paint you another picture. If you use a limiter and reduce the dynamics by 8dB but it has headroom because you simply turned it down post-limiter, then that completely misses the point.

So what’s the best advice for submitting mixes for mastering? Mix with loads of headroom, and simply apply (negative) gain on the mix bus if it’s crossing 0dBFS.

To summarise, peak headroom isn’t really the problem, dynamic range is. Just make sure you aren’t using a limiter on the mix bus before you bounce down and send off for mastering. If your mix bus is clipping, a simple gain/trim stage at the end of the chain will suffice.

[+ Gain Staging in Logic Pro X](https://unlockyoursound.com/gain-staging-logic-pro-x/)

SCENARIOS:
----------

### Scenario 1

1dB of headroom but full dynamic range (no limiter)  
Outcome: Good!

### Scenario 2

6dB of headroom but heavily squashed dynamics (limiter on mix bus)  
Outcome: Bad!

### Scenario 3

6dB of headroom, full dynamic range, and no clipping (no limiter on mix bus, peak level under 0)  
Outcome: Good!

To summarise, the message is that the peak value doesn’t make a difference either way.

The mastering engineer will give themselves the headroom they need via a simple gain movement at the beginning of their chain.

However, the dynamic range of the information is the most important variable.

It’s no good sending a 24 bit mix with 6dB of headroom if the dynamic range of the material is only at 4dB because it was pushed into the ceiling of a limiter. Headroom or no headroom, that will be quite the task for the engineer. In that case, they will likely ask for a re-print minus the limiter.

If you would like to learn more about preparing your mixes for mastering, check out this blog [here](https://unlockyoursound.com/prepare-mastering/).

Video
-----

