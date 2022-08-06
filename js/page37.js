$(function(){

$('.position_37').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});


$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p37').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit02').click(function(){
if($('#set37_con1').text().trim() == 'f' | $('#set37_con1').text().trim() == 'F' | $('#set37_con1').text().trim() == 'False' | $('#set37_con1').text().trim() == 'FALSE' | $('#set37_con1').text().trim() == 'false'){$('#set37_con1').css('color','blue');} else{$('#set37_con1').css('color','red');}	
	
if($('#set37_con2').text().trim() == 't' | $('#set37_con2').text().trim() == 'T' | $('#set37_con2').text().trim() == 'True' | $('#set37_con2').text().trim() == 'TRUE' | $('#set37_con2').text().trim() == 'true'){$('#set37_con2').css('color','blue');} else{$('#set37_con2').css('color','red');}

if($('#set37_con3').text().trim() == 'f' | $('#set37_con3').text().trim() == 'F' | $('#set37_con3').text().trim() == 'False' | $('#set37_con3').text().trim() == 'FALSE' | $('#set37_con3').text().trim() == 'false'){$('#set37_con3').css('color','blue');} else{$('#set37_con3').css('color','red');}
if($('#set37_con4').text().trim() == 't' | $('#set37_con4').text().trim() == 'T' | $('#set37_con4').text().trim() == 'True' | $('#set37_con4').text().trim() == 'TRUE' | $('#set37_con4').text().trim() == 'true'){$('#set37_con4').css('color','blue');} else{$('#set37_con4').css('color','red');}
if($('#set37_con5').text().trim() == 'f' | $('#set37_con5').text().trim() == 'F' | $('#set37_con5').text().trim() == 'False' | $('#set37_con5').text().trim() == 'FALSE' | $('#set37_con5').text().trim() == 'false'){$('#set37_con5').css('color','blue');} else{$('#set37_con5').css('color','red');}
if($('#set37_con6').text().trim() == 'f' | $('#set37_con6').text().trim() == 'F' | $('#set37_con6').text().trim() == 'False' | $('#set37_con6').text().trim() == 'FALSE' | $('#set37_con6').text().trim() == 'false'){$('#set37_con6').css('color','blue');} else{$('#set37_con6').css('color','red');}
if($('#set37_con7').text().trim() == 't' | $('#set37_con7').text().trim() == 'T' | $('#set37_con7').text().trim() == 'True' | $('#set37_con7').text().trim() == 'TRUE' | $('#set37_con7').text().trim() == 'true'){$('#set37_con7').css('color','blue');} else{$('#set37_con7').css('color','red');}		
if($('#set37_con8').text().trim() == 'f' | $('#set37_con8').text().trim() == 'F' | $('#set37_con8').text().trim() == 'False' | $('#set37_con8').text().trim() == 'FALSE' | $('#set37_con8').text().trim() == 'false'){$('#set37_con8').css('color','blue');} else{$('#set37_con8').css('color','red');}
if($('#set37_con9').text().trim() == 'f' | $('#set37_con9').text().trim() == 'F' | $('#set37_con9').text().trim() == 'False' | $('#set37_con9').text().trim() == 'FALSE' | $('#set37_con9').text().trim() == 'false'){$('#set37_con9').css('color','blue');} else{$('#set37_con9').css('color','red');}


if(($('#set37_con1').text().trim() == 'f' | $('#set37_con1').text().trim() == 'F' | $('#set37_con1').text().trim() == 'False' | $('#set37_con1').text().trim() == 'TRUE' | $('#set37_con1').text().trim() == 'true') && ($('#set37_con2').text().trim() == 't' | $('#set37_con2').text().trim() == 'T' | $('#set37_con2').text().trim() == 'True' | $('#set37_con2').text().trim() == 'TRUE' | $('#set37_con2').text().trim() == 'true') && ($('#set37_con3').text().trim() == 'f' | $('#set37_con3').text().trim() == 'F' | $('#set37_con3').text().trim() == 'False' | $('#set37_con3').text().trim() == 'FALSE' | $('#set37_con3').text().trim() == 'false') && ($('#set37_con4').text().trim() == 't' | $('#set37_con4').text().trim() == 'T' | $('#set37_con4').text().trim() == 'True' | $('#set37_con4').text().trim() == 'TRUE' | $('#set37_con4').text().trim() == 'true') && ($('#set37_con5').text().trim() == 'f' | $('#set37_con5').text().trim() == 'F' | $('#set37_con5').text().trim() == 'False' | $('#set37_con5').text().trim() == 'FALSE' | $('#set37_con5').text().trim() == 'false') && ($('#set37_con6').text().trim() == 'f' | $('#set37_con6').text().trim() == 'F' | $('#set37_con6').text().trim() == 'False' | $('#set37_con6').text().trim() == 'FALSE' | $('#set37_con6').text().trim() == 'false') && ($('#set37_con7').text().trim() == 't' | $('#set37_con7').text().trim() == 'T' | $('#set37_con7').text().trim() == 'True' | $('#set37_con7').text().trim() == 'TRUE' | $('#set37_con7').text().trim() == 'true') && ($('#set37_con8').text().trim() == 'f' | $('#set37_con8').text().trim() == 'F' | $('#set37_con8').text().trim() == 'False' | $('#set37_con8').text().trim() == 'FALSE' | $('#set37_con8').text().trim() == 'false') && ($('#set37_con9').text().trim() == 'f' | $('#set37_con9').text().trim() == 'F' | $('#set37_con9').text().trim() == 'False' | $('#set37_con9').text().trim() == 'FALSE' | $('#set37_con9').text().trim() == 'false'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p37').attr('contenteditable', false); 
			$('.p37').css('color', 'blue'); 
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
