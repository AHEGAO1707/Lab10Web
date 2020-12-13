$(document).ready(function(){
$('header').html('<p>Эта шапка была вставлена с помощью скрипта<p/>');
$('#toggle').dblclick(function(){
$(this).toggleClass('red');
});
$('#hover').mouseenter(function() {
$(this).addClass('red');
});
$('#hover').mouseleave(function() {
$(this).removeClass('red');
});
let textarea = $('textarea');
textarea.click(function() {
$(this).empty();
});
textarea.css('border', 'solid 3px red');
console.log(textarea.attr('style'));
$('#remove').click(function() {
$(this).remove();
});
let text = $('#text');
text.text('. Этот текст был вставлен с помощью скрипта.');
text.append(' Этот доп. текст был также вставлен с помощью скрипта!');
text.prepend('Перед параграфом с помощью скрипта');
text.before('<p>Перед другим параграфом с помощью скрипта<p/>');
text.after('<p>После другого параграфа с помощью скрипта<p/>');
$('#wrap').wrap('<div><div/>');
$('#unwrap').unwrap('<div><div/>');
$('#drag').draggable();
$('#drop').droppable({
drop: function(event, ui) {
$(this).addClass('blueBack').find('p').html('Изменение цвета!');
}
});
$('#accordion').accordion();
});