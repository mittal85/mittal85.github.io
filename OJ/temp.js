
	document.getElementById('cget').addEventListener
	('click' , check_user);		
		function check_user(e){
			e.preventDefault();
	  
			let email = document.getElementById('email').value;
			let password = document.getElementById('pass').value;
	  
			fetch('', {
			  method:'POST',
			  headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-type':'application/json'
			  },
			  body:JSON.stringify({email:email, password:password})
			})
			.then((res) => res.json())
			.then((data) => console.log(data))
		  }			
