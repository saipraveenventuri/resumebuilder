
function loadjson(file,callback) {
  var rawFile=new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function() {
if (rawFile.readyState===4 && rawFile.status=="200"){
callback(rawFile.responseText);

}

  }
  rawFile.send();
}
loadjson("resume.json",function(text) {
  var data=JSON.parse(text);
  basic(data.basics);
});
var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');

function basic(basics){
/*leftdiv*/
var lchild1=document.createElement("div");
lchild1.classList.add("lchild1");
var image=document.createElement("img");
image.classList.add("image1");
image.src=basics.picture;
var head1=document.createElement("h1");
head1.textContent=basics.name;
var head2=document.createElement("h2");
head2.textContent=basics.label;
var hr1=document.createElement("hr");
var head3=document.createElement("h3");
head3.textContent=basics.phone;
var head4=document.createElement("h4");
head4.textContent=basics.email;
lchild1.appendChild(image);
left.appendChild(lchild1);
left.appendChild(head1);
left.appendChild(head2);
left.appendChild(hr1);
left.appendChild(head3);
left.appendChild(head4);
/*end of leftdiv*/
/*rightdiv*/
/*div name carer*/
var cobj=document.createElement("div");
cobj.classList.add("career");
var rh3=document.createElement("h3");
rh3.innerHTML="Career Objective";
var rhr=document.createElement("hr");
var rhp=document.createElement("p");
rhp.innerHTML="To obtain a position that challenges me and provides me the opportunity to reach my full potential professionally and personally utilizing my abilities and years of experience in your organization that is progressive intellectually and technically and one in which practices collaborative leadership, integrity and honesty.";
cobj.appendChild(rh3);
cobj.appendChild(rhr);
cobj.appendChild(rhp);
right.appendChild(cobj);
/*div name education*/
var cobj1=document.createElement("div");
var cobj2=document.createElement("div");
cobj1.classList.add("education");
var rh13=document.createElement("h3");
rh13.innerHTML="Educational Qualifications";
var rhr1=document.createElement("hr");
right.appendChild(cobj1);
cobj1.appendChild(rh13);
cobj1.appendChild(rhr1);
cobj2.innerHTML="<table><tr><th>Qualification</th><th>Institution</th><th>Year of Passing</th><th>Score</th></tr><tr><td>Btech</td><td>SIR C R REDDY COLLEGE OF ENGINEERING</td><td>2019</td><td>8.6</td></tr><tr><td>Intermediate</td><td>Sri Chaitanya Junior College</td>    <td>2015</td>    <td>960</td>  </tr>  <tr>    <td>SSC</td>    <td>Sri Gowthami Smart School</td>    <td>2013</td>    <td>9.3</td>  </tr></table>";
cobj1.appendChild(cobj2);
/*div name techinacal*/
var cobj3=document.createElement("div");
cobj3.classList.add("technical");
cobj3.innerHTML="<h3><b>Technical Qualifications</b></h3><hr><h4>Web Technologies:</h4><ul><li><h5>HTML</h5></li><li><h5>CSS</h5></li><li><h5>JS</h5></li>
<li><h5>JAVA</h5></li>
</ul>
<h4>Operating Systems:</h4>
<ul>
<li><h5>Windows</h5></li>
<li><h5>Linux</h5></li>
<li><h5>MAC</h5></li>

</ul>"





/*end of rightdiv*/
}
