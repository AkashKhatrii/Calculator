let value = ""
let displaytext = ""
function myFunc(x){
    if (x == 'x'){
        value += '*';
        displaytext += x
        document.getElementById("text").innerHTML = displaytext;
    }

    else if (x == '+')
    {   
        value += '+';
        displaytext += x
        document.getElementById("text").innerHTML = displaytext;
    }
        
    else if (x =='-'){
         value += '-';
        displaytext += x
        document.getElementById("text").innerHTML = displaytext;
        }

        else if (x =='/'){
            value += '/';
            displaytext += x
            document.getElementById("text").innerHTML = displaytext;
        }

        else if (x =='%'){
            value += '%';
            displaytext += x
            document.getElementById("text").innerHTML = displaytext;
        }

        else if (x == 'c'){
            value = ""
            displaytext = ""
            document.getElementById("text").innerHTML = displaytext;
        }

        else if (x == 'ce')
        {
            console.log(displaytext)
            if (displaytext.length!= 0) {
                displaytext = displaytext.substring(0, displaytext.length-1)
                value = value.substring(0, value.length-1)
            }
            document.getElementById("text").innerHTML = displaytext;
            console.log(displaytext)

        }

        else if (x == '='){
            value = eval(value);
            document.getElementById("text").innerHTML = value;
            value = ""
            displaytext = ""

        }
        else{
            value += x;
            displaytext += x
            document.getElementById("text").innerHTML = displaytext;

        }
        }


        function changeMode(){
            var btnMode = document.getElementById("mode");
            mode = btnMode.innerHTML;
            calcContainer = document.getElementById("container");
            display = document.getElementById("display");
            mul = document.getElementById('mul');
            div = document.getElementById('div');
            add = document.getElementById('add');
            sub = document.getElementById('sub');
            equal = document.getElementById('equals');
            btnsop = document.getElementsByClassName("btn-op")
            btns = document.getElementsByClassName("btn")
            c = document.getElementById('c');
            ce = document.getElementById('ce')
            mod = document.getElementById('mod');
            if ( mode.toLowerCase() == 'dark mode'){
                // body = document.getElementsByTagName("body")
                console.log('Ho');
                document.body.style.backgroundColor = "#505050";
                calcContainer.style.backgroundColor = "#282828";
                display.style.backgroundColor = "#505050"
                display.style.color = "white"
                btnMode.innerHTML = "Light Mode"
                btnMode.style.backgroundColor = "#E8E8E8"; 
                btnMode.style.color = "black"
                mul.style.backgroundColor = "#FF9500"
                div.style.backgroundColor = "#FF9500"
                add.style.backgroundColor = "#FF9500"
                sub.style.backgroundColor = "#FF9500"
                equal.style.backgroundColor = "#FF9500"
                
                mul.style.color = "white"
                div.style.color = "white"
                add.style.color = "white"
                sub.style.color = "white"
                equal.style.color = "white"
                var i;
                for(i = 0; i < btns.length;i ++)
                {
                    btns[i].style.backgroundColor = "#505050"
                    btns[i].style.color = "white"
                }

                c.style.backgroundColor = "#D4D4D2"
                ce.style.backgroundColor = "#D4D4D2"
                mod.style.backgroundColor = "#D4D4D2"

                c.style.color = "black"
                ce.style.color = "black"
                mod.style.color = "black"
                
            }

            else{
                document.body.style.backgroundColor = "white";
                calcContainer.style.backgroundColor = "#E8E8E8";
                display.style.backgroundColor = "white"
                display.style.color = "black"
                btnMode.innerHTML = "Dark Mode"
                btnMode.style.backgroundColor = "#606060"; 
                btnMode.style.color = "black"
                var i;
                for(i = 0; i < btns.length;i ++)
                {
                    btns[i].style.backgroundColor = "white"
                    btns[i].style.color = "black"
                }

                var j;
                for(j = 0; i < btnsop.length;i ++)
                {
                    btnsop[i].style.backgroundColor = "white"
                }

                mul.style.backgroundColor = "white"
                div.style.backgroundColor = "white"
                add.style.backgroundColor = "white"
                sub.style.backgroundColor = "white"
                equal.style.backgroundColor = "white"

                mul.style.color = "black"
                div.style.color = "black"
                add.style.color = "black"
                sub.style.color = "black"
                equal.style.color = "black"


                
                

            }
        }