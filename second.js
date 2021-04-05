var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    iconwidth=42;
    distance=5;

    var Point = function (x, y) {
        this.x = x;
        this.y = y;
     };
     
     var Polygon = function (centerX, centerY, radius, sides, startAngle, strokeStyle, fillStyle) {
        this.x = centerX;
        this.y = centerY;
        this.radius = radius;
        this.sides = sides;
        this.startAngle = startAngle;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
     };
     
     Polygon.prototype = {
        getPoints: function () {
           var points = [],
               angle = this.startAngle || 0;
     
           for (var i=0; i < this.sides; ++i) {
              points.push(new Point(this.x + this.radius * Math.sin(angle),
                                this.y - this.radius * Math.cos(angle)));
              angle += 2*Math.PI/this.sides;
           }
           return points;
        },
     
        createPath: function (context) {
           var points = this.getPoints();
     
           context.beginPath();
     
           context.moveTo(points[0].x, points[0].y);
     
           for (var i=1; i < this.sides; ++i) {
              context.lineTo(points[i].x, points[i].y);
           }
     
           context.closePath();
        },
     
        stroke: function (context) {
           context.save();
           this.createPath(context);
           context.strokeStyle = this.strokeStyle;
           context.stroke();
           context.restore();
        },
     
        fill: function (context) {
           context.save();
           this.createPath(context);
           context.fillStyle = this.fillStyle;
           context.fill();
           context.restore();
        },
     
       
     };
 
     







function drawback(){
    //배경
    context.strokeStyle='#020202';
    context.fillStyle='#5e4040';
    

    context.fillRect(25, 25, 500, 300);

    context.strokeStyle='#9d9d9d';

    context.strokeRect(80, 35, 50, 20);
    context.strokeRect(150, 35, 70, 20);
    context.strokeRect(240, 35, 120, 20);

    context.fillStyle='#f2f2f2';
    context.fillRect(370, 35, 120, 20);
    context.fillStyle='#f4e111';
    context.beginPath();
    context.arc(78, 44, 8, Math.PI , Math.PI*3 );
    context.fill();

    context.fillStyle='#a8a8a5';
    context.beginPath();
    context.arc(238, 44, 8, Math.PI , Math.PI*3 );
    context.fill();

    context.fillStyle='#46bd14';
    context.beginPath();
    context.arc(220, 44, 8, Math.PI , Math.PI*3 );
    context.fill();
    context.beginPath();
    context.arc(360, 44, 8, Math.PI , Math.PI*3 );
    context.fill();
    context.beginPath();
    context.arc(490, 44, 8, Math.PI , Math.PI*3 );
    context.fill();

    context.fillStyle='#f83333';
    context.strokeStyle='#020202';
    
    for(i=0;i<=5;i++){
    context.beginPath();
    context.arc(420+i*(3+8), 44, 8, Math.PI , Math.PI*3 );
    context.fill();
context.stroke();
    }

context.font ='18px Helvetica';
context.fillStyle='white';

context.fillText("53%",90,50);  
context.fillText("923",180,50);  
context.fillText("15,460",270,50);  
context.fillStyle='#020202';

context.fillText("13",380,50); 
}
drawback();

context.beginPath();


context.font ='12px Helvetica';
context.fillStyle='white';




context.fillStyle='#e3e3e1';//왼쪽
context.fillRect(80, 70, 170, 200);
context.fillStyle='#2082e7';
context.fillRect(95-distance, 100-distance, iconwidth*3+distance*4, iconwidth+distance*2);
context.fillStyle='#50a0f2';
for(i=0;i<3;i++) context.fillRect(95+i*(iconwidth+distance), 100, iconwidth, iconwidth);

context.fillStyle='#359e38';
context.fillRect(95-distance, 100+iconwidth+5*distance, iconwidth*3+distance*4, iconwidth*2+distance*3);
context.fillStyle='#4cdf4f';
for(i=0;i<3;i++) context.fillRect(95+i*(iconwidth+distance), 100+iconwidth+6*distance, iconwidth, iconwidth);
for(i=0;i<3;i++) context.fillRect(95+i*(iconwidth+distance), 100+2*iconwidth+7*distance, iconwidth, iconwidth);

context.strokeStyle='#4d51fa';//오른쪽
context.fillStyle='#50a0f2';
context.strokeRect(80+170+10*distance,70+4*distance,170,150);
context.fillRect(80+170+13*distance, 70+7*distance, iconwidth, iconwidth);//아이템
context.fillText("Lv.2",80+170+15*distance, 70+10*distance);   


context.fillStyle='#b3b3b7';
context.arc(80+170+20*distance+iconwidth, 70+12*distance, 5, Math.PI,Math.PI*3);//동전
context.fill();
context.font ='18px Helvetica';
context.fillStyle='white';

context.fillText("체력강화 Lv.2",250+15*distance+iconwidth, 70+9*distance);  


context.font ='12px Helvetica';

context.fillText("800",80+170+22*distance+iconwidth, 70+13*distance);   
context.fillText("Lv.2",80+170+15*distance, 70+14*distance);   



  



context.beginPath();//업그레이드버튼
context.fillStyle='#00dce3';
context.arc(250+17*distance+iconwidth, 70+18*distance, 10, Math.PI,Math.PI*3);
context.arc(300+17*distance+iconwidth, 70+18*distance, 10, Math.PI,Math.PI*3);
context.fill();
context.fillRect(250+17*distance+iconwidth,70+18*distance-10,50,20);
context.font ='12px Helvetica';
context.fillStyle='white';
context.fillText("업그레이드",250+17*distance+iconwidth,70+18*distance+4);   
context.fillText("추가체력이 총 10 늘어납니다.",250+5*distance+iconwidth,70+26*distance+4);   
context.fillText("모든 쿠키들에게 적용됩니다.",250+5*distance+iconwidth,70+29*distance+4);   





context.beginPath();//게임시작버튼
context.fillStyle='#54e110';
context.arc(330, 265, 16, Math.PI,Math.PI*3);
context.arc(430,265, 16, Math.PI,Math.PI*3);
context.fill();
context.fillRect(330, 265-16,100,32);


context.font ='24px Helvetica';
context.fillStyle='white';
context.fillText("게임 시작",336, 272);   



context.fillStyle='#020202';
context.font ='15px Helvetica';
context.fillText("능력을 업그레이드하세요",85,90); 
context.fillText("부스트를 구매하세요",85,163); 

context.fillStyle='#8d8d8d';
    context.beginPath();
    context.arc(250, 75, 9, Math.PI , Math.PI*3 );
    context.fill();

    canvas.onmousedown = function (i) {
        var loc = windowToCanvas(i.clientX, i.clientY);
     
        i.preventDefault(); 
        context.beginPath();
        
        context.arc(330, 265, 16, Math.PI,Math.PI*3);
        context.arc(430,265, 16, Math.PI,Math.PI*3);
        context.rect(330, 265-16,100,32);
        if (context.isPointInPath(loc.x, loc.y)) {
            console.log("띠용");

            
         }
                
    };
    


        function windowToCanvas(x, y) { //실좌표계산
            var bbox = canvas.getBoundingClientRect();
            return { x: x - bbox.left * (canvas.width  / bbox.width),
                     y: y - bbox.top  * (canvas.height / bbox.height)
                   };
         }
         


var a= new Polygon(210,193,15,6,Math.PI*(1/3),'#ddac10','#ddac10');

context.beginPath();
a.createPath(context);
a.fill(context);

var b= new Polygon(210,240,15,8,Math.PI*(1/3),'#e40ca2','#e40ca2');

context.beginPath();
b.createPath(context);
b.fill(context);

var c= new Polygon(160,193,15,24,Math.PI*(1/3),'#f2f6db','#f2f6db');

context.beginPath();
c.createPath(context);
c.fill(context);
var d= new Polygon(160,240,15,3,Math.PI*(1/3),'#35c5c9','#35c5c9');

context.beginPath();
d.createPath(context);
d.fill(context);
var e= new Polygon(116,193,15,5,Math.PI*(1/3),'#725df2','#725df2');

context.beginPath();
e.createPath(context);
e.fill(context);

var f= new Polygon(116,240,15,4,Math.PI*(1/3),'#9cf4fe','#9cf4fe');

context.beginPath();
f.createPath(context);
f.fill(context);
