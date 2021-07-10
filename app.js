var txtinput=document.querySelector(".txt-input");
var btntranslate=document.querySelector(".btn-translate");
var outputdiv=document.querySelector(".output-div");

var sourceUrl="https://api.funtranslations.com/translate/dothraki.json";

 
 function constructUrl(input){
    return sourceUrl+"?"+"text="+input;
};

function clickHandler(){
    var inputText=txtinput.value;
    fetch(constructUrl(inputText))
    .then(response=> response.json())
    .then(json=>{
        outputdiv.innerText=json.contents.translated;
    })
}



btntranslate.addEventListener("click",clickHandler)
