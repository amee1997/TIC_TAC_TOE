
  var butt="0";
  var count=0;
    // function for fixing the button values
    function fix(x, butt) {
       count++;
       if (x==1) {
       var button = document.getElementById("btn1");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==2) {
       var button = document.getElementById("btn2");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==3) {
       var button = document.getElementById("btn3");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==4) {
       var button = document.getElementById("btn4");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==5) {
       var button = document.getElementById("btn5");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==6) {
       var button = document.getElementById("btn6");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==7) {
       var button = document.getElementById("btn7");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==8) {
       var button = document.getElementById("btn8");
       button.value = butt;
       button.disabled=true;
       }
       else if (x==9) {
       var button = document.getElementById("btn9");
       button.value = butt;
       button.disabled=true;
       }
       start();
       }
// function for alternatively placing x and o
function myFunction(button) {
      if (butt=="X") {
      butt="0";
      fix(button, butt);//calling the fix() function
      document.getElementById("btn12").style.visibility="hidden";
      document.getElementById("btn11").style.visibility="visible";
      }
      else if (butt=="0") {
      butt="X";
      fix(button, butt);
      document.getElementById("btn11").style.visibility="hidden";
      document.getElementById("btn12").style.visibility="visible";
      }
      }

      // function for checking the winner among player 1 and player 2
      function start() {

          var t1 = document.getElementById("btn1").value;
          var t2 = document.getElementById("btn2").value;
          var t3 = document.getElementById("btn3").value;
          var t4 = document.getElementById("btn4").value;
          var t5 = document.getElementById("btn5").value;
          var t6 = document.getElementById("btn6").value;
          var t7 = document.getElementById("btn7").value;
          var t8 = document.getElementById("btn8").value;
          var t9 = document.getElementById("btn9").value;


          if ((t1 == "X" || t1 == "0") && (t1 == t2) && (t2 == t3)) {
            document.getElementById("btn1").style.backgroundColor="green";
            document.getElementById("btn2").style.backgroundColor="green";
            document.getElementById("btn3").style.backgroundColor="green";
              result(t1);
          }

          else if ((t1 == "X" || t1 == "0") && (t1 == t4) && (t4 == t7)) {
            document.getElementById("btn1").style.backgroundColor="green";
            document.getElementById("btn4").style.backgroundColor="green";
            document.getElementById("btn7").style.backgroundColor="green";
              result(t1);
          }

          else if ((t9 == "X" || t9 == "0") && (t9 == t8) && (t8 == t7)) {
            document.getElementById("btn9").style.backgroundColor="green";
            document.getElementById("btn8").style.backgroundColor="green";
            document.getElementById("btn7").style.backgroundColor="green";
              result(t9);
          }

          else if ((t9 == "X" || t9 == "0") && (t9 == t6) && (t6 == t3)) {
            document.getElementById("btn9").style.backgroundColor="green";
            document.getElementById("btn6").style.backgroundColor="green";
            document.getElementById("btn3").style.backgroundColor="green";
              result(t9);
          }

          else if ((t4 == "X" || t4 == "0") && (t4 == t5) && (t5 == t6)) {
            document.getElementById("btn4").style.backgroundColor="green";
            document.getElementById("btn5").style.backgroundColor="green";
            document.getElementById("btn6").style.backgroundColor="green";
              result(t4);
          }

          else if ((t2 == "X" || t2 == "0") && (t2 == t5) && (t5 == t8)) {
            document.getElementById("btn2").style.backgroundColor="green";
            document.getElementById("btn5").style.backgroundColor="green";
            document.getElementById("btn8").style.backgroundColor="green";
              result(t2);
          }

          else if ((t1 == "X" || t1 == "0") && (t1 == t5) && (t5 == t9)) {
            document.getElementById("btn1").style.backgroundColor="green";
            document.getElementById("btn5").style.backgroundColor="green";
            document.getElementById("btn9").style.backgroundColor="green";
              result(t1);
          }

          else if ((t7 == "X" || t7 == "0") && (t7 == t5) && (t5 == t3)) {
            document.getElementById("btn7").style.backgroundColor="green";
            document.getElementById("btn5").style.backgroundColor="green";
            document.getElementById("btn3").style.backgroundColor="green";
              result(t1);
          }
          else if(count==9){
            popuptext = document.getElementById("text");
            popuptext.innerHTML = "Game over! Nice try!";
            var pop = document.getElementById("popup");
            pop.style.visibility = "visible";
          }
      }
      // popupping function for showing the result
      function result(winner) {
          buttonselect();
          popuptext = document.getElementById("text");
          popuptext.innerHTML =winner + " " + "wins";
          var pop = document.getElementById("popup");
          var overlay = document.getElementById("overlay");
          pop.style.visibility = "visible";
          overlay.style.visibility = "visible";
        }
      // function for resetting the button
      function buttonselect() {
          var t1 = document.getElementById("btn1");
          var t2 = document.getElementById("btn2");
          var t3 = document.getElementById("btn3");
          var t4 = document.getElementById("btn4");
          var t5 = document.getElementById("btn5");
          var t6 = document.getElementById("btn6");
          var t7 = document.getElementById("btn7");
          var t8 = document.getElementById("btn8");
          var t9 = document.getElementById("btn9");

          t1.disabled = true;
          t2.disabled = true;
          t3.disabled = true;
          t4.disabled = true;
          t5.disabled = true;
          t6.disabled = true;
          t7.disabled = true;
          t8.disabled = true;
          t9.disabled = true;
          t1.disabled = true;
}
// function for resetting the entire game
function reset(){
 var b1 = document.getElementById("btn1");
 var b2 = document.getElementById("btn2");
 var b3 = document.getElementById("btn3");
 var b4 = document.getElementById("btn4");
 var b5 = document.getElementById("btn5");
 var b6 = document.getElementById("btn6");
 var b7 = document.getElementById("btn7");
 var b8 = document.getElementById("btn8");
 var b9 = document.getElementById("btn9");

      b1.value="";
      b2.value="";
      b3.value="";
      b4.value="";
      b5.value="";
      b6.value="";
      b7.value="";
      b8.value="";
      b9.value="";
 b1.disabled=false;
 b2.disabled=false;
 b3.disabled=false;
 b4.disabled=false;
 b5.disabled=false;
 b6.disabled=false;
 b7.disabled=false;
 b8.disabled=false;
 b9.disabled=false;
 document.getElementById("popup").style.visibility="hidden";
 document.getElementById("overlay").style.visibility="hidden";
}
