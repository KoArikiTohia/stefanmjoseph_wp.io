let linkedin = 'https://www.linkedin.com/in/stefanmjoseph/';
let instagram ='https://www.instagram.com/stefanmjoseph/';
let tryhackme = 'https://tryhackme.com/p/KoArikiTohia';

let existCommands = [
  'banner',
  'certs', // Add certs
  'clear',
  'cls', 
  'date',
  'education', // add education 
  'help',
  'instagram',
  'linkedin',
  'references', // add references
  'social',
  'theme',
  'theme ls',
  'theme set',
  'tryhackme',
  'whoami',
  'workexp', // add work experience
  'cd ..'
];

whoami = [
    "&nbsp;",
  "Hello my name is <span style='color: skyblue;'>Stefan Joseph</span>😊 ",
    "&nbsp;",
  "I'm a Applied Business Management Graduate from BYU-I. I have a passion ",
  "for Cyber Security and working with people. I'm currently completing my",
  "Computer Information Technology diploma at Lethbridge College",  
  "&nbsp;",
  "<span style='color: lightgreen;'>Mission Statement:</span> ",
  "To develop integrity, to show a greater amount of empathy to all people I ",   
  "influence and to strive for constant success even through setbacks.",
    "&nbsp;",
  "<span style='color: lightgreen;'>Problems are just Opportunities that haven't presented themselves - Wilson Fisk</span>", 
 
  '<p align="center">',

'&nbsp;',
'&nbsp;',
];

social = [
  'To open the below social profiles Type the desired one!',
  'Example : linkedin',
  '----------------',
  '&nbsp;',
  '<a href="https://www.linkedin.com/in/stefanmjoseph/" style="color: skyblue;">Linkedin</a>',
  '<a href="https://www.instagram.com/stefanmjoseph/" style="color: skyblue;">Instagram</a>',
  '<a href="https://tryhackme.com/p/KoArikiTohia/" style="color: skyblue;">TryHackMe</a>'
];

themes = ['dark', 'light'];

theme = [
  'Usage: theme [arg]',
  'Args:',
  ' - ls: list all available themes',
  ' - set: set a theme',
  '<br>',
  'Example:',
  ' theme ls # to list all available themes',
  ' <span style="color:skyblue;">theme set light</span> # to set a theme',
];

help = [
  '<span class="command">banner &nbsp; ➡ </span> <span class="helpdes">Displays the header</span>',
  '<span class="command">certs &nbsp; ➡ </span> <span class="helpdes">Displays my certifications in a new window</span>',
  '<span class="command">clear &nbsp; ➡ </span> <span class="helpdes">Clears the Terminal</span>',
  '<span class="command">date &nbsp; ➡ </span> <span class="helpdes">Displays the current date and time</span>',
  '<span class="command">education &nbsp; ➡ </span> <span class="helpdes">Displays my education</span>',
  '<span class="command">help &nbsp; ➡ </span> <span class="helpdes">Displays available commands</span>',
  '<span class="command">references &nbsp; ➡ </span> <span class="helpdes">Displays work references</span>',
  '<span class="command">social &nbsp; ➡ </span> <span class="helpdes">Displays my social profile links</span>',
  '<span class="command">theme &nbsp; ➡ </span> <span class="helpdes">Theme Configuration</span>',
  '<span class="command">pwd &nbsp; ➡ </span> <span class="helpdes">Prints the present working directory</span>',
  '<span class="command">whoami &nbsp; ➡ </span> <span class="helpdes">Displays information about me</span>',
  '<span class="command">workexp &nbsp; ➡ </span> <span class="helpdes">Displays my work experience</span>',
 
  '<br>',
  '[TAB]              Trigger completion',
  '[Ctrl+l]           Clear terminal',
  '[Ctrl+p]           Go back to previous command',
];

banner = [
'<span style="color: yellowgreen;">visitor@terminal.stefanmjoseph:~$</span> Greetings 😊',
' &nbsp;',
"╔═╗═╦═╔═ ╔═ ╔══╗ ╔═╗  ═╦═ ╔ ╗ ╔═╗ ╔═ ╔═╗ ║ ║",
"╚═╗ ║ ╠═ ╠═ ║══║ ║ ║   ║  ║ ║ ╚═╗ ╠═ ╠═╝ ╠═╣",
"╚═╝ ║ ╚═ ║  ║  ║ ║ ║ ╚═╝  ╚ ╝ ╚═╝ ╚═ ║   ║ ║",
'&nbsp;',
"Hello There!🤖, My name is <span style='color: skyblue;'>STEFAN JOSEPH</span> ",
'&nbsp',
'Welcome To My Web Portfolio!',
//' - - - -',
'&nbsp;',

'For a list of available commands, type<span class="command">\'help\'</span> ',

];


certs =[



];

education = [


];

references = [
//Reference Letter 1
'<p><a href="resources/Reference Letter1.pdf" target="_blank">Reference Letter 1</a></p>', // Don't delete because it works
//Reference Letter 2
'<p><a href="resources/Reference Letter2.pdf" target="_blank">Reference Letter 2</a></p>',

'<object data="resources/Reference Letter1.pdf" type="application/pdf" width="800px" height="1000px"> test</object>',
  
];

workexp = [
//1
"&nbsp",
"--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
"|&nbsp <strong>Cattle Tech Inc – IT Technician</strong>",
"|&nbsp <i>June 2023 - Current</i>",
"|&nbsp &nbsp • Conducted hardware installations on clients feedlots (AP’s, Routers, Switches – Ubiquiti & Cambium Networks) and software installations remote desktop clients (ITSuppotr247, Fusion), antivirus/endpoints (Bitdefender/Sophos) ",
"|&nbsp &nbsp • Monitored and managed client’s network. Implemented security policy and network caps on devices (Ubiquiti)",
"|&nbsp &nbsp • Learned, implemented, and managed clients firewall and proxy servers (PfSense and AdamOne).",
"--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
//2
"|&nbsp Lethbridge College Student Association (LCSA) - President of The LCSA",
"|&nbsp May 2023 - Current",
"|&nbsp • Active advocate for the Students at Lethbridge College, built connections and developed relationships with Municipal, Provincial Leaders and other Student Leaders across Canada",
"|&nbsp • Contributed to the establishment of the ASEC organization, attended goals, leadership and lobby",
"|&nbsp • Act as the figurehead and public representative for college students.",
"--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
//3
"|&nbsp Lethbridge College Student Association (LCSA) – Student Representative",
"|&nbsp Oct 2022 - Current",
"|&nbsp • Act as a medium of communication between the students at the College and the College Board",
"|&nbsp • Active contributor at Lethbridge Academic Council, the LCSA/LCFA Teaching Excellence Awards Selection Committee, the LCSA Food Bank and the Kodiak Athletics Game Day Staff",
"|&nbsp • Planned and organized multiple student’s events. (Meat Draw, DND Night, Black History Month, Mental and Physica Health Wednesdays “Wellness Wednesdays”)",
"--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
//4
"|&nbsp Redherd – Recruiter – 360 Recruiter (Cyber Security Industry)",
"|&nbsp Nov 2021 - May 2021",
"|&nbsp • Job Analysis – Analyzing and understanding various client job requirements to enable the creation of job descriptions that give applicants a clear understanding of the position",
"|&nbsp • Sourcing and profiling candidates – Engaging with potential candidates on multiple platforms and gathering information on their work experience and skillsets",
"|&nbsp • Screening and Selection – Conducting face to face interviews with candidates to identify personality traits, confirm claimed knowledge, and determine who qualifies for advancement in the job hiring process",
"--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",  
  "&nbsp",  
];
