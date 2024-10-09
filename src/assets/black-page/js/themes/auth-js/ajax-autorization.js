jQuery(function ($) {
	const ajaxurl = mainscripts.ajaxURL;
	const homeCursePage = mainscripts.homeCursPage;

	$(".login-form form").on("submit", function(e){
		e.preventDefault();
		const login = $(".login-email-js").val();
		const pass = $(".login-pass-js").val();
		const security = $(".login-security-js").val();

		const data = {
			action: 'sancho_login',
			login: login,
			pass: pass,
			security: security,
		};

		console.log(login);

		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: data,
			success: function (response) {
				console.log(response);
				if(response.success){
					$(".change-ps-error--1").removeClass('active');
					window.location.href = homeCursePage;
				}else {
					if(response.blocked >= 4 && response.blocked < 20){
						$(".change-ps-error--1").removeClass('active');
						$(".change-ps-error--8").removeClass('active');
						$(".change-ps-error--4").addClass('active');
					}else if(response.blocked == 100){
						$(".change-ps-error--1").removeClass('active');
						$(".change-ps-error--4").removeClass('active');
						$(".change-ps-error--8").addClass('active');
					}else {
						let lastChance = 4 - response.blocked;
						$(".change-ps-error--8").removeClass('active');
						$(".change-ps-error--4").removeClass('active');
						$(".change-ps-error--1").addClass('active');
						$(".change-ps-error--1 span").text(lastChance);
					}
				}
			},
			error: function (error) {
			}
		});
	});

	$(".change-ps-form").on("submit", function(e){
		e.preventDefault();
		const pass = $(".old_pass_js").val();
		const newpass1 = $(".new_pass_js").val();
		const newpass2 = $(".new_pass_js_2").val();
		const security = $(".login-security-change-pass-js").val();

		if(newpass1 == newpass2){
			$(".change-ps-error--1").removeClass('active');

			const data = {
				action: 'sancho_change_password',
				oldpass: pass,
				newpass1: newpass1,
				newpass2: newpass2,
				security: security,
			};

			$.ajax({
				url: ajaxurl,
				type: 'POST',
				data: data,
				success: function (response) {
					console.log(response);
					if(response.success){
						$(".old_pass_js").val("");
						$(".new_pass_js").val("");
						$(".new_pass_js_2").val("");
						$(".change-ps-error--1").removeClass('active');
						$(".change-ps-error--2").removeClass('active');
						$(".change-ps-succses").addClass('active');
					}else {
						$(".change-ps-error--2").addClass('active');
					}
				},
				error: function (error) {
				}
			});
		}else {
			$(".change-ps-error--1").addClass('active');
		}
		
	});

	$(".js-logout").on("click", function(e){
		e.preventDefault();

		const data = {
			action: 'sancho_logout',
		};

		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: data,
			success: function (response) {
				if(response.success){
					$(".change-ps-error-1").removeClass('active');
					window.location.href = homeCursePage;
				}else {
					$(".change-ps-error-1").addClass('active');
				}
			},
			error: function (error) {
			}
		});
	});
});