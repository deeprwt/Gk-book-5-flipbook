$(function(){
dragdrop('box11','text11');
dragdrop('box12','text12');
dragdrop('box13','text13');
dragdrop('box14','text14');
dragdrop('box15','text15');
dragdrop('box16','text16');
dragdrop('box17','text17');
dragdrop('box18','text18');
dragdrop('box19','text19');
dragdrop('box20','text20');
dragdrop('box21','text21');
dragdrop('box22','text22');

$('#submit01').bind('touchstart click',function(e){
	$('.p26_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p26').css('cursor','default');
	$('.text_p26').text("");
});

});
