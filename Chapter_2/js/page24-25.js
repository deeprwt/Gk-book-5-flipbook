$(function(){

$('#_idContainer142').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer145').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer150').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer165').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer188').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer183').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer192').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer195').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});



dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');
dragdrop('box6','text6');
dragdrop('box7','text7');
dragdrop('box8','text8');
$('#submit01').bind('touchstart click',function(e){
	$('.p24_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$('.text_24').css('display','block');
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p24').css('cursor','default');
	$('.text_p24').text("");
});

});
