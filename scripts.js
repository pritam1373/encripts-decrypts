b=document.getElementById("botam")
c=document.getElementById("circle")
o=document.getElementById("ot")
w=document.getElementById("write")
b.addEventListener("click",() =>{
    c.style.transform= "translatex(50px)"
    b.style.backgroundColor="green"
    
    c.style.transition="1s"
    b.style.transition="1s"
    a=w.value.replace(/a/g,"😀").replace(/b/g,"😁").replace(/c/g,"😂").replace(/d/g,"🤣").replace(/e/g,"😃").replace(/f/g,"😄").replace(/g/g,"😅").replace(/h/g,"😆").replace(/i/g,"😉").replace(/j/g,"😊").replace(/k/g,"😋").replace(/l/g,"😎").replace(/m/g,"😍").replace(/n/g,"😘").replace(/o/g,"🥰").replace(/p/g,"😗").replace(/q/g,"😙").replace(/r/g,"😙").replace(/s/g,"🥲").replace(/t/g,"☺️").replace(/u/g,"🙂").replace(/v/g,"🤗").replace(/w/g,"🤩").replace(/x/g,"🤔").replace(/y/g,"🫡").replace(/z/g,"🤨").replace(/ /,"😶‍🌫️").replace(/!/g,"🤩").replace(/@/g,"🤗").replace(/\$/g,"😶").replace(/%/g,"🫥").replace(/\^/g,"😶‍🌫️").replace(/&/g,"🙄").replace(/\*/g,"😏").replace(/\(/g,"😣").replace(/\)/g,"😥").replace(/-/g,"😮").replace(/\+/g,"🤐").replace(/=/g,"😯").replace(/\{/g,"😪").replace(/\[/g,"😫").replace(/:/g,"🥱").replace(/;/g,"😴").replace(/'/g,"😌").replace(/"/g,"😛").replace(/,/g,"😜").replace(/\//g,"🤤").replace(/</g,"😒").replace(/>/g,"😓").replace(/\?/g,"😔").replace(/\]/g,"😕").replace(/\}/g,"🫤").replace(/\`/g,"🙃").replace(/~/g,"🫠").replace(/1/g,"🤑").replace(/2/g,"😲").replace(/3/g,"☹️").replace(/4/,"🙁").replace(/5/g,"😖").replace(/6/g,"😞").replace(/7/g,"😟").replace(/8/g,"😤").replace(/9/g,"😢").replace(/0/g,"😭").replace(/A/g,"😈").replace(/B/g,"👿").replace(/C/g,"👹").replace(/D/g,"👺").replace(/E/g,"👻").replace(/F/g,"💀").replace(/G/g,"☠️").replace(/H/g,"👾").replace(/I/g,"👽").replace(/J/g,"🤖").replace(/K/g,"🎃").replace(/L/g,"😺").replace(/M/g,"😸").replace(/N/g,"😻").replace(/O/g,"😽").replace(/P/g,"😼").replace(/Q/g,"😹").replace(/R/g,"🤲").replace(/S/g,"👐").replace(/T/g,"👊").replace(/U/g,"🙏").replace(/V/g,"👍").replace(/W/g,"🙌").replace(/X/g,"🤜").replace(/Y/g,"👌").replace(/Z/g,"✍️")
    o.innerHTML=a
})
