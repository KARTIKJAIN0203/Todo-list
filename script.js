let input=document.getElementById("input");
let place=document.body.children[1].children[1];
let button=document.getElementById("button");
button.addEventListener('click',addElement)
function addElement(e){
       if(input.value===""){
              alert("please enter some text first");
       }else{
              let text=input.value;
              console.log(text);
              let newList=document.createElement("li");
              newList.className="element"
              newList.innerHTML=`<p class="item">${text}</p>
              <button class="edit" onclick="hataaDo(this)">Done</button>
              `;
              place.append(newList);
              input.value="";       
       }
       input.focus();
}

let done=document.getElementsByClassName("element");

function hataaDo(e){
gsap.to(e.parentElement,{duration:2,x:1000});
     setTimeout(function() {
       e.parentElement.remove();
      }, 350);
}

// addu.addEventListener('click',(e)=>{
//    let text=input.textContent;
//    let newList=document.createElement("li");
//    newList.innerHTML=`<li class="element">${text}
//    <button class="edit">Done</button>
//    <button class="Remove">Remove</button>
//    </li>`;

// });



