

$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed')
});
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text'").on('keypress', function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><img src="Assets/fontawesome-free-6.1.1-desktop/svgs/regular/trash-can.svg" alt=""> </span> ' + todoText +'</li>')
    }
});
$('h1 img').on('click', function(){
    $('input').toggleClass('inputBtn')
});
$('button').on('click', function(){
    $('li').fadeOut(400, function(){
        $(this).remove();
    });
})