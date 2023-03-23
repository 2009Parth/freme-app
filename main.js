function preload()
{

}





function setup()
{
   canvas = createCanvas(600, 450)
   canvas.position(200, 170);
   rect(105, 55, 400, 350, 20);
   circle(105, 60, 60,);
   circle(505, 60, 60);
   circle(505, 400, 60);
   circle(105, 400, 60);
   video = createCapture(VIDEO);
   video.hide();
}






function draw()
{
   image(video, 160, 82.5, 300, 300);
}






function take_snapshot()
{
    save('my_image.png')
}