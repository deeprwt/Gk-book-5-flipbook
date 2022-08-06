$(function(){

$('#_idContainer140').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer149').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer164').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer152').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer155').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer146').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});


$('#submit04').click(function(){
	$(this).css('opacity','0.5');
		$('.p53').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit05').click(function(){
if($('#set53_con1').text().trim() == 'B' | $('#set53_con1').text().trim() == 'b'){$('#set53_con1').css('color','blue');} else{$('#set53_con1').css('color','red');}		
if($('#set53_con2').text().trim() == 'E' | $('#set53_con2').text().trim() == 'e'){$('#set53_con2').css('color','blue');} else{$('#set53_con2').css('color','red');}
if($('#set53_con3').text().trim() == 'G' | $('#set53_con3').text().trim() == 'g'){$('#set53_con3').css('color','blue');} else{$('#set53_con3').css('color','red');}
if($('#set53_con4').text().trim() == 'F' | $('#set53_con4').text().trim() == 'f'){$('#set53_con4').css('color','blue');} else{$('#set53_con4').css('color','red');}
if($('#set53_con5').text().trim() == 'A' | $('#set53_con5').text().trim() == 'a'){$('#set53_con5').css('color','blue');} else{$('#set53_con5').css('color','red');}
if($('#set53_con6').text().trim() == 'C' | $('#set53_con6').text().trim() == 'c'){$('#set53_con6').css('color','blue');} else{$('#set53_con6').css('color','red');}
if($('#set53_con7').text().trim() == 'D' | $('#set53_con7').text().trim() == 'd'){$('#set53_con7').css('color','blue');} else{$('#set53_con7').css('color','red');}


if(($('#set53_con1').text().trim() == 'B' | $('#set53_con1').text().trim() == 'b') && ($('#set53_con2').text().trim() == 'E' | $('#set53_con2').text().trim() == 'e') && ($('#set53_con3').text().trim() == 'G' | $('#set53_con3').text().trim() == 'g') && ($('#set53_con4').text().trim() == 'F' | $('#set53_con4').text().trim() == 'f') && ($('#set53_con5').text().trim() == 'A' | $('#set53_con5').text().trim() == 'a') && ($('#set53_con6').text().trim() == 'C' | $('#set53_con6').text().trim() == 'c') && ($('#set53_con7').text().trim() == 'D' | $('#set53_con7').text().trim() == 'd'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p53').attr('contenteditable', false); 
			$('.p53').css('color', 'blue'); 
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
