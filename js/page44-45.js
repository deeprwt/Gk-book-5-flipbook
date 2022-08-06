$(function(){

$('#_idContainer262').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer240').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer233').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer226').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer298').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer313').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('.position_44_1').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer320').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});


dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop('box3','text3');
dragdrop('box4','text4');
$('#submit03').bind('touchstart click',function(e){
	$('.p44_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});
$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p44').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit02').click(function(){
if($('#set44_con1').text().trim() == 'c'){$('#set44_con1').css('color','blue');} else{$('#set44_con1').css('color','red');}		
if($('#set44_con2').text().trim() == 'd'){$('#set44_con2').css('color','blue');} else{$('#set44_con2').css('color','red');}
if($('#set44_con3').text().trim() == 'a'){$('#set44_con3').css('color','blue');} else{$('#set44_con3').css('color','red');}
if($('#set44_con4').text().trim() == 'e'){$('#set44_con4').css('color','blue');} else{$('#set44_con4').css('color','red');}
if($('#set44_con5').text().trim() == 'f'){$('#set44_con5').css('color','blue');} else{$('#set44_con5').css('color','red');}
if($('#set44_con6').text().trim() == 'b'){$('#set44_con6').css('color','blue');} else{$('#set44_con6').css('color','red');}


if(($('#set44_con1').text().trim() == 'c') && ($('#set44_con2').text().trim() == 'd') && ($('#set44_con3').text().trim() == 'a') && ($('#set44_con4').text().trim() == 'e') && ($('#set44_con5').text().trim() == 'f') && ($('#set44_con6').text().trim() == 'b'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p44').attr('contenteditable', false); 
			$('.p44').css('color', 'blue'); 
			$('#submit02').off('click');
		}
		else
		{
			$('#submit02').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
	});


$('#submit04').click(function(){
	$(this).css('opacity','0.5');
		$('.p45').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit05').click(function(){
if($('#set45_con1').text().trim() == 'e'){$('#set45_con1').css('color','blue');} else{$('#set45_con1').css('color','red');}		
if($('#set45_con2').text().trim() == 'b'){$('#set45_con2').css('color','blue');} else{$('#set45_con2').css('color','red');}
if($('#set45_con3').text().trim() == 'a'){$('#set45_con3').css('color','blue');} else{$('#set45_con3').css('color','red');}
if($('#set45_con4').text().trim() == 'f'){$('#set45_con4').css('color','blue');} else{$('#set45_con4').css('color','red');}
if($('#set45_con5').text().trim() == 'd'){$('#set45_con5').css('color','blue');} else{$('#set45_con5').css('color','red');}
if($('#set45_con6').text().trim() == 'c'){$('#set45_con6').css('color','blue');} else{$('#set45_con6').css('color','red');}


if(($('#set45_con1').text().trim() == 'e') && ($('#set45_con2').text().trim() == 'b') && ($('#set45_con3').text().trim() == 'a') && ($('#set45_con4').text().trim() == 'f') && ($('#set45_con5').text().trim() == 'd') && ($('#set45_con6').text().trim() == 'c'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p45').attr('contenteditable', false); 
			$('.p45').css('color', 'blue'); 
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
