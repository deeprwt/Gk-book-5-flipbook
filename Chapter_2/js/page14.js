$(function(){

$('#_idContainer017').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer027').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer103').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer037').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer007').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});



$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p14').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit02').click(function(){
if($('#set14_con1').text().trim() == 'B' | $('#set14_con1').text().trim() == 'b'){$('#set14_con1').css('color','blue');} else{$('#set14_con1').css('color','red');}		
if($('#set14_con2').text().trim() == 'D' | $('#set14_con2').text().trim() == 'd'){$('#set14_con2').css('color','blue');} else{$('#set14_con2').css('color','red');}
if($('#set14_con3').text().trim() == 'A' | $('#set14_con3').text().trim() == 'a'){$('#set14_con3').css('color','blue');} else{$('#set14_con3').css('color','red');}
if($('#set14_con4').text().trim() == 'E' | $('#set14_con4').text().trim() == 'e'){$('#set14_con4').css('color','blue');} else{$('#set14_con4').css('color','red');}
if($('#set14_con5').text().trim() == 'F' | $('#set14_con5').text().trim() == 'f'){$('#set14_con5').css('color','blue');} else{$('#set14_con5').css('color','red');}
if($('#set14_con6').text().trim() == 'C' | $('#set14_con6').text().trim() == 'c'){$('#set14_con6').css('color','blue');} else{$('#set14_con6').css('color','red');}

if(($('#set14_con1').text().trim() == 'B' | $('#set14_con1').text().trim() == 'b') && ($('#set14_con2').text().trim() == 'D' | $('#set14_con2').text().trim() == 'd') && ($('#set14_con3').text().trim() == 'A' | $('#set14_con3').text().trim() == 'a') && ($('#set14_con4').text().trim() == 'E' | $('#set14_con4').text().trim() == 'e') && ($('#set14_con5').text().trim() == 'F' | $('#set14_con5').text().trim() == 'f') && ($('#set14_con6').text().trim() == 'C' | $('#set14_con6').text().trim() == 'c'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p14').attr('contenteditable', false); 
			$('.p14').css('color', 'blue'); 
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
	$(this).css('opacity','0.5');
		$('.p14_1').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit04').click(function(){
if($('#set14_con7').text().trim() == '3'){$('#set14_con7').css('color','blue');} else{$('#set14_con7').css('color','red');}		
if($('#set14_con8').text().trim() == '4'){$('#set14_con8').css('color','blue');} else{$('#set14_con8').css('color','red');}
if($('#set14_con9').text().trim() == '1'){$('#set14_con9').css('color','blue');} else{$('#set14_con9').css('color','red');}
if($('#set14_con10').text().trim() == '2'){$('#set14_con10').css('color','blue');} else{$('#set14_con10').css('color','red');}

if(($('#set14_con7').text().trim() == '3') && ($('#set14_con8').text().trim() == '4') && ($('#set14_con9').text().trim() == '1') && ($('#set14_con10').text().trim() == '2'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p14_1').attr('contenteditable', false); 
			$('.p14_1').css('color', 'blue'); 
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

$('#submit05').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match14').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});

});
