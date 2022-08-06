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

$('#_idContainer404').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer448').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer449').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer450').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});



$('#submit04').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
	//$('.t1').removeClass('tickbox').addClass('tickbox_rightm');
	$('.t1').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p11_1,.p11_2,.p11_3,.p11_4,.p11_5,.p11_6').each(function(index, val) {
		$(this).off('click');
		 });

});

$('#submit05').click(function(){
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

	if($('#opt1').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt6').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)	{
	
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
