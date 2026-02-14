b=document.getElementById("botam")
c=document.getElementById("circle")
o=document.getElementById("ot")
w=document.getElementById("write")
b.addEventListener("click",() =>{
    c.style.transform= "translateX(50px)"
    b.style.backgroundColor="green"
    c.style.transition="1s"
    b.style.transition="1s"
    a=w.value.replace(/😀/g,"a").replace(/😁/g,"b").replace(/😂/g,"c").replace(/🤣/g,"d").replace(/😃/g,"e").replace(/😄/g,"f").replace(/😅/g,"g").replace(/😆/g,"h").replace(/😉/g,"i").replace(/😊/g,"j").replace(/😋/g,"k").replace(/😎/g,"l").replace(/😍/g,"m").replace(/😘/g,"n").replace(/🥰/g,"o").replace(/😗/g,"p").replace(/😙/g,"q").replace(/😰/g,"r").replace(/🥲/g,"s").replace(/☺️/g,"t").replace(/🙂/g,"u").replace(/🤗/g,"v").replace(/🐻/g,"w").replace(/🤔/g,"x").replace(/🫡/g,"y").replace(/🤨/g,"z")
.replace(/🤩/g,"!").replace(/🤗/g,"@").replace(/😶/g,"$").replace(/🫥/g,"%").replace(/😶‍🌫️/g,"^").replace(/🙄/g,"&").replace(/😏/g,"*").replace(/😣/g,"(").replace(/😥/g,")").replace(/😮/g,"-").replace(/🤐/g,"+").replace(/😯/g,"=").replace(/😪/g,"{").replace(/😫/g,"[").replace(/🥱/g,":").replace(/😴/g,";").replace(/😌/g,"'").replace(/😛/g,'"').replace(/😜/g,",").replace(/🤤/g,"/").replace(/😒/g,"<").replace(/😓/g,">").replace(/😔/g,"?").replace(/😕/g,"]").replace(/🫤/g,"}").replace(/🙃/g,"`").replace(/🫠/g,"~").replace(/🤑/g,"1").replace(/😲/g,"2").replace(/☹️/g,"3").replace(/🙁/g,"4").replace(/😖/g,"5").replace(/😞/g,"6").replace(/😟/g,"7").replace(/😤/g,"8").replace(/😢/g,"9").replace(/😭/g,"0").replace(/😈/g,"A").replace(/👿/g,"B").replace(/👹/g,"C").replace(/👺/g,"D").replace(/👻/g,"E").replace(/💀/g,"F").replace(/☠️/g,"G").replace(/👾/g,"H").replace(/👽/g,"I").replace(/🤖/g,"J").replace(/🎃/g,"K").replace(/😺/g,"L").replace(/😸/g,"M").replace(/😻/g,"N").replace(/😽/g,"O").replace(/😼/g,"P").replace(/😹/g,"Q").replace(/🤲/g,"R").replace(/👐/g,"S").replace(/👊/g,"T").replace(/🙏/g,"U").replace(/👍/g,"V").replace(/🙌/g,"W").replace(/🤜/g,"X").replace(/👌/g,"Y").replace(/✍️/g,"Z")
    o.innerHTML=a
})
