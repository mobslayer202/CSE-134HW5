var blogs = [];
var id = 0;
var add = true; // dont ask why
var t0 = -1;
var last = false;// dont ask why 2
var lastInd = 0;// dont ask why 2
var ind = 1;// dont ask why 2


document.getElementById('add').addEventListener("click", f1);


document.getElementById('check').addEventListener("click", f2); 
//const del = event => { 
    //event.target.
//}

document.addEventListener("DOMContentLoaded", bootup);
window.addEventListener("beforeunload", save);

function save(){
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function bootup(){
    let result = JSON.parse(localStorage.getItem('blogs'));

    if(result == null){

    }
    else{
        blogs = result;
        repop();
    }
}

function repop(){
    for(let i = 0; i < blogs.length; i++){
        let t = blogs[i].title;
        let s = blogs[i].summary;
        let d = blogs[i].date;

        newBlog(t,s,d);
    }
}

function fd(event){

    remBlogs(event.parentNode.title);
    event.parentNode.remove();
}

function remBlogs(t){
    for(let x = 0; x < blogs.length; x++){
        if(blogs[x].title == t){
            let n = blogs.splice(x,1);
            break;
        }
    }
}

function fe(event){

    let t = event.parentNode.title;
    let s = event.parentNode.dataset.summary;
    let d = event.parentNode.dataset.date;

    
    document.getElementById('t').value = t;
    document.getElementById('s').value = s;

    document.getElementById('d').value = d;
    document.getElementById("a1").showModal();
    //console.log(event);
    add = false;
    //document.getElementById('oka').addEventListener('click', function(){fe1(event,t)});
    t0 = t;

    
    ind = 1;
    document.getElementById('oka').addEventListener('click', lind);
    document.getElementById('ca').addEventListener('click', lind);
    document.getElementById('oka').addEventListener('click', function(){fe1(event);});
    
    
}

function lind(){
    console.log("x");
    if(!add){
        lastInd ++;
    }
}

//function fe1(event,t0){
function fe1(event){
    if(!add){
    last = false;
    console.log("lastind");
    console.log(lastInd);
    console.log("ind");
    console.log(ind);
    
    if(lastInd == ind){
        last = true;
    }
    console.log(last);
    
    if(last){
        first = false;
        console.log(event);
        //console.log("x");
        let td = document.getElementById('t').value;
        let sd = document.getElementById('s').value;
        let dd = document.getElementById('d').value;

        let t = DOMPurify.sanitize(td);
        let s = DOMPurify.sanitize(sd);
        let d = DOMPurify.sanitize(dd);

        let p = event.parentNode.getElementsByTagName('p')[0];
        //console.log(event);

        p.innerHTML = String("Title: "+t+" Summary: "+s+" Date: "+d);
        event.parentNode.setAttribute("title", t);
        event.parentNode.setAttribute("data-summary", s);
        event.parentNode.setAttribute("data-date", d);

        //edBlogs(t0,t,s,d);
        edBlogs(t,s,d);
    }
    ind += 1;
    }   
}

//function edBlogs(t0,t,s,d){
function edBlogs(t,s,d){
    for(let x = 0; x < blogs.length; x++){
        if(blogs[x].title == t0){
            blogs[x].title = t;
            blogs[x].summary = s;
            blogs[x].date = d;
            break;
        }
    }
}

function f1(){
    document.getElementById('t').value = "";
    document.getElementById('s').value = "";

    document.getElementById('d').value = "";
    document.getElementById("a1").showModal();

    add = true;
    document.getElementById('oka').addEventListener('click', f11);
}

function f11(){
    
    if(add){
        let td = document.getElementById('t').value;
        let sd = document.getElementById('s').value;
        let dd = document.getElementById('d').value;

        let t = DOMPurify.sanitize(td);
        let s = DOMPurify.sanitize(sd);
        let d = DOMPurify.sanitize(dd);

        let blog = {'title': t, 'date':d, 'summary':s};
        blogs.push(blog);

        newBlog(t,s,d);
    }

}

function newBlog(x, y, z){
    let node = document.createElement('li');
    //node.appendChild(document.createTextNode(String("Title: "+x+" Summary: "+y+" Date: "+z)));

    node.setAttribute("title", x);
    node.setAttribute("data-summary", y);
    node.setAttribute("data-date", z);

    let words = document.createElement('p');
    words.innerHTML = String("Title: "+x+" Summary: "+y+" Date: "+z);

    node.appendChild(words);

    let edit = document.createElement('button');
    edit.innerHTML = "<i class=\"fa fa-pencil\"></i>";
    edit.setAttribute("id", `e${id}`);

    let del = document.createElement('button');
    del.innerHTML = "<i class=\"fa fa-trash\"></i>";
    del.setAttribute("id", `d${id}`);

    node.appendChild(edit);
    node.appendChild(del);

    let list = document.getElementById('blogs');
    list.appendChild(node);

    let event = document.getElementById(`d${id}`);
    event.addEventListener("click", function(){fd(event);});

    let event1 = document.getElementById(`e${id}`);
    event1.addEventListener("click", function(){fe(event1);});
    id += 1;
}


function f2(){
    blogs.forEach(function(entry){
        console.log(entry);
    });
}

