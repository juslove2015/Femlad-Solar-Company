let toggleBtn = document.querySelector('.navToggle');
let navLinks = document.querySelector('.small-scrn-nav-links');

toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show-links")
})

// mission and vision starts here 

const btns = document.querySelectorAll('.tab-btn');
const visionMission = document.querySelector('.vision-mission-article');
const contents = document.querySelectorAll('.content');

visionMission.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {

        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
 
        // hide all the articles
        contents.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
// mission and vision ends here 

// Animate on scroll start here 

let sections = document.querySelectorAll('section');

window.onscroll =  () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate')
        }

    });
};