var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    iconwidth=42;
    distance=5;


function drawback(){
    //배경
    context.strokeStyle='#020202';
    context.fillStyle='#5e4040';
    

    context.fillRect(25, 25, 500, 300);
  
}
drawback();

context.fillStyle='#e3e3e1';
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

context.strokeStyle='#446ff4';
context.strokeRect(80+170+10*distance,70+4*distance,170,150);




