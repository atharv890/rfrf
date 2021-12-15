function submit(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",{probabilityThreshold:0.7},modelloaded);
    }
    function modelloaded(){
    alert("hi");
    yo=new Audio("Welcome.ogg");
    yo.play();
    classifier.classify(bye);
    }
    function bye(error,results){
    if (error){
    console.log(error);
    }
    else{
    console.log(results);
    }
}