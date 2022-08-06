$(window).load(function() {
	$('#opt1 .tickboxm,#opt2 .tickboxm,#opt3 .tickboxm,#opt4 .tickboxm,#opt5 .tickboxm').on('click',tick);
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

$('#_idContainer541').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer539').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer544').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer548').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer552').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer556').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer636').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer638').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#_idContainer640').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});

$('#_idContainer642').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});


$('#submit03').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match63').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});

$('#submit01').bind('touchstart click',function(e){
	$(this).css('opacity','0.7');
	$('.t1').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p62_1,.p62_2,.p62_3,.p62_4,.p62_5').each(function(index, val) {
		$(this).off('click');
		 });

});

$('#submit02').click(function(){
	for(var i=1; i<=5; i++)
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
	if($('#opt1').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)	{
	
				$(this).addClass('showanspg11_2answered');	
				$('#submit02').attr('disabled','disabled');	
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
