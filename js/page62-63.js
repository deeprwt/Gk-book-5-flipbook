$(window).load(function() {
	$('#opt11 .tickboxm,#opt12 .tickboxm,#opt13 .tickboxm,#opt14 .tickboxm,#opt15 .tickboxm').on('click',tick);
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
for_popup1_v('pops12','pbutton12','video12');
});

$('#_idContainer539').bind('touchstart click',function(e){
for_popup1_v('pops13','pbutton13','video13');
});

$('#_idContainer544').bind('touchstart click',function(e){
for_popup1_v('pops14','pbutton14','video14');
});

$('#_idContainer548').bind('touchstart click',function(e){
for_popup1_v('pops15','pbutton15','video15');
});

$('#_idContainer552').bind('touchstart click',function(e){
for_popup1_v('pops16','pbutton16','video16');
});

$('#_idContainer556').bind('touchstart click',function(e){
for_popup1_v('pops17','pbutton17','video17');
});

$('#_idContainer636').bind('touchstart click',function(e){
for_popup1_v('pops18','pbutton18','video18');
});

$('#_idContainer638').bind('touchstart click',function(e){
for_popup1_v('pops19','pbutton19','video19');
});

$('#_idContainer640').bind('touchstart click',function(e){
for_popup1_v('pops20','pbutton20','video20');
});

//$('#_idContainer642').bind('touchstart click',function(e){
//for_popup1_v('pops21','pbutton21','video21');
//});


$('#submit06').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match63').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});

$('#submit04').bind('touchstart click',function(e){
	$(this).css('opacity','0.7');
	$('.t11').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p62_1,.p62_2,.p62_3,.p62_4,.p62_5').each(function(index, val) {
		$(this).off('click');
		 });

});

$('#submit05').click(function(){
	for(var i=11; i<=15; i++)
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
	if($('#opt11').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt12').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt13').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt14').find('.tickboxm.t11.coloured.tickbox_blackm').length == 1 && $('#opt15').find('.tickboxm.1t1.coloured.tickbox_blackm').length == 1)	{
	
				$(this).addClass('showanspg11_2answered');	
				$('#submit05').attr('disabled','disabled');	
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
