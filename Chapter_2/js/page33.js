$(window).load(function() {
	$('#opt1 .tickboxm,#opt2 .tickboxm,#opt3 .tickboxm,#opt4 .tickboxm,#opt5 .tickboxm,#opt6 .tickboxm,#opt7 .tickboxm,#opt8 .tickboxm,#opt9 .tickboxm').on('click',tick);
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
$('#_idContainer390').bind('touchstart click',function(e){
video_audio('pops3','video3','audio');
});
$('#video3').on('play',function(e){
	videoon('audio','video3');
});
$('#video3').on('pause',function(e){
	videooff('audio','video3');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video3');
});

$('#_idContainer357').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer361').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});




$('#submit03').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
	//$('.t1').removeClass('tickbox').addClass('tickbox_rightm');
	$('.t1').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p33_1,.p33_2,.p33_3,.p33_4,.p33_5,.p33_6,.p33_7,.p33_8,.p33_9').each(function(index, val) {
		$(this).off('click');
		 });

});
$('#submit04').click(function(){
	for(var i=1; i<=9; i++)
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

	if($('#opt1').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt6').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt7').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt8').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt9').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)	{
	
				$(this).addClass('showanspg11_2answered');	
				$('#submit04').attr('disabled','disabled');	
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
