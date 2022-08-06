$(function(){

$('#_idContainer022').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer028').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer040').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer046').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});


dragdrop('box21','text21');
dragdrop('box22','text22');
dragdrop('box23','text23');
dragdrop_transformm('box24','text24');
dragdrop('box25','text25');

$('#submit01').bind('touchstart click',function(e){
	$('.p48_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p48').css('cursor','default');
	$('.text_p48').text("");
});

});
