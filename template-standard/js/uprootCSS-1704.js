window.onresize = nav;
function nav(action){
	var a = document.getElementById('nav-btn');
	var b = document.getElementById('nav-menu');
	if(action == 'open'){
		if(a){a.outerHTML='';}
		var html = '<div id="nav-menu" class="back-black text-cloud"><h1 id="nav-btn" class="disp-right" onclick="nav();"><i class="fa fa-bars" aria-hidden="true"></i></h3>'+document.getElementById('nav').innerHTML+'</div>';
		document.body.innerHTML += html;
		var e = document.getElementById('nav-menu');
			e.style="position: fixed; top:0px; left:0px; width: 100%; height: 100%; padding: 20px;-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;";
	}else{
		if(document.getElementsByTagName('body')[0].clientWidth < 800){
			if(a){a.outerHTML='';}
			if(b){b.outerHTML='';}

			document.body.innerHTML += '<h1 id="nav-btn" class="text-black" onclick="nav(\'open\');"><i class="fa fa-bars" aria-hidden="true"></i></h3>';
			var e = document.getElementById('nav-btn');
				e.style="position: absolute; top: 10px; right: 20px;";				
		}else{
			if(a){a.outerHTML='';}
			if(b){b.outerHTML='';}
		}
	}
}
nav();
