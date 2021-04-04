var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    key = {right:false};
    player={x:50,y:400,width:50,height:80};
    jump=0;




    setInterval(function(){
        update();
        draw();
      },10)
      
      
      





    context.strokeStyle='black';

    context.strokeRect(25, 25, 300, 500);
    context.stroke();


    function draw(){
        context.save();

        context.fillStyle = "white";
  context.fillRect(26,26,299,499);




        context.strokeStyle='blue';
        context.strokeRect(player.x, player.y, player.width,player.height);
        context.stroke();

        context.restore();


      }
      function update(){
      if(jump==2)
        {if(player.y>100)
            player.y-=20;
        else if(player.y==100){
            console.log(jump);
        jump=3;  }
    }
    if(jump==3){
        if(player.y<400)
             player.y+=20;
        else if(player.y==400){
            jump=0;
            console.log(jump);}
    }
}



    window.addEventListener("keydown",(e)=>{
        if(jump==0)
            jump=1;
        console.log(e.key)
       if(e.key=='ArrowRight')
       key.right=true;
    });
    window.addEventListener("keyup",(e)=>{if(jump==1)jump=2;});
    
    