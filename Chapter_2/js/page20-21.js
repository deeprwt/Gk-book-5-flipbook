$(function(){
$('#_idContainer210').bind('touchstart click',function(e){
video_audio('pops8','video8','audio');
});
$('#video8').on('play',function(e){
	videoon('audio','video8');
});
$('#video8').on('pause',function(e){
	videooff('audio','video8');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video8');
});
dragdrop('box1','text1');
dragdrop('box2','text2');
dragdrop('box3','text3');
dragdrop('box4','text4');
dragdrop('box5','text5');
dragdrop('box6','text6');
dragdrop('box7','text7');
dragdrop('box8','text8');
dragdrop('box9','text9');

$('#_idContainer155').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer188').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer221').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer166').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer199').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer232').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer177').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer243').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});

$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p20').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit02').click(function(){
if($('#set20_con1').text().trim() == 'C' | $('#set20_con1').text().trim() == 'c'){$('#set20_con1').css('color','blue');} else{$('#set20_con1').css('color','red');}		
if($('#set20_con2').text().trim() == 'D' | $('#set20_con2').text().trim() == 'd'){$('#set20_con2').css('color','blue');} else{$('#set20_con2').css('color','red');}
if($('#set20_con3').text().trim() == 'G' | $('#set20_con3').text().trim() == 'g'){$('#set20_con3').css('color','blue');} else{$('#set20_con3').css('color','red');}
if($('#set20_con4').text().trim() == 'H' | $('#set20_con4').text().trim() == 'h'){$('#set20_con4').css('color','blue');} else{$('#set20_con4').css('color','red');}
if($('#set20_con5').text().trim() == 'B' | $('#set20_con5').text().trim() == 'b'){$('#set20_con5').css('color','blue');} else{$('#set20_con5').css('color','red');}
if($('#set20_con6').text().trim() == 'A' | $('#set20_con6').text().trim() == 'a'){$('#set20_con6').css('color','blue');} else{$('#set20_con6').css('color','red');}
if($('#set20_con7').text().trim() == 'I' | $('#set20_con7').text().trim() == 'i'){$('#set20_con7').css('color','blue');} else{$('#set20_con7').css('color','red');}
if($('#set20_con8').text().trim() == 'E' | $('#set20_con8').text().trim() == 'e'){$('#set20_con8').css('color','blue');} else{$('#set20_con8').css('color','red');}
if($('#set20_con9').text().trim() == 'F' | $('#set20_con9').text().trim() == 'f'){$('#set20_con9').css('color','blue');} else{$('#set20_con9').css('color','red');}

if(($('#set20_con1').text().trim() == 'C' | $('#set20_con1').text().trim() == 'c') && ($('#set20_con2').text().trim() == 'D' | $('#set20_con2').text().trim() == 'd') && ($('#set20_con3').text().trim() == 'G' | $('#set20_con3').text().trim() == 'g') && ($('#set20_con4').text().trim() == 'H' | $('#set20_con4').text().trim() == 'h') && ($('#set20_con5').text().trim() == 'B' | $('#set20_con5').text().trim() == 'b') && ($('#set20_con6').text().trim() == 'A' | $('#set20_con6').text().trim() == 'a') && ($('#set20_con7').text().trim() == 'I' | $('#set20_con7').text().trim() == 'i') && ($('#set20_con8').text().trim() == 'E' | $('#set20_con8').text().trim() == 'e') && ($('#set20_con9').text().trim() == 'F' | $('#set20_con9').text().trim() == 'f'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p20').attr('contenteditable', false); 
			$('.p20').css('color', 'blue'); 
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

		$('#page21_con1').text('O');
		$('#page21_con2').text('A');
		$('#page21_con3').text('L');
		$('#page21_con4').text('D');
		$('#page21_con5').text('D');
		$('#page21_con6').text('A');
		$('#page21_con7').text('H');

		$('#page21_con8').text('E');
		$('#page21_con9').text('M');
		$('#page21_con10').text('A');
		$('#page21_con11').text('N');
		$('#page21_con12').text('M');
		$('#page21_con13').text('E');
		$('#page21_con14').text('L');
		$('#page21_con15').text('V');
		$('#page21_con16').text('I');
		$('#page21_con17').text('L');
		$('#page21_con18_1').text('E');

		$('#page21_con19').text('U');
		$('#page21_con20').text('D');
		$('#page21_con21').text('Y');
		$('#page21_con22').text('A');
		$('#page21_con23').text('D');
		$('#page21_con24').text('K');
		$('#page21_con25').text('I');
		$('#page21_con26').text('P');
		$('#page21_con27').text('L');
		$('#page21_con28').text('N');
		$('#page21_con29').text('G');

		$('#page21_con30').text('O');
		$('#page21_con31').text('H');
		$('#page21_con32').text('N');
		$('#page21_con33').text('G');
		$('#page21_con34').text('R');
		$('#page21_con35').text('O');
		$('#page21_con36').text('G');
		$('#page21_con37').text('A');
		$('#page21_con38').text('N');

		$('#page21_con39').text('E');
		$('#page21_con40').text('O');
		$('#page21_con41').text('G');
		$('#page21_con42').text('E');
		$('#page21_con43').text('O');
		$('#page21_con44').text('R');
		$('#page21_con45').text('W');
		$('#page21_con46').text('E');
		$('#page21_con47').text('L');
		$('#page21_con48').text('L');

		$('#page21_con49').text('N');
		$('#page21_con50').text('N');
		$('#page21_con51').text('A');
		$('#page21_con52').text('S');
		$('#page21_con53').text('W');
		$('#page21_con54').text('E');
		$('#page21_con55').text('L');
		$('#page21_con56').text('L');

		$('#page21_con57').text('E');
		$('#page21_con58').text('B');
		$('#page21_con59').text('W');
		$('#page21_con60').text('I');
		$('#page21_con61').text('T');
		$('#page21_con62').text('E');

		$('#page21_con64').text('T');
		$('#page21_con65').text('E');
		$('#page21_con66').text('R');
		$('#page21_con67').text('N');
		$('#page21_con68').text('E');
		$('#page21_con69').text('H');
		$('#page21_con70').text('U');
		$('#page21_con71').text('G');
		$('#page21_con72').text('H');
		$('#page21_con73').text('E');

		$('#page21_con75').text('A');
		$('#page21_con76').text('N');
		$('#page21_con77').text('N');
		$('#page21_con78').text('A');
		$('#page21_con79').text('R');
		$('#page21_con80').text('T');
		$('#page21_con81').text('E');

		$(this).css('opacity','0.7');
		$(this).off('click');
		$(this).css('cursor','default');

		$('.text').text("");
		$('.text').css('cursor','default');
		$('.p09_input_text1').css({
			display: 'block',
			color: 'blue'
			});

		$('.p21').each(function(index, val) {
		$(this).css('color','blue');
		$(this).attr('contenteditable', false);
		});
});

$('#submit04').bind('touchstart click',function(e){

if($('#page21_con1').text().trim() == 'o' | $('#page21_con1').text().trim() == 'O'){$('#page21_con1').css('color','blue');} else{$('#page21_con1').css('color','red');}		
if($('#page21_con2').text().trim() == 'a' | $('#page21_con2').text().trim() == 'A'){$('#page21_con2').css('color','blue');} else{$('#page21_con2').css('color','red');}
if($('#page21_con3').text().trim() == 'l' | $('#page21_con3').text().trim() == 'L'){$('#page21_con3').css('color','blue');} else{$('#page21_con3').css('color','red');}
if($('#page21_con4').text().trim() == 'd' | $('#page21_con4').text().trim() == 'D'){$('#page21_con4').css('color','blue');} else{$('#page21_con4').css('color','red');}
if($('#page21_con5').text().trim() == 'd' | $('#page21_con5').text().trim() == 'D'){$('#page21_con5').css('color','blue');} else{$('#page21_con5').css('color','red');}
if($('#page21_con6').text().trim() == 'a' | $('#page21_con6').text().trim() == 'A'){$('#page21_con6').css('color','blue');} else{$('#page21_con6').css('color','red');}
   										    										
if($('#page21_con7').text().trim() == 'h' | $('#page21_con7').text().trim() == 'H'){$('#page21_con7').css('color','blue');} else{$('#page21_con7').css('color','red');}
if($('#page21_con8').text().trim() == 'e' | $('#page21_con8').text().trim() == 'E'){$('#page21_con8').css('color','blue');} else{$('#page21_con8').css('color','red');}
if($('#page21_con9').text().trim() == 'm' | $('#page21_con9').text().trim() == 'M'){$('#page21_con9').css('color','blue');} else{$('#page21_con9').css('color','red');}
if($('#page21_con10').text().trim() == 'a' | $('#page21_con10').text().trim() == 'A'){$('#page21_con10').css('color','blue');} else{$('#page21_con10').css('color','red');}
if($('#page21_con11').text().trim() == 'n' | $('#page21_con11').text().trim() == 'N'){$('#page21_con11').css('color','blue');} else{$('#page21_con11').css('color','red');}		
if($('#page21_con12').text().trim() == 'm' | $('#page21_con12').text().trim() == 'M'){$('#page21_con12').css('color','blue');} else{$('#page21_con12').css('color','red');}
   										     										 
if($('#page21_con13').text().trim() == 'e' | $('#page21_con13').text().trim() == 'E'){$('#page21_con13').css('color','blue');} else{$('#page21_con13').css('color','red');}
if($('#page21_con14').text().trim() == 'l' | $('#page21_con14').text().trim() == 'L'){$('#page21_con14').css('color','blue');} else{$('#page21_con14').css('color','red');}
if($('#page21_con15').text().trim() == 'v' | $('#page21_con15').text().trim() == 'V'){$('#page21_con15').css('color','blue');} else{$('#page21_con15').css('color','red');}
   										     										 
if($('#page21_con16').text().trim() == 'i' | $('#page21_con16').text().trim() == 'I'){$('#page21_con16').css('color','blue');} else{$('#page21_con16').css('color','red');}
if($('#page21_con17').text().trim() == 'l' | $('#page21_con17').text().trim() == 'L'){$('#page21_con17').css('color','blue');} else{$('#page21_con17').css('color','red');}
if($('#page21_con18_1').text().trim() == 'e' | $('#page21_con18_1').text().trim() == 'E'){$('#page21_con18_1').css('color','blue');} else{$('#page21_con18_1').css('color','red');}
   										     										 
if($('#page21_con19').text().trim() == 'u' | $('#page21_con19').text().trim() == 'U'){$('#page21_con19').css('color','blue');} else{$('#page21_con19').css('color','red');}
if($('#page21_con20').text().trim() == 'd' | $('#page21_con20').text().trim() == 'D'){$('#page21_con20').css('color','blue');} else{$('#page21_con20').css('color','red');}		
if($('#page21_con21').text().trim() == 'y' | $('#page21_con21').text().trim() == 'Y'){$('#page21_con21').css('color','blue');} else{$('#page21_con21').css('color','red');}
if($('#page21_con22').text().trim() == 'a' | $('#page21_con22').text().trim() == 'A'){$('#page21_con22').css('color','blue');} else{$('#page21_con22').css('color','red');}
if($('#page21_con23').text().trim() == 'd' | $('#page21_con23').text().trim() == 'D'){$('#page21_con23').css('color','blue');} else{$('#page21_con23').css('color','red');}
if($('#page21_con24').text().trim() == 'k' | $('#page21_con24').text().trim() == 'K'){$('#page21_con24').css('color','blue');} else{$('#page21_con24').css('color','red');}
   										     										 
if($('#page21_con25').text().trim() == 'i' | $('#page21_con25').text().trim() == 'I'){$('#page21_con25').css('color','blue');} else{$('#page21_con25').css('color','red');}
if($('#page21_con26').text().trim() == 'p' | $('#page21_con26').text().trim() == 'P'){$('#page21_con26').css('color','blue');} else{$('#page21_con26').css('color','red');}
if($('#page21_con27').text().trim() == 'l' | $('#page21_con27').text().trim() == 'L'){$('#page21_con27').css('color','blue');} else{$('#page21_con27').css('color','red');}
   										     										 
if($('#page21_con28').text().trim() == 'n' | $('#page21_con28').text().trim() == 'N'){$('#page21_con28').css('color','blue');} else{$('#page21_con28').css('color','red');}
if($('#page21_con29').text().trim() == 'g' | $('#page21_con29').text().trim() == 'G'){$('#page21_con29').css('color','blue');} else{$('#page21_con29').css('color','red');}		
if($('#page21_con30').text().trim() == 'o' | $('#page21_con30').text().trim() == 'O'){$('#page21_con30').css('color','blue');} else{$('#page21_con30').css('color','red');}
if($('#page21_con31').text().trim() == 'h' | $('#page21_con31').text().trim() == 'H'){$('#page21_con31').css('color','blue');} else{$('#page21_con31').css('color','red');}
if($('#page21_con32').text().trim() == 'n' | $('#page21_con32').text().trim() == 'N'){$('#page21_con32').css('color','blue');} else{$('#page21_con32').css('color','red');}
if($('#page21_con33').text().trim() == 'g' | $('#page21_con33').text().trim() == 'G'){$('#page21_con33').css('color','blue');} else{$('#page21_con33').css('color','red');}
if($('#page21_con34').text().trim() == 'r' | $('#page21_con34').text().trim() == 'R'){$('#page21_con34').css('color','blue');} else{$('#page21_con34').css('color','red');}
   										     										 
if($('#page21_con35').text().trim() == 'o' | $('#page21_con35').text().trim() == 'O'){$('#page21_con35').css('color','blue');} else{$('#page21_con35').css('color','red');}
if($('#page21_con36').text().trim() == 'g' | $('#page21_con36').text().trim() == 'G'){$('#page21_con36').css('color','blue');} else{$('#page21_con36').css('color','red');}
if($('#page21_con37').text().trim() == 'a' | $('#page21_con37').text().trim() == 'A'){$('#page21_con37').css('color','blue');} else{$('#page21_con37').css('color','red');}
if($('#page21_con38').text().trim() == 'n' | $('#page21_con38').text().trim() == 'N'){$('#page21_con38').css('color','blue');} else{$('#page21_con38').css('color','red');}		
   										     										 
if($('#page21_con39').text().trim() == 'e' | $('#page21_con39').text().trim() == 'E'){$('#page21_con39').css('color','blue');} else{$('#page21_con39').css('color','red');}
if($('#page21_con40').text().trim() == 'o' | $('#page21_con40').text().trim() == 'O'){$('#page21_con40').css('color','blue');} else{$('#page21_con40').css('color','red');}
if($('#page21_con41').text().trim() == 'g' | $('#page21_con41').text().trim() == 'G'){$('#page21_con41').css('color','blue');} else{$('#page21_con41').css('color','red');}
   										     										 
if($('#page21_con42').text().trim() == 'e' | $('#page21_con42').text().trim() == 'E'){$('#page21_con42').css('color','blue');} else{$('#page21_con42').css('color','red');}
if($('#page21_con43').text().trim() == 'o' | $('#page21_con43').text().trim() == 'O'){$('#page21_con43').css('color','blue');} else{$('#page21_con43').css('color','red');}
if($('#page21_con44').text().trim() == 'r' | $('#page21_con44').text().trim() == 'R'){$('#page21_con44').css('color','blue');} else{$('#page21_con44').css('color','red');}
if($('#page21_con45').text().trim() == 'w' | $('#page21_con45').text().trim() == 'W'){$('#page21_con45').css('color','blue');} else{$('#page21_con45').css('color','red');}
if($('#page21_con46').text().trim() == 'e' | $('#page21_con46').text().trim() == 'E'){$('#page21_con46').css('color','blue');} else{$('#page21_con46').css('color','red');}
if($('#page21_con47').text().trim() == 'l' | $('#page21_con47').text().trim() == 'L'){$('#page21_con47').css('color','blue');} else{$('#page21_con47').css('color','red');}
if($('#page21_con48').text().trim() == 'l' | $('#page21_con48').text().trim() == 'L'){$('#page21_con48').css('color','blue');} else{$('#page21_con48').css('color','red');}
if($('#page21_con49').text().trim() == 'n' | $('#page21_con49').text().trim() == 'N'){$('#page21_con49').css('color','blue');} else{$('#page21_con49').css('color','red');}
if($('#page21_con50').text().trim() == 'n' | $('#page21_con50').text().trim() == 'N'){$('#page21_con50').css('color','blue');} else{$('#page21_con50').css('color','red');}
if($('#page21_con51').text().trim() == 'a' | $('#page21_con51').text().trim() == 'A'){$('#page21_con51').css('color','blue');} else{$('#page21_con51').css('color','red');}
if($('#page21_con52').text().trim() == 's' | $('#page21_con52').text().trim() == 'S'){$('#page21_con52').css('color','blue');} else{$('#page21_con52').css('color','red');}
if($('#page21_con53').text().trim() == 'w' | $('#page21_con53').text().trim() == 'W'){$('#page21_con53').css('color','blue');} else{$('#page21_con53').css('color','red');}
if($('#page21_con54').text().trim() == 'e' | $('#page21_con54').text().trim() == 'E'){$('#page21_con54').css('color','blue');} else{$('#page21_con54').css('color','red');}
if($('#page21_con55').text().trim() == 'l' | $('#page21_con55').text().trim() == 'L'){$('#page21_con55').css('color','blue');} else{$('#page21_con55').css('color','red');}
if($('#page21_con56').text().trim() == 'l' | $('#page21_con56').text().trim() == 'L'){$('#page21_con56').css('color','blue');} else{$('#page21_con56').css('color','red');}
if($('#page21_con57').text().trim() == 'e' | $('#page21_con57').text().trim() == 'E'){$('#page21_con57').css('color','blue');} else{$('#page21_con57').css('color','red');}
if($('#page21_con58').text().trim() == 'b' | $('#page21_con58').text().trim() == 'B'){$('#page21_con58').css('color','blue');} else{$('#page21_con58').css('color','red');}
if($('#page21_con59').text().trim() == 'w' | $('#page21_con59').text().trim() == 'W'){$('#page21_con59').css('color','blue');} else{$('#page21_con59').css('color','red');}
if($('#page21_con60').text().trim() == 'i' | $('#page21_con60').text().trim() == 'I'){$('#page21_con60').css('color','blue');} else{$('#page21_con60').css('color','red');}
if($('#page21_con61').text().trim() == 't' | $('#page21_con61').text().trim() == 'T'){$('#page21_con61').css('color','blue');} else{$('#page21_con61').css('color','red');}
if($('#page21_con62').text().trim() == 'e' | $('#page21_con62').text().trim() == 'E'){$('#page21_con62').css('color','blue');} else{$('#page21_con62').css('color','red');}
if($('#page21_con64').text().trim() == 't' | $('#page21_con64').text().trim() == 'T'){$('#page21_con64').css('color','blue');} else{$('#page21_con64').css('color','red');}
if($('#page21_con65').text().trim() == 'e' | $('#page21_con65').text().trim() == 'E'){$('#page21_con65').css('color','blue');} else{$('#page21_con65').css('color','red');}
if($('#page21_con66').text().trim() == 'r' | $('#page21_con66').text().trim() == 'R'){$('#page21_con66').css('color','blue');} else{$('#page21_con66').css('color','red');}
if($('#page21_con67').text().trim() == 'n' | $('#page21_con67').text().trim() == 'N'){$('#page21_con67').css('color','blue');} else{$('#page21_con67').css('color','red');}
if($('#page21_con68').text().trim() == 'e' | $('#page21_con68').text().trim() == 'E'){$('#page21_con68').css('color','blue');} else{$('#page21_con68').css('color','red');}
if($('#page21_con69').text().trim() == 'h' | $('#page21_con69').text().trim() == 'H'){$('#page21_con69').css('color','blue');} else{$('#page21_con69').css('color','red');}
if($('#page21_con70').text().trim() == 'u' | $('#page21_con70').text().trim() == 'U'){$('#page21_con70').css('color','blue');} else{$('#page21_con70').css('color','red');}
if($('#page21_con71').text().trim() == 'g' | $('#page21_con71').text().trim() == 'G'){$('#page21_con71').css('color','blue');} else{$('#page21_con71').css('color','red');}
if($('#page21_con72').text().trim() == 'h' | $('#page21_con72').text().trim() == 'H'){$('#page21_con72').css('color','blue');} else{$('#page21_con72').css('color','red');}
if($('#page21_con73').text().trim() == 'e' | $('#page21_con73').text().trim() == 'E'){$('#page21_con73').css('color','blue');} else{$('#page21_con73').css('color','red');}
if($('#page21_con75').text().trim() == 'a' | $('#page21_con75').text().trim() == 'A'){$('#page21_con75').css('color','blue');} else{$('#page21_con75').css('color','red');}
if($('#page21_con76').text().trim() == 'n' | $('#page21_con76').text().trim() == 'N'){$('#page21_con76').css('color','blue');} else{$('#page21_con76').css('color','red');}
if($('#page21_con77').text().trim() == 'n' | $('#page21_con77').text().trim() == 'N'){$('#page21_con77').css('color','blue');} else{$('#page21_con77').css('color','red');}
if($('#page21_con78').text().trim() == 'a' | $('#page21_con78').text().trim() == 'A'){$('#page21_con78').css('color','blue');} else{$('#page21_con78').css('color','red');}
if($('#page21_con79').text().trim() == 'r' | $('#page21_con79').text().trim() == 'R'){$('#page21_con79').css('color','blue');} else{$('#page21_con79').css('color','red');}
if($('#page21_con80').text().trim() == 't' | $('#page21_con80').text().trim() == 'T'){$('#page21_con80').css('color','blue');} else{$('#page21_con80').css('color','red');}
if($('#page21_con81').text().trim() == 'e' | $('#page21_con81').text().trim() == 'E'){$('#page21_con81').css('color','blue');} else{$('#page21_con81').css('color','red');}


if(($('#page21_con1').text().trim() == 'o' | $('#page21_con1').text().trim() == 'O') && ($('#page21_con2').text().trim() == 'a' | $('#page21_con2').text().trim() == 'A') && ($('#page21_con3').text().trim() == 'l' | $('#page21_con3').text().trim() == 'L') && ($('#page21_con4').text().trim() == 'd' | $('#page21_con4').text().trim() == 'D') && ($('#page21_con5').text().trim() == 'd' | $('#page21_con5').text().trim() == 'D') && ($('#page21_con6').text().trim() == 'a' | $('#page21_con6').text().trim() == 'A') && ($('#page21_con7').text().trim() == 'h' | $('#page21_con7').text().trim() == 'H') && ($('#page21_con8').text().trim() == 'e' | $('#page21_con8').text().trim() == 'E') && ($('#page21_con9').text().trim() == 'm' | $('#page21_con9').text().trim() == 'M') && ($('#page21_con10').text().trim() == 'a' | $('#page21_con10').text().trim() == 'A') && ($('#page21_con11').text().trim() == 'n' | $('#page21_con11').text().trim() == 'N') && ($('#page21_con12').text().trim() == 'm' | $('#page21_con12').text().trim() == 'M') && ($('#page21_con13').text().trim() == 'e' | $('#page21_con13').text().trim() == 'E') && ($('#page21_con14').text().trim() == 'l' | $('#page21_con14').text().trim() == 'L') && ($('#page21_con15').text().trim() == 'v' | $('#page21_con15').text().trim() == 'V') && ($('#page21_con16').text().trim() == 'i' | $('#page21_con16').text().trim() == 'I') && ($('#page21_con17').text().trim() == 'l' | $('#page21_con17').text().trim() == 'L') && ($('#page21_con18_1').text().trim() == 'e' | $('#page21_con18_1').text().trim() == 'E') && ($('#page21_con19').text().trim() == 'u' | $('#page21_con19').text().trim() == 'U') && ($('#page21_con20').text().trim() == 'd' | $('#page21_con20').text().trim() == 'D') && ($('#page21_con21').text().trim() == 'y' | $('#page21_con21').text().trim() == 'Y') && ($('#page21_con22').text().trim() == 'a' | $('#page21_con22').text().trim() == 'A') && ($('#page21_con23').text().trim() == 'd' | $('#page21_con23').text().trim() == 'D') && ($('#page21_con24').text().trim() == 'k' | $('#page21_con24').text().trim() == 'K') && ($('#page21_con25').text().trim() == 'i' | $('#page21_con25').text().trim() == 'I') && ($('#page21_con26').text().trim() == 'p' | $('#page21_con26').text().trim() == 'P') && ($('#page21_con27').text().trim() == 'l' | $('#page21_con27').text().trim() == 'L') && ($('#page21_con28').text().trim() == 'n' | $('#page21_con28').text().trim() == 'N') && ($('#page21_con29').text().trim() == 'g' | $('#page21_con29').text().trim() == 'G') && ($('#page21_con30').text().trim() == 'o' | $('#page21_con30').text().trim() == 'O') && ($('#page21_con31').text().trim() == 'h' | $('#page21_con31').text().trim() == 'H') && ($('#page21_con32').text().trim() == 'n' | $('#page21_con32').text().trim() == 'N') && ($('#page21_con33').text().trim() == 'g' | $('#page21_con33').text().trim() == 'G') && ($('#page21_con34').text().trim() == 'r' | $('#page21_con34').text().trim() == 'R') && ($('#page21_con35').text().trim() == 'o' | $('#page21_con35').text().trim() == 'O') && ($('#page21_con36').text().trim() == 'g' | $('#page21_con36').text().trim() == 'G') && ($('#page21_con37').text().trim() == 'a' | $('#page21_con37').text().trim() == 'A') && ($('#page21_con38').text().trim() == 'n' | $('#page21_con38').text().trim() == 'N') && ($('#page21_con39').text().trim() == 'e' | $('#page21_con39').text().trim() == 'E') && ($('#page21_con40').text().trim() == 'o' | $('#page21_con40').text().trim() == 'O') && ($('#page21_con41').text().trim() == 'g' | $('#page21_con41').text().trim() == 'G') && ($('#page21_con42').text().trim() == 'e' | $('#page21_con42').text().trim() == 'E') && ($('#page21_con43').text().trim() == 'o' | $('#page21_con43').text().trim() == 'O') && ($('#page21_con44').text().trim() == 'r' | $('#page21_con44').text().trim() == 'R') && ($('#page21_con45').text().trim() == 'w' | $('#page21_con45').text().trim() == 'W') && ($('#page21_con46').text().trim() == 'e' | $('#page21_con46').text().trim() == 'E') && ($('#page21_con47').text().trim() == 'l' | $('#page21_con47').text().trim() == 'L') && ($('#page21_con48').text().trim() == 'l' | $('#page21_con48').text().trim() == 'L') && ($('#page21_con49').text().trim() == 'n' | $('#page21_con49').text().trim() == 'N') && ($('#page21_con50').text().trim() == 'n' | $('#page21_con50').text().trim() == 'N') && ($('#page21_con51').text().trim() == 'a' | $('#page21_con51').text().trim() == 'A') && ($('#page21_con52').text().trim() == 's' | $('#page21_con52').text().trim() == 'S') && ($('#page21_con53').text().trim() == 'w' | $('#page21_con53').text().trim() == 'W') && ($('#page21_con54').text().trim() == 'e' | $('#page21_con54').text().trim() == 'E') && ($('#page21_con55').text().trim() == 'l' | $('#page21_con55').text().trim() == 'L') && ($('#page21_con56').text().trim() == 'l' | $('#page21_con56').text().trim() == 'L') && ($('#page21_con57').text().trim() == 'e' | $('#page21_con57').text().trim() == 'E') && ($('#page21_con58').text().trim() == 'b' | $('#page21_con58').text().trim() == 'B') && ($('#page21_con59').text().trim() == 'w' | $('#page21_con59').text().trim() == 'W') && ($('#page21_con60').text().trim() == 'i' | $('#page21_con60').text().trim() == 'I') && ($('#page21_con61').text().trim() == 't' | $('#page21_con61').text().trim() == 'T') && ($('#page21_con62').text().trim() == 'e' | $('#page21_con62').text().trim() == 'E') && ($('#page21_con64').text().trim() == 't' | $('#page21_con64').text().trim() == 'T') && ($('#page21_con65').text().trim() == 'e' | $('#page21_con65').text().trim() == 'E') && ($('#page21_con66').text().trim() == 'r' | $('#page21_con66').text().trim() == 'R') && ($('#page21_con67').text().trim() == 'n' | $('#page21_con67').text().trim() == 'N') && ($('#page21_con68').text().trim() == 'h' | $('#page21_con68').text().trim() == 'H') && ($('#page21_con69').text().trim() == 'u' | $('#page21_con69').text().trim() == 'U') && ($('#page21_con70').text().trim() == 'g' | $('#page21_con70').text().trim() == 'G') && ($('#page21_con71').text().trim() == 'h' | $('#page21_con71').text().trim() == 'H') && ($('#page21_con72').text().trim() == 'e' | $('#page21_con72').text().trim() == 'E') && ($('#page21_con73').text().trim() == 's' | $('#page21_con73').text().trim() == 'S') && ($('#page21_con75').text().trim() == 'a' | $('#page21_con75').text().trim() == 'A') && ($('#page21_con76').text().trim() == 'n' | $('#page21_con76').text().trim() == 'N') && ($('#page21_con77').text().trim() == 'n' | $('#page21_con77').text().trim() == 'N') && ($('#page21_con78').text().trim() == 'a' | $('#page21_con78').text().trim() == 'A') && ($('#page21_con79').text().trim() == 'r' | $('#page21_con79').text().trim() == 'R') && ($('#page21_con80').text().trim() == 't' | $('#page21_con80').text().trim() == 'T') && ($('#page21_con81').text().trim() == 'e' | $('#page21_con81').text().trim() == 'E'))

			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p21').attr('contenteditable', false); 
			$('.p21').css('color', 'blue'); 
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