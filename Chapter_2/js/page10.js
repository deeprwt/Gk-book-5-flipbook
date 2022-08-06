$(function(){

dragdrop_left('box1','text3');
dragdrop_left('box2','text4');
dragdrop_left('box3','text1');
dragdrop_left('box4','text2');
dragdrop_left('box5','text5');

$('#submit01').bind('touchstart click',function(e){
	$('.p10_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});

$('#submit02').click(function(){
	$(this).css('opacity','0.5');
		$('.p10').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit03').click(function(){
if($('#set10_con1').text().trim() == '32'); else{$('#set10_con1').css('color','red');}		

if(($('#set10_con1').text().trim() == '32'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p10').attr('contenteditable', false); 
			$('.p10').css('color', 'blue'); 
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