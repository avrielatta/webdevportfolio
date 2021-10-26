const openLanding = () => {
    window.location.href = "/html/landing.html";
};

const closeTitle = () => {
    $(".container").animate({
        width: `${$(".container").width() * 0.1}`,
        height: `${$(".container").height() * 0.1}`
    }, 750, () => {
        $(".container").animate({
            width: `${$(".container").width() * 1000}`,
            height: `${$(".container").height() * 1000}`
        }, 1000, () => {
            $(".container").animate({
                opacity: "-=1"
            }, 1000, () => {
                $(".title").animate({
                    opacity: "-=1"
                }, 1000, () => {
                    $(".title").animate({
                        width: '5%'
                    }, 1000, openLanding());
                });
            });
        });
    });
};

$('.container').click(() => {
    closeTitle();
});