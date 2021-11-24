    /*function validate()
{
    var score=0;
	var q1=document.check.a1;
	var q2=document.check.a2;
	var q3=document.check.a3;
	var q4=document.check.a4;
    var q5=document.check.a5;

    if(q1=="A")(score++;)

	if(display(a1))
	{
		if(display2(a2))
		{
			if(ra3(a3))
			{
				if(ra4(a4))
					{
                        if(ra5(a5))
			                {
					}
			}
		}
	}
	return false;
}	
    var percent = (score/5)*100;
*/
var score=0;

function display() {
    if (document.getElementById('A4').checked) {
        score++;
        document.getElementById("disp").innerHTML
            = document.getElementById("A4").value
            + " is correct";
    }
    else {
        document.getElementById("disp").innerHTML
            = document.getElementById("A4").value
            + " is incorrect";
    }
}

function display2() {

    if (document.getElementById('B5').checked) {
        score++;
        document.getElementById("disp2").innerHTML
            = document.getElementById("B3").value
            + " is correct";
    }
    else {
        document.getElementById("disp2").innerHTML
            = document.getElementById("B5").value
            + " is incorrect";
    }
}


function display3() {

    if (document.getElementById('C1').checked) {
        score++;
        document.getElementById("disp3").innerHTML
            = document.getElementById("C1").value
            + " is correct";
    }
    else {
        document.getElementById("disp3").innerHTML
            = document.getElementById("C1").value
            + " is incorrect";
    }
}


function display4() {

    if (document.getElementById('D3').checked) {
        score++;
        document.getElementById("disp4").innerHTML
            = document.getElementById("D3").value
            + " is correct";
    }
    else {
        document.getElementById("disp4").innerHTML
            = document.getElementById("D3").value
            + " is incorrect";
    }
}

function display5() {
    if (document.getElementById('E5').checked) {
        score++; 
        document.getElementById("disp5").innerHTML
            = document.getElementById("E5").value
            + " is correct"; 
        

    }
    else {
        document.getElementById("disp5").innerHTML
            = document.getElementById("E5").value
            + " is incorrect" ; 
    }
}

function display6() {
    if (document.getElementById('F2').checked && document.getElementById('F4').checked && document.getElementById('F6').checked ) {
        score++; 
        document.getElementById("disp6").innerHTML
            = document.getElementById("F2").value
            + " is correct"; 
    }

    if (document.getElementById('F2').checked || document.getElementById('F4').checked || document.getElementById('F6').checked ) {
        score+=.33; 
        document.getElementById("disp6").innerHTML
            = document.getElementById("F2").value
            + " is not fully correct"; 
        

    }
    else {
        document.getElementById("disp6").innerHTML
            = document.getElementById("F2").value
            + " is incorrect" ; 
    }
}

function display7() {
    if (document.getElementById('G1').checked && document.getElementById('G2').checked && document.getElementById('G3').checked ) {
        score++; 
        document.getElementById("disp7").innerHTML
            = document.getElementById("G2").value
            + " is correct"; 
    }

    else if (document.getElementById('G1').checked || document.getElementById('G2').checked || document.getElementById('G3').checked ) {
        score+=.33; 
        document.getElementById("disp7").innerHTML
            = document.getElementById("G2").value
            + " is correct"; 

    }
    else {
        document.getElementById("disp7").innerHTML
            = document.getElementById("G2").value
            + " is incorrect" ; 
    }
}

function display8() {
    if (document.getElementById('H2').checked && document.getElementById('H4').checked) {
        score++; 
        document.getElementById("disp8").innerHTML
            = document.getElementById("H2").value
            + " is correct"; 
    }
    if (document.getElementById('H2').checked || document.getElementById('H4').checked) {
        score+=.5; 
        document.getElementById("disp8").innerHTML
            = document.getElementById("H2").value
            + " is half correct"; 

    }
    else {
        document.getElementById("disp8").innerHTML
            = document.getElementById("H2").value
            + " is incorrect" ; 
    }
}

function display9() {
    if (document.getElementById('I1').checked && document.getElementById('I3').checked && document.getElementById('I5').checked) {
        score++; 
        document.getElementById("disp9").innerHTML
            = document.getElementById("I2").value
            + " is correct"; 
    }

    else if (document.getElementById('I1').checked && document.getElementById('I3').checked) {
        score+=.20; 
        document.getElementById("disp9").innerHTML
            = document.getElementById("I2").value
            + " is not fully correct"; 

    }

    else if (document.getElementById('I3').checked && document.getElementById('I5').checked) {
        score+=.40; 
        document.getElementById("disp9").innerHTML
            = document.getElementById("I2").value
            + " is not fully correct"; 

    }

    else if (document.getElementById('I3').checked || document.getElementById('I5').checked || document.getElementById('I5').checked) {
        score+=.20; 
        document.getElementById("disp9").innerHTML
            = document.getElementById("I2").value
            + " is not fully correct"; 

    }

    else {
        document.getElementById("disp9").innerHTML
            = document.getElementById("I2").value
            + " is incorrect" ; 
    }
}

function display10() {
    if (document.getElementById('J1').checked && document.getElementById('J4').checked) {
        score++; 
        document.getElementById("disp10").innerHTML
            = document.getElementById("J2").value
            + " is correct"; 
    }

    else if (document.getElementById('J1').checked || document.getElementById('J4').checked) {
        score+=.5; 
        document.getElementById("disp10").innerHTML
            = document.getElementById("J2").value
            + " is half correct"; 
    }
    else {
        document.getElementById("disp10").innerHTML
            = document.getElementById("J2").value
            + " is incorrect" ; 
            
    }
}

function calculate() {
    var percent = (score/10)*100;
    document.getElementById("res").innerHTML
    = percent;
}

/*function calculate() {
    document.getElementById("res").innerHTML
            = cresults;
}


}
    else if (document.getElementById('A2').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("HTML").value
            + " radio button checked";
    }
    else if (document.getElementById('JS').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("JS").value
            + " radio button checked";
    }
    else {
        document.getElementById("disp").innerHTML
            = "No one selected";
    }*/