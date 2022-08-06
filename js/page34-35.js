$(window).load(function() {
	$('#opt11 .tickboxm,#opt12 .tickboxm,#opt13 .tickboxm,#opt14 .tickboxm,#opt15 .tickboxm,#opt16 .tickboxm,#opt17 .tickboxm,#opt18 .tickboxm,#opt19 .tickboxm').on('click',tick);
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

$('#a_idContainer141').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#a_idContainer149').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#a_idContainer311').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#a_idContainer348').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#a_idContainer278').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#a_idContainer295').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});

$('#a_idContainer327').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});


$('#a_idContainer303').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});

$('#a_idContainer357').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});

$('#a_idContainer319').bind('touchstart click',function(e){
for_popup1_v('pops13','pbutton13','video13');
});


$('#submit07').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match35').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1_25').off("click");
});

$('#submit05').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
	//$('.t1').removeClass('tickbox').addClass('tickbox_rightm');
	$('.t11').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p34_1,.p34_2,.p34_3,.p34_4,.p34_5,.p34_6,.p34_7,.p34_8,.p34_9').each(function(index, val) {
		$(this).off('click');
		 });

});
$('#submit06').click(function(){
	for(var i=11; i<=19; i++)
	{
	if($('#opt'+i).find('.tickboxm.t11.coloured.tickbox_blackm').length == 1)
	{
			
			$('#opt'+i+' .tickboxm.t11').addClass('tickbox_rightm');
			$('#opt'+i).off('click');
	}
	else if($('#opt'+i).find('.tickboxm.w11.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w11').addClass('tickbox_wrongm');
	}
	else if($('#opt'+i).find('.tickboxm.w12.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w12').addClass('tickbox_wrongm');
	}
	else if($('#opt'+i).find('.tickboxm.w13.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w13').addClass('tickbox_wrongm');
	}

}

	if($('#opt1').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt6').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt7').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt8').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt9').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1)	{
	
				$(this).addClass('showanspg11_2answered');	
				$('#submit06').attr('disabled','disabled');	
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
