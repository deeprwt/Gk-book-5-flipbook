$(function(){
$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p32').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit02').click(function(){
if($('#set32_con1').text().trim() == 't' | $('#set32_con1').text().trim() == 'T' | $('#set32_con1').text().trim() == 'True' | $('#set32_con1').text().trim() == 'TRUE' | $('#set32_con1').text().trim() == 'true'){$('#set32_con1').css('color','blue');} else{$('#set32_con1').css('color','red');}		
if($('#set32_con2').text().trim() == 't' | $('#set32_con2').text().trim() == 'T' | $('#set32_con2').text().trim() == 'True' | $('#set32_con2').text().trim() == 'TRUE' | $('#set32_con2').text().trim() == 'true'){$('#set32_con2').css('color','blue');} else{$('#set32_con2').css('color','red');}
if($('#set32_con3').text().trim() == 't' | $('#set32_con3').text().trim() == 'T' | $('#set32_con3').text().trim() == 'True' | $('#set32_con3').text().trim() == 'TRUE' | $('#set32_con3').text().trim() == 'true'){$('#set32_con3').css('color','blue');} else{$('#set32_con3').css('color','red');}
if($('#set32_con4').text().trim() == 'f' | $('#set32_con4').text().trim() == 'F' | $('#set32_con4').text().trim() == 'False' | $('#set32_con4').text().trim() == 'FALSE' | $('#set32_con4').text().trim() == 'false'){$('#set32_con4').css('color','blue');} else{$('#set32_con4').css('color','red');}
if($('#set32_con5').text().trim() == 'f' | $('#set32_con5').text().trim() == 'F' | $('#set32_con5').text().trim() == 'False' | $('#set32_con5').text().trim() == 'FALSE' | $('#set32_con5').text().trim() == 'false'){$('#set32_con5').css('color','blue');} else{$('#set32_con5').css('color','red');}
if($('#set32_con6').text().trim() == 'f' | $('#set32_con6').text().trim() == 'F' | $('#set32_con6').text().trim() == 'False' | $('#set32_con6').text().trim() == 'FALSE' | $('#set32_con6').text().trim() == 'false'){$('#set32_con6').css('color','blue');} else{$('#set32_con6').css('color','red');}
if($('#set32_con7').text().trim() == 't' | $('#set32_con7').text().trim() == 'T' | $('#set32_con7').text().trim() == 'True' | $('#set32_con7').text().trim() == 'TRUE' | $('#set32_con7').text().trim() == 'true'){$('#set32_con7').css('color','blue');} else{$('#set32_con7').css('color','red');}		
if($('#set32_con8').text().trim() == 'f' | $('#set32_con8').text().trim() == 'F' | $('#set32_con8').text().trim() == 'False' | $('#set32_con8').text().trim() == 'FALSE' | $('#set32_con8').text().trim() == 'false'){$('#set32_con8').css('color','blue');} else{$('#set32_con8').css('color','red');}
if($('#set32_con9').text().trim() == 'f' | $('#set32_con9').text().trim() == 'F' | $('#set32_con9').text().trim() == 'False' | $('#set32_con9').text().trim() == 'FALSE' | $('#set32_con9').text().trim() == 'false'){$('#set32_con9').css('color','blue');} else{$('#set32_con9').css('color','red');}
if($('#set32_con10').text().trim() == 'f' | $('#set32_con10').text().trim() == 'F' | $('#set32_con10').text().trim() == 'False' | $('#set32_con10').text().trim() == 'FALSE' | $('#set32_con10').text().trim() == 'false'){$('#set32_con10').css('color','blue');} else{$('#set32_con10').css('color','red');}


if(($('#set32_con1').text().trim() == 't' | $('#set32_con1').text().trim() == 'T' | $('#set32_con1').text().trim() == 'True' | $('#set32_con1').text().trim() == 'TRUE' | $('#set32_con1').text().trim() == 'true') && ($('#set32_con2').text().trim() == 't' | $('#set32_con2').text().trim() == 'T' | $('#set32_con2').text().trim() == 'True' | $('#set32_con2').text().trim() == 'TRUE' | $('#set32_con2').text().trim() == 'true') && ($('#set32_con3').text().trim() == 't' | $('#set32_con3').text().trim() == 'T' | $('#set32_con3').text().trim() == 'True' | $('#set32_con3').text().trim() == 'TRUE' | $('#set32_con3').text().trim() == 'true') && ($('#set32_con4').text().trim() == 'f' | $('#set32_con4').text().trim() == 'F' | $('#set32_con4').text().trim() == 'False' | $('#set32_con4').text().trim() == 'FALSE' | $('#set32_con4').text().trim() == 'false') && ($('#set32_con5').text().trim() == 'f' | $('#set32_con5').text().trim() == 'F' | $('#set32_con5').text().trim() == 'False' | $('#set32_con5').text().trim() == 'FALSE' | $('#set32_con5').text().trim() == 'false') && ($('#set32_con6').text().trim() == 'f' | $('#set32_con6').text().trim() == 'F' | $('#set32_con6').text().trim() == 'False' | $('#set32_con6').text().trim() == 'FALSE' | $('#set32_con6').text().trim() == 'false') && ($('#set32_con7').text().trim() == 't' | $('#set32_con7').text().trim() == 'T' | $('#set32_con7').text().trim() == 'True' | $('#set32_con7').text().trim() == 'TRUE' | $('#set32_con7').text().trim() == 'true') && ($('#set32_con8').text().trim() == 'f' | $('#set32_con8').text().trim() == 'F' | $('#set32_con8').text().trim() == 'False' | $('#set32_con8').text().trim() == 'FALSE' | $('#set32_con8').text().trim() == 'false') && ($('#set32_con9').text().trim() == 'f' | $('#set32_con9').text().trim() == 'F' | $('#set32_con9').text().trim() == 'False' | $('#set32_con9').text().trim() == 'FALSE' | $('#set32_con9').text().trim() == 'false') && ($('#set32_con10').text().trim() == 'f' | $('#set32_con10').text().trim() == 'F' | $('#set32_con10').text().trim() == 'False' | $('#set32_con10').text().trim() == 'FALSE' | $('#set32_con10').text().trim() == 'false'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p32').attr('contenteditable', false); 
			$('.p32').css('color', 'blue'); 
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
