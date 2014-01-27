	var block =    document.getElementById('popup'),
		blockMsg = document.getElementById('popup').innerHTML,
		urlStr, 
		i,
		buttonOk = document.getElementsByClassName('buttonOk'),
		buttonNo = document.getElementsByClassName('buttonCancel'),
		url;

	document.getElementsByClassName('header__links')[0].onclick = function(e) {
 		var target = e && e.target || event.srcElement,   
			
		urlStr = target.getAttribute('href');  
		url = urlStr;

    	document.querySelector('.popup h3').innerHTML =  'Внимание';
    	document.querySelector('.popup p').innerHTML =  'Перейти на '+target.getAttribute('href') + ' ?';

	 	block.style.visibility = 'visible';

    	return false;
  	};

  	document.getElementsByClassName('buttonOk')[0].onclick = function() {
  		window.location = url; 
  	}; 

  	document.getElementsByClassName('buttonCancel')[0].onclick = function() {
  		block.style.visibility = 'hidden';
  	}; 
