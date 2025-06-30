b=document.getElementById("botam")
c=document.getElementById("circle")
o=document.getElementById("ot")
w=document.getElementById("write")
b.addEventListener("click",() =>{
    c.style.transform= "translatex(50px)"
    b.style.backgroundColor="green"
    
    c.style.transition="1s"
    b.style.transition="1s"
    a=w.value.replace(/a/g,"😀").replace(/b/g,"😁").replace(/c/g,"😂").replace(/d/g,"🤣").replace(/e/g,"😃").replace(/f/g,"😄").replace(/g/g,"😅").replace(/h/g,"😆").replace(/i/g,"😉").replace(/j/g,"😊").replace(/k/g,"😋").replace(/l/g,"😎").replace(/m/g,"😍").replace(/n/g,"😘").replace(/o/g,"🥰").replace(/p/g,"😗").replace(/q/g,"😙").replace(/r/g,"😙").replace(/s/g,"🥲").replace(/t/g,"☺️").replace(/u/g,"🙂").replace(/v/g,"🤗").replace(/w/g,"🤩").replace(/x/g,"🤔").replace(/y/g,"🫡").replace(/z/g,"🤨").replace(/ /,"😶‍🌫️")
    o.innerHTML=a
})
