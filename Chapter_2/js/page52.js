$(function(){
$('#submit03').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match52').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});
$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p52').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit02').click(function(){
if($('#set52_con1').text().trim() == 'PAINT THE TOWN RED' | $('#set52_con1').text().trim() == 'Paint The Town Red' | $('#set52_con1').text().trim() == 'paint the town red' | $('#set52_con1').text().trim() == 'Paint the town red'){$('#set52_con1').css('color','blue');} else{$('#set52_con1').css('color','red');}		
if($('#set52_con2').text().trim() == 'AS RED AS A ROSE' | $('#set52_con2').text().trim() == 'As Red As A Rose' | $('#set52_con2').text().trim() == 'as red as a rose' | $('#set52_con2').text().trim() == 'As red as a rose'){$('#set52_con2').css('color','blue');} else{$('#set52_con2').css('color','red');}
if($('#set52_con3').text().trim() == 'BORN WITH A SILVER SPOON IN ONE&#x0027;S MOUTH' | $('#set52_con3').text().trim() == 'Born With A Silver Spoon In One&#x0027;s Mouth' | $('#set52_con3').text().trim() == 'born with a silver spoon in one&#x0027;s mouth' | $('#set52_con3').text().trim() == 'Born with a silver spoon in one&#x0027;s mouth'){$('#set52_con3').css('color','blue');} else{$('#set52_con3').css('color','red');}
if($('#set52_con4').text().trim() == 'A PICTURE PAINTS A THOUSAND WORDS' | $('#set52_con4').text().trim() == 'A Picture Paints A Thousand Words' | $('#set52_con4').text().trim() == 'a picture paints a thousand words' | $('#set52_con4').text().trim() == 'A picture paints a thousand words'){$('#set52_con4').css('color','blue');} else{$('#set52_con4').css('color','red');}
if($('#set52_con5').text().trim() == 'GRASS IS ALWAYS GREENER ON THE OTHER SIDE' | $('#set52_con5').text().trim() == 'Grass Is Always Greener On The Other Side' | $('#set52_con5').text().trim() == 'grass is always greener on the other side' | $('#set52_con5').text().trim() == 'Grass is always greener on the other side'){$('#set52_con5').css('color','blue');} else{$('#set52_con5').css('color','red');}


if(($('#set52_con1').text().trim() == 'PAINT THE TOWN RED' | $('#set52_con1').text().trim() == 'Paint The Town Red' | $('#set52_con1').text().trim() == 'paint the town red' | $('#set52_con1').text().trim() == 'Paint the town red') && ($('#set52_con2').text().trim() == 'AS RED AS A ROSE' | $('#set52_con2').text().trim() == 'As Red As A Rose' | $('#set52_con2').text().trim() == 'as red as a rose' | $('#set52_con2').text().trim() == 'As red as a rose') && ($('#set52_con3').text().trim() == 'BORN WITH A SILVER SPOON IN ONE&#x0027;S MOUTH' | $('#set52_con3').text().trim() == 'Born With A Silver Spoon In One&#x0027;s Mouth' | $('#set52_con3').text().trim() == 'born with a silver spoon in one&#x0027;s mouth' | $('#set52_con3').text().trim() == 'Born with a silver spoon in one&#x0027;s mouth') && ($('#set52_con4').text().trim() == 'A PICTURE PAINTS A THOUSAND WORDS' | $('#set52_con4').text().trim() == 'A Picture Paints A Thousand Words' | $('#set52_con4').text().trim() == 'a picture paints a thousand words' | $('#set52_con4').text().trim() == 'A picture paints a thousand words') && ($('#set52_con5').text().trim() == 'GRASS IS ALWAYS GREENER ON THE OTHER SIDE' | $('#set52_con5').text().trim() == 'Grass Is Always Greener On The Other Side' | $('#set52_con5').text().trim() == 'grass is always greener on the other side' | $('#set52_con5').text().trim() == 'Grass is always greener on the other side'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p52').attr('contenteditable', false); 
			$('.p52').css('color', 'blue'); 
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
