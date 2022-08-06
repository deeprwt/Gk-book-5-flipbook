$(function(){
    $('#submit01').bind('touchstart click',function(e){
            $(this).css('opacity','0.5');
            $(this).css('cursor','default');
            $('.match56').css('display','block');
            $('.incorrect').css('display','none');
            $('.Match1').off("click");
    });
    
    
    
    
    $('#submit02').click(function(){
        $(this).css('opacity','0.5');
            $('#page69_con1').text('C');
            $('#page69_con2').text('A');
            $('#page69_con3').text('N');
            $('#page69_con4').text('A');
            $('#page69_con5').text('D');
            $('#page69_con6').text('A');

            $('#page69_con7').text('G');
            $('#page69_con8').text('L');
            $('#page69_con9').text('A');
            $('#page69_con10').text('S');
            $('#page69_con11').text('G');
            $('#page69_con12').text('O');
            $('#page69_con13').text('W');

            $('#page69_con14').text('W');
            $('#page69_con15').text('U');
            $('#page69_con16').text('H');
            $('#page69_con17').text('N');

            $('#page69_con18').text('B');
            $('#page69_con19').text('R');
            $('#page69_con20').text('E');
            $('#page69_con21').text('K');
            $('#page69_con22').text('I');
            $('#page69_con23').text('N');
            $('#page69_con24').text('G');
            $('#page69_con25').text('B');
            $('#page69_con26').text('O');
            $('#page69_con27').text('U');
            $('#page69_con28').text('N');
            $('#page69_con29').text('D');
            $('#page69_con30').text('R');
            $('#page69_con31').text('I');
            $('#page69_con32').text('E');
            $('#page69_con33').text('S');

            $('#page69_con34').text('L');
            $('#page69_con35').text('A');
            $('#page69_con36').text('C');
            $('#page69_con37').text('K');
            $('#page69_con38').text('D');
            $('#page69_con39').text('E');
            $('#page69_con40').text('A');
            $('#page69_con41').text('T');
            $('#page69_con42').text('H');
    
            $(this).css('opacity','0.7');
            $(this).off('click');
            $(this).css('cursor','default');
            
            $('.p57').each(function(index, val) {
             temp = $(this).attr("data-val");
             $(this).text(temp);
             $(this).css('color','blue');
             $(this).attr('contenteditable', false);
             });
    
    });
    $('#submit03').click(function(){
    if($('#set69_cona1').text().trim() == 'CANADA' | $('#set69_cona1').text().trim() == 'canada'){$('#set69_cona1').css('color','blue');} else{$('#set69_cona1').css('color','red');}		
    if($('#set69_cona2').text().trim() == 'GLASGOW' | $('#set69_cona2').text().trim() == 'glasgow'){$('#set69_cona2').css('color','blue');} else{$('#set69_cona2').css('color','red');}
    if($('#set69_cona3').text().trim() == 'WUHAN' | $('#set69_cona3').text().trim() == 'wuhan'){$('#set69_cona3').css('color','blue');} else{$('#set69_cona3').css('color','red');}
    if($('#set69_cona4').text().trim() == 'BREAKING BOUNDARIES' | $('#set69_cona4').text().trim() == 'breaking boundaries'){$('#set69_cona4').css('color','blue');} else{$('#set69_cona4').css('color','red');}
    if($('#set69_cona5').text().trim() == 'BLACK DEATH' | $('#set69_cona5').text().trim() == 'black death'){$('#set69_cona5').css('color','blue');} else{$('#set69_cona5').css('color','red');}
    
    if($('#page69_con1').text().trim() == 'c' | $('#page69_con1').text().trim() == 'C'){$('#page69_con1').css('color','blue');} else{$('#page69_con1').css('color','red');}
    if($('#page69_con2').text().trim() == 'a' | $('#page69_con2').text().trim() == 'A'){$('#page69_con2').css('color','blue');} else{$('#page69_con2').css('color','red');}
    if($('#page69_con3').text().trim() == 'n' | $('#page69_con3').text().trim() == 'N'){$('#page69_con3').css('color','blue');} else{$('#page69_con3').css('color','red');}
    if($('#page69_con4').text().trim() == 'a' | $('#page69_con4').text().trim() == 'A'){$('#page69_con4').css('color','blue');} else{$('#page69_con4').css('color','red');}
    if($('#page69_con5').text().trim() == 'd' | $('#page69_con5').text().trim() == 'D'){$('#page69_con5').css('color','blue');} else{$('#page69_con5').css('color','red');}
    if($('#page69_con6').text().trim() == 'a' | $('#page69_con6').text().trim() == 'A'){$('#page69_con6').css('color','blue');} else{$('#page69_con6').css('color','red');}
    if($('#page69_con7').text().trim() == 'g' | $('#page69_con7').text().trim() == 'G'){$('#page69_con7').css('color','blue');} else{$('#page69_con7').css('color','red');}
    if($('#page69_con8').text().trim() == 'l' | $('#page69_con8').text().trim() == 'L'){$('#page69_con8').css('color','blue');} else{$('#page69_con8').css('color','red');}
    if($('#page69_con9').text().trim() == 'a' | $('#page69_con9').text().trim() == 'A'){$('#page69_con9').css('color','blue');} else{$('#page69_con9').css('color','red');}
    if($('#page69_con10').text().trim() == 's' | $('#page69_con10').text().trim() == 'S'){$('#page69_con10').css('color','blue');} else{$('#page69_con10').css('color','red');}
    if($('#page69_con11').text().trim() == 'g' | $('#page69_con11').text().trim() == 'G'){$('#page69_con11').css('color','blue');} else{$('#page69_con11').css('color','red');}
    if($('#page69_con12').text().trim() == 'o' | $('#page69_con12').text().trim() == 'O'){$('#page69_con12').css('color','blue');} else{$('#page69_con12').css('color','red');}
    if($('#page69_con13').text().trim() == 'w' | $('#page69_con13').text().trim() == 'W'){$('#page69_con13').css('color','blue');} else{$('#page69_con13').css('color','red');}
    if($('#page69_con14').text().trim() == 'w' | $('#page69_con14').text().trim() == 'W'){$('#page69_con14').css('color','blue');} else{$('#page69_con14').css('color','red');}
    if($('#page69_con15').text().trim() == 'u' | $('#page69_con15').text().trim() == 'U'){$('#page69_con15').css('color','blue');} else{$('#page69_con15').css('color','red');}
    if($('#page69_con16').text().trim() == 'h' | $('#page69_con16').text().trim() == 'H'){$('#page69_con16').css('color','blue');} else{$('#page69_con16').css('color','red');}
    if($('#page69_con17').text().trim() == 'n' | $('#page69_con17').text().trim() == 'N'){$('#page69_con17').css('color','blue');} else{$('#page69_con17').css('color','red');}
    if($('#page69_con18').text().trim() == 'b' | $('#page69_con18').text().trim() == 'B'){$('#page69_con18').css('color','blue');} else{$('#page69_con18').css('color','red');}
    if($('#page69_con19').text().trim() == 'r' | $('#page69_con19').text().trim() == 'R'){$('#page69_con19').css('color','blue');} else{$('#page69_con19').css('color','red');}
    if($('#page69_con20').text().trim() == 'e' | $('#page69_con20').text().trim() == 'E'){$('#page69_con20').css('color','blue');} else{$('#page69_con20').css('color','red');}
    if($('#page69_con21').text().trim() == 'k' | $('#page69_con21').text().trim() == 'K'){$('#page69_con21').css('color','blue');} else{$('#page69_con21').css('color','red');}
    if($('#page69_con22').text().trim() == 'i' | $('#page69_con22').text().trim() == 'I'){$('#page69_con22').css('color','blue');} else{$('#page69_con22').css('color','red');}
    if($('#page69_con23').text().trim() == 'n' | $('#page69_con23').text().trim() == 'N'){$('#page69_con23').css('color','blue');} else{$('#page69_con23').css('color','red');}
    if($('#page69_con24').text().trim() == 'g' | $('#page69_con24').text().trim() == 'G'){$('#page69_con24').css('color','blue');} else{$('#page69_con24').css('color','red');}
    if($('#page69_con25').text().trim() == 'b' | $('#page69_con25').text().trim() == 'B'){$('#page69_con25').css('color','blue');} else{$('#page69_con25').css('color','red');}
    if($('#page69_con26').text().trim() == 'o' | $('#page69_con26').text().trim() == 'O'){$('#page69_con26').css('color','blue');} else{$('#page69_con26').css('color','red');}
    if($('#page69_con27').text().trim() == 'u' | $('#page69_con27').text().trim() == 'U'){$('#page69_con27').css('color','blue');} else{$('#page69_con27').css('color','red');}
    if($('#page69_con28').text().trim() == 'n' | $('#page69_con28').text().trim() == 'N'){$('#page69_con28').css('color','blue');} else{$('#page69_con28').css('color','red');}
    if($('#page69_con29').text().trim() == 'd' | $('#page69_con29').text().trim() == 'D'){$('#page69_con29').css('color','blue');} else{$('#page69_con29').css('color','red');}
    if($('#page69_con30').text().trim() == 'r' | $('#page69_con30').text().trim() == 'R'){$('#page69_con30').css('color','blue');} else{$('#page69_con30').css('color','red');}
    if($('#page69_con31').text().trim() == 'i' | $('#page69_con31').text().trim() == 'I'){$('#page69_con31').css('color','blue');} else{$('#page69_con31').css('color','red');}
    if($('#page69_con32').text().trim() == 'e' | $('#page69_con32').text().trim() == 'E'){$('#page69_con32').css('color','blue');} else{$('#page69_con32').css('color','red');}
    if($('#page69_con33').text().trim() == 's' | $('#page69_con33').text().trim() == 'S'){$('#page69_con33').css('color','blue');} else{$('#page69_con33').css('color','red');}
    if($('#page69_con34').text().trim() == 'l' | $('#page69_con34').text().trim() == 'L'){$('#page69_con34').css('color','blue');} else{$('#page69_con34').css('color','red');}
    if($('#page69_con35').text().trim() == 'a' | $('#page69_con35').text().trim() == 'A'){$('#page69_con35').css('color','blue');} else{$('#page69_con35').css('color','red');}
    if($('#page69_con36').text().trim() == 'c' | $('#page69_con36').text().trim() == 'C'){$('#page69_con36').css('color','blue');} else{$('#page69_con36').css('color','red');}
    if($('#page69_con37').text().trim() == 'k' | $('#page69_con37').text().trim() == 'K'){$('#page69_con37').css('color','blue');} else{$('#page69_con37').css('color','red');}
    if($('#page69_con38').text().trim() == 'd' | $('#page69_con38').text().trim() == 'D'){$('#page69_con38').css('color','blue');} else{$('#page69_con38').css('color','red');}
    if($('#page69_con39').text().trim() == 'e' | $('#page69_con39').text().trim() == 'E'){$('#page69_con39').css('color','blue');} else{$('#page69_con39').css('color','red');}
    if($('#page69_con40').text().trim() == 'a' | $('#page69_con40').text().trim() == 'A'){$('#page69_con40').css('color','blue');} else{$('#page69_con40').css('color','red');}
    if($('#page69_con41').text().trim() == 't' | $('#page69_con41').text().trim() == 'T'){$('#page69_con41').css('color','blue');} else{$('#page69_con41').css('color','red');}
    if($('#page69_con42').text().trim() == 'h' | $('#page69_con42').text().trim() == 'H'){$('#page69_con42').css('color','blue');} else{$('#page69_con42').css('color','red');}
    
    if(($('#set69_cona2').text().trim() == 'EADING' | $('#set69_cona2').text().trim() == 'eading') && ($('#set69_cona3').text().trim() == 'ONCERT' | $('#set69_cona3').text().trim() == 'oncert') && ($('#set69_cona4').text().trim() == 'INEMA' | $('#set69_cona4').text().trim() == 'inema') && ($('#set69_cona5').text().trim() == 'ANCE' | $('#set69_cona5').text().trim() == 'ance') && ($('#page69_con1').text().trim() == 't' | $('#page69_con1').text().trim() == 'T') && ($('#page69_con2').text().trim() == 'h' | $('#page69_con2').text().trim() == 'H') && ($('#page69_con3').text().trim() == 'e' | $('#page69_con3').text().trim() == 'E') && ($('#page69_con4').text().trim() == 'a' | $('#page69_con4').text().trim() == 'A') && ($('#page69_con5').text().trim() == 't' | $('#page69_con5').text().trim() == 'T') && ($('#page69_con6').text().trim() == 'r' | $('#page69_con6').text().trim() == 'R') && ($('#page69_con7').text().trim() == 'e' | $('#page69_con7').text().trim() == 'E') && ($('#page69_con8').text().trim() == 'r' | $('#page69_con8').text().trim() == 'R') && ($('#page69_con9').text().trim() == 'e' | $('#page69_con9').text().trim() == 'E') && ($('#page69_con10').text().trim() == 'a' | $('#page69_con10').text().trim() == 'A') && ($('#page69_con11').text().trim() == 'd' | $('#page69_con11').text().trim() == 'D') && ($('#page69_con12').text().trim() == 'i' | $('#page69_con12').text().trim() == 'I') && ($('#page69_con13').text().trim() == 'n' | $('#page69_con13').text().trim() == 'N') && ($('#page69_con14').text().trim() == 'g' | $('#page69_con14').text().trim() == 'G') && ($('#page69_con15').text().trim() == 'c' | $('#page69_con15').text().trim() == 'C') && ($('#page69_con16').text().trim() == 'o' | $('#page69_con16').text().trim() == 'O') && ($('#page69_con17').text().trim() == 'n' | $('#page69_con17').text().trim() == 'N') && ($('#page69_con18').text().trim() == 'c' | $('#page69_con18').text().trim() == 'C') && ($('#page69_con19').text().trim() == 'e' | $('#page69_con19').text().trim() == 'E') && ($('#page69_con20').text().trim() == 'r' | $('#page69_con20').text().trim() == 'R') && ($('#page69_con21').text().trim() == 't' | $('#page69_con21').text().trim() == 'T') && ($('#page69_con22').text().trim() == 'c' | $('#page69_con22').text().trim() == 'C') && ($('#page69_con23').text().trim() == 'i' | $('#page69_con23').text().trim() == 'I') && ($('#page69_con24').text().trim() == 'n' | $('#page69_con24').text().trim() == 'N') && ($('#page69_con25').text().trim() == 'e' | $('#page69_con25').text().trim() == 'E') && ($('#page69_con26').text().trim() == 'm' | $('#page69_con26').text().trim() == 'M') && ($('#page69_con27').text().trim() == 'a' | $('#page69_con27').text().trim() == 'A') && ($('#page69_con28').text().trim() == 'd' | $('#page69_con28').text().trim() == 'D') && ($('#page69_con29').text().trim() == 'a' | $('#page69_con29').text().trim() == 'A') && ($('#page69_con30').text().trim() == 'n' | $('#page69_con30').text().trim() == 'N') && ($('#page69_con31').text().trim() == 'c' | $('#page69_con31').text().trim() == 'C') && ($('#page69_con32').text().trim() == 'e' | $('#page69_con32').text().trim() == 'E'))
                {
                    $(this).addClass('showanspg11_2answered');		
                    $('#pops').bPopup({
                    onOpen: function() {  }, 
                    onClose: function() {  },
                    autoClose: 5750
                 });
                $('.p57').attr('contenteditable', false); 
                $('.p57').css('color', 'blue'); 
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