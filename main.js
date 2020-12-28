Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function takeImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="my_image" src="'+data_uri+'"/>';
    });
}
console.log('ML5 Version',ml5.version);

classification=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/guuFIlsb9/model.json",modelLoaded);

function modelLoaded(){
    console.log("The Model Has Been Loaded");
}
function analsyeImage(){
    my_image=document.getElementById("my_image");
    classification.classify(my_image,gotResult);        
}
function gotResult(error,result){
    if(error){
        console.log("ERROR HAS OCCURED, PLEASE TRY AGAIN", error);
    }
    else{
        document.getElementById("name").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence;
    }
}