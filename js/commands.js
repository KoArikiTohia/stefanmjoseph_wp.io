let linkedin = 'https://www.linkedin.com/in/stefanmjoseph/';
let instagram ='https://www.instagram.com/stefanmjoseph/';
let tryhackme = 'https://tryhackme.com/p/KoArikiTohia';

let existCommands = [
  'banner',
  'certs', 
  'clear',
  'cls', 
  'date',
  'help',
  'history',
  'instagram',
  'linkedin',
  'projects',
  'references', 
  'resume',
  'social',
  'theme',
  'theme ls',
  'theme set',
  'tryhackme',
  'whoami',
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

];

social = [
  'To open the below social profiles Type the desired one!',
  'Example : linkedin',
  '----------------',
  '&nbsp;',
  '<a href="https://www.linkedin.com/in/stefanmjoseph/">Linkedin</a>',
  '<a href="https://www.instagram.com/stefanmjoseph/">Instagram</a>',
  '<a href="https://tryhackme.com/p/KoArikiTohia/">TryHackMe</a>'
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
  '<span class="command">banner </span>---><span class="helpdes"> Displays the header</span>',
  '<span class="command">certs  </span>---><span class="helpdes"> Displays my certifications in a new window</span>',
  '<span class="command">clear  </span>---><span class="helpdes"> Clears the Terminal</span>',
  '<span class="command">date   </span>---><span class="helpdes"> Displays the current date and time</span>',
  '<span class="command">help   </span>---><span class="helpdes"> Displays available commands</span>',
  '<span class="command">history </span>---><span class="helpdes"> View command history</span>',
  '<span class="command">referencess </span>---><span class="helpdes"> Displays work references</span>',
  '<span class="command">resume </span>---><span class="helpdes"> Displays work references</span>',
  '<span class="command">social </span>---><span class="helpdes"> Displays my social profile links</span>',
  '<span class="command">theme </span>---><span class="helpdes"> Theme Configuration</span>',
  '<span class="command">pwd   </span>---><span class="helpdes"> Prints the present working directory</span>',
  '<span class="command">whoami </span>---><span class="helpdes"> Displays information about me</span>',
 
  '<br>',
  '[TAB]              Trigger completion',
  '[Ctrl+l]           Clear terminal',
  '[Ctrl+p]           Go back to previous command',
];

banner = [
' &nbsp;',

'╔═╗═╦═╔═ ╔═ ╔══╗ ╔═╗  ═╦═ ╔ ╗ ╔═╗ ╔═ ╔═╗ ║ ║',
'╚═╗&nbsp;&nbsp;║&nbsp;&nbsp;&nbsp;╠═ ╠═ ║══║ ║ ║   ║  ║ ║ ╚═╗ ╠═ ╠═╝ ╠═╣ ',  
'╚═╝&nbsp;&nbsp;║&nbsp;&nbsp;&nbsp;╚═ ║  ║  ║ ║ ║ ╚═╝  ╚ ╝ ╚═╝ ╚═ ║   ║ ║ ',   
'&nbsp;',
"Hello There!🤖, My name is <span>STEFAN JOSEPH</span> ",
'&nbsp',
'Welcome To My Web Portfolio!',
//' - - - -',
'&nbsp;',

'For a list of available commands, type<span class="command">\ help:\</span> ',
];


certs =[
'&nbsp;',

// eJPT Cert
'<p><a href="resources/eJPT Certification.pdf" target="_blank">eJPT</a></p>',
//Malware Cert
'<p><a href="resources/Practical Malware Analysis & Triage Certificate.pdf" target="_blank">Malware Analysis and Triage</a></p>',
//Microsfot Azure Fundementals
'<p><a href="resources/Microsoft_Certified_Professional_Certificate Azure Fundamentals.pdf" target="_blank">MS Azure Fundementals</a></p>',
//Microsfot Azure Data Fundementals
'<p><a href="resources/Microsoft_Certified_Professional_Certificate Data Fundamentals.pdf" target="_blank">MS Azure Data Fundementals</a></p>',

];

references = [
//Reference Letter 1
'<p><a href="resources/Reference Letter1.pdf" target="_blank">Reference Letter 1</a></p>', 
//Reference Letter 2
'<p><a href="resources/Reference Letter2.pdf" target="_blank">Reference Letter 2</a></p>',
];

resume = [
'&nbsp;',
'Click on Resume to be taken to my resume',
'-----------------------------------------',
'<p><a href="resources/Resume Stefan Joseph.pdf" target="_blank">Resume</a></p>'

];
