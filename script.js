let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let str_new=[]
function cryptographic (str_len,repeat,str){
    if(typeof str==="string"){
        str=str.split('')
    }
    console.log(str)
    let temp=str[0];
    str[0]=str[str_len-1]
    str[str_len-1]=temp
    console.log(str)
    for (let i=0;i<str.length;i++){
        for (let j=0;j<str.length;j++){
            if(alphabet[j]===str[i]){
                str_new[i]=alphabet[j+1]
               break
            }
        }
    }
    console.log(str_new)


}
cryptographic(3,1,'abc')
console.log()