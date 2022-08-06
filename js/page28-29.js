$(function(){

$('#a_idContainer061').bind('touchstart click',function(e){
for_popup1_v('pops1a','pbutton1a','video1a');
});

$('#a_idContainer101').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#a_idContainer071').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#a_idContainer091').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#a_idContainer111').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

/*$('#a_idContainer153').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});*/

$('#a_idContainer171').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

/*$('#a_idContainer197').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});
*/



dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');

dragdrop1('box6','text6');
dragdrop1('box7','text7');
dragdrop1('box8','text8');
dragdrop1('box9','text9');

$('#submit03').bind('touchstart click',function(e){
	$('.p29_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});
$('#submit04').bind('touchstart click',function(e){
	$('.p29_input_text2').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p29').css('cursor','default');
	$('.text_p29').text("");
});
$('#submit05').click(function(){
	$(this).css('opacity','0.5');
		$('.p28').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit02').click(function(){
if($('#set28_con1').text().trim() == 'C' | $('#set28_con1').text().trim() == 'c'){$('#set28_con1').css('color','blue');} else{$('#set28_con1').css('color','red');}		
if($('#set28_con2').text().trim() == 'F' | $('#set28_con2').text().trim() == 'f'){$('#set28_con2').css('color','blue');} else{$('#set28_con2').css('color','red');}
if($('#set28_con3').text().trim() == 'A' | $('#set28_con3').text().trim() == 'a'){$('#set28_con3').css('color','blue');} else{$('#set28_con3').css('color','red');}
if($('#set28_con4').text().trim() == 'E' | $('#set28_con4').text().trim() == 'e'){$('#set28_con4').css('color','blue');} else{$('#set28_con4').css('color','red');}
if($('#set28_con5').text().trim() == 'B' | $('#set28_con5').text().trim() == 'b'){$('#set28_con5').css('color','blue');} else{$('#set28_con5').css('color','red');}
if($('#set28_con6').text().trim() == 'D' | $('#set28_con6').text().trim() == 'd'){$('#set28_con6').css('color','blue');} else{$('#set28_con6').css('color','red');}
if(($('#set28_con1').text().trim() == 'C' | $('#set28_con1').text().trim() == 'c') && ($('#set28_con2').text().trim() == 'F' | $('#set28_con2').text().trim() == 'f') && ($('#set28_con3').text().trim() == 'A' | $('#set28_con3').text().trim() == 'a') && ($('#set28_con4').text().trim() == 'E' | $('#set28_con4').text().trim() == 'e') && ($('#set28_con5').text().trim() == 'B' | $('#set28_con5').text().trim() == 'b') && ($('#set28_con6').text().trim() == 'D' | $('#set28_con6').text().trim() == 'd'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p28').attr('contenteditable', false); 
			$('.p28').css('color', 'blue'); 
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


});
