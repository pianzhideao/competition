window.onload=function(){
	var lunbotu=document.getElementById("lunbotu");
	var list=document.getElementById("list");
	var buttons=document.getElementById("buttons").getElementsByTagName("span");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var index=1;
	var len=4;
	var animated=false;
	var interval=4000;
	var timer;

	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='on'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className='on';
	}

	function animate(offset){
		animated=true;
		var newLeft=parseInt(list.style.left)+offset;
		var time=300;//位移总时间
		var interval=10;//位移时间间隔
		var speed=offset/(time/interval);//每一次位移量

		var go=function(){
			if ((speed<0&&parseInt(list.style.left)>newLeft)||(speed>0&&parseInt(list.style.left)<newLeft)) {
				list.style.left=parseInt(list.style.left)+speed+'px';
				setTimeout(go,interval);
			}
			else{
				list.style.left=newLeft+'px';

				if (newLeft>-1350) {
					list.style.left=-1350*len+'px';
				}
				if (newLeft<-1350*len) {
					list.style.left=-1350+'px';
				}
				animated=false;
			}
		}
		go();
	}

	function play(){
		timer=setInterval(function(){
			next.onclick();
			play;
		},interval);
	}

	function stop(){
		clearInterval(timer);
	}
	next.onclick=function(){
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
	prev.onclick=function(){
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

	for (var i =0; i <buttons.length; i++) {
		if(animated){
			return;
		}
		buttons[i].onclick=function(){
			if(this.className=='on'){
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

	lunbotu.onmouseover=stop;
	lunbotu.onmouseout=play;

	play();
	
};	