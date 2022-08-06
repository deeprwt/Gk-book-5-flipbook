$(function(){

$('#_idContainer018').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer019').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});


$('#_idContainer020').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer044').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});



$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p41').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit02').click(function(){
if($('#set41_con1').text().trim() == 'General Bipin Rawat' | $('#set41_con1').text().trim() == 'general bipin rawat' | $('#set41_con1').text().trim() == 'GENERAL BIPIN RAWAT'){$('#set41_con1').css('color','blue');} else{$('#set41_con1').css('color','red');}		
if($('#set41_con2').text().trim() == 'Admiral Sunil Lanba' | $('#set41_con2').text().trim() == 'admiral sunil lanba' | $('#set41_con2').text().trim() == 'ADMIRAL SUNIL LANBA'){$('#set41_con2').css('color','blue');} else{$('#set41_con2').css('color','red');}
if($('#set41_con3').text().trim() == 'Air Chief Marshal Birender Singh Dhanoa' | $('#set41_con3').text().trim() == 'air chief marshal birender singh dhanoa' | $('#set41_con3').text().trim() == 'AIR CHIEF MARSHAL BIRENDER SINGH DHANOA'){$('#set41_con3').css('color','blue');} else{$('#set41_con3').css('color','red');}


if(($('#set41_con1').text().trim() == 'General Bipin Rawat' | $('#set41_con1').text().trim() == 'general bipin rawat' | $('#set41_con1').text().trim() == 'GENERAL BIPIN RAWAT') && ($('#set41_con2').text().trim() == 'Admiral Sunil Lanba' | $('#set41_con2').text().trim() == 'admiral sunil lanba' | $('#set41_con2').text().trim() == 'ADMIRAL SUNIL LANBA') && ($('#set41_con3').text().trim() == 'Air Chief Marshal Birender Singh Dhanoa' | $('#set41_con3').text().trim() == 'air chief marshal birender singh dhanoa' | $('#set41_con3').text().trim() == 'AIR CHIEF MARSHAL BIRENDER SINGH DHANOA'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p41').attr('contenteditable', false); 
			$('.p41').css('color', 'blue'); 
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