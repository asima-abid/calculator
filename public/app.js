// function getNumber(num){
//     var result = document.getElementById("result");
//     result.value += num;  
//  } 

// function getReult()
// {
//     var result = document.getElementById("result");
//     console.log(result.value);
// }
// function insert(num)
// {
//     document.form.textveiw.value=document.form.textveiw.value+num;
// }
function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
 result.value="0"
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
    // console.log(result.value)
}
