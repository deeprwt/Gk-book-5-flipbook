$(window).load(function() {
	$('.tic').on('click',tic1);
});

$(function(){

$('#_idContainer161').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer170').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer164').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer173').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer167').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer176').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer185').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});


$('#_idContainer186').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});



$('#submit01').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
		$('.tic.t1').addClass('tic_green');
		$('.tic').removeClass('tic_black');
		$('.tic').removeClass('tic_red');
		$('.tic').off("click");
});

$('#submit02').click(function(){		
var w=0;
var r=0;
$('.tic').each(function()
{
	if($(this).hasClass('tic_black') && $(this).hasClass('t1'))
	{
	$(this).addClass('tic_green');
	r=r+1;
	}
	else if($(this).hasClass('tic_black') && $(this).hasClass('w1'))
	{
	$(this).addClass('tic_red');
	w=w+1;
	}
	else
	{
	}
});

	if(r == 9 && w == 0) 
	{
	
				$('#submit02').attr('disabled','disabled');	
				$('.tic').off('click');
        	
}
else
{
				

}

});

$('#submit03').click(function(){
	$(this).css('opacity','0.5');
		$('.p39').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});
$('#submit04').click(function(){
if($('#set39_con1').text().trim() == 'DR VIKRAM SARABHAI' | $('#set39_con1').text().trim() == 'dr vikram sarabhai' | $('#set39_con1').text().trim() == 'Dr Vikram Sarabhai'){$('#set39_con1').css('color','blue');} else{$('#set39_con1').css('color','red');}		
if($('#set39_con2').text().trim() == 'slv-3' | $('#set39_con2').text().trim() == 'SLV-3'){$('#set39_con2').css('color','blue');} else{$('#set39_con2').css('color','red');}
if($('#set39_con3').text().trim() == 'BENGALURU' | $('#set39_con3').text().trim() == 'bengaluru' | $('#set39_con3').text().trim() == 'Bengaluru'){$('#set39_con3').css('color','blue');} else{$('#set39_con3').css('color','red');}
if($('#set39_con4').text().trim() == 'CHANDRAYAAN-1' | $('#set39_con4').text().trim() == 'chandrayaan-1' | $('#set39_con4').text().trim() == 'Chandrayaan-1'){$('#set39_con4').css('color','blue');} else{$('#set39_con4').css('color','red');}
if($('#set39_con5').text().trim() == 'ARYABHATTA' | $('#set39_con5').text().trim() == 'aryabhatta' | $('#set39_con5').text().trim() == 'Aryabhatta'){$('#set39_con5').css('color','blue');} else{$('#set39_con5').css('color','red');}
if($('#set39_con6').text().trim() == 'Rakesh Sharma' | $('#set39_con6').text().trim() == 'RAKESH SHARMA' | $('#set39_con6').text().trim() == 'rakesh sharma'){$('#set39_con6').css('color','blue');} else{$('#set39_con6').css('color','red');}
if($('#set39_con7').text().trim() == '2013'){$('#set39_con7').css('color','blue');} else{$('#set39_con7').css('color','red');}


if(($('#set39_con1').text().trim() == 'DR VIKRAM SARABHAI' | $('#set39_con1').text().trim() == 'dr vikram sarabhai' | $('#set39_con1').text().trim() == 'Dr Vikram Sarabhai') && ($('#set39_con2').text().trim() == 'slv-3' | $('#set39_con2').text().trim() == 'SLV-3') && ($('#set39_con3').text().trim() == 'BENGALURU' | $('#set39_con3').text().trim() == 'bengaluru' | $('#set39_con3').text().trim() == 'Bengaluru') && ($('#set39_con4').text().trim() == 'CHANDRAYAAN-1' | $('#set39_con4').text().trim() == 'chandrayaan-1' | $('#set39_con4').text().trim() == 'Chandrayaan-1') && ($('#set39_con5').text().trim() == 'ARYABHATTA' | $('#set39_con5').text().trim() == 'aryabhatta' | $('#set39_con5').text().trim() == 'Aryabhatta') && ($('#set39_con6').text().trim() == 'Rakesh Sharma' | $('#set39_con6').text().trim() == 'RAKESH SHARMA' | $('#set39_con6').text().trim() == 'rakesh sharma') && ($('#set39_con7').text().trim() == '2013'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p39').attr('contenteditable', false); 
			$('.p39').css('color', 'blue'); 
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

function tic1() {
	$(this).toggleClass('coloured');
	$(this).toggleClass('tic_black');
	$(this).removeClass('tic_red');
	$(this).parent().siblings().children().removeClass('tic_black');
	$(this).prevAll().removeClass('tic_black');
	$(this).nextAll().removeClass('tic_black');
	$(this).prevAll().removeClass('tic_red');
	$(this).nextAll().removeClass('tic_red');
}
