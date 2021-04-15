const CAL_BUTTONS = [ {type: "op", label: "AC"}, 
                      {type: "op", label: "DEL"},
                      {type: "dg", label: "."},
                      {type: "dg", label: "÷"},
                      {type: "dg", label: "7"},
                      {type: "dg", label: "8"},
                      {type: "dg", label: "9"},
                      {type: "dg", label: "X"},
                      {type: "dg", label: "4"},
                      {type: "dg", label: "5"},
                      {type: "dg", label: "6"},
                      {type: "dg", label: "-"},
                      {type: "dg", label: "1"},
                      {type: "dg", label: "2"},
                      {type: "dg", label: "3"},
                      {type: "dg", label: "+"}, 
                      {type: "dg", label: "("}, 
                      {type: "dg", label: "0"}, 
                      {type: "dg", label: ")"}, 
                      {type: "op", label: "="}, ];
const PRI = { "+":1,"-":1,"*":2,"/":2,};
const REG = /(Numpad|[/*+=-]|Enter|Digit|Equal|Slash|Minus|Backspace|ArrowUp|ArrowDown)/;
const ART_REG_END = /[/*+-]$/;
const IN_TO_POST = /([/*+()-])/;

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    alert("To use '/' from keyboard please disable hotkeys or you will face problem in firefox");
}

// TODO :: there should be no 2 operators consequently ::::::::::::::::::::::::::::: Done
// TODO :: Operator at starting problem :::::::::::::::::::::::::::::::::::::::::::: Done
// TODO :: Operator at End problem      :::::::::::::::::::::::::::::::::::::::::::: Done
// TODO :: Add History Using cookies    :::::::::::::::::::::::::::::::::::::::::::: Done
// TODO :: UP key to retrive history    :::::::::::::::::::::::::::::::::::::::::::: Done
// TODO :: Bracket support in place of 00 and C these are litral garbage ::::::::::: Done
// TODO :: PENDING ....... ARROW DOWN :::::::::::::::::::::::::::::::::::::::::::::: Done

//Initialize program
document.getElementById("main-disp").innerHTML = 0;
document.cookie = "";
var cookie_jar=[""];
var history_counter = -1;



function create_button (button_label){
    var node = document.createElement("DIV");
    node.className = "button";
    // node.id = `button${button_label.label}label`;
    node.innerHTML = button_label.label;
    // node.value = button_label.label;
    // node.disabled = true;
    node.setAttribute("onclick", `driver("${button_label.type}","${button_label.label}")`);
    return node;
};

function draw (panel) {
    for (i = 0; i<panel.length; i++)
    {
        document.getElementById("button-panel").appendChild(create_button(CAL_BUTTONS[i]));
    }
    console.log("Calculator Created nicely...");
    // var lineh  = document.getElementsByClassName("button");
    // console.log(lineh.style.height);
    // lineh.style.lineHeight = lineh.style.height ;

}

function driver (type, val) {
    var disp = document.getElementById("main-disp");
    var sec_disp = document.getElementById("sec-disp")
    val = String(val);
    console.log(val);
    if (type != "op"){
        history_counter = cookie_jar.length;
        // console.log(true);
        // disp.innerHTML = "check";
        if (val == "X") { val = "*" }
        else if (val == "÷") { val = "/" }

        if (disp.innerHTML == "0")
        {
            // console.log(disp);
            if (val == "-")
            {
                disp.innerHTML = val;
            }
            else if (!ART_REG_END.test(val))
            {
                disp.innerHTML = val;
            }

        } 
        else 
        {
            if(disp.innerHTML.startsWith("=")) {
                if (ART_REG_END.test(String(val)))
                {
                    disp.innerHTML = disp.innerHTML.slice(1) + val;
                    sec_disp.innerHTML = "";
                }
                else 
                {
                        disp.innerHTML = val;
                        sec_disp.innerHTML = "";
                }
            }
            else if (!ART_REG_END.test(disp.innerHTML))
            {
                disp.innerHTML += val;
            }
            else if (!ART_REG_END.test(val))
            {
                disp.innerHTML += val;
            }
        }
    }
    else{
        switch (val) {
            case "AC": disp.innerHTML = "0";
                       sec_disp.innerHTML = "";
                        break;
            case "DEL": if (disp.innerHTML.startsWith("="))
                        {
                            disp.innerHTML = 0;
                            sec_disp.innerHTML = "";
                        }
                        else if (disp.innerHTML.length == 1)
                        {
                            disp.innerHTML = 0;
                        }
                        else
                        {
                            disp.innerHTML = disp.innerHTML.slice(0,-1);
                        }
                        break;
            case "=" : if (!disp.innerHTML.startsWith("=") && !ART_REG_END.test(disp.innerHTML))
                        {
                            sec_disp.innerHTML = disp.innerHTML;
                            disp.innerHTML = `=${eval(disp.innerHTML)}`;
                            document.cookie += ` ${String(disp.innerHTML.slice(1))}`;
                            cookie_jar = document.cookie.split(" ");
                            history_counter = cookie_jar.length
                            
                        }
                        break;
            case "ArrowUp": console.log("JAR ", cookie_jar);
                            history_counter--;
                            if (cookie_jar[0] != "" && history_counter>-1)
                            {
                                sec_disp.innerHTML = "";
                                disp.innerHTML = cookie_jar[history_counter];
                            }
                            break;
            case "ArrowDown": history_counter++;
                              if (history_counter>-1 && history_counter<cookie_jar.length)
                              {
                                  sec_disp.innerHTML = "";
                                  disp.innerHTML = cookie_jar[history_counter];
                              }
            
        }
        console.log(disp.innerHTML);
    } 
}

document.addEventListener("keydown", (value) => {
    console.log("keydown" , value);
    // console.log(value.key, value.key in CAL_BUTTONS);
    // console.log(lookUpProfile(value.key, type));
    if (value.key == "X") { value.key = "*" }
        else if (value.key == "÷") { value.key = "/" }
    // if (value.key == "/")
    // {
    //     press_esc()
    // }
    
    if (REG.test(String(value.code)))
    {
        if(value.key == "=" || value.key == "Enter")
        {
            console.log("Enter pressed");
            driver ("op", "=");    
        }
        else if (value.key == "Backspace")
        {
            driver("op", "DEL");
        }
        else if (value.key == "ArrowUp")
        {
            driver("op", "ArrowUp");
        }
        else if (value.key == "ArrowDown")
        {
            driver("op","ArrowDown");
        }
        else 
        {
            driver("dg", value.key);
        }
    }
});
document.addEventListener("onload", draw(CAL_BUTTONS));

function precedant(val1, val2)
{
   return PRI[val1]<PRI[val2] ? true : false;
}
console.log("All done");

// ! Dispatch to window 
// function press_esc()
// {
//     e = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : "Escape", charCode : "0",keyCode: "27", shiftKey : false});
    
// }
