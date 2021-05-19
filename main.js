function preview() {}

function setup()
{
    canvas = createCanvas(360,300) ;
    canvas.position(600, 200) ;
    video = createCapture(VIDEO) ;
    video.hide() ;
}

function draw()
{
    image(video,0,0,360,300) ;
}

function take_snapshot()
{
    save('myFilterPic') ;
}