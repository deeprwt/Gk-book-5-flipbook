$(function(){
$('#submit01').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match56').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});




$('#submit02').click(function(){
	$(this).css('opacity','0.5');
		$('#page57_con1').text('T');
		$('#page57_con2').text('H');
		$('#page57_con3').text('E');
		$('#page57_con4').text('A');
		$('#page57_con5').text('T');
		$('#page57_con6').text('R');
		$('#page57_con7').text('E');
								 
		$('#page57_con8').text('R');
		$('#page57_con9').text('E');
		$('#page57_con10').text('A');
		$('#page57_con11').text('D');
		$('#page57_con12').text('I');
		$('#page57_con13').text('N');
		$('#page57_con14').text('G');
								  
		$('#page57_con15').text('C');
		$('#page57_con16').text('O');
		$('#page57_con17').text('N');
		$('#page57_con18').text('C');
		$('#page57_con19').text('E');
		$('#page57_con20').text('R');
		$('#page57_con21').text('T');
								  
		$('#page57_con22').text('C');
		$('#page57_con23').text('I');
		$('#page57_con24').text('N');
		$('#page57_con25').text('E');
		$('#page57_con26').text('M');
		$('#page57_con27').text('A');
								  
		$('#page57_con28').text('D');
		$('#page57_con29').text('A');
		$('#page57_con30').text('N');
		$('#page57_con31').text('C');
		$('#page57_con32').text('E');

		$(this).css('opacity','0.7');
		$(this).off('click');
		$(this).css('cursor','default');
		$('.p57').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit03').click(function(){
if($('#set57_cona1').text().trim() == 'HEATRE' | $('#set57_cona1').text().trim() == 'heatre'){$('#set57_cona1').css('color','blue');} else{$('#set57_cona1').css('color','red');}		
if($('#set57_cona2').text().trim() == 'EADING' | $('#set57_cona2').text().trim() == 'eading'){$('#set57_cona2').css('color','blue');} else{$('#set57_cona2').css('color','red');}
if($('#set57_cona3').text().trim() == 'ONCERT' | $('#set57_cona3').text().trim() == 'oncert'){$('#set57_cona3').css('color','blue');} else{$('#set57_cona3').css('color','red');}
if($('#set57_cona4').text().trim() == 'INEMA' | $('#set57_cona4').text().trim() == 'inema'){$('#set57_cona4').css('color','blue');} else{$('#set57_cona4').css('color','red');}
if($('#set57_cona5').text().trim() == 'ANCE' | $('#set57_cona5').text().trim() == 'ance'){$('#set57_cona5').css('color','blue');} else{$('#set57_cona5').css('color','red');}

if($('#page57_con1').text().trim() == 't' | $('#page57_con1').text().trim() == 'T'){$('#page57_con1').css('color','blue');} else{$('#page57_con1').css('color','red');}
if($('#page57_con2').text().trim() == 'h' | $('#page57_con2').text().trim() == 'H'){$('#page57_con2').css('color','blue');} else{$('#page57_con2').css('color','red');}
if($('#page57_con3').text().trim() == 'e' | $('#page57_con3').text().trim() == 'E'){$('#page57_con3').css('color','blue');} else{$('#page57_con3').css('color','red');}
if($('#page57_con4').text().trim() == 'a' | $('#page57_con4').text().trim() == 'A'){$('#page57_con4').css('color','blue');} else{$('#page57_con4').css('color','red');}
if($('#page57_con5').text().trim() == 't' | $('#page57_con5').text().trim() == 'T'){$('#page57_con5').css('color','blue');} else{$('#page57_con5').css('color','red');}
if($('#page57_con6').text().trim() == 'r' | $('#page57_con6').text().trim() == 'R'){$('#page57_con6').css('color','blue');} else{$('#page57_con6').css('color','red');}
if($('#page57_con7').text().trim() == 'e' | $('#page57_con7').text().trim() == 'E'){$('#page57_con7').css('color','blue');} else{$('#page57_con7').css('color','red');}
if($('#page57_con8').text().trim() == 'r' | $('#page57_con8').text().trim() == 'R'){$('#page57_con8').css('color','blue');} else{$('#page57_con8').css('color','red');}
if($('#page57_con9').text().trim() == 'e' | $('#page57_con9').text().trim() == 'E'){$('#page57_con9').css('color','blue');} else{$('#page57_con9').css('color','red');}
if($('#page57_con10').text().trim() == 'a' | $('#page57_con10').text().trim() == 'A'){$('#page57_con10').css('color','blue');} else{$('#page57_con10').css('color','red');}
if($('#page57_con11').text().trim() == 'd' | $('#page57_con11').text().trim() == 'D'){$('#page57_con11').css('color','blue');} else{$('#page57_con11').css('color','red');}
if($('#page57_con12').text().trim() == 'i' | $('#page57_con12').text().trim() == 'I'){$('#page57_con12').css('color','blue');} else{$('#page57_con12').css('color','red');}
if($('#page57_con13').text().trim() == 'n' | $('#page57_con13').text().trim() == 'N'){$('#page57_con13').css('color','blue');} else{$('#page57_con13').css('color','red');}
if($('#page57_con14').text().trim() == 'g' | $('#page57_con14').text().trim() == 'G'){$('#page57_con14').css('color','blue');} else{$('#page57_con14').css('color','red');}
if($('#page57_con15').text().trim() == 'c' | $('#page57_con15').text().trim() == 'C'){$('#page57_con15').css('color','blue');} else{$('#page57_con15').css('color','red');}
if($('#page57_con16').text().trim() == 'o' | $('#page57_con16').text().trim() == 'O'){$('#page57_con16').css('color','blue');} else{$('#page57_con16').css('color','red');}
if($('#page57_con17').text().trim() == 'n' | $('#page57_con17').text().trim() == 'N'){$('#page57_con17').css('color','blue');} else{$('#page57_con17').css('color','red');}
if($('#page57_con18').text().trim() == 'c' | $('#page57_con18').text().trim() == 'C'){$('#page57_con18').css('color','blue');} else{$('#page57_con18').css('color','red');}
if($('#page57_con19').text().trim() == 'e' | $('#page57_con19').text().trim() == 'E'){$('#page57_con19').css('color','blue');} else{$('#page57_con19').css('color','red');}
if($('#page57_con20').text().trim() == 'r' | $('#page57_con20').text().trim() == 'R'){$('#page57_con20').css('color','blue');} else{$('#page57_con20').css('color','red');}
if($('#page57_con21').text().trim() == 't' | $('#page57_con21').text().trim() == 'T'){$('#page57_con21').css('color','blue');} else{$('#page57_con21').css('color','red');}
if($('#page57_con22').text().trim() == 'c' | $('#page57_con22').text().trim() == 'C'){$('#page57_con22').css('color','blue');} else{$('#page57_con22').css('color','red');}
if($('#page57_con23').text().trim() == 'i' | $('#page57_con23').text().trim() == 'I'){$('#page57_con23').css('color','blue');} else{$('#page57_con23').css('color','red');}
if($('#page57_con24').text().trim() == 'n' | $('#page57_con24').text().trim() == 'N'){$('#page57_con24').css('color','blue');} else{$('#page57_con24').css('color','red');}
if($('#page57_con25').text().trim() == 'e' | $('#page57_con25').text().trim() == 'E'){$('#page57_con25').css('color','blue');} else{$('#page57_con25').css('color','red');}
if($('#page57_con26').text().trim() == 'm' | $('#page57_con26').text().trim() == 'M'){$('#page57_con26').css('color','blue');} else{$('#page57_con26').css('color','red');}
if($('#page57_con27').text().trim() == 'a' | $('#page57_con27').text().trim() == 'A'){$('#page57_con27').css('color','blue');} else{$('#page57_con27').css('color','red');}
if($('#page57_con28').text().trim() == 'd' | $('#page57_con28').text().trim() == 'D'){$('#page57_con28').css('color','blue');} else{$('#page57_con28').css('color','red');}
if($('#page57_con29').text().trim() == 'a' | $('#page57_con29').text().trim() == 'A'){$('#page57_con29').css('color','blue');} else{$('#page57_con29').css('color','red');}
if($('#page57_con30').text().trim() == 'n' | $('#page57_con30').text().trim() == 'N'){$('#page57_con30').css('color','blue');} else{$('#page57_con30').css('color','red');}
if($('#page57_con31').text().trim() == 'c' | $('#page57_con31').text().trim() == 'C'){$('#page57_con31').css('color','blue');} else{$('#page57_con31').css('color','red');}
if($('#page57_con32').text().trim() == 'e' | $('#page57_con32').text().trim() == 'E'){$('#page57_con32').css('color','blue');} else{$('#page57_con32').css('color','red');}

if(($('#set57_cona2').text().trim() == 'EADING' | $('#set57_cona2').text().trim() == 'eading') && ($('#set57_cona3').text().trim() == 'ONCERT' | $('#set57_cona3').text().trim() == 'oncert') && ($('#set57_cona4').text().trim() == 'INEMA' | $('#set57_cona4').text().trim() == 'inema') && ($('#set57_cona5').text().trim() == 'ANCE' | $('#set57_cona5').text().trim() == 'ance') && ($('#page57_con1').text().trim() == 't' | $('#page57_con1').text().trim() == 'T') && ($('#page57_con2').text().trim() == 'h' | $('#page57_con2').text().trim() == 'H') && ($('#page57_con3').text().trim() == 'e' | $('#page57_con3').text().trim() == 'E') && ($('#page57_con4').text().trim() == 'a' | $('#page57_con4').text().trim() == 'A') && ($('#page57_con5').text().trim() == 't' | $('#page57_con5').text().trim() == 'T') && ($('#page57_con6').text().trim() == 'r' | $('#page57_con6').text().trim() == 'R') && ($('#page57_con7').text().trim() == 'e' | $('#page57_con7').text().trim() == 'E') && ($('#page57_con8').text().trim() == 'r' | $('#page57_con8').text().trim() == 'R') && ($('#page57_con9').text().trim() == 'e' | $('#page57_con9').text().trim() == 'E') && ($('#page57_con10').text().trim() == 'a' | $('#page57_con10').text().trim() == 'A') && ($('#page57_con11').text().trim() == 'd' | $('#page57_con11').text().trim() == 'D') && ($('#page57_con12').text().trim() == 'i' | $('#page57_con12').text().trim() == 'I') && ($('#page57_con13').text().trim() == 'n' | $('#page57_con13').text().trim() == 'N') && ($('#page57_con14').text().trim() == 'g' | $('#page57_con14').text().trim() == 'G') && ($('#page57_con15').text().trim() == 'c' | $('#page57_con15').text().trim() == 'C') && ($('#page57_con16').text().trim() == 'o' | $('#page57_con16').text().trim() == 'O') && ($('#page57_con17').text().trim() == 'n' | $('#page57_con17').text().trim() == 'N') && ($('#page57_con18').text().trim() == 'c' | $('#page57_con18').text().trim() == 'C') && ($('#page57_con19').text().trim() == 'e' | $('#page57_con19').text().trim() == 'E') && ($('#page57_con20').text().trim() == 'r' | $('#page57_con20').text().trim() == 'R') && ($('#page57_con21').text().trim() == 't' | $('#page57_con21').text().trim() == 'T') && ($('#page57_con22').text().trim() == 'c' | $('#page57_con22').text().trim() == 'C') && ($('#page57_con23').text().trim() == 'i' | $('#page57_con23').text().trim() == 'I') && ($('#page57_con24').text().trim() == 'n' | $('#page57_con24').text().trim() == 'N') && ($('#page57_con25').text().trim() == 'e' | $('#page57_con25').text().trim() == 'E') && ($('#page57_con26').text().trim() == 'm' | $('#page57_con26').text().trim() == 'M') && ($('#page57_con27').text().trim() == 'a' | $('#page57_con27').text().trim() == 'A') && ($('#page57_con28').text().trim() == 'd' | $('#page57_con28').text().trim() == 'D') && ($('#page57_con29').text().trim() == 'a' | $('#page57_con29').text().trim() == 'A') && ($('#page57_con30').text().trim() == 'n' | $('#page57_con30').text().trim() == 'N') && ($('#page57_con31').text().trim() == 'c' | $('#page57_con31').text().trim() == 'C') && ($('#page57_con32').text().trim() == 'e' | $('#page57_con32').text().trim() == 'E'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p57').attr('contenteditable', false); 
			$('.p57').css('color', 'blue'); 
			$('#submit03').off('click');
		}
		else
		{
			$('#submit03').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
	});
});