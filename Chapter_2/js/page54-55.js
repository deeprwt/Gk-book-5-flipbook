$(function(){
$('#submit01').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.text_24').css('display','block');
		$('.p55').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});


$('#submit02').click(function(){
if($('#set55_con1').text().trim() == 'harry potter' | $('#set55_con1').text().trim() == 'Harry Potter' | $('#set55_con1').text().trim() == 'HARRY POTTER'){$('#set55_con1').css('color','blue');} else{$('#set55_con1').css('color','red');}		
if($('#set55_con2').text().trim() == 'Adventures Of Tom Sawyer' | $('#set55_con2').text().trim() == 'adventures of tom sawyer' | $('#set55_con2').text().trim() == 'Adventures of Tom Sawyer' | $('#set55_con2').text().trim() == 'ADVENTURES OF TOM SAWYER'){$('#set55_con2').css('color','blue');} else{$('#set55_con2').css('color','red');}
if($('#set55_con3').text().trim() == 'jungle book' | $('#set55_con3').text().trim() == 'Jungle Book' | $('#set55_con3').text().trim() == 'JUNGLE BOOK'){$('#set55_con3').css('color','blue');} else{$('#set55_con3').css('color','red');}
if($('#set55_con4').text().trim() == 'gullivers travels' | $('#set55_con4').text().trim() == 'Gullivers Travels' | $('#set55_con4').text().trim() == 'GULLIVERS TRAVELS'){$('#set55_con4').css('color','blue');} else{$('#set55_con4').css('color','red');}
if($('#set55_con5').text().trim() == 'treasure island' | $('#set55_con5').text().trim() == 'Treasure Island' | $('#set55_con5').text().trim() == 'TREASURE ISLAND'){$('#set55_con5').css('color','blue');} else{$('#set55_con5').css('color','red');}
if($('#set55_con6').text().trim() == '101 dalmatians' | $('#set55_con6').text().trim() == '101 Dalmatians' | $('#set55_con6').text().trim() == '101 DALMATIANS'){$('#set55_con6').css('color','blue');} else{$('#set55_con6').css('color','red');}
if($('#set55_con7').text().trim() == 'shrek' | $('#set55_con7').text().trim() == 'Shrek' | $('#set55_con7').text().trim() == 'SHREK'){$('#set55_con7').css('color','blue');} else{$('#set55_con7').css('color','red');}
if($('#set55_con8').text().trim() == 'black beauty' | $('#set55_con8').text().trim() == 'Black Beauty' | $('#set55_con8').text().trim() == 'BLACK BEAUTY'){$('#set55_con8').css('color','blue');} else{$('#set55_con8').css('color','red');}


if(($('#set55_con1').text().trim() == 'harry potter' | $('#set55_con1').text().trim() == 'Harry Potter' | $('#set55_con1').text().trim() == 'HARRY POTTER') && ($('#set55_con2').text().trim() == 'Adventures Of Tom Sawyer' | $('#set55_con2').text().trim() == 'adventures of tom sawyer' | $('#set55_con2').text().trim() == 'Adventures of Tom Sawyer' | $('#set55_con2').text().trim() == 'ADVENTURES OF TOM SAWYER') && ($('#set55_con3').text().trim() == 'jungle book' | $('#set55_con3').text().trim() == 'Jungle Book' | $('#set55_con3').text().trim() == 'JUNGLE BOOK') && ($('#set55_con4').text().trim() == 'gullivers travels' | $('#set55_con4').text().trim() == 'Gullivers Travels' | $('#set55_con4').text().trim() == 'GULLIVERS TRAVELS') && ($('#set55_con5').text().trim() == 'treasure island' | $('#set55_con5').text().trim() == 'Treasure Island' | $('#set55_con5').text().trim() == 'TREASURE ISLAND') && ($('#set55_con6').text().trim() == '101 dalmatians' | $('#set55_con6').text().trim() == '101 Dalmatians' | $('#set55_con6').text().trim() == '101 DALMATIANS') && ($('#set55_con7').text().trim() == 'shrek' | $('#set55_con7').text().trim() == 'Shrek' | $('#set55_con7').text().trim() == 'SHREK'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p55').attr('contenteditable', false); 
			$('.p55').css('color', 'blue'); 
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
