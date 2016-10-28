$(document).ready(function() {
    
                /*
                * Plugin intialization
                */
                
                var pages = ['Greeting', 'About', 'Leviathan', 'iMessage Commands', 'Information'];//, 'Leviathan', 'Website'];
                
                $('#pagepiling').pagepiling({
                    sectionsColor: Array(pages.length).fill('white'),
                    css3: false,
                    navigation: {
                        'position': 'right',
                           'tooltips': pages
                       },
                    afterRender: function(){
                        $('#pp-nav').addClass('custom-tooltip');
                    },
                    onLeave: function(index, nextIndex, direction) {
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
                
                // Type the greeting
                $(function(){
                    $("#hello").typed({
                        stringsElement: $('#hello-strings'),
                        typeSpeed: 30
                    });
                });
            
            });