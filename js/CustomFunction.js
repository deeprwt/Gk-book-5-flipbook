// JavaScript source code
function DragandDropFunc(locatedboxlist, dropableboxlist) {
    for (i = 0; i < locatedboxlist.length; i++) {
        $('#' + locatedboxlist[i] + ' span').css('visibility', 'visible');
        $('#' + locatedboxlist[i] + ' span').css('color', '#0000ff');
      
    }

    for (j = 0; j < dropableboxlist.length; j++) {
        $('#'+dropableboxlist[j]).css('visibility', 'hidden');
    }
}


function InputFieldFunc(listjson) {
    for (var i = 0; i < listjson.length; i++) {
        $('#' + listjson[i].ID).val(listjson[i].Value);
        $('#' + listjson[i].ID).css('color', '#0000ff');
        document.getElementById(listjson[i].ID).disabled = true;
    }
}


function MultiTickInputOptionFunc(IDOption) {
    for (var i = 0; i < IDOption.length; i++) {
        for (var j = 0; j < IDOption[i].OList.length; j++) {
            document.getElementById(IDOption[i].OList[j]).disabled = true;

            if (IDOption[i].OList[j] == IDOption[i].Selected) {
                $('#' + IDOption[i].OList[j]).attr('checked', true);
                $('#' + IDOption[i].ID).val($('#' + IDOption[i].Selected).val());
                $('#' + IDOption[i].ID).css('color', '#0000ff');
            }
            else {
                $('#' + IDOption[i].OList[j]).attr('checked', false);
            }
        }
    }
}

function MCQSFunction(IDOption) {

    for (var i = 0; i < IDOption.length; i++) {
        for (var j = 0; j < IDOption[i].OList.length; j++) {
            document.getElementById(IDOption[i].OList[j]).disabled = true;
            if (IDOption[i].OList[j] == IDOption[i].COID) {
                $('#' + IDOption[i].OList[j]).attr('checked', true);
            }
            else {
                $('#' + IDOption[i].OList[j]).attr('checked', false);
            }
        }
    }
}


function ChooseOneOption(IDOption) {
    for (var i = 0; i < IDOption.length; i++) {
        for (var j = 0; j < IDOption[i].AllID.length; j++) {
            document.getElementById(IDOption[i].AllID[j]).disabled = true;
            if (IDOption[i].AllID[j] == IDOption[i].Value) {
                $('#' + IDOption[i].AllID[j]).attr('checked', true);
            }
            else {
                $('#' + IDOption[i].AllID[j]).attr('checked', false);
            }
        }
    }
}


function MatchTheFollowing(ImageID) {
    $('#' + ImageID).css('display', 'block');
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        lines[i].style.display = "none";
    }
}


function CrossWordSolve(ItemList) {
    for (var i = 0; i < ItemList.length; i++) {
        for (var j = 0; j < ItemList[i].IDList.length; j++) {
            $('#' + ItemList[i].IDList[j]).val(ItemList[i].Alpha);
            $('#' + ItemList[i].IDList[j]).css("color", "#0000ff");
            document.getElementById(ItemList[i].IDList[j]).disabled = true;
        }
    }
}

function CheckBoxSelection(ListAll, ListAns) {
    for (var i = 0; i < ListAll.length; i++) {
        document.getElementById(ListAll[i]).disabled = true;
        if (ListAns.includes(ListAll[i])) {
            document.getElementById(ListAll[i]).checked = true;
        }
        else {
            document.getElementById(ListAll[i]).checked = false;
        }
    }
}


 function CrosswordCheckBoxShowAnswer(list1,listExtra1,ValidateButton) {
				
				for(var i=0; i<list1.length; i++){
					for(m=0; m<list1[i].IDList.length; m++){		
						$('#' +list1[i].IDList[m]).prop('checked', true);			
						if( document.getElementById(list1[i].IDList[m]).checked == true){
					 			
									$('#' +list1[i].IDList[m]).next().css({'background':'#0db14bb5','color':'transparent'});									 
								}
							}
						}
						//For extras 
						for(var q=0; q<listExtra1.length; q++){						 	
							if(document.getElementById(listExtra1[q]).checked == true){ 
								$('#' +listExtra1[q]).next().css({'background':'none','color':'#FFD990'});
								}	
						}
						document.getElementById(ValidateButton).disabled = true;
						$('#' +list3[y]).prop('disabled', true);
					
				}

function CrosswordAnswer(listExtra1)
{
	for(var q=0; q<listExtra1.length; q++){						 	
							if(document.getElementById(listExtra1[q]).checked === true){ 
								$('#' +listExtra1[q]).next().css({'background':'none','color':'#FFD990'});
								}	
						$('#' +listExtra1[q]).prop('disabled', true);
						}
	
}