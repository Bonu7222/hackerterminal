# hacker terminal

built this hacker style terminal because i wnated to make smth that looks like its straight out of the matrix. its got the green text, the typing effect, and the background rain.

## features 

-- matrix rain: the classic falling green characters in the background, built using the html5 canvas api.
-- typing effect: the text types itself out letter using setTimeout.
-- glitch button: a cool glowing butto that triggers the whole sequence.
-- fake hacking: makes you look like a pro hacker hacking into the mainframe (for educational purposes only lol)

## how to run

just open index.html and click initiate hack.

## what learned 

tbh this one was mostly about getting the canvas math right.

-- canvas animation: i leaned how to use `requestAnimationFrame` (well, actually `set Interval` here) to draw the falling characters and reset their y position when they his the bottom.
-- bugs: ngl i had a couple of dumb typos that broke the whole thing at first . i wrote `canvas.with` instead of `canvas.width` and my `startRain` function was accidentally clearing the screen instead of starting the interval. 
-- typing effect: using nested setTimeout calls to make the text appear one character ar a real time. its a simple but looks really cool.

overall, it's a fun little visual project. no frameworks, just raw js and css.
