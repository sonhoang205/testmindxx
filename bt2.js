let s1 = ['a', 'b','c']
let s2 = ['0', '1','2','3']

let text = ""
for (let i = 0; i < s2.length; i++) {
    if(s1[i] != undefined){
        text += s1[i] + s2[i]
    }else{
        text += s2[i]
    }
    
   
    // console.log(s2[i])
} 
console.log(text);
