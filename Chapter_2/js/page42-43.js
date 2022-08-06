$(function(){
dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop_page42('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');
dragdrop('box6','text6');
dragdrop('box7','text7');
dragdrop('box8','text8');
dragdrop('box9','text9');
dragdrop_page42a('box10','text10');

$('#submit01').bind('touchstart click',function(e){
	$('.p42_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$('.p42_input_text1a').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p42').css('cursor','default');
	$('.text_p42').text("");
});

});
