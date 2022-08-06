$(function(){
$('#_idContainer172').bind('touchstart click',function(e){
video_audio('pops5','video5','audio');
});
$('#video5').on('play',function(e){
	videoon('audio','video5');
});
$('#video5').on('pause',function(e){
	videooff('audio','video5');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video5');
});

$('#_idContainer084').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer085').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer083').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer169').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer175').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer178').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer181').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop_transform_page51('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');
dragdrop('box6','text6');

$('#submit01').bind('touchstart click',function(e){
	$('.p51_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$('.p51_input_text1a').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p51').css('cursor','default');
	$('.text_p51').text("");
});

});
