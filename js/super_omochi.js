$(function() {
    $('.demo02_trigger').on({
        click: function(event){
            event.preventDefault();
            $('body').toggleClass('toggle_color');
        },
        mouseenter: function(){
            $(this).css('background-color', '#1a1a1a');
        },
        mouseleave: function(){
            $(this).css('background-color', 'transparent');
        }
    });
});
