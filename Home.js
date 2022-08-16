// selectors
const hamburger = document.querySelector(".hamburger");
const back = document.querySelector(".menu-back");
const goTop = document.querySelector(".goTop");
let projectContainer = document.querySelector(".projects");
const header = document.querySelector("nav");

// initalise aos animation library
AOS.init();

// scroll effects
goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

addEventListener("scroll", () => {
  if (window.scrollY > 300) goTop.classList.add("hide");
  else goTop.classList.remove("hide");
});

// hamburger menu

hamburger.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});
back.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

// css variables
let planet = document.querySelector("#mode ion-icon");

var isDark = false;
var r = document.querySelector(":root");
const mode = document.querySelector("#mode");
mode.addEventListener("click", () => {
  if (isDark) {
    set_light();
    isDark = false;
    planet.name = "moon";
    planet.style.color = "#46244c";
  } else {
    isDark = true;
    set_dark();
    planet.name = "sunny";
    planet.style.color = "rgb(184, 184, 76)";
  }
});
function set_light() {
  r.style.setProperty("--header", "#46244c");
  r.style.setProperty("--text", "#712b75");
  r.style.setProperty("--button", "#c74b50");
  r.style.setProperty("--hover", "#d49b54");
  r.style.setProperty("--shad", "rgb(209, 208, 208)");
  r.style.setProperty("--navColor", "rgba(250, 250, 250, 0.9)");
  r.style.setProperty("--dark-yellow", "#c27a23");
  r.style.setProperty("--body", "white");
}
function set_dark() {
  r.style.setProperty("--header", "rgba(250, 250, 250, 0.9)");
  r.style.setProperty("--text", "#712b75");
  r.style.setProperty("--button", "#712b75");
  r.style.setProperty("--hover", "#d49b54");
  r.style.setProperty("--navColor", "rgba(0, 0, 0, 0.9)");
  r.style.setProperty("--shad", "black");
  r.style.setProperty("--dark-yellow", "#c27a23");
  r.style.setProperty("--body", "black");
}

// projects
let projectData = [
  {
    projectName: "Ad-Blocker",
    projectImage: "Ad-Blocker/AdBlockerimage.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Ad-Blocker",
  },
  {
    projectName: "Auto-Refresher",
    projectImage: "Auto-Refresher/images/example-go.png",
    projectUrl: "Auto-Refresher/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Auto-Refresher",
  },
  {
    projectName: "Binary_To_Decimal_converter",
    projectImage: "Binary_To_Decimal_converter/binary-to-decimal.png",
    projectUrl: "Binary_To_Decimal_converter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Binary_To_Decimal_converter",
  },
  {
    projectName: "CSS Background Generator",
    projectImage: "CSS-Background-Generator/CSS-Background-Image.png",
    projectUrl: "Countdown-timer/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/CSS-Background-Generator",
  },
  {
    projectName: "Country_Capital_Extension",
    projectImage: "Country_Capital_Extension/bg.jpg",
    projectUrl: "Country_Capital_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Country_Capital_Extension",
  },
  {
    projectName: "Dark-Mode",
    projectImage: "Dark-Mode/img/img_dark.jpeg",
    projectUrl: "Dark-Mode/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dark-Mode",
  },
  {
    projectName: "Github Extension",
    projectImage: "Github-Extension/logo.png",
    projectUrl: "Links-Launcher/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Github-Extension",
  },
  {
    projectName: "links-tabs-saver",
    projectImage: "links-tabs-saver/images/workingimage.png",
    projectUrl: "links-tabs-saver/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/links-tabs-saver",
  },
  {
    projectName: "List The Bookmarks",
    projectImage: "List-The-Bookmarks/List-the-Bookmarks-Images.png",
    projectUrl: "List-The-Bookmarks/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/List-The-Bookmarks",
  },
  {
    projectName: "Maths_addition",
    projectImage: "Maths_addition/images/math.jpg",
    projectUrl: "Maths_addition/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Maths_addition",
  },
  {
    projectName: "Motivation_unlimited",
    projectImage: "Motivation_unlimited/Motivation-Unlimited-Image.png",
    projectUrl: "Motivation_unlimited/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Motivation_unlimited",
  },

  {
    projectName: "News Extension",
    projectImage: "News-Extension/images/img0.JPG",
    projectUrl: "News-Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/News-Extension",
  },
  {
    projectName: "Parential",
    projectImage: "Parential/images/workingimages.jpg",
    projectUrl: "Parential/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Parential",
  },
  {
    projectName: "Pinterest_extension",
    projectImage: "Pinterest_extension/Pinterest-Image.jpg",
    projectUrl: "Pinterest_extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Pinterest_extension",
  },
  {
    projectName: "Pomodoro_Timer",
    projectImage: "Pomodoro_Timer/images/workingimage.png",
    projectUrl: "Pomodoro_Timer/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Pomodoro_Timer",
  },
  {
    projectName: "Poor-Jokes",
    projectImage: "Poor-Jokes/images/workingimages.png",
    projectUrl: "Poor-Jokes/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Poor-Jokes",
  },
  {
    projectName: "Puzzle Game",
    projectImage: "Puzzle-Game/img/img.png",
    projectUrl: "Puzzle-Game/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Puzzle-Game",
  },
  {
    projectName: "QR-Generator",
    projectImage: "QR-Generator/images/workingimages.png",
    projectUrl: "QR-Generator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/QR-Generator",
  },
  {
    projectName: "Stop Watch",
    projectImage: "Stop-Watch/Stop-Watch-Image.png",
    projectUrl: "Stop-Watch/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Stop-Watch",
  },
  {
    projectName: "Time Zone Finder",
    projectImage: "Time-Zone-Finder/TimeZone-Finder-Image.png",
    projectUrl: "Time-Zone-Finder/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Time-Zone-Finder",
  },

  {
    projectName: "Toxicity Classification Extension",
    projectImage: "Toxicity-Classification-Extension/images/img0.JPG",
    projectUrl: "Toxicity-Classification-Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Toxicity-Classification-Extension",
  },
  {
    projectName: "URL-shortener",
    projectImage: "URL-shortener/images/workingimage.png",
    projectUrl: "URL-shortener/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/URL-shortener",
  },
  {
    projectName: "Weather app",
    projectImage: "Weather-app/images/icon.png",
    projectUrl: "Weather-app/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Weather-app",
  },
  {
    projectName: "currency-calc-extension",
    projectImage: "currency-calc-extension/images/workingimage1.png",
    projectUrl: "currency-calc-extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/currency-calc-extension",
  },
  {
    projectName: "grevocab",
    projectImage: "grevocab/src/ScreenShots/GREVocabImg.PNG",
    projectUrl: "grevocab/public/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/grevocab",
  },
  {
    projectName: "programing_Meme",
    projectImage: "programing_Meme/images/workingimage.png",
    projectUrl: "programing_Meme/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/programing_Meme",
  },

  {
    projectName: "rgb to hex convertor",
    projectImage: "rgb-to-hex-convertor/image/2.png",
    projectUrl: "rgb-to-hex-convertor/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/rgb-to-hex-convertor",
  },
  {
    projectName: "Auto Right",
    projectImage: "AutoRight/Auto-right-image.png",
    projectUrl: "AutoRight/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Auto%20Right",
  },
  {
    projectName: "Background Remover",
    projectImage: "BackgroundRemover/logo.png",
    projectUrl: "BackgroundRemover/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Background%20Remover",
  },
  {
    projectName: "Books_Recommendation",
    projectImage: "Books_Recommendation/book.jpg",
    projectUrl: "Books_Recommendation/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Books_Recommendation",
  },
  {
    projectName: "Calculate Age",
    projectImage: "CalculateAge/logo.png",
    projectUrl: "CalculateAge/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Calculate%20Age",
  },
  {
    projectName: "Company Insider",
    projectImage: "CompanyInsider/images/img1.png",
    projectUrl: "Company Insider/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Company%20Insider",
  },
  {
    projectName: "Control Chrome Tabs",
    projectImage: "Control_Chrome_Tabs/img/000001.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Control%20Chrome%20Tabs",
  },
  {
    projectName: "Food_Calorie_Extension",
    projectImage: "Food_Calorie_Extension/bg.jpg",
    projectUrl: "Food_Calorie_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Food_Calorie_Extension",
  },
  {
    projectName: "Movies_Recommendation",
    projectImage: "Movies_Recommendation/movie.jpg",
    projectUrl: "Movies_Recommendation/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Movies_Recommendation",
  },
  {
    projectName: "Music player",
    projectImage: "Musicplayer/musician-349790.jpg",
    projectUrl: "Music player/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Music%20player",
  },
  {
    projectName: "Note Pad",
    projectImage: "NotePad/img/Screenshot-2022-04-22-113100.png",
    projectUrl: "Note Pad/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Note%20Pad",
  },
  {
    projectName: "Phone Checker",
    projectImage: "PhoneChecker/images/img0.JPG",
    projectUrl: "Phone Checker/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Phone%20Checker",
  },
  {
    projectName: "Quick Access Google",
    projectImage: "QuickAccessGoogle/img/quick.png",
    projectUrl: "Quick Access Google/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Quick%20Access%20Google",
  },
  {
    projectName: "Save_environment",
    projectImage: "Save_environment/bg.jpg",
    projectUrl: "Save_environment/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Save_environment",
  },
  {
    projectName: "Twitter Context Menu",
    projectImage: "TwitterContextMenu/img/aok2.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Twitter%20Context%20Menu",
  },
  {
    projectName: "User taking form",
    projectImage: "Usertakingform/User-Taking-Form-image.png",
    projectUrl: "User taking form/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/User%20taking%20form",
  },
  {
    projectName: "VAT_Calculator",
    projectImage: "VAT_Calculator/images/workingImage.jpg",
    projectUrl: "VAT_Calculator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/VAT_Calculator",
  },
  {
    projectName: "Auto Fill",
    projectImage: "AutoFill/autofillimage.png",
    projectUrl: "Auto Fill/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Auto%20Fill",
  },
  {
    projectName: "BMI-Calculator",
    projectImage: "BMI-Calculator/BMIExtentionWorkingImages/BMIextention.png",
    projectUrl: "BMI-Calculator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/BMI-Calculator",
  },
  {
    projectName: "Calculator",
    projectImage: "calculator/Calculator-Image.png",
    projectUrl: "calculator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/calculator",
  },
  {
    projectName: "Calender-2",
    projectImage: "Calender-2/Dynamic-Calender-images/Dynamic-Calender2.png",
    projectUrl: "Calender-2/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Calender-2",
  },
  {
    projectName: "Code-Launcher",
    projectImage: "Code-Launcher/images/Code-Aider-image.png",
    projectUrl: "Code-Launcher/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Code-Launcher",
  },
  {
    projectName: "Coin-toss",
    projectImage: "Coin-toss/Coin-Toss-Images.png",
    projectUrl: "Coin-toss/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Coin-toss",
  },
  {
    projectName: "Color Picker",
    projectImage: "ColorPicker/color-picker-image.png",
    projectUrl: "Color Picker/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Color%20Picker",
  },
  {
    projectName: "Competitive-Trainer",
    projectImage: "Competitive-Trainer/Competitive-Trainer-Image.png",
    projectUrl: "Competitive-Trainer/html/leetcode.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Competitive-Trainer",
  },
  {
    projectName: "Cookie Editor",
    projectImage: "CookieEditor/img/sscookie.png",
    projectUrl: "Cookie Editor/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Cookie%20Editor",
  },
  {
    projectName: "Countdown-timer",
    projectImage: "Countdown-timer/CountDown-Timer-Image.png",
    projectUrl: "Countdown-timer/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Countdown-timer",
  },
  {
    projectName: "Decimal_Hexadecimal_Converter",
    projectImage:
      "Decimal_Hexadecimal_Converter/Decimal-Hexadecimal-Convertor-image.png",
    projectUrl: "Decimal_Hexadecimal_Converter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Decimal_Hexadecimal_Converter",
  },
  {
    projectName: "Facts_Extension",
    projectImage: "Facts_Extension/bg.jpg",
    projectUrl: "Facts_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Facts_Extension",
  },
  {
    projectName: "File Counter",
    projectImage: "Filecounter/img/ssfilecount.png",
    projectUrl: "File counter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/File%20counter",
  },
  {
    projectName: "GK_Quiz",
    projectImage: "GK_Quiz/bg.png",
    projectUrl: "GK_Quiz/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/GK_Quiz",
  },
  {
    projectName: "Guess_Cartoon",
    projectImage: "Guess_Cartoon/Guess-cartoon-image.png",
    projectUrl: "Guess_Cartoon/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Guess_Cartoon",
  },
  {
    projectName: "Height-Conversion-tool",
    projectImage: "Height-Conversion-tool/Height-Conversion-Tool-Image.png",
    projectUrl: "Height-Conversion-tool/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Height-Conversion-tool",
  },
  {
    projectName: "IT_Income_Tax_Calculator",
    projectImage: "IT_Income_Tax_Calculator/IT-IncomeTax-cal-Image.png",
    projectUrl: "IT_Income_Tax_Calculator/it.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/IT_Income_Tax_Calculator",
  },
  {
    projectName: "Links-Launcher",
    projectImage: "Links-Launcher/Links-Launcher-Image.png",
    projectUrl: "Links-Launcher/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Links-Launcher",
  },
  {
    projectName: "Loan-Calculator",
    projectImage: "Loan-calculator/Loan-Cal-Image.png",
    projectUrl: "Loan-calculator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Loan-calculator",
  },
  {
    projectName: "Markdown Preview",
    projectImage: "MarkdownPreview/markdown-preview-image.png",
    projectUrl: "Markdown Preview/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Markdown%20Preview",
  },
  {
    projectName: "Recipe Extension",
    projectImage: "RecipeExtension/images/img0.jpg",
    projectUrl: "Recipe Extension/images/img0.JPG",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Recipe%20Extension",
  },
  {
    projectName: "Riddle_Extension",
    projectImage: "Riddle_Extension/bg.png",
    projectUrl: "Riddle_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Riddle_Extension",
  },
  {
    projectName: "Smartphone Call",
    projectImage: "SmartphoneCall/logo.png",
    projectUrl: "Smartphone Call/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Smartphone%20Call",
  },
  {
    projectName: "Speech Recognition",
    projectImage: "SpeechRecognition/img/ss2speech.png",
    projectUrl: "Speech Recognition/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Speech%20Recognition",
  },
  {
    projectName: "Text To Speech",
    projectImage: "TextToSpeech/preview1.jpg",
    projectUrl: "Text To Speech/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Text%20To%20Speech",
  },
  {
    projectName: "TIC-TAC-TOE",
    projectImage: "TIC-TAC-TOE/TICTACTOE-Image.png",
    projectUrl: "TIC-TAC-TOE/double.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/TIC-TAC-TOE",
  },
  {
    projectName: "To-Do-Extension",
    projectImage: "To-Do-Extension/images/workingimage.png",
    projectUrl: "To-Do-Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/To-Do-Extension",
  },
  {
    projectName: "Translator",
    projectImage: "Translator/img/Screenshot-2022-04-29-222446.png",
    projectUrl: "Translator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Translator",
  },
  {
    projectName: "Vocabulary Extension",
    projectImage: "VocabularyExtension/bg.jpg",
    projectUrl: "Vocabulary Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Vocabulary%20Extension",
  },
  {
    projectName: "Weight conversion tool",
    projectImage: "Weightconversiontool/Weight-Convertor-Image.png",
    projectUrl: "Weight conversion tool/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Weight%20conversion%20tool",
  },
  {
    projectName: "Wiki Search",
    projectImage: "WikiSearch/wiki-search-image.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Wiki%20Search",
  },
  {
    projectName: "Window_Remover",
    projectImage: "Window_Remover/img/winR.png",
    projectUrl: "Window_Remover/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Window_Remover",
  },

  {
    projectName: "Youtube Skip Ad",
    projectImage: "YoutubeSkipAd/skip.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Youtube%20Skip%20Ad",
  },
  {
    projectName: "Youtube Save",
    projectImage: "YoutubeSave/logo.png",
    projectUrl: "Youtube Save/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Youtube%20Save",
  },
  {
    projectName: "Youtube Playlist Duration",
    projectImage: "YoutubePlaylistDuration/logo.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Youtube%20Playlist%20Duration",
  },
  {
    projectName: "Word_Counter",
    projectImage: "Word_Counter/word.png",
    projectUrl: "Word_Counter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Word_Counter",
  },
  {
    projectName: "Word Typing Game",
    projectImage: "WordTypingGame/logo.png",
    projectUrl: "Word Typing Game/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Word%20Typing%20Game",
  },
  {
    projectName: "Web IDE Github",
    projectImage: "WebIDEGithub/img/icon128.png",
    projectUrl: "Web IDE Github/html/options.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Web%20IDE%20Github",
  },
  {
    projectName: "WaterToDrink",
    projectImage: "WaterToDrink/cover.png",
    projectUrl: "WaterToDrink/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/WaterToDrink",
  },
  {
    projectName: "Voice Selection",
    projectImage: "VoiceSelection/SpeakSel16.png",
    projectUrl: "Voice Selection/options.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Voice%20Selection",
  },
  {
    projectName: "Type Color Change",
    projectImage: "TypeColorChange/type.png",
    projectUrl: "Type Color Change/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Type%20Color%20Change",
  },
  {
    projectName: "Today in History",
    projectImage: "TodayinHistory/icon.jpeg",
    projectUrl: "Today in History/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Today%20in%20History",
  },
  {
    projectName: "Tip Calculator",
    projectImage: "TipCalculator/images.png",
    projectUrl: "Tip Calculator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Tip%20Calculator",
  },
  {
    projectName: "step-progress-bar",
    projectImage: "",
    projectUrl: "step-progress-bar/index.html",
    projectDownload: "",
  },
  {
    projectName: "Spotify_Clone",
    projectImage: "Spotify_Clone/bg.jpg",
    projectUrl: "Spotify_Clone/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Spotify_Clone",
  },
  {
    projectName: "Sports_Tracker",
    projectImage: "Sports_Tracker/logo.png",
    projectUrl: "Sports_Tracker/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Sports_Tracker",
  },
  {
    projectName: "Snake_Game",
    projectImage: "Snake_Game/bg.jpg",
    projectUrl: "Snake_Game/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Snake_Game",
  },
  {
    projectName: "Sketchify",
    projectImage: "Sketchify/icon128.png",
    projectUrl: "Sketchify/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Sketchify",
  },
  {
    projectName: "Roots_Quadratic_Eqn",
    projectImage: "Roots_Quadratic_Eqn/roots.png",
    projectUrl: "Roots_Quadratic_Eqn/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Roots_Quadratic_Eqn",
  },
  {
    projectName: "Random Anime Generator",
    projectImage: "RandomAnimeGenerator/preview.jpg",
    projectUrl: "Random Anime Generator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Random%20Anime%20Generator",
  },
  {
    projectName: "Quotes_Extension",
    projectImage: "Quotes_Extension/bg.jpg",
    projectUrl: "Quotes_Extensionpopup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Quotes_Extension",
  },
  {
    projectName: "Profile-statistics",
    projectImage: "Profile-statistics/profile.png",
    projectUrl: "Profile-statistics/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Profile-statistics",
  },
  {
    projectName: "Paragarph Generator",
    projectImage: "ParagrphGenerator/logo.png",
    projectUrl: "Paragrph Generator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Paragrph%20Generator",
  },
  {
    projectName: "Moving_Car",
    projectImage: "Moving_Car/background.jpg",
    projectUrl: "Moving_Car/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Moving_Car",
  },
  {
    projectName: "Meditation-extension",
    projectImage: "Meditation-extension/images/forest.jpg",
    projectUrl: "Meditation-extension/main.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Meditation-extension",
  },
  {
    projectName: "Live CSS Style Editor",
    projectImage: "LiveCSSStyleEditor/icons/icon-64.png",
    projectUrl: "Live CSS Style Editor/external-editor.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Live%20CSS%20Style%20Editor",
  },
  {
    projectName: "Library_Website",
    projectImage: "Library_Website/nn.png",
    projectUrl: "Library_Website/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Library_Website",
  },
  {
    projectName: "JSON File Formatter",
    projectImage: "JSONFileFormatter/logo32.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/JSON%20File%20Formatter",
  },
  {
    projectName: "Guess_Emoji",
    projectImage: "Guess_Emoji/images/1.jpg",
    projectUrl: "Guess_Emoji/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Guess_Emoji",
  },
  {
    projectName: "Google Drive Saver",
    projectImage: "GoogleDriveSaver/images/driveicon128.png",
    projectUrl: "Google Drive Saver/captureselect.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Google%20Drive%20Saver",
  },
  {
    projectName: "Gmail Analytics",
    projectImage: "GmailAnalytics/gmail_logged_in.png",
    projectUrl: "Gmail Analytics/background.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Gmail%20Analytics",
  },
  {
    projectName: "Github-File_Structure",
    projectImage: "Github-File_Structure/images/40px.png",
    projectUrl: "",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Github-File_Structure",
  },
  {
    projectName: "GDocs Viewer",
    projectImage: "GDocsViewer/img/gdocs-img.png",
    projectUrl: "GDocs Viewer/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/GDocs%20Viewer",
  },
  {
    projectName: "Fahrenheit_Celsius_Converter",
    projectImage: "Fahrenheit_Celsius_Converter/f-to-c.png",
    projectUrl: "Fahrenheit_Celsius_Converter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Fahrenheit_Celsius_Converter",
  },
  {
    projectName: "Emoji-rating",
    projectImage: "Emoji-rating/emoji.png",
    projectUrl: "Emoji-rating/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Emoji-rating",
  },
  {
    projectName: "Dyslexic Help",
    projectImage: "DyslexicHelp/images/readme.png",
    projectUrl: "Dyslexic Help/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dyslexic%20Help",
  },
  {
    projectName: "Dragon_Adventures_Game",
    projectImage: "Dragon_Adventures_Game/bg.png",
    projectUrl: "Dragon_Adventures_Game/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dragon_Adventures_Game",
  },
  {
    projectName: "DIY_extension",
    projectImage: "DIY_extension/images/1.jpg",
    projectUrl: "DIY_extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/DIY_extension",
  },
  {
    projectName: "digital_clock",
    projectImage: "digital_clock/clock.jpg",
    projectUrl: "digital_clock/index.html",
    projectDownload: "",
  },
  {
    projectName: "Dictionary_Extension",
    projectImage: "Dictionary_Extension/dictonary_extension.png",
    projectUrl: "Dictionary_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dictionary_Extension",
  },
  {
    projectName: "Dictionary",
    projectImage: "Dictionary/logo.png",
    projectUrl: "Dictionary/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dictionary",
  },
  {
    projectName: "DevQuery Comment",
    projectImage: "DevQueryComment/logo.png",
    projectUrl: "DevQuery Comment/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/DevQuery%20Comment",
  },
  {
    projectName: "developer-color",
    projectImage: "developer-color/devLogo.png",
    projectUrl: "",
    projectDownload: "",
  },
  {
    projectName: "Cube Game",
    projectImage: "CubeGame/logo.png",
    projectUrl: "Cube Game/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Cube%20Game",
  },
  {
    projectName: "Crypto-Currency",
    projectImage: "Crypto-Currency/preview.png",
    projectUrl: "Crypto-Currency/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Crypto-Currency",
  },
  {
    projectName: "Country_Lang_Extension",
    projectImage: "Country_Lang_Extension/bg.jpg",
    projectUrl: "Country_Lang_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Country_Lang_Extension",
  },
  {
    projectName: "Country_Currency",
    projectImage: "Country_Currency/bg.jpg",
    projectUrl: "Country_Currency/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Country_Currency",
  },
  {
    projectName: "Competitive Coding Contest Reminder",
    projectImage: "CompetitiveCodingContestReminder/logo.png",
    projectUrl: "Competitive Coding Contest Reminder/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Competitive%20Coding%20Contest%20Reminder",
  },
  {
    projectName: "Cheatsheet_Template",
    projectImage: "Cheatsheet_Template/copy.png",
    projectUrl: "Cheatsheet_Template/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Cheatsheet_Template",
  },
  {
    projectName: "Blacklist Website",
    projectImage: "BlacklistWebsite/images/blacklist.PNG",
    projectUrl: "Blacklist Website/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Blacklist%20Website",
  },
  {
    projectName: "Background Generator",
    projectImage: "BackgroundGenerator/bg-generator.png",
    projectUrl: "Background Generator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Background%20Generator",
  },
  {
    projectName: "Analog_Clock",
    projectImage: "Analog_Clock/clock.png",
    projectUrl: "Analog_Clock/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Analog_Clock",
  },
];

var projectDetails = projectData.slice(0);
projectDetails.sort(function (a, b) {
  var x = a.projectName.toLowerCase();
  var y = b.projectName.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
});

window.addEventListener("load", getProjects());

function getProjects() {
  var output = "";
  projectDetails.forEach(
    (data, item) =>
      (output += `
      <div class="aos" data-aos="fade-up" data-aos-once="true">
      <div class="projectCard">
      <a href=${data.projectUrl} class="hoverEffect" target="_blank">
      <img
      class="projectCardImg"
      src=${data.projectImage}
      alt="Project Image"
      /></a>
      <h3 class="projectCardTitle">${data.projectName} </h3>
      <a href=${data.projectDownload} download="extension" target="_blank">
      <button class="btn projectCardDownload" type="button">Download<i class="fa fa-download" style="font-size:24px"></i></button>
      </a>
    </div>
    </div>
    `)
  );
  console.log(output);
  projectContainer.innerHTML = output;
}

// // Search function starts
let searchForm = document.querySelector(".search");
let searchBtn = document.querySelector(".search button");
let searchInput = document.querySelector(".search input");
let searchText = "";

searchInput.addEventListener("change", (e) => {
  searchText = e.target.value;
  display();
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  display();
});

function display() {
  var filterData = [];
  if (searchText.length !== 0) {
    projectData.forEach((obj) => {
      if (obj.projectName.toLowerCase().includes(searchText.toLowerCase())) {
        filterData.push(obj);
      }
    });
  } else {
    filterData = [...projectData];
  }
  let filter = "";
  if (filterData.length === 0) {
    filter = "<h2>No search results...</h2>";
  } else {
    filterData.forEach(
      (data, item) =>
        (filter += `
        <div class="aos" data-aos="fade-up" data-aos-once="true">
        <div class="projectCard">
        <a href=${data.projectUrl} class="hoverEffect" target="_blank">
        <img
        class="projectCardImg"
        src=${data.projectImage}
        alt="Project Image"
        /></a>
        <h3 class="projectCardTitle">${data.projectName} </h3>
        <a href=${data.projectDownload} download="extension" target="_blank">
        <button class="btn projectCardDownload" type="button">Download<i class="fa fa-download" style="font-size:24px"></i></button>
        </a>
      </div>
      </div>
    `)
    );
  }
  projectContainer.innerHTML = filter;
}
