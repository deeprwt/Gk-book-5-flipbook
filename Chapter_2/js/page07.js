$(function(){

$('#_idContainer058').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer061').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});



dragdrop('box1','text5');
dragdrop('box2','text2');
dragdrop('box3','text4');
dragdrop('box4','text3');
dragdrop('box5','text8');
dragdrop('box6','text6');
dragdrop('box7','text10');
dragdrop('box8','text1');
dragdrop('box9','text7');
dragdrop('box10','text9');

$('#submit01').bind('touchstart click',function(e){
	$('.p07_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});


});