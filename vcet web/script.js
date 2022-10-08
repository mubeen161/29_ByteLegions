//alert("loading")
function addnewexp(){
   // console.log("Adding new Feild")
   let newN=document.createElement('textarea');
   newN.classList.add('form-control');
   newN.classList.add('weFeild');
   newN.setAttribute('rows',5);
   newN.setAttribute('Columns',50);
   newN.setAttribute('placeholder','Enter Here')
   let weOB=document.getElementById('work');
   let wedddOB=document.getElementById('weadd');
   weOB.insertBefore(newN,wedddOB);
}

function addnewacd(){
    // console.log("Adding new Feild")
    let newNd=document.createElement('textarea');
    newNd.classList.add('form-control');
    newNd.classList.add('eqFeild');
    newNd.setAttribute('rows',5);
    newNd.setAttribute('Columns',50);
    newNd.setAttribute('placeholder','Enter Here')
    let acOB=document.getElementById('acd');
    let acdddOB=document.getElementById('acddd');
    acOB.insertBefore(newNd,acdddOB);
 }


 function generateCV()
 {
    //console.log("Generating CV...!")

    let nameField = document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;


    document.getElementById("nameT2").innerHTML=nameField;



    document.getElementById("contactT").innerHTML=document.getElementById("contact").value;

    document.getElementById("emailT").innerHTML=document.getElementById("Email").value;

    document.getElementById("addressT").innerHTML=document.getElementById("address").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedin").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;


    let wes=document.getElementsByClassName("weFeild");

    let str="";

    for(let e of wes)
    {
        str=str+ `<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML=str;



    let aqs=document.getElementsByClassName("eqFeild");

    let str1='';

    for(let e of aqs)
    {
        str1+=`<li> ${e.value}</li>`;
    }

    document.getElementById("eqT").innerHTML=str1;

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}
function printCV()
{
    window.print();  
}
