var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
   

    var Point = function (x, y) {
        this.x = x;
        this.y = y;
     };
     
     var Polygon = function (color,context) {
        
        this.color = color;
        this.context=context;
     };
     
     Polygon.prototype = {
        Drawpoly: function (x,y,rad,sides) {
           var points = [],
               startAngle= Math.PI/sides;
               angle = startAngle || 0;
     
           for (var i=0; i < sides; ++i) {
              points.push(new Point(x + rad * Math.sin(angle),y - rad * Math.cos(angle)));
              angle += 2*Math.PI/sides;
           }
           
           this.context.closePath();
           this.context.save();
           this.context.beginPath();
     
           this.context.moveTo(points[0].x, points[0].y);
     
           for (var i=1; i < sides; ++i) {
              context.lineTo(points[i].x, points[i].y);
           }
           this.context.fillStyle = this.color;
           this.context.fill();
           this.context.restore();
        }
     
       
     };
 

    function Drawback(color,fill,context){
        //배경
        this.color=color;
        this.fill=fill;
        this.context=context;
    }
    Drawback.prototype={

        rect: function(x,y,w,h){
            if(this.fill==0){
                this.context.strokeStyle=this.color;
                this.context.beginPath();
                this.context.strokeRect(x,y,w,h);
                this.context.closePath();

            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);
                this.context.closePath();

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);
                this.context.strokeStyle='#020202';
                this.context.strokeRect(x,y,w,h);
                this.context.closePath();


            }

        },
        circle: function(x,y,rad){
            if(this.fill==0){
                this.context.strokeStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.stroke();
                this.context.closePath();

            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
                this.context.closePath();

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
                this.context.strokeStyle='#020202';
                this.context.stroke();
                this.context.closePath();
                

            }
        },

        line: function(x1,y1,x2,y2,width){
            
            this.context.beginPath();
            this.context.lineWidth=width;
            this.context.strokeStlye=this.color;
            this.context.moveTo(x1,y1);
            this.context.lineTo(x2, y2);
            this.context.stroke();

        },

        text: function(text,x,y){
            this.context.font ='12px Helvetica';
            this.context.fillStyle=this.color;
            this.context.fillText(text,x,y);      
        }
    }
    dpblue=new Drawback("#2082e7",1,context);
    blue=new Drawback("#50a0f2",1,context);
    wkgreen=new Drawback("#9cdd78",1,context);
    navy=new Drawback("#4d51fa",0,context);
    cyon = new Drawback('#12afb9',1,context);

    white = new Drawback('#eeece0',3,context);
    gray= new Drawback('#a2a2a2',3,context);
    green = new Drawback('#09c813',1,context);
    dkbrown = new Drawback('#712e00',1,context);
    ck = new Drawback('#eca009',1,context);
    red=new Drawback("#dc1414",1,context);
    backcolor=new Drawback("#792904",1,context);
    gold=new Drawback("#c5c100",1,context);
    backcolor2=new Drawback("#a03f4e",1,context);


    player={x:80,y:180,rad:18,bodywidth:30,bodyheight:70 };
    Afood={x:400,y:230};
    jump=0;
    count=0;
    count2=0;

    index=0;
    index2=0;
    foods=[{x:400,y:230}];
    coins={};
    key={right:false};
    life=400;
    ouch={x:300,y:260};
    point=122725;
    coinpoint=8;
   // drawback();

   
setInterval(function(){
        if(count==100){             
            count=0;
            if(index<6)
            index+=1;             
            foods[foods.length]={x:400,y:230};
         
        }
        if(count2==700){        
            count2=0;
           
            coins={x:480,y:230};
         
        }
     

            count+=1
            count2+=1;    
     drawback2();
        update();
       },10)

    

    function drawback2(){
        //배경
        image3rd = new Image();
    image3rd.src='3rd.jpeg';
    image3rd.onload= (e)=>{
        context.drawImage(image3rd,25, 25, 500,300);
        
    
        
    
       
        
        white.circle(500, 45, 10);
        gray.line(495,40,495,50,4); 
        gray.line(505,40,505,50,4); 

     
         


        
        context.beginPath();
           
        context.font ='24px Helvetica';
        context.fillStyle='#dadde4';
        context.fillText("BONUSTIME",50,50);   
        context.fillStyle='white';
        context.fillText(point,400,50);   
        context.closePath();
        cyon.circle(380, 42, 10);

        
        //동전
        gray.circle(280, 42, 7 );
        
        context.font ='15px Helvetica';
        context.fillStyle='white';
        white.text(coinpoint,295,48); 

        //생명바
    context.lineWidth=10;
    context.strokeStyle='#dbd840';
    context.beginPath();
    context.moveTo(50,70);
    context.lineTo(50+life,70);
    context.stroke();



    gold.circle(40, 70, 10 );
    red.circle(40, 70, 5 );
      
    //바닥
    context.beginPath();
    context.lineWidth=6;
    context.strokeStyle='#a6a4a4';
    context.strokeRect(25, 275, 500, 50);
    context.stroke();
    
    context.lineWidth=4;
    for(i=0;i<9;i++){
    context.beginPath();
    context.moveTo(40+i*55,275);
    context.lineTo(40+i*55,325);
    context.stroke();

    context.beginPath();
    context.moveTo(40+i*55+10,275);
    context.lineTo(40+i*55+10,325);
    context.stroke();
    }
    //바닥ui
    context.fillStyle='#e1e6fa';
    context.fillRect(180, 290, 80, 30);
    context.fillRect(180+10+80, 290, 80, 30);

    context.fillStyle='#8d8e96';
    for(i=0;i<3;i++){
    context.fillRect(185+i*25, 295, 20, 20);
    context.strokeStyle='black';
    context.lineWidth=1;
    context.strokeRect(185+i*25, 295, 20, 20);
    }
    for(i=0;i<3;i++){
        context.fillRect(275+i*25, 295, 20, 20);
        context.strokeStyle='black';
        context.strokeRect(275+i*25, 295, 20, 20);
        }
    context.fillStyle='white';
    context.lineWidth=5;

    context.font ='14px Helvetica';

    context.fillText("부스트",205,290); 
    context.fillText("보물",300,290); 
    drawplayer();
    drawouch();
    drawBttn();
    
    for(i=0;i<=index;i++)drawfood(foods[i]);
    drawcoin(coins);

       
    }}





    //먹을거
  
    function drawfood(food){
        context.beginPath();
        context.fillStyle='#2cd9df';
        if(food!=null){
        context.arc(food.x, food.y, 8, Math.PI , Math.PI*3/1 );
        context.fill();
        if(food.x> 33 ){
            food.x-=1;
        }
        else if(food.x==33){
            foods.splice(0,1);
        }
         
        if(food.x<player.x+player.bodywidth && food.x>player.x-player.bodywidth && food.y>player.y+player.rad && food.y<player.y+player.rad+player.bodyheight)
        {
             point+=1000;
            if(life>200)
            life+=10;
            foods.splice(i,1);
        }
    
        }}
        
        function drawcoin(coin){
            context.beginPath();
            context.fillStyle='#020202';
            if(coin!=null){
            context.arc(coin.x, coin.y, 8, Math.PI , Math.PI*3/1 );
            context.fill();
            if(coin.x> 33 ){
                coin.x-=1;
            }
            else if(coin.x==33){
                coins=null;
            }
             
            if(coin.x<player.x+player.bodywidth && coin.x>player.x-player.bodywidth && coin.y>player.y+player.rad && coin.y<player.y+player.rad+player.bodyheight)
            {
                 point+=1000;
                 coinpoint+=10;
                 console.log(coinpoint);
                coins=null;
            }
        
            }}
        //캐릭터
        function drawplayer(){
            context.lineWidth=2;
    
        context.beginPath();
        context.fillStyle='#c87e28';
        context.arc(player.x, player.y, player.rad, Math.PI , Math.PI*3/1 );//머리
        context.fillRect(player.x-player.bodywidth/2,player.y+player.rad,player.bodywidth, player.bodyheight);//몸통
        context.fillRect((player.x-player.bodywidth/2)-5,player.y+player.rad+player.bodyheight*2/3,player.bodywidth/5, player.bodyheight/2);//왼다리
        context.fillRect((player.x+player.bodywidth/2),player.y+player.rad+player.bodyheight*2/3,player.bodywidth/5, player.bodyheight/2);//오른다리
    
    
        context.fill();
    
        context.fillRect(player.x-player.bodywidth/2-player.bodywidth/3-2,player.y+player.rad+3,player.bodywidth/3, player.bodyheight/2);//왼팔
        context.fillRect(player.x-player.bodywidth/2+player.bodywidth/3-8+player.bodywidth,player.y+player.rad+3,player.bodywidth/3, player.bodyheight/2);//오른팔
    
        context.fillStyle='#ff0000';
        context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-15,(player.y+player.rad+3)-20, player.bodyheight/4,player.bodywidth/7);   
    
    
        context.fillStyle='#ffffff';//막대기
        context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-5,(player.y+player.rad+3)-20,player.bodywidth/7, player.bodyheight/2);
        context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-15,(player.y+player.rad+3)-20,player.bodywidth/7, player.bodyheight/4);
        context.fillStyle='#ff0000';
        context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-15+player.bodywidth/7,(player.y+player.rad+3)-20,5,player.bodywidth/7); 
    
    
    
        context.fillStyle='#ffffff';//눈,단추
        context.beginPath();
        context.arc(player.x-7, player.y-3, player.rad-12, 0 , Math.PI*3/2 );
        context.fill();
        context.beginPath();
        context.arc(player.x+7, player.y-3, player.rad-12, 0, Math.PI*3/2);
        context.fill();
    
        context.beginPath();
        context.arc(player.x, player.y+30, 4,Math.PI , Math.PI*3/1);
        context.fill();
        context.beginPath();
        context.arc(player.x, player.y+50, 4,Math.PI , Math.PI*3/1);
        context.fill();
    
        
    
        
    
    
    
    
        context.fillStyle='#6488e8';
        context.beginPath();
        context.arc(player.x-7, player.y-3, player.rad-15, 0 , Math.PI*3/2 );
        context.fill();
        context.beginPath();
        context.arc(player.x+9, player.y-3, player.rad-15, 0, Math.PI*3/2);
        context.fill();  
        context.strokeStyle='#f31515'; 
        context.beginPath();
        context.arc(player.x, player.y+10, player.rad-15, Math.PI/3, Math.PI*3/2);
        context.stroke(); 
    
    
        }
    
        function drawouch(){
            context.beginPath();
        context.fillStyle='#264f17';
        
        context.arc(ouch.x, ouch.y, 8, Math.PI , Math.PI*3/1 );
        context.fill();    
        if(ouch.x> 33 ){
            ouch.x-=1;
        }
        else if(ouch.x==33){
            ouch.x=300;
        }
         
        if(ouch.x<player.x+player.bodywidth && ouch.x>player.x-player.bodywidth && ouch.y>player.y+player.rad && ouch.y<player.y+player.rad+player.bodyheight)
        {
            if(life>0){
                life-=50;
                if(life<0)
                    life=0;
            }
                
            ouch.x=300;
        }
    }
    
    function drawBttn(){ //배지어곡선으로 타원의 버튼 만들기
        var x=100;
        var y=300;
        context.beginPath();
        context.fillStyle='#dcf6ff';
        context.strokeStyle='#dcf6ff';
        
        context.arc(x, y, 20, Math.PI , Math.PI*3/1 );
        context.fill(); 
        context.stroke();
    
        context.beginPath();
        context.arc(x+350, y, 20, Math.PI , Math.PI*3/1 );
        context.fill(); 
        context.stroke();
        
        context.font ='14px Helvetica';
        context.fillStyle='#020202';
        context.fillText("Jump",x-16,y+2);   
        context.fillText("Slide",x+334,y+2);   
     
    }

























function update(){
      if(jump==1)
        {if(player.y>50)
            player.y-=2;
        else if(player.y==50){
        jump=2;  }
    }
    if(jump==2){
        if(player.y<180)
             player.y+=2;
        else if(player.y==180){
            jump=0;
            }
    }
}








    canvas.onmousedown = function (i) {
        var loc = windowToCanvas(i.clientX, i.clientY);
     
        i.preventDefault(); 
        context.beginPath();
        context.arc(100, 300, 20, Math.PI , Math.PI*3/1 );
        if (context.isPointInPath(loc.x, loc.y)) {
            if(jump==0)
                jump=1;
            
         }
        context.beginPath();
        context.arc(450, 300, 20, Math.PI , Math.PI*3/1 );
        if (context.isPointInPath(loc.x, loc.y)) {
            console.log("뒤로가기");
            
         }
                
    };
    


        function windowToCanvas(x, y) { //실좌표계산
            var bbox = canvas.getBoundingClientRect();
            return { x: x - bbox.left * (canvas.width  / bbox.width),
                     y: y - bbox.top  * (canvas.height / bbox.height)
                   };
         }
         






