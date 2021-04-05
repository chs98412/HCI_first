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

  brown = new Drawback('#c3580d',3,context);
  white = new Drawback('#eeece0',3,context);
  gray= new Drawback('#a2a2a2',3,context);
  cyon = new Drawback('#12afb9',1,context);
  green = new Drawback('#09c813',1,context);
  dkbrown = new Drawback('#712e00',1,context);
  ck = new Drawback('#eca009',1,context);
  black= new Drawback('#020202',1,context);






     function UpBar(){
      context.strokeStyle='#020202';
      context.fillStyle='#a03f4e';
    

      context.fillRect(25, 25, 500, 300);
      context.stroke();
      context.fill();
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
      }
      
UpBar();
context.beginPath();


context.font ='12px Helvetica';
context.fillStyle='white';





white.rect(80, 70, 170, 200);



dpblue=new Drawback("#2082e7",1,context);
dpblue.rect(95-distance, 100-distance, iconwidth*3+distance*4, iconwidth+distance*2)

blue=new Drawback("#50a0f2",1,context);
for(i=0;i<3;i++) blue.rect(95+i*(iconwidth+distance), 100, iconwidth, iconwidth);


green.rect(95-distance, 100+iconwidth+5*distance, iconwidth*3+distance*4, iconwidth*2+distance*3);

wkgreen=new Drawback("#9cdd78",1,context);
for(i=0;i<3;i++) wkgreen.rect(95+i*(iconwidth+distance), 100+iconwidth+6*distance, iconwidth, iconwidth);
for(i=0;i<3;i++) wkgreen.rect(95+i*(iconwidth+distance), 100+2*iconwidth+7*distance, iconwidth, iconwidth);


navy=new Drawback("#4d51fa",0,context);
navy.rect(80+170+10*distance,70+4*distance,170,150);

blue.rect(80+170+13*distance, 70+7*distance, iconwidth, iconwidth);//아이템



gray.circle(80+170+20*distance+iconwidth, 70+12*distance, 5);//동전


context.font ='12px Helvetica';

context.fillText("800",80+170+22*distance+iconwidth, 70+13*distance);   
context.fillText("Lv.2",80+170+15*distance, 70+14*distance);   



  





cyon.circle(250+17*distance+iconwidth, 70+18*distance, 10);
cyon.circle(300+17*distance+iconwidth, 70+18*distance, 10);
cyon.rect(250+17*distance+iconwidth,70+18*distance-10,50,20);



white.text("업그레이드",250+17*distance+iconwidth,70+18*distance+4);   
white.text("추가체력이 총 10 늘어납니다.",250+5*distance+iconwidth,70+26*distance+4);   
white.text("모든 쿠키들에게 적용됩니다.",250+5*distance+iconwidth,70+29*distance+4);   





green.circle(330, 265, 16);
green.circle(430,265, 16);
green.rect(330, 265-16,100,32);


context.font ='24px Helvetica';
context.fillStyle='white';
context.fillText("게임 시작",336, 272);   

context.font ='18px Helvetica';
context.fillStyle='white';
context.fillText("체력강화 Lv.2",250+15*distance+iconwidth, 70+9*distance);  




black.text("능력을 업그레이드하세요",93,90); 
black.text("부스트를 구매하세요",93,163); 


    gray.circle(250, 75, 9);


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
