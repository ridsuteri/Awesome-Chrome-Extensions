const generateSTYLES = () => {
  return `<style>
      html {
        background: radial-gradient(68.34% 50% at 50% 50%, #5786b3 0%, #41DEE8 0%, #A22DFF 100%);
        height: 100vh;
        padding: 50px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        background-color: #4CAF50;
        /* Green */
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
    }

    .footer_button {
        background-color: #233585;
        /* Green */
        border: none;
        color: white;
        padding: 10px 22px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
    }

    .ok_button {
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
    }

    .ok_button:hover {
        background-color: #4CAF50;
        color: white;
    }

    .close_button {
        background-color: white;
        color: black;
        border: 2px solid #f44336;
    }

    .close_button:hover {
        background-color: #f44336;
        color: white;
    }
  </style>
    `;
};

const generateHTML = () => {
  let home_page_image = chrome.extension.getURL("images/bhai-kya-kr-rha-h-tu.png");
  let khoon_khol_image = chrome.extension.getURL("images/mera-khoon-khol-rha-hai-ab.png");
  let life_barbad_image = chrome.extension.getURL("images/life-barbad.png");
  let kamal_ka_banda_image = chrome.extension.getURL("images/kamal-ke-bande-ho-yar.png");
  let review_image = chrome.extension.getURL("images/review.png");
  let oh_my_god_image = chrome.extension.getURL("images/oh-my-god.webp");


  return `
    <div id="not_review_screen">
        <img src="` + home_page_image + `" id="home_page_image" />
        <img src="` + life_barbad_image + `" id="khoon_khol_rha_image" style="display: none;" />
        <img src="` + life_barbad_image + `" id="khoon_khol_rha_image" style="display: none;" />
        <img src="` + kamal_ka_banda_image + `" id="kamal_ka_banda_image" style="display: none;" />
        
        <div>
            <button class="button close_button" id="please_button" onclick="home_page_image = document.getElementById('home_page_image');home_page_image.style.display = 'none';khoon_khol_rha_image = document.getElementById('khoon_khol_rha_image');khoon_khol_rha_image.style.display = 'block';please_button = document.getElementById('please_button');ok_button = document.getElementById('ok_button');please_button.style.display = 'none';ok_button.style.display = 'none';please_please_button = document.getElementById('please_please_button');please_please_button.style.display = 'block';">Please open one last
                time 🥺</button>
            <button class="button ok_button" id="ok_button" onclick="home_page_image = document.getElementById('home_page_image');home_page_image.style.display = 'none';kamal_ka_banda_image = document.getElementById('kamal_ka_banda_image');ok_test = document.getElementById('ok_text');please_button = document.getElementById('please_button');ok_button = document.getElementById('ok_button');kamal_ka_banda_image.style.display = 'block';ok_test.style.display = 'block';please_button.style.display = 'none';ok_button.style.display = 'none';">Oh, Sorry sir 😔</button>
            </div>
        <h3 style="color: white;display: none;" id="ok_text">(close the tab now)</h3>
    
        <button class="footer_button" onclick="review = document.getElementById('review_screen');not_review = document.getElementById('not_review_screen');not_review.style.display = 'none';review.style.display = 'block';">Liked the product? Review now in a fun Shark Tank way.</button>
    </div>

    <div id="review_screen" style="display: none;">
        <img src="` + review_image + `" height="600px" width="1000px" style="cursor: hand;" onclick="review = document.getElementById('review_screen');review.style.display = 'none';review_done = document.getElementById('review_done');review_done.style.display = 'block';"/>
    </div>

    <img src="` + oh_my_god_image + `" id="review_done" style="display: none;"/>

     `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML();
    break;
}
