$(window).load(function() {
	$('#opt1 .tickboxm,#opt2 .tickboxm,#opt3 .tickboxm,#opt4 .tickboxm,#opt5 .tickboxm,#opt6 .tickboxm').on('click',tick);
});

function tick() {
	$(this).toggleClass('coloured');
	$(this).toggleClass('tickbox_blackm');
	$(this).parent().prevAll().find('.tickboxm').removeClass('tickbox_blackm');
	$(this).parent().nextAll().find('.tickboxm').removeClass('tickbox_blackm');
	$(this).parent().prevAll().find('.tickboxm').removeClass('tickbox_wrongm');
	$(this).parent().nextAll().find('.tickboxm').removeClass('tickbox_wrongm');
	}

$(function(){

$('#_idContainer017').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});


$('#_idContainer021').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer025').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer019').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer022').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer023').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer183').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#_idContainer354').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});

$('#_idContainer240').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});

$('#_idContainer411').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});

dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');
dragdrop('box6','text6');
dragdrop('box7','text7');
dragdrop('box8','text8');
dragdrop('box9','text9');
dragdrop('box10','text10');
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
dragdrop('box23','text23');
dragdrop('box24','text24');
dragdrop('box25','text25');
dragdrop('box26','text26');
dragdrop('box27','text27');

$('#submit01').bind('touchstart click',function(e){
	$('.p60_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p60').css('cursor','default');
	$('.text_p60').text("");
});

$('#submit02').bind('touchstart click',function(e){
			$(this).css('cursor','default');
		$('.text_24').css('display','block');
		$('.p55').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit03').click(function(){
	for(var i=1; i<=6; i++)
	{
	if($('#opt'+i).find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)
	{
			
			$('#opt'+i+' .tickboxm.t1').addClass('tickbox_rightm');
			$('#opt'+i).off('click');
	}
	else if($('#opt'+i).find('.tickboxm.w1.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w1').addClass('tickbox_wrongm');
	}
	else if($('#opt'+i).find('.tickboxm.w2.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w2').addClass('tickbox_wrongm');
	}
	else if($('#opt'+i).find('.tickboxm.w3.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w3').addClass('tickbox_wrongm');
	}

}
	if($('#opt1').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1  && $('#opt6').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)	{
				$(this).addClass('showanspg11_2answered');	
				$('#submit03').attr('disabled','disabled');	
				$('.tickboxm').off('click');
}
else
{
				$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
            
}
});
});
