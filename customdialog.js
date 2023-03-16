document.getElementById('alert').addEventListener("click", f1);
document.getElementById('confirm').addEventListener('click', f2);
document.getElementById('prompt').addEventListener('click', f3);
//const d1 = document.getElementById("a1"); ??

//document.getElementById('okc').addEventListener('click', f21); ??
//document.getElementById('cc').addEventListener('click', f22); ??

function f1(){

    document.getElementById("output").innerHTML = "";
    document.getElementById("a1").showModal();

}

function f2(){

    document.getElementById("output").innerHTML = "";
    document.getElementById("C1").showModal();
    document.getElementById('okc').addEventListener('click', f21);
    document.getElementById('cc').addEventListener('click', f22);
}

function f21(){

    document.getElementById("output").innerHTML = "Confirm result : true";
}
function f22(){

    document.getElementById("output").innerHTML = "Confirm result : false";
}

function f3(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("p1").showModal();
    document.getElementById('okp').addEventListener('click', f31);
    document.getElementById('cp').addEventListener('click', f32);
    
    
}

function f31(){

    let dirty = document.getElementById('response').value;
    let clean = DOMPurify.sanitize(dirty);
    //let clean = document.getElementById('response').value; test
    document.getElementById('response').value = "";
    document.getElementById("output").innerHTML = `Prompt result : ${String(clean)}`;
}
function f32(){

    document.getElementById("output").innerHTML = "User didn't enter anything";
    document.getElementById('response').value = "";
}
