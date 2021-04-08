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

            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);
                this.context.strokeStyle='#020202';
                this.context.strokeRect(x,y,w,h);


            }

        },
        circle: function(x,y,rad){
            if(this.fill==0){
                this.context.strokeStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.stroke();
            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
                this.context.strokeStyle='#020202';
                this.context.stroke();
                

            }
        },

        line: function(x1,y1,x2,y2,width){
            this.context.lineWidth=width;
            this.context.strokeStlye=this.color;
            this.context.beginPath();
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

    function UpBar(){

        // context.strokeStyle='#020202';
        // context.fillStyle='#792904';
        
    
        // context.fillRect(25, 25, 500, 300);
        // context.stroke();
        // context.fill();


        // context.strokeStyle='#7b6e6e';
        // context.lineWidth=1;
        // for(i=0;i<=5;i++){
        // context.beginPath();
        // context.moveTo(70+i*80,25);
        // context.lineTo(70+i*80,322);
        // context.stroke();
        // }
        // for(i=0;i<=2;i++){
        //     context.beginPath();
        //     context.moveTo(25,70+i*80);
        //     context.lineTo(525,70+i*80);
        //     context.stroke();
        //     }

    bar = new Drawback('#5b5a4c',2,context);
    
    bar.rect(60,40,60,15);
    bar.rect(140,40,80,15);
    bar.rect(230,40,100,15);
    barwhite = new Drawback('#eeece0',3,context);
    
    barwhite.rect(350,40,100,15);
    
    bargreen = new Drawback('#09c813',1,context);
    
    bargreen.circle(220,47,7);
    bargreen.circle(330,47,7);
    bargreen.circle(450,47,7);
    
    
    
    
    barwhite.text("53%",85,52);
    barwhite.text("923",180,52);
    barwhite.text("15,460",285,52);
    barcyon = new Drawback('#12afb9',1,context);
    
    barcyon.circle(500,47,7);
    
    barred=new Drawback('#dc1414',2,context);
    for(i=0;i<6;i++)barred.circle(380+i*7,48,7);


star=new Polygon("#f7ec24",context);
star.Drawpoly(60,45,10,5);
crystal=new Polygon("#48e8ff",context);
crystal.Drawpoly(145,45,10,6);
bargray=new Drawback("#9e9d9d",1,context);
bargray.circle(239,47 ,10);
    }
    image3rd = new Image();
    image3rd.src='1st.jpeg';
    image3rd.onload= (e)=>{
        context.drawImage(image3rd,25, 25, 500,300);
        
    UpBar();

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
    black= new Drawback('#020202',1,context);



brown = new Drawback('#c3580d',3,context);





brown.rect(100,70,100,30);
brown.rect(200,80,100,20);
brown.rect(100,100,200,200);


white.rect(110,110,85,25);
white.rect(100,135,200,15);
for(i=0;i<5;i++)white.rect(100,150+i*30,200,30);




for(i=0;i<4;i++)gray.rect(105,190+30*i,10,10);

for(i=0;i<5;i++)gray.circle(140,165+i*30,7);




cyon.circle(400,90,10);
cyon.rect(400,80,70,20);
cyon.circle(470,90,10);
cyon.rect(370,240,70,20);
cyon.circle(370,250,10);
cyon.circle(440,250,10);



for(i=0;i<5;i++){
green.circle(270,165+i*30,7);
green.rect(270,158+i*30,20,14);
green.circle(290,165+i*30,7);
}
green.circle(370,290,10);
green.rect(370,280,70,20);
green.circle(440,290,10);

brown.rect(100,300,200,23);

dkbrown.rect(210,85,30,12);
dkbrown.rect(260,85,30,12);

dkbrown.rect(205,110,85,25);
dkbrown.rect(115,305,39,15);
dkbrown.rect(160,305,40,8);

// 쿠키ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

ck.circle(410,150,16);
ck.rect(401,160,18,30);
ck.rect(398,190,7,20);
ck.rect(416,190,7,20);
ck.circle(401.5,210,3.5);
ck.circle(419.5,210,3.5);

ck.rect(390,167,15,7);
ck.rect(415,167,15,7);
ck.circle(390,170.5,3.5);
ck.circle(430,170.5,3.5);

white.rect(380,160,5,30);
white.rect(370,155,15,5);
white.circle(404,148,4,4);
white.circle(416,148,4,4);
blue.circle(404,148,1.5,1.5);
blue.circle(416,148,1.5,1.5);
white.circle(410,173,3);
white.circle(410,180,3);

for(i=0;i<4;i++)red.rect(380,160+i*8,5,4);

context.strokeStyle='#dc1414';
context.arc(410,154,7,Math.PI*2,Math.PI);
context.stroke();
context.beginPath();
context.strokeStyle='white';
context.moveTo(398,140);
context.bezierCurveTo(410, 139, 408, 135, 413, 134);
context.stroke();

context.beginPath();
context.moveTo(408,140);
context.bezierCurveTo(416, 140, 418, 138, 420, 136);
context.stroke();


//mmmmmmmmmmmmmmmmmmmmmmmmmmm
ck.rect(330,120,50,15);



pet=new Polygon("#662700",context);
pet.Drawpoly(350,160,10,8);

white.circle(347,158,2);
white.circle(353,158,2);
white.text("이벤트",340,131);



gold.text("1",108,170);

gbadg=new Polygon("#c5c100",context);
gbadg.Drawpoly(130,165,7,5);
sbadg=new Polygon("#b9b6b6",context);
for(i=0;i<4;i++)sbadg.Drawpoly(130,195+i*30,7,5);

massag=new Polygon("white",context);
for(i=0;i<3;i++)massag.Drawpoly(240+i*20,310,7,5+i);


gift=new Polygon("#dc1414",context);
for(i=0;i<5;i++){
    gift.Drawpoly(270,164+i*30,7,5);
    dkbrown.text("ON",276,168+i*30);
}
//다시 시자그ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
white.text("에피소드 지도",402,95);
white.text("오븐 탈출",128,90);
white.text("0/3",215,94);
white.text("0/39",264,94);
white.text("리그랭킹",228,126);
gray.rect(365,210,100,20);
black.text("추가체력 5 보너스",370,225);
white.text("펫",370,255);
white.text("쿠키",392,255);
white.text("보물",420,255);
white.text("게임 시작",385,295);
white.text("랭킹보상",112,316);
white.text("0/100",165,320);



black.text("친구 랭킹",130,125);
black.text("최혁순      422,300",170,168);
black.text("손흥민       58,298",170,198);
black.text("리오넬 메시  1,000",170,228);
black.text("호날두           980",170,258);
black.text("네이마르        680",170,288);


    }