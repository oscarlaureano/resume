
var timeIntervalNormalText = 1330;
var timeIntervalGlitchyOverlap = 3000;
var titlesList = [
    "B.S. COMPUTER SCIENCE",
    "ROCKSTAR",
    "SOFTWARE ENGINEER",
    "SENIOR DEVELOPER",
    "IoT ENTHUSIAST",
    "DATA SCIENCE FAN",
    "PYTHON APPRENTICE",
    "JAVASCRIPT ADHERENT",
    "SCRUM MASTER",
    "GONE FERAL."
];

function switchTitles(){
    var changingText = setInterval(changeTitle, timeIntervalNormalText);
    var changingOverlap = setInterval(changeOverlap, timeIntervalGlitchyOverlap); 
    
}

function changeTitle(){
    document.getElementById("magicTitle").innerHTML = getTitlefromList();
}

function changeOverlap(){
    var randomIndex = Math.floor((Math.random() * titlesList.length));
    var glitchyText = document.getElementById("magicTitle");
    glitchyText.setAttribute("data-text", titlesList[randomIndex]);
}

function getTitlefromList(){
    var actualTitle = document.getElementById("magicTitle").value;
    var randomIndex = Math.floor((Math.random() * titlesList.length));
    timeIntervalNormalText = Math.random() + 1;
    console.log(actualTitle);
    while(titlesList[randomIndex] === actualTitle){
        randomIndex = Math.floor((Math.random() * titlesList.length));
    }

    return titlesList[randomIndex];
}

window.addEventListener('DOMContentLoaded', (event) => {

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
});