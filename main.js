//https://teachablemachine.withgoogle.com/models/H4ZUCnyWU/

console.log("ml5 version",ml5.version);

function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/H4ZUCnyWU/model.json",modelloaded);
}


function modelloaded(){
console.log("Model is loaded");
classifier.classify(gotresults);
}


function gotresults(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("sound").innerHTML=results[0].label;
}
}