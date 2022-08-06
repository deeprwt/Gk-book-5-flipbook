$(function(){

$('#_idContainer016').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer019').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer040').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer046').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer058').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer061').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer113').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer113').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer122').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#_idContainer125').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});


$('#submit01').bind('touchstart click',function(e){

		$('#page18_con1').text('whale');
		$('#page18_con2').text('snail');
		$('#page18_con3').text('panda');
		$('#page18_con4').text('lion');
		$('#page18_con5').text('gorilla');
		$('#page18_con6').text('hummingbird');
		$('#page18_con7').text('bat');
		$('#page18_con8').text('lobster');

		$(this).css('opacity','0.7');
		$(this).off('click');
		$(this).css('cursor','default');

		$('.p18').each(function(index, val) {
		$(this).css('color','blue');
		$(this).attr('contenteditable', false);
		});
});

$('#submit02').bind('touchstart click',function(e){

if($('#page18_con1').text().trim() == 'WHALE' | $('#page18_con1').text().trim() == 'Whale' | $('#page18_con1').text().trim() == 'whale'){$('#page18_con1').css('color','blue');} else{$('#page18_con1').css('color','red');}		
if($('#page18_con2').text().trim() == 'SNAIL' | $('#page18_con2').text().trim() == 'Snail' | $('#page18_con2').text().trim() == 'snail'){$('#page18_con2').css('color','blue');} else{$('#page18_con2').css('color','red');}
if($('#page18_con3').text().trim() == 'PANDA' | $('#page18_con3').text().trim() == 'Panda' | $('#page18_con3').text().trim() == 'panda'){$('#page18_con3').css('color','blue');} else{$('#page18_con3').css('color','red');}
if($('#page18_con4').text().trim() == 'LION' | $('#page18_con4').text().trim() == 'Lion' | $('#page18_con4').text().trim() == 'lion'){$('#page18_con4').css('color','blue');} else{$('#page18_con4').css('color','red');}
if($('#page18_con5').text().trim() == 'GORILLA' | $('#page18_con5').text().trim() == 'Gorilla' | $('#page18_con5').text().trim() == 'gorilla'){$('#page18_con5').css('color','blue');} else{$('#page18_con5').css('color','red');}
if($('#page18_con6').text().trim() == 'HUMMINGBIRD' | $('#page18_con6').text().trim() == 'Hummingbird' | $('#page18_con6').text().trim() == 'hummingbird'){$('#page18_con6').css('color','blue');} else{$('#page18_con6').css('color','red');}
if($('#page18_con7').text().trim() == 'BAT' | $('#page18_con7').text().trim() == 'Bat' | $('#page18_con7').text().trim() == 'bat'){$('#page18_con7').css('color','blue');} else{$('#page18_con7').css('color','red');}
if($('#page18_con8').text().trim() == 'LOBSTER' | $('#page18_con8').text().trim() == 'Lobster' | $('#page18_con8').text().trim() == 'lobster'){$('#page18_con8').css('color','blue');} else{$('#page18_con8').css('color','red');}

if(($('#page18_con1').text().trim() == 'WHALE' | $('#page18_con1').text().trim() == 'Whale' | $('#page18_con1').text().trim() == 'whale') && ($('#page18_con2').text().trim() == 'SNAIL' | $('#page18_con2').text().trim() == 'Snail' | $('#page18_con2').text().trim() == 'snail') && ($('#page18_con3').text().trim() == 'PANDA' | $('#page18_con3').text().trim() == 'Panda' | $('#page18_con3').text().trim() == 'panda') && ($('#page18_con4').text().trim() == 'LION' | $('#page18_con4').text().trim() == 'Lion' | $('#page18_con4').text().trim() == 'lion') && ($('#page18_con5').text().trim() == 'GORILLA' | $('#page18_con5').text().trim() == 'Gorilla' | $('#page18_con5').text().trim() == 'gorilla') && ($('#page18_con6').text().trim() == 'HUMMINGBIRD' | $('#page18_con6').text().trim() == 'Hummingbird' | $('#page18_con6').text().trim() == 'hummingbird'))

			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p18').attr('contenteditable', false); 
			$('.p18').css('color', 'blue'); 
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

$('#submit03').click(function(){
		$('.p19').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
		$(this).css('opacity','0.7');
});

$('#submit04').click(function(){
if($('#set19_con1').text().trim() == 'F' | $('#set19_con1').text().trim() == 'f' | $('#set19_con1').text().trim() == 'FALSE' | $('#set19_con1').text().trim() == 'False' | $('#set19_con1').text().trim() == 'false'){$('#set19_con1').css('color','blue');} else{$('#set19_con1').css('color','red');}		
if($('#set19_con2').text().trim() == 'T' | $('#set19_con2').text().trim() == 't' | $('#set19_con2').text().trim() == 'TRUE' | $('#set19_con2').text().trim() == 'True' | $('#set19_con2').text().trim() == 'true'){$('#set19_con2').css('color','blue');} else{$('#set19_con2').css('color','red');}
if($('#set19_con3').text().trim() == 'F' | $('#set19_con3').text().trim() == 'f' | $('#set19_con3').text().trim() == 'FALSE' | $('#set19_con3').text().trim() == 'False' | $('#set19_con3').text().trim() == 'false'){$('#set19_con3').css('color','blue');} else{$('#set19_con3').css('color','red');}
if($('#set19_con4').text().trim() == 'T' | $('#set19_con4').text().trim() == 't' | $('#set19_con4').text().trim() == 'TRUE' | $('#set19_con4').text().trim() == 'True' | $('#set19_con4').text().trim() == 'true'){$('#set19_con4').css('color','blue');} else{$('#set19_con4').css('color','red');}
if($('#set19_con5').text().trim() == 'F' | $('#set19_con5').text().trim() == 'f' | $('#set19_con5').text().trim() == 'FALSE' | $('#set19_con5').text().trim() == 'False' | $('#set19_con5').text().trim() == 'false'){$('#set19_con5').css('color','blue');} else{$('#set19_con5').css('color','red');}
if($('#set19_con6').text().trim() == 'F' | $('#set19_con6').text().trim() == 'f' | $('#set19_con6').text().trim() == 'FALSE' | $('#set19_con6').text().trim() == 'False' | $('#set19_con6').text().trim() == 'false'){$('#set19_con6').css('color','blue');} else{$('#set19_con6').css('color','red');}
if($('#set19_con7').text().trim() == 'T' | $('#set19_con7').text().trim() == 't' | $('#set19_con7').text().trim() == 'TRUE' | $('#set19_con7').text().trim() == 'True' | $('#set19_con7').text().trim() == 'true'){$('#set19_con7').css('color','blue');} else{$('#set19_con7').css('color','red');}
if($('#set19_con8').text().trim() == 'T' | $('#set19_con8').text().trim() == 't' | $('#set19_con8').text().trim() == 'TRUE' | $('#set19_con8').text().trim() == 'True' | $('#set19_con8').text().trim() == 'true'){$('#set19_con8').css('color','blue');} else{$('#set19_con8').css('color','red');}

if(($('#set19_con1').text().trim() == 'F' | $('#set19_con1').text().trim() == 'f' | $('#set19_con1').text().trim() == 'FALSE' | $('#set19_con1').text().trim() == 'False' | $('#set19_con1').text().trim() == 'false') && ($('#set19_con2').text().trim() == 'T' | $('#set19_con2').text().trim() == 't' | $('#set19_con2').text().trim() == 'TRUE' | $('#set19_con2').text().trim() == 'True' | $('#set19_con2').text().trim() == 'true') && ($('#set19_con3').text().trim() == 'F' | $('#set19_con3').text().trim() == 'f' | $('#set19_con3').text().trim() == 'FALSE' | $('#set19_con3').text().trim() == 'False' | $('#set19_con3').text().trim() == 'false') && ($('#set19_con4').text().trim() == 'T' | $('#set19_con4').text().trim() == 't' | $('#set19_con4').text().trim() == 'TRUE' | $('#set19_con4').text().trim() == 'True' | $('#set19_con4').text().trim() == 'true') && ($('#set19_con5').text().trim() == 'F' | $('#set19_con5').text().trim() == 'f' | $('#set19_con5').text().trim() == 'FALSE' | $('#set19_con5').text().trim() == 'False' | $('#set19_con5').text().trim() == 'false') && ($('#set19_con6').text().trim() == 'F' | $('#set19_con6').text().trim() == 'f' | $('#set19_con6').text().trim() == 'FALSE' | $('#set19_con6').text().trim() == 'False' | $('#set19_con6').text().trim() == 'false') && ($('#set19_con7').text().trim() == 'T' | $('#set19_con7').text().trim() == 't' | $('#set19_con7').text().trim() == 'TRUE' | $('#set19_con7').text().trim() == 'True' | $('#set19_con7').text().trim() == 'true') && ($('#set19_con8').text().trim() == 'T' | $('#set19_con8').text().trim() == 't' | $('#set19_con8').text().trim() == 'TRUE' | $('#set19_con8').text().trim() == 'True' | $('#set19_con8').text().trim() == 'true'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p19').attr('contenteditable', false); 
			$('.p19').css('color', 'blue'); 
			$('#submit04').off('click');
		}
		else
		{
			$('#submit04').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
});



});