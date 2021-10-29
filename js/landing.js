// Intro animation (fade-in)
$(() => {
    $('*').animate({
        opacity: "1"
    }, 500);
});

// Page webbing
$('.panel-1').click(() => {
    window.location.href = '/webdevportfolio/html/projects.html';
});

$('.panel-2').click(() => {
    window.location.href = '/webdevportfolio/html/about.html';
});

$('.panel-3').click(() => {
    window.location.href = '/webdevportfolio/html/contact.html';
});

$('.panel-4').click(() => {
    window.location.href = '/webdevportfolio/html/bonus.html';
});