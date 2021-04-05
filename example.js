var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

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
                this.context.fillStyle='#020202';
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
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
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

    context.strokeStyle='#020202';
    context.fillStyle='#a03f4e';
    

    context.fillRect(25, 25, 500, 300);
    context.stroke();
    context.fill();
brown = new Drawback('#c3580d',3,context);

brown.rect(100,70,100,30);
brown.rect(200,80,100,20);
brown.rect(100,100,200,200);

white = new Drawback('#eeece0',3,context);

white.rect(110,110,85,25);
white.rect(100,135,200,15);
for(i=0;i<5;i++)white.rect(100,150+i*30,200,30);

white.rect(350,40,100,15);

gray= new Drawback('#a2a2a2',3,context);


for(i=0;i<4;i++)gray.rect(105,190+30*i,10,10);

for(i=0;i<5;i++)gray.circle(140,165+i*30,7);


bar = new Drawback('#5b5a4c',2,context);

bar.rect(60,40,60,15);
bar.rect(140,40,80,15);
bar.rect(230,40,100,15);

cyon = new Drawback('#12afb9',1,context);
cyon.circle(400,90,10);
cyon.rect(400,80,70,20);
cyon.circle(470,90,10);
cyon.rect(370,240,70,20);
cyon.circle(370,250,10);
cyon.circle(440,250,10);
cyon.circle(500,47,7);


green = new Drawback('#09c813',1,context);
green.circle(220,47,7);
green.circle(330,47,7);
green.circle(450,47,7);

for(i=0;i<4;i++){
green.circle(270,195+i*30,7);
green.rect(270,188+i*30,20,14);
green.circle(290,195+i*30,7);
}
green.circle(370,290,10);
green.rect(370,280,70,20);
green.circle(440,290,10);

brown.rect(100,300,200,23);

dkbrown = new Drawback('#712e00',1,context);
dkbrown.rect(210,85,30,10);
dkbrown.rect(260,85,30,10);

dkbrown.rect(205,110,85,25);
dkbrown.rect(115,305,35,12);
dkbrown.rect(160,305,40,8);

ck = new Drawback('#eca009',1,context);
ck.circle(410,150,16);
ck.rect(401,160,18,30);
ck.rect(398,190,7,20);
ck.rect(398,190,7,20);
ck.rect(398,190,7,20);//지울것
ck.rect(398,190,7,20);//지울것



