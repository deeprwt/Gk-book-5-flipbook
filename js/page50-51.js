$(function(){
$('#a_idContainer172').bind('touchstart click',function(e){
video_audio('pops13','video13','audio');
});
$('#video13').on('play',function(e){
	videoon('audio','video13');
});
$('#video13').on('pause',function(e){
	videooff('audio','video13');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video13');
});

$('#a_idContainer084').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});
$('#a_idContainer085').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});
$('#a_idContainer083').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});
$('#a_idContainer169').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});
$('#a_idContainer175').bind('touchstart click',function(e){
for_popup1_v('pops14','pbutton14','video14');
});
$('#a_idContainer178').bind('touchstart click',function(e){
for_popup1_v('pops15','pbutton15','video15');
});
$('#a_idContainer181').bind('touchstart click',function(e){
for_popup1_v('pops16','pbutton16','video16');
});

dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop_transform_page51('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');
dragdrop('box6','text6');

$('#submit03').bind('touchstart click',function(e){
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
