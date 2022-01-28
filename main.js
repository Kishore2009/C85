var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img="mars.jpg";
var roverheight=100;
var roverwidth=100;
rover_x=10;
rover_y=10;
roverhold="rover.png";
function add(){
    mars_img=new Image();
    mars_img.src=background_img;
    mars_img.onload=uploadbackground;

    rover_img=new Image();
    rover_img.src=roverhold;
    rover_img.onload=uploadrover;
}
function uploadbackground(){
    ctx.drawImage(mars_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    console.log(e);
    keyPressed=e.keyCode;
    if (keyPressed=="38"){
        up();
    }
    if (keyPressed=="39"){
        right();
    }
    if (keyPressed=="40"){
        down();
    }
    if (keyPressed=="37"){
        left();
    }
}
function up(){
if (rover_y>=0){
    rover_y=rover_y-10;
    uploadbackground();
    uploadrover();
}
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
    }
    function left(){
        if (rover_x>=0){
            rover_x=rover_x-10;
            uploadbackground();
            uploadrover();
        }
        }
        function right(){
            if (rover_x<=700){
                rover_x=rover_x+10;
                uploadbackground();
                uploadrover();
            }
            }
