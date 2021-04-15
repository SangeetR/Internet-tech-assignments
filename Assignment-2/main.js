
// alert("Not Completed yet");
var danger = [];
var form = document.forms['admission'];

if (danger.length > 0)
{
    var war = document.createElement("p");
    for (i=0; i<danger.length; i++)
    {
        war.innerHTML += `${danger[i]} <br>`;
    }
    body.insertBefore(war, body.children[0]);
}

function validate ()
{
    
    if (form["student-name"].value=="")
    {
        danger.push("Student's Name is Required");
    }

    if(isNaN(Date.parse(form["dob"].value)))
    {
        danger.push("Date of Birth is Required");
    }
    
    if (form["father-name"].value=="")
    {
        danger.push("Father's Name is Required");
    }
    
    if (form["senior"].value == "" || form["senior-grade"].value == "")
    {
        danger.push("fill Senior details");
    }

}



function education_manager()
{
    var ug = document.getElementById("ug");
    var pg = document.getElementById("pg");
    if (form["highest-education"].value == "12th")
    {
        ug.hidden = true;
        pg.hidden = true;
        ug.children[1].required = true;
        ug.children[2].required = true;
        pg.children[1].required = true;
        pg.children[2].required = true;
    }
    else if (form["highest-education"].value == "ug")
    {
        ug.hidden = false;
        pg.hidden = true;
        ug.children[1].required = true;
        ug.children[2].required = true;
        pg.children[1].required = false;
        pg.children[2].required = false;
        
    }
    else if (form['highest-education'].value == "pg")
    {
        ug.hidden = false;
        pg.hidden = false;
        ug.children[1].required = true;
        ug.children[2].required = true;
        pg.children[1].required = true;
        pg.children[2].required = true;
        
    }
}
