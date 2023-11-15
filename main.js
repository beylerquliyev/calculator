let inpt1=document.querySelector(" #input1 ")
let inpt2=document.querySelector("#input2")
let btn1=document.querySelector("#button1")
let btn2=document.querySelector("#button2")
let btn3=document.querySelector("#button3")
let btn4=document.querySelector("#button4")
let btn5=document.querySelector("#button5")
let result=document.querySelector("#text")


let arr1=[0,0]

btn1.addEventListener("click",function(){
    let value1=inpt1.value
    let value2=inpt2.value
    arr1[0]=Number(value1)
    arr1[1]=Number(value2)
    
    let result1=arr1.reduce(function(a,b){
        return a+b
    })

    result.innerText=`Result:${result1}`   

      
})

btn2.addEventListener("click",function(){
    let value1=inpt1.value
    let value2=inpt2.value
    arr1[0]=Number(value1)
    arr1[1]=Number(value2)
    let result1=arr1.reduce(function(a,b){
        return a-b
    })

    result.innerText=`Result:${result1}`    
})
btn3.addEventListener("click",function(){
    let value1=inpt1.value
    let value2=inpt2.value
    arr1[0]=Number(value1)
    arr1[1]=Number(value2)
    let result1=arr1.reduce(function(a,b){
        return a*b
    })

    result.innerText=`Result:${result1}`    
})

btn4.addEventListener("click",function(){
    let value1=inpt1.value
    let value2=inpt2.value
    arr1[0]=Number(value1)
    arr1[1]=Number(value2)
    if(arr1[0]==0||arr1[1]==0) {
      
    
        result.innerText=`You can't divide by zero`   
    }

    else{
        let result1=arr1.reduce(function(a,b){
            return a/b
        })
    
        result.innerText=`Result:${result1}`   
    }
})


btn5.addEventListener("click",function(){
    inpt1.value=""
    inpt2.value=""
    result.innerText=`Enter operation`    
})




