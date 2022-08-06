$(function(){

/*$('#_idContainer142').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});*/

$('#_idContainer145').bind('touchstart click',function(e){
for_popup1_v('pops13','pbutton13','video13');
});

$('#_idContainer150').bind('touchstart click',function(e){
for_popup1_v('pops14','pbutton14','video14');
});

$('#_idContainer165').bind('touchstart click',function(e){
for_popup1_v('pops15','pbutton15','video15');
});

$('#_idContainer188').bind('touchstart click',function(e){
for_popup1_v('pops16','pbutton16','video16');
});

$('#_idContainer183').bind('touchstart click',function(e){
for_popup1_v('pops17','pbutton17','video17');
});

$('#_idContainer192').bind('touchstart click',function(e){
for_popup1_v('pops18','pbutton18','video18');
});

$('#_idContainer195').bind('touchstart click',function(e){
for_popup1_v('pops19','pbutton19','video19');
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
