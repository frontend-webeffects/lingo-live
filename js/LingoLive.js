LingoLive = {};

	LingoLive.TrackSubmittedEmail = function(formName){
		//Retrieve Cookie
		var emailCookie = $.cookies.get('UserEmail')
		//Log to KM if a user email is retrieved
		if(emailCookie!== null){
			// Send to KM
			_kmq.push(function() {
				KM.identify(emailCookie);
				KM.record('Access schedule page');
			} );
		}
	
		$('#'+formName).submit(function(){
			//Capture user email
			var email = $("input[type='email']:first").val();
			if(email.length>0){
				if(emailCookie === null)
				{
					$.cookies.set('UserEmail', email);
					KM.identify(emailCookie);
					KM.record('Submit form');
				}
			}
		});		
	};

