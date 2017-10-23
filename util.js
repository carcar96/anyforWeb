//运动框架

function animate(obj,json,fn){
		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){	
		var stop = true;
		var current = 0;
		for(var attr in json){				

			current = parseInt(getStyle(obj,attr));

			speed = (json[attr]-current)/10;
			
			speed =  speed >0 ? Math.ceil(speed) : Math.floor(speed);	

			if(attr == 'opacity'){
				current = json[attr];
				obj.style.opacity = json[attr];
				obj.style.filter = 'alpha(opacity='+json[attr]+')';
			}else{
				obj.style[attr] = speed + current + "px";
			}

            if(current!=json[attr]){
            	stop = false;
            }          
        }

        if(stop){
        	clearInterval(obj.timer);
        	if(fn){
        		fn()
        	}
        } 
	},30)

}

function getStyle(obj,attr){
	if(obj.currentStyle){
		//ie
		return obj.currentStyle[attr]
	}else{
		return window.getComputedStyle(obj,null)[attr]
	}
}

function setStyle(obj, attr, value){
	obj.style[attr] = value + 'px';
}

function client_W_H(){
	if(document.body.clientWidth){
		//谷歌
		return {
			width:document.body.clientWidth,
			height:document.body.clientHeight
		}

	}else{
		//IE
		return {
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}
}

function $(id){
	return document.getElementById(id)
}

function startMove(obj,value){
	
	 clearInterval(obj.timer);
	 obj.timer = setInterval(function(){

	 	speed = (value-obj.offsetWidth)/10;
	 	speed =  speed >0 ? Math.ceil(speed) : Math.floor(speed);

	 	obj.style.width = speed + obj.offsetWidth + "px";

        if (speed==0)
        {
            clearInterval(obj.timer)
        }
	 },30)
}

function scroll(){
	if(document.body.scrollTop){
		//谷歌
		return {
			top:document.body.scrollTop,
			left:document.body.scrollLeft
		}
	}else{
		//IE、火狐
		return {
			top:document.documentElement.scrollTop,
			left:document.documentElement.scrollLeft
		}
	}
}