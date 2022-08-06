$(function(){
$('#_idContainer083').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer090').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer097').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer105').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

dragdrop1('box11','text11');
dragdrop1('box12','text12');
dragdrop1('box13','text13');
dragdrop1('box14','text14');
dragdrop1('box15','text15');
dragdrop1('box16','text16');

$('#submit02').bind('touchstart click',function(e){
	$('.p49_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p49').css('cursor','default');
	$('.text_p49').text("");
});

});
