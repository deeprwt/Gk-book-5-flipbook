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


$('#_idContainer091').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer124').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer254').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer267').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer268').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer269').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#submit01').bind('touchstart click',function(e){
	$('.t1').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p08_1,.p08_2,.p08_3,.p08_4,.p08_5,.p08_6').each(function(index, val) {
		$(this).off('click');
		 });
	$(this).css('opacity','0.7');

});
$('#submit02').click(function(){
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

	if($('#opt1').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt6').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)	{
	
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


dragdrop('box1','text1');
dragdrop('box2','text4');
dragdrop('box3','text2');
dragdrop('box4','text3');

$('#submit03').bind('touchstart click',function(e){
	$('.p09_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});

$('#submit04').click(function(){
		$('.p09').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
		 $(this).css('opacity','0.7');
});

$('#submit05').click(function(){
if($('#set09_con1').text().trim() == 'f' | $('#set09_con1').text().trim() == 'F' | $('#set09_con1').text().trim() == 'False' | $('#set09_con1').text().trim() == 'FALSE' | $('#set09_con1').text().trim() == 'false'){$('#set09_con1').css('color','blue');} else{$('#set09_con1').css('color','red');}
if($('#set09_con2').text().trim() == 'f' | $('#set09_con2').text().trim() == 'F' | $('#set09_con2').text().trim() == 'False' | $('#set09_con2').text().trim() == 'FALSE' | $('#set09_con2').text().trim() == 'false'){$('#set09_con2').css('color','blue');} else{$('#set09_con2').css('color','red');}
if($('#set09_con3').text().trim() == 't' | $('#set09_con3').text().trim() == 'T' | $('#set09_con3').text().trim() == 'True' | $('#set09_con3').text().trim() == 'TRUE' | $('#set09_con3').text().trim() == 'true'){$('#set09_con3').css('color','blue');} else{$('#set09_con3').css('color','red');}
if($('#set09_con4').text().trim() == 't' | $('#set09_con4').text().trim() == 'T' | $('#set09_con4').text().trim() == 'True' | $('#set09_con4').text().trim() == 'TRUE' | $('#set09_con4').text().trim() == 'true'){$('#set09_con4').css('color','blue');} else{$('#set09_con4').css('color','red');}

if(($('#set09_con1').text().trim() == 'f' | $('#set09_con1').text().trim() == 'F' | $('#set09_con1').text().trim() == 'False' | $('#set09_con1').text().trim() == 'FALSE' | $('#set09_con1').text().trim() == 'false') && ($('#set09_con2').text().trim() == 'f' | $('#set09_con2').text().trim() == 'F' | $('#set09_con2').text().trim() == 'False' | $('#set09_con2').text().trim() == 'FALSE' | $('#set09_con2').text().trim() == 'false') && ($('#set09_con3').text().trim() == 't' | $('#set09_con3').text().trim() == 'T' | $('#set09_con3').text().trim() == 'True' | $('#set09_con3').text().trim() == 'TRUE' | $('#set09_con3').text().trim() == 'true') && ($('#set09_con4').text().trim() == 't' | $('#set09_con4').text().trim() == 'T' | $('#set09_con4').text().trim() == 'True' | $('#set09_con4').text().trim() == 'TRUE' | $('#set09_con4').text().trim() == 'true'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p09').attr('contenteditable', false); 
			$('.p09').css('color', 'blue'); 
			$('#submit05').off('click');
		}
		else
		{
			$('#submit05').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
});


});