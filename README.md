## SET IT UP :: THE APP THAT TELLS YOU EXACTLY WHAT COMPANY IS LOOKING FOR YOU

(This is a Hack Western project)

1. How _Set It Up_ works is simple — you tell it what is your programming language of choice. It'll then scrape indeed to see what companies are currently looking to hire developers using the language you specified, and you give you back the best fit company.
2. The program determines the best company using machine learning.
3. The app uses node, brain.js (for the machine learning part), cheerio.js (for scraping indeed) and stores and reads data as a json file.

## HOW TO USE THE PROGRAM
_in order to run it locally, follow these steps —_
1. Create a folder on your computer and open it in the Terminal (Command Line) :: [Quick Intro To CLI](https://launchschool.com/books/command_line/read/files_directories_executables#clicore)
2. 'git init' into it so that it forms a local repository. Then do git clone _'clone with https' url found at the top_
3. Then, _cd_ into the project folder in your terminal and type 'node scrape.js'.
4. Lastly, you want to open your browser (make sure you do step 3 before this) and type http://localhost:3000/ to see our project in action!
5. Last warning, make sure once you're done running it, go to terminal and hit Ctrl+C to exit out of the app.

_if you want to see the program in action online, follow the heroku app link at the top_

## Inspiration :
I've been wanting to dabble in machine learning for a long time but it intimidated me. The app I haven't isn't high level, but it's my first foot into the ML world and I couldn't be happier! I also added in web parsing, which is something I'd been wanting to explore — really, this idea exists because of the things I really wanted to learn but kept putting off due to intimidation.

## What it does : 
It takes a programming language from the user from the front end, runs it against Indeed.com to find potential employers through parsing, and save the information in a json file. This json file is used by brain.js to train itself to identify data. We then pass the user's language choice as input and ask out program to tell the user which company likely really needs someone talented in that language based on machine learning.

## How I built it :
I used Node.js as the backend server. For parsing, I made use of the cheerio library, and brain.js for the actual machine learning portion of the program. The front end was done in pure HTML and CSS, and then connected to the backend using Express and ejs.

## Challenges I ran into :
Taking input from html form, and displaying final output on an HTML page was definitely something I spent the longest on, given that this was the first time I was working with Node, Express and ejs. Parsing the input and putting it into the appropriate required json was also one of the challenges I faced. As Node.js is asynchronous, I also had to find work-arounds so it wouldn't use previous data to analyze and train itself, but rather newly generated data after the parser.

## Accomplishments that I'm proud of :
Definitely the whole thing. As someone coming into her first hackathon, never having worked with any type of javascript except vanilla, I really wanted to push myself to learn and do things I felt uncomfortable and intimidated by doing. I couldn't have been happier of the result I have, and I can't wait to explore _machine learning_ a lot more from here on. For a moment, imposter syndrome did hit me seeing my own peers do things far more complicated than this program, but for where I started, I've very happy for how far I've made in the past 24 hours.

## What I learned :
Not speaking academically, I learned a lot of patience and that I shouldn't give up. I got frustrated, my program crashed and broke several times, and at one point I accidentally wiped my whole program and had to start from scratch. But I came out of it smarter. I learned a **crazy** amount in just one day, especially in terms of how _machine learning_ works and how to do server side programming, and it really makes me excited to learn more.

## What's next for Set It Up :
I'm definitely going to try to set it up (pun intended) with more parameters than just the language and make the interface a lot more cleaner. I would also try to make the training process quicker while making it more efficient. I'm far from done with this project.
