window.onload=function(){
	var lunbotu1=document.getElementById("lunbotu1");
	var list1=document.getElementById("list1");
	var buttons1=document.getElementById("buttons1").getElementsByTagName("span");
	var prev1=document.getElementById("prev1");
	var next1=document.getElementById("next1");
	var index=1;
	var len=4;
	var animated=false;
	var interval=4000;
	var timer;

	function showButton(){
		for(var i=0;i<buttons1.length;i++){
			if(buttons1[i].className=='on1'){
				buttons1[i].className='';
				break;
			}
		}
		buttons1[index-1].className='on1';
	}

	function animate(offset){
		animated=true;
		var newLeft=parseInt(list1.style.left)+offset;
		var time=300;//位移总时间
		var interval=10;//位移时间间隔
		var speed=offset/(time/interval);//每一次位移量

		var go=function(){
			if ((speed<0&&parseInt(list1.style.left)>newLeft)||(speed>0&&parseInt(list1.style.left)<newLeft)) {
				list1.style.left=parseInt(list1.style.left)+speed+'px';
				setTimeout(go,interval);
			}
			else{
				list1.style.left=newLeft+'px';

				if (newLeft>-1350) {
					list1.style.left=-1350*len+'px';
				}
				if (newLeft<-1350*len) {
					list1.style.left=-1350+'px';
				}
				animated=false;
			}
		}
		go();
	}

	function play1(){
		timer=setInterval(function(){
			next1.onclick();
			play1;
		},interval);
	}

	function stop1(){
		clearInterval(timer);
	}
	next1.onclick=function(){
		if(animated){
			return;
		}
		if(index==4){
			index=1;
		}
		else{
			index=index+1;
		}
		showButton();
		if(animated==false){
			animate(-1350);
		}
		
	}
	prev1.onclick=function(){
		if(animated){
			return;
		}
		if(index==1){
			index=4;
		}
		else{
			index=index-1;
		}
		showButton();
		if(animated==false){
			animate(1350);
		}
	}

	for (var i =0; i <buttons1.length; i++) {
		if(animated){
			return;
		}
		buttons1[i].onclick=function(){
			if(this.className=='on1'){
				return;
			}

			var myIndex=parseInt(this.getAttribute('index'));
			var offset=-1350*(myIndex-index); 
			
			index=myIndex;
			showButton();
			if(animated==false){
				animate(offset);
			}
		}
	}

	lunbotu1.onmouseover=stop1;
	lunbotu1.onmouseout=play1;

	play1();

	var pictureo=document.getElementById("pictureo");
	var list2=document.getElementById("list2");
	var buttons2=document.getElementById("buttons2").getElementsByTagName("span");
	var prev2=document.getElementById("prev2");
	var next2=document.getElementById("next2");
	var indextwo=1;
	var len2=5;
	var animated2=false;
	var interval2=5000;
	var timer2;

	function showButton2(){
		for(var i=0;i<buttons2.length;i++){
			if(buttons2[i].className=='on2'){
				buttons2[i].className='';
				break;
			}
		}
		buttons2[indextwo-1].className='on2';
	}

	function animate2(offset2){
		animated2=true;
		var newLeft2=parseInt(list2.style.left)+offset2;
		var time2=300;//位移总时间
		var interval2=10;//位移时间间隔
		var speed2=offset2/(time2/interval2);//每一次位移量

		var go2=function(){
			if ((speed2<0&&parseInt(list2.style.left)>newLeft2)||(speed2>0&&parseInt(list2.style.left)<newLeft2)) {
				list2.style.left=parseInt(list2.style.left)+speed2+'px';
				setTimeout(go2,interval2);
			}
			else{
				list2.style.left=newLeft2+'px';

				if (newLeft2>-400) {
					list2.style.left=-400*len2+'px';
				}
				if (newLeft2<-400*len2) {
					list2.style.left=-400+'px';
				}
				animated2=false;
			}
		}
		go2();
	}

	function play2(){
		timer2=setInterval(function(){
			next2.onclick();
			play2;
		},interval2);
	}

	function stop2(){
		clearInterval(timer2);
	}
	next2.onclick=function(){
		if(animated2){
			return;
		}
		if(indextwo==5){
			indextwo=1;
		}
		else{
			indextwo=indextwo+1;
		}
		showButton2();
		if(animated2==false){
			animate2(-400);
		}
		
	}
	prev2.onclick=function(){
		if(animated2){
			return;
		}
		if(indextwo==1){
			indextwo=5;
		}
		else{
			indextwo=indextwo-1;
		}
		showButton2();
		if(animated2==false){
			animate2(400);
		}
	}

	for (var i =0; i <buttons2.length; i++) {
		if(animated2){
			return;
		}
		buttons2[i].onclick=function(){
			if(this.className=='on2'){
				return;
			}

			var myIndextwo=parseInt(this.getAttribute('indextwo'));
			var offset2=-400*(myIndextwo-indextwo); 
			
			indextwo=myIndextwo;
			showButton2();
			if(animated2==false){
				animate2(offset2);
			}
		}
	}

	pictureo.onmouseover=stop2;
	pictureo.onmouseout=play2;

	play2();
	
};	