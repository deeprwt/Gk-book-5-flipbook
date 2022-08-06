$(function(){

$('.position_12_1').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('.position_12_2').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('.position_12_3').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('.position_12_4').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('.position_12_5').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('.position_12_6').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer113').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});




$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p12').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});

$('#submit02').click(function(){
if($('#set12_con1').text().trim() == 'F' | $('#set12_con1').text().trim() == 'f' | $('#set12_con1').text().trim() == 'FALSE' | $('#set12_con1').text().trim() == 'False' | $('#set12_con1').text().trim() == 'false'){$('#set12_con1').css('color','blue');} else{$('#set12_con1').css('color','red');}		
if($('#set12_con2').text().trim() == 'T' | $('#set12_con2').text().trim() == 't' | $('#set12_con2').text().trim() == 'TRUE' | $('#set12_con2').text().trim() == 'True' | $('#set12_con2').text().trim() == 'true'){$('#set12_con2').css('color','blue');} else{$('#set12_con2').css('color','red');}
if($('#set12_con3').text().trim() == 'F' | $('#set12_con3').text().trim() == 'f' | $('#set12_con3').text().trim() == 'FALSE' | $('#set12_con3').text().trim() == 'Flase' | $('#set12_con3').text().trim() == 'flase'){$('#set12_con3').css('color','blue');} else{$('#set12_con3').css('color','red');}
if($('#set12_con4').text().trim() == 'F' | $('#set12_con4').text().trim() == 'f' | $('#set12_con4').text().trim() == 'FALSE' | $('#set12_con4').text().trim() == 'False' | $('#set12_con4').text().trim() == 'false'){$('#set12_con4').css('color','blue');} else{$('#set12_con4').css('color','red');}
if($('#set12_con5').text().trim() == 'T' | $('#set12_con5').text().trim() == 't' | $('#set12_con5').text().trim() == 'TRUE' | $('#set12_con5').text().trim() == 'True' | $('#set12_con5').text().trim() == 'true'){$('#set12_con5').css('color','blue');} else{$('#set12_con5').css('color','red');}
if($('#set12_con6').text().trim() == 'F' | $('#set12_con6').text().trim() == 'f' | $('#set12_con6').text().trim() == 'FALSE' | $('#set12_con6').text().trim() == 'Flase' | $('#set12_con6').text().trim() == 'flase'){$('#set12_con6').css('color','blue');} else{$('#set12_con6').css('color','red');}
if($('#set12_con7').text().trim() == 'T' | $('#set12_con7').text().trim() == 't' | $('#set12_con7').text().trim() == 'TRUE' | $('#set12_con7').text().trim() == 'True' | $('#set12_con7').text().trim() == 'true'){$('#set12_con7').css('color','blue');} else{$('#set12_con7').css('color','red');}
if($('#set12_con8').text().trim() == 'F' | $('#set12_con8').text().trim() == 'f' | $('#set12_con8').text().trim() == 'FALSE' | $('#set12_con8').text().trim() == 'Flase' | $('#set12_con8').text().trim() == 'flase'){$('#set12_con8').css('color','blue');} else{$('#set12_con8').css('color','red');}

if(($('#set12_con1').text().trim() == 'F' | $('#set12_con1').text().trim() == 'f' | $('#set12_con1').text().trim() == 'FALSE' | $('#set12_con1').text().trim() == 'False' | $('#set12_con1').text().trim() == 'false') && ($('#set12_con2').text().trim() == 'T' | $('#set12_con2').text().trim() == 't' | $('#set12_con2').text().trim() == 'TRUE' | $('#set12_con2').text().trim() == 'True' | $('#set12_con2').text().trim() == 'true') && ($('#set12_con3').text().trim() == 'F' | $('#set12_con3').text().trim() == 'f' | $('#set12_con3').text().trim() == 'FALSE' | $('#set12_con3').text().trim() == 'False' | $('#set12_con3').text().trim() == 'false') && ($('#set12_con4').text().trim() == 'F' | $('#set12_con4').text().trim() == 'f' | $('#set12_con4').text().trim() == 'FALSE' | $('#set12_con4').text().trim() == 'False' | $('#set12_con4').text().trim() == 'false') && ($('#set12_con5').text().trim() == 'T' | $('#set12_con5').text().trim() == 't' | $('#set12_con5').text().trim() == 'TRUE' | $('#set12_con5').text().trim() == 'True' | $('#set12_con5').text().trim() == 'true') && ($('#set12_con6').text().trim() == 'F' | $('#set12_con6').text().trim() == 'f' | $('#set12_con6').text().trim() == 'FALSE' | $('#set12_con6').text().trim() == 'False' | $('#set12_con6').text().trim() == 'false') && ($('#set12_con7').text().trim() == 'T' | $('#set12_con7').text().trim() == 't' | $('#set12_con7').text().trim() == 'TRUE' | $('#set12_con7').text().trim() == 'True' | $('#set12_con7').text().trim() == 'true') && ($('#set12_con8').text().trim() == 'F' | $('#set12_con8').text().trim() == 'f' | $('#set12_con8').text().trim() == 'FALSE' | $('#set12_con8').text().trim() == 'False' | $('#set12_con8').text().trim() == 'false'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p12').attr('contenteditable', false); 
			$('.p12').css('color', 'blue'); 
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

$('#submit03').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match12').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1_25').off("click");
});

$('#submit04').bind('touchstart click',function(e){

		$('#page13_con1').text('A');
		$('#page13_con2').text('K');
		$('#page13_con3').text('S');
		$('#page13_con4').text('H');
		$('#page13_con5').text('A');
		$('#page13_con6').text('D');
		$('#page13_con7').text('W');
		$('#page13_con8').text('E');
		$('#page13_con9').text('E');
		$('#page13_con10').text('P');

		$('#page13_con11').text('N');
		$('#page13_con12').text('D');
		$('#page13_con13').text('A');
		$('#page13_con14').text('M');
		$('#page13_con15').text('A');
		$('#page13_con16').text('N');

		$('#page13_con17').text('A');
		$('#page13_con18').text('M');
		$('#page13_con19').text('I');
		$('#page13_con20').text('L');
		$('#page13_con21').text('N');
		$('#page13_con22').text('D');
		$('#page13_con23').text('U');

		$('#page13_con24').text('D');
		$('#page13_con25').text('I');
		$('#page13_con26').text('S');
		$('#page13_con27').text('H');
		$('#page13_con28').text('A');

		$('#page13_con29').text('K');
		$('#page13_con30').text('E');
		$('#page13_con31').text('A');
		$('#page13_con32').text('L');
		$('#page13_con33').text('A');

		$('#page13_con34').text('G');
		$('#page13_con35').text('A');

		$('#page13_con36').text('H');
		$('#page13_con37').text('E');
		$('#page13_con38').text('N');
		$('#page13_con39').text('N');
		$('#page13_con40').text('I');

		$(this).css('opacity','0.7');
		$(this).off('click');
		$(this).css('cursor','default');

		$('.p13').each(function(index, val) {
		$(this).css('color','blue');
		$(this).attr('contenteditable', false);
		});
});

$('#submit05').bind('touchstart click',function(e){

if($('#page13_con1').text().trim() == 'a' | $('#page13_con1').text().trim() == 'A'){$('#page13_con1').css('color','blue');} else{$('#page13_con1').css('color','red');}		
if($('#page13_con2').text().trim() == 'k' | $('#page13_con2').text().trim() == 'K'){$('#page13_con2').css('color','blue');} else{$('#page13_con2').css('color','red');}
if($('#page13_con3').text().trim() == 's' | $('#page13_con3').text().trim() == 'S'){$('#page13_con3').css('color','blue');} else{$('#page13_con3').css('color','red');}
   										    										
if($('#page13_con4').text().trim() == 'h' | $('#page13_con4').text().trim() == 'H'){$('#page13_con4').css('color','blue');} else{$('#page13_con4').css('color','red');}
if($('#page13_con5').text().trim() == 'a' | $('#page13_con5').text().trim() == 'A'){$('#page13_con5').css('color','blue');} else{$('#page13_con5').css('color','red');}
if($('#page13_con6').text().trim() == 'd' | $('#page13_con6').text().trim() == 'D'){$('#page13_con6').css('color','blue');} else{$('#page13_con6').css('color','red');}
   										    										
if($('#page13_con7').text().trim() == 'w' | $('#page13_con7').text().trim() == 'W'){$('#page13_con7').css('color','blue');} else{$('#page13_con7').css('color','red');}
if($('#page13_con8').text().trim() == 'e' | $('#page13_con8').text().trim() == 'E'){$('#page13_con8').css('color','blue');} else{$('#page13_con8').css('color','red');}
if($('#page13_con9').text().trim() == 'e' | $('#page13_con9').text().trim() == 'E'){$('#page13_con9').css('color','blue');} else{$('#page13_con9').css('color','red');}
if($('#page13_con10').text().trim() == 'p' | $('#page13_con10').text().trim() == 'P'){$('#page13_con10').css('color','blue');} else{$('#page13_con10').css('color','red');}
	  										 
if($('#page13_con11').text().trim() == 'n' | $('#page13_con11').text().trim() == 'N'){$('#page13_con11').css('color','blue');} else{$('#page13_con11').css('color','red');}		
if($('#page13_con12').text().trim() == 'd' | $('#page13_con12').text().trim() == 'D'){$('#page13_con12').css('color','blue');} else{$('#page13_con12').css('color','red');}
if($('#page13_con13').text().trim() == 'a' | $('#page13_con13').text().trim() == 'A'){$('#page13_con13').css('color','blue');} else{$('#page13_con13').css('color','red');}
if($('#page13_con14').text().trim() == 'm' | $('#page13_con14').text().trim() == 'M'){$('#page13_con14').css('color','blue');} else{$('#page13_con14').css('color','red');}
if($('#page13_con15').text().trim() == 'a' | $('#page13_con15').text().trim() == 'A'){$('#page13_con15').css('color','blue');} else{$('#page13_con15').css('color','red');}
   										     										 
if($('#page13_con16').text().trim() == 'n' | $('#page13_con16').text().trim() == 'N'){$('#page13_con16').css('color','blue');} else{$('#page13_con16').css('color','red');}
if($('#page13_con17').text().trim() == 'a' | $('#page13_con17').text().trim() == 'A'){$('#page13_con17').css('color','blue');} else{$('#page13_con17').css('color','red');}
if($('#page13_con18').text().trim() == 'm' | $('#page13_con18').text().trim() == 'M'){$('#page13_con18').css('color','blue');} else{$('#page13_con18').css('color','red');}
if($('#page13_con19').text().trim() == 'i' | $('#page13_con19').text().trim() == 'I'){$('#page13_con19').css('color','blue');} else{$('#page13_con19').css('color','red');}
   										     										 
if($('#page13_con20').text().trim() == 'l' | $('#page13_con20').text().trim() == 'L'){$('#page13_con20').css('color','blue');} else{$('#page13_con20').css('color','red');}		
if($('#page13_con21').text().trim() == 'n' | $('#page13_con21').text().trim() == 'N'){$('#page13_con21').css('color','blue');} else{$('#page13_con21').css('color','red');}
if($('#page13_con22').text().trim() == 'd' | $('#page13_con22').text().trim() == 'D'){$('#page13_con22').css('color','blue');} else{$('#page13_con22').css('color','red');}
   										     										 
if($('#page13_con23').text().trim() == 'u' | $('#page13_con23').text().trim() == 'U'){$('#page13_con23').css('color','blue');} else{$('#page13_con23').css('color','red');}
if($('#page13_con24').text().trim() == 'd' | $('#page13_con24').text().trim() == 'D'){$('#page13_con24').css('color','blue');} else{$('#page13_con24').css('color','red');}
if($('#page13_con25').text().trim() == 'i' | $('#page13_con25').text().trim() == 'I'){$('#page13_con25').css('color','blue');} else{$('#page13_con25').css('color','red');}
if($('#page13_con26').text().trim() == 's' | $('#page13_con26').text().trim() == 'S'){$('#page13_con26').css('color','blue');} else{$('#page13_con26').css('color','red');}
if($('#page13_con27').text().trim() == 'h' | $('#page13_con27').text().trim() == 'H'){$('#page13_con27').css('color','blue');} else{$('#page13_con27').css('color','red');}
if($('#page13_con28').text().trim() == 'a' | $('#page13_con28').text().trim() == 'A'){$('#page13_con28').css('color','blue');} else{$('#page13_con28').css('color','red');}
   										     										 
if($('#page13_con29').text().trim() == 'k' | $('#page13_con29').text().trim() == 'K'){$('#page13_con29').css('color','blue');} else{$('#page13_con29').css('color','red');}		
if($('#page13_con30').text().trim() == 'e' | $('#page13_con30').text().trim() == 'E'){$('#page13_con30').css('color','blue');} else{$('#page13_con30').css('color','red');}
if($('#page13_con31').text().trim() == 'a' | $('#page13_con31').text().trim() == 'A'){$('#page13_con31').css('color','blue');} else{$('#page13_con31').css('color','red');}
if($('#page13_con32').text().trim() == 'l' | $('#page13_con32').text().trim() == 'L'){$('#page13_con32').css('color','blue');} else{$('#page13_con32').css('color','red');}
if($('#page13_con33').text().trim() == 'a' | $('#page13_con33').text().trim() == 'A'){$('#page13_con33').css('color','blue');} else{$('#page13_con33').css('color','red');}
   										     										 
if($('#page13_con34').text().trim() == 'g' | $('#page13_con34').text().trim() == 'G'){$('#page13_con34').css('color','blue');} else{$('#page13_con34').css('color','red');}
if($('#page13_con35').text().trim() == 'a' | $('#page13_con35').text().trim() == 'A'){$('#page13_con35').css('color','blue');} else{$('#page13_con35').css('color','red');}
if($('#page13_con36').text().trim() == 'h' | $('#page13_con36').text().trim() == 'H'){$('#page13_con36').css('color','blue');} else{$('#page13_con36').css('color','red');}
   										     										 
if($('#page13_con37').text().trim() == 'e' | $('#page13_con37').text().trim() == 'E'){$('#page13_con37').css('color','blue');} else{$('#page13_con37').css('color','red');}
if($('#page13_con38').text().trim() == 'n' | $('#page13_con38').text().trim() == 'N'){$('#page13_con38').css('color','blue');} else{$('#page13_con38').css('color','red');}		
if($('#page13_con39').text().trim() == 'n' | $('#page13_con39').text().trim() == 'N'){$('#page13_con39').css('color','blue');} else{$('#page13_con39').css('color','red');}
if($('#page13_con40').text().trim() == 'i' | $('#page13_con40').text().trim() == 'I'){$('#page13_con40').css('color','blue');} else{$('#page13_con40').css('color','red');}

if(($('#page13_con1').text().trim() == 'a' | $('#page13_con1').text().trim() == 'A') && ($('#page13_con2').text().trim() == 'k' | $('#page13_con2').text().trim() == 'K') && ($('#page13_con3').text().trim() == 's' | $('#page13_con3').text().trim() == 'S') && ($('#page13_con4').text().trim() == 'h' | $('#page13_con4').text().trim() == 'H') && ($('#page13_con5').text().trim() == 'a' | $('#page13_con5').text().trim() == 'A') && ($('#page13_con6').text().trim() == 'd' | $('#page13_con6').text().trim() == 'D') && ($('#page13_con7').text().trim() == 'w' | $('#page13_con7').text().trim() == 'W') && ($('#page13_con8').text().trim() == 'e' | $('#page13_con8').text().trim() == 'E') && ($('#page13_con9').text().trim() == 'e' | $('#page13_con9').text().trim() == 'E') && ($('#page13_con10').text().trim() == 'p' | $('#page13_con10').text().trim() == 'P') && ($('#page13_con11').text().trim() == 'n' | $('#page13_con11').text().trim() == 'N') && ($('#page13_con12').text().trim() == 'd' | $('#page13_con12').text().trim() == 'D') && ($('#page13_con13').text().trim() == 'a' | $('#page13_con13').text().trim() == 'A') && ($('#page13_con14').text().trim() == 'm' | $('#page13_con14').text().trim() == 'M') && ($('#page13_con15').text().trim() == 'a' | $('#page13_con15').text().trim() == 'A') && ($('#page13_con16').text().trim() == 'n' | $('#page13_con16').text().trim() == 'N') && ($('#page13_con17').text().trim() == 'a' | $('#page13_con17').text().trim() == 'A') && ($('#page13_con18').text().trim() == 'm' | $('#page13_con18').text().trim() == 'M') && ($('#page13_con19').text().trim() == 'i' | $('#page13_con19').text().trim() == 'I') && ($('#page13_con20').text().trim() == 'l' | $('#page13_con20').text().trim() == 'L') && ($('#page13_con21').text().trim() == 'n' | $('#page13_con21').text().trim() == 'N') && ($('#page13_con22').text().trim() == 'd' | $('#page13_con22').text().trim() == 'D') && ($('#page13_con23').text().trim() == 'u' | $('#page13_con23').text().trim() == 'U') && ($('#page13_con24').text().trim() == 'd' | $('#page13_con24').text().trim() == 'D') && ($('#page13_con25').text().trim() == 'i' | $('#page13_con25').text().trim() == 'I') && ($('#page13_con26').text().trim() == 's' | $('#page13_con26').text().trim() == 'S') && ($('#page13_con27').text().trim() == 'h' | $('#page13_con27').text().trim() == 'H') && ($('#page13_con28').text().trim() == 'a' | $('#page13_con28').text().trim() == 'A') && ($('#page13_con29').text().trim() == 'k' | $('#page13_con29').text().trim() == 'K') && ($('#page13_con30').text().trim() == 'e' | $('#page13_con30').text().trim() == 'E') && ($('#page13_con31').text().trim() == 'a' | $('#page13_con31').text().trim() == 'A') && ($('#page13_con32').text().trim() == 'l' | $('#page13_con32').text().trim() == 'L') && ($('#page13_con33').text().trim() == 'a' | $('#page13_con33').text().trim() == 'A') && ($('#page13_con34').text().trim() == 'g' | $('#page13_con34').text().trim() == 'G') && ($('#page13_con35').text().trim() == 'a' | $('#page13_con35').text().trim() == 'A') && ($('#page13_con36').text().trim() == 'h' | $('#page13_con36').text().trim() == 'H') && ($('#page13_con37').text().trim() == 'e' | $('#page13_con37').text().trim() == 'E') && ($('#page13_con38').text().trim() == 'n' | $('#page13_con38').text().trim() == 'N') && ($('#page13_con39').text().trim() == 'n' | $('#page13_con39').text().trim() == 'N') && ($('#page13_con40').text().trim() == 'i' | $('#page13_con40').text().trim() == 'I'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p13').attr('contenteditable', false); 
			$('.p13').css('color', 'blue'); 
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