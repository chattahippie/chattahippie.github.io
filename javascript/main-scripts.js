jQuery(document).ready(function ($) {

    /*
    * Plugin intialization
    */

    var pages = ['Greeting'];

    $('#pagepiling').pagepiling({
        sectionsColor: ['white'],
        css3: false,
        navigation: {
            'position': 'right',
            'tooltips': pages
        },
        afterRender: function () {
            $('#pp-nav').addClass('custom-tooltip');
        },
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == pages.length) {
                $("#arrow").animate({
                    bottom: "-10%"
                });
            }
            if (index == pages.length) {
                $("#arrow").animate({
                    bottom: "0"
                });
            }
        }
    });

    $('#arrow').click(function () {
        $.fn.pagepiling.moveSectionDown();
    });

    //this is used for the video effect only
    if ($('.cd-bg-video-wrapper').length > 0) {
        var videoWrapper = $('.cd-bg-video-wrapper'),
            mq = window.getComputedStyle(document.querySelector('.cd-bg-video-wrapper'), '::after').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
        if (mq == 'desktop') {
            // we are not on a mobile device 
            var videoUrl = videoWrapper.data('video'),
                video = $('<video loop><source src="' + videoUrl + '.mp4" type="video/mp4" /><source src="' + videoUrl + '.webm" type="video/webm" /></video>');
            video.appendTo(videoWrapper);
            video.get(0).play();
        }
    }

});