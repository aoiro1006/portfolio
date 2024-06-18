// document.addEventListener("DOMContentLoaded", function() {
//     const zoom = document.querySelectorAll('.zoom img');
//     const zoomback = document.getElementById('zoomback');
//     const zoomimg = document.getElementById('zoomimg');
//     const zoomtext = document.getElementById('zoomtext');
    
//     zoom.forEach(function(value) {
//         value.addEventListener("click", kakudai);
//     });
    
//     function kakudai(e) {
//         zoomback.style.display = "flex";
//         zoomimg.setAttribute("src", e.target.getAttribute("src"));
//     }
    
//     zoomback.addEventListener("click", modosu);
    
//     function modosu() {
//         zoomback.style.display = "none";
//     }
// });



document.addEventListener("DOMContentLoaded", function() {
    const zoomElements = document.querySelectorAll('.zoom img');
    const zoomBack = document.getElementById('zoomback');
    const zoomImg = document.getElementById('zoomimg');

    zoomElements.forEach(function(img) {
        img.addEventListener("click", function(event) {
            zoomBack.style.display = "flex";
            zoomImg.src = event.target.src;
        });
    });

    zoomBack.addEventListener("click", function() {
        zoomBack.style.display = "none";
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const opOverlay = document.getElementById('opOverlay');
    opOverlay.classList.add('animate-overlay');
});


// const zoom = document.querySelectorAll(".zoom");
// const zoomback = document.getElementById("zoomback");
// const zoomimg = document.getElementById("zoomimg");

// zoom.forEach(function(value) {
//       value.addEventListener("click",kakudai);
//       });

// function kakudai(e) {

// zoomback.style.display = "flex";
// zoomimg.setAttribute("src",e.target.getAttribute("src"));
// }


// zoomback.addEventListener("click",modosu);

// function modosu() {
// zoomback.style.display = "none";
// }
