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


dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop('box3','text3');
dragdrop_transformm('box4','text4');
dragdrop('box5','text5');

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
