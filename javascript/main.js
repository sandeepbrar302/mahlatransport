/*

Social links
Facebook: 
https://www.facebook.com/sharer.php?u=[post-url]


Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]


Linkedin:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]


Whatsapp:
https://api.whatsapp.com/send?text=[post-title] [post-url]

*/





const facebookBtn = document.querySelector(".facebook-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
    let postURL = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi, please check this out, Mahla Transport ");

    facebookBtn.setAttribute("href", `https://www.facebook.com/Mahla-Transport-106619815032807`);
    linkedinBtn.setAttribute("href", `https://www.linkedin.com/company/mahla-transport`);
    whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postURL}`);
}

init();