jQuery(function ($) {

	$(".si-1-sidebar--search .si-1-tab").on("click", function(){
		$(".si-1-block--search-all").removeClass("novission");
		$(".si-1-block--search").addClass("novission");
		$('.si-1-main-form').removeClass('notFreeForm');
		$(".si-1-main-form input").val(" ");

		const count = $(this).data("tab");
		$("html, body").animate({
			scrollTop: $(".si-1-block[data-block=" + count + "]").offset().top - 50 + "px"
		}, {
			duration: 0,
			easing: "swing"
		});
		return false;
	});

	$(".fancy").fancybox();
	function toggle_faq_block(){
		const currentURL = window.location.href;
    // Проверяем наличие параметра "#faq_block_" в URL
    const faqBlockIndex = currentURL.indexOf("#faq_block_");
    if (faqBlockIndex !== -1) {
      // Извлекаем значение параметра, начиная с позиции после "#faq_block_"
      const faqBlockValue = currentURL.substring(faqBlockIndex + "#faq_block_".length);
      $(".m-7-block").removeClass("active");
      $("#faq_block_" + faqBlockValue).parents(".m-7-block").addClass("active");

      $("html, body").animate({
      	scrollTop: $("#faq_block_" + faqBlockValue).offset().top - 200 + "px"
      }, {
      	duration: 0,
      	easing: "swing"
      });
    } else {
    }
  }
  toggle_faq_block();

  // $('.remodal-buy-link-bot').on("click", function () {
  //   $(".remodal-buy").remodal().close();
  //   $(".remodal-wrapper").css("display", "none");
  //   $(".remodal-overlay").css("display", "none");
  //   $("html").removeClass("remodal-is-locked");

  //   let faqBlockValue2 = $(this).attr("href");
  //   let digit = faqBlockValue2.match(/\d+$/)[0];
  //   $(".m-7-block").removeClass("active");
  //     $("#faq_block_" + digit).parents(".m-7-block").addClass("active");

  //     $("html, body").animate({
  //       scrollTop: $("#faq_block_" + digit).offset().top - 200 + "px"
  //     }, {
  //       duration: 500,
  //       easing: "swing"
  //     });
  // });

  $(".lang-wrap-active, .active-language").on("click", "a", function () {
  	return false;
  });

  if ($(this).scrollTop() > 50) {
  	$("header").addClass('fixed');
  }
  $(window).scroll(function () {
  	if ($(this).scrollTop() > 50) {
  		$("header").addClass('fixed');
  	} else {
  		$("header").removeClass('fixed');
  	}
  });

  var wow = new WOW(
  {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: false,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
    );
  // wow.init();

  /*Мобильный гамбургер*/
  $(".header-hambugreg").click(function () {
  	$(".header-hambugreg").toggleClass('is-active');
  	$(".mobile-header").toggleClass('active');
  	$("body").toggleClass('active');
  	$(".main-header").toggleClass('active');
  	$(".mobile-header-bg").toggleClass('active');
  });
  $(".main-menu ul li a").click(function () {
    if ($(this).attr('href') !== '#') {
     $(".header-hambugreg").removeClass('is-active');
     $(".mobile-header").removeClass('active');
     $("body").removeClass('active');
     $(".main-header").removeClass('active');
     $(".mobile-header-bg").removeClass('active');
   }
 });

  $(".m-5-tab").on("click", function () {
  	const count = $(this).data("tab");

  	if (count % 2 == 0) {
  		$(".m-5-right-bg-image").removeClass("active");
  	} else {
  		$(".m-5-right-bg-image").addClass("active");
  	}

  	$(".m-5-tab").removeClass("active");
  	$(".m-5-right-content-block").removeClass("active");
  	$(".m-5-tab[data-tab=" + count + "]").addClass("active");
  	$(".m-5-right-content-block[data-block=" + count + "]").addClass("active");
  	if ($(window).width() >= 992) {
  		$("html, body").animate({
  			scrollTop: $(".m-5-right ").offset().top - $(".main-header").innerHeight() + "px"
  		}, {
  			duration: 500,
  			easing: "swing"
  		});
  		return false;
  	}

  });


//   $(".m-5-right-content-block-header-mobile").on("click", function () {
//   	$(this).parents(".m-5-right-content-block").toggleClass("active");
//   });



  function copyTextToClipboard(text) {
  	var textArea = $('<textarea>');
  	textArea.val(text);
  	$('body').append(textArea);
  	textArea.select();
  	document.execCommand('copy');
  	textArea.remove();
  }

  $('.remodal-buy-link-btn-copy').on('click', function () {
  	const walletTextElement = $(this).siblings('.remodal-buy-link-value').find("p");
  	const walletText = walletTextElement.text();
  	const this_item = $(this);
  	copyTextToClipboard(walletText);
  	$(this).parents(".remodal-buy-link ").find(".remodal-buy-link-copy-true").addClass("active");
  	setTimeout(function () {
  		this_item.parents(".remodal-buy-link ").find(".remodal-buy-link-copy-true").removeClass("active");
  	}, 2000);
  });

  $('.remodal-buy-link-value').on('click', function () {
  	const walletText = $(this).find("p").text();
  	const this_item = $(this);
  	copyTextToClipboard(walletText);
  	$(this).parents(".remodal-buy-link ").find(".remodal-buy-link-copy-true").addClass("active");
  	setTimeout(function () {
  		this_item.parents(".remodal-buy-link ").find(".remodal-buy-link-copy-true").removeClass("active");
  	}, 2000);
  });


  $(".m-7-block").on("click", function () {
  	if($(this).hasClass("active")){
  		$(this).removeClass("active");
  	}else {
  		$(".m-7-block").removeClass("active");
  		$(this).addClass("active");
  	}
  });



  $(".m-6-item-btn").on("click", function () {
  	let price = $(this).parents(".m-6-item").find(".m-6-item-price span").text();
  	let qrlnk = $(this).data("qrlink");
  	$(".remodal-buy-price-row .remodal-buy-price-balue").text(price);
  	$(".remodal-buy .remodal-buy-qr img ").attr("src", qrlnk);
  });

	$(".m-5-right-content-block").on("click", function(){
		$(this).toggleClass("active");
	});
  


  // $(".pl-1-top-left").on("click", "a", function () {
  //   $(this).toggleClass("active");
  //   $(".pl-1-dop-page").toggleClass("active");
  //   return false;
  // });

  $(".si-1-tab").on("click", function () {
  	const count = $(this).data("tab");
  	$(".si-1-tab").removeClass("active");
  	$(".si-1-block").removeClass("active");
  	$(this).addClass("active");

  	$("html, body").animate({
  		scrollTop: $(".si-1-block[data-block=" + count + "]").offset().top - 50 + "px"
  	}, {
  		duration: 0,
  		easing: "swing"
  	});
  	return false;

  });


  $('.fomr-pass-toggle-type').on('click', function () {
  	var passwordInput = $(this).parents(".form-pass-wrap").find("input");
  	var currentType = passwordInput.attr('type');

  	$(this).toggleClass('active');

  	if (currentType === 'password') {
  		passwordInput.attr('type', 'text');
  	} else {
  		passwordInput.attr('type', 'password');
  	}
  });

  $(".rem-new-toggle-month").on("click", function(){
    $(".rem-new-toggle-month").removeClass('active');
    $(this).addClass("active");
    const newsum = $(this).data("sum");
    const newcode = $(this).data("qrcode");
    $(this).parents(".remodal-buy").find(".remodal-buy-qr img").attr("src", newcode);
    $(".remodal-buy-price-balue").text(newsum);
  });

  $(".remodal-buy-toggle-type-btn").on("click", function () {
  	$(this).toggleClass("active");
  	const dataval = $(this).data("value");
  	$(".remodal-buy-toggle-type-text").addClass("active");
  	$(".remodal-buy-toggle-type-text[data-sum=" + dataval + "]").removeClass("active");
  	const newsum = $(".remodal-buy-toggle-type-text.active").data("sum");
  	const newcode = $(".remodal-buy-toggle-type-text.active").data("qrcode");
  	$(this).data("value", newsum);
  	$(this).parents(".remodal-buy").find(".remodal-buy-qr img").attr("src", newcode);
  	$(".remodal-buy-price-balue").text(newsum);
  });

  $(".si-1-btn-search-close").on("click", function(){
  	$(".si-1-block--search-all").removeClass("novission");
  	$(".si-1-block--search").addClass("novission");
  	$('.si-1-main-form').removeClass('notFreeForm');
  	$(".si-1-main-form input").val("");
  });



  $('.si-1-main-form  form input').on("input", function (event) {
  	event.preventDefault();
  	$(".si-1-block").removeClass("active");
  	$(".si-1-tab").removeClass("active");

  	var searchTerm = $('.si-1-main-form input').val().trim().toLowerCase();
  	var resultBlock = $('.si-1-block--search--result');
  	var searchBlock = $('.si-1-block--search');

  	if(searchTerm.length == 0){
  		$(".si-1-block--search-all").removeClass("novission");
  		$(".si-1-block--search").addClass("novission");
  		$('.si-1-main-form').removeClass('notFreeForm');
  		return false;
  	}else {
  		$('.si-1-main-form').addClass('notFreeForm');
  	}



  	resultBlock.empty();

  	$('.si-1-text-block p').each(function () {
  		var strongText = $(this).find('strong');
  		if (strongText.length) {
  			var textContent = strongText.text().trim().toLowerCase();

  			if (textContent.includes(searchTerm)) {
  				resultBlock.append($(this).clone());
  			}
  		}
  	});

  	if (resultBlock.children().length > 0) {
  		searchBlock.addClass('active');
  		searchBlock.addClass('notitle');
  		$(".si-1-block--search-all").addClass("novission");
  		$(".si-1-block--search").removeClass("novission");
  	} else {
  		searchBlock.addClass('active');
  		searchBlock.removeClass('notitle');
  		$(".si-1-block--search-all").addClass("novission");
  		$(".si-1-block--search").removeClass("novission");
  	}


  	return false;
  });


  // Получаем элементы
  var siFlex = $('.si-1-flex');
  var siSidebar = $('.si-1-sidebar');
  var siTop = $('.si-1-top');
  if(siSidebar.length){
  	var sidebarTopOffset = siSidebar.offset().top;
  }
  

  var btnGoTop = $('.btn-go-top');
  var mainFooter = $('.main-footer');
  var screenHeight = $(window).height(); // высота экрана

  // Отслеживаем событие прокрутки
  $(window).scroll(function () {
    // Текущая позиция прокрутки
    var scrollPosition = $(window).scrollTop();

    if ($(window).width() >= 992 && siSidebar) {
      // Если прокрутка достигла .si-1-flex
      if (scrollPosition >= sidebarTopOffset) {
        // Фиксируем .si-1-sidebar с отступом от верха
        siSidebar.css({
        	position: 'fixed',
        	borderRadius: '0px',
          top: '0px', // Задайте желаемый отступ сверху
        });

        // Если .si-1-sidebar достигнул конца .si-1-flex
        if (scrollPosition + siSidebar.height() >= siFlex.offset().top + siFlex.height()) {
          // Закрепляем .si-1-sidebar внизу .si-1-flex
          siSidebar.css({
          	position: 'absolute',
          	borderRadius: '20px',
          	top: siFlex.height() - siSidebar.height(),
          });
        }
      } else {
        // Возвращаем .si-1-sidebar в исходное состояние
        siSidebar.css({
        	position: 'static',
        	borderRadius: '20px',
        });
      }
    }

    if (siTop.length) {
      // Получаем текущее положение и ширину .si-1-top
      var topOffset = $(".si-1-content").offset().top;
      var leftOffset = siTop.offset().left;
      var topWidth = $(".si-1-box").innerWidth();

      // Если прокрутка достигла .si-1-top
      if (scrollPosition >= topOffset) {
        // Фиксируем .si-1-top к верху с учетом текущей ширины
        siTop.css({
        	position: 'fixed',
        	top: '0',
        	left: leftOffset + 'px',
        	width: topWidth + 'px',
        });
      } else {
        // Возвращаем .si-1-top в исходное состояние
        siTop.css({
        	position: 'absolute',
        	top: '0px',
        	width: topWidth + 'px',
        	left: '0px',
        });
      }
    }

    // Если прокрутка больше, чем высота экрана, добавляем класс
    if (scrollPosition > screenHeight) {
    	btnGoTop.addClass('active');
    } else {
    	btnGoTop.removeClass('active');
    }

    // Если доскролили до блока .main-footer, останавливаем кнопку
    if (scrollPosition + screenHeight > mainFooter.offset().top) {
    	btnGoTop.css({
    		position: 'absolute',
    		bottom: mainFooter.outerHeight() + 10,
    	});
    } else {
    	btnGoTop.css({
    		position: 'fixed',
        bottom: '20px', // или другое значение, чтобы отступить от нижнего края экрана
      });
    }

  });


  $(".btn-go-top").on("click", function () {
  	$("html, body").animate({
  		scrollTop: $($(this).attr("href")).offset().top + "px"
  	}, {
  		duration: 500,
  		easing: "swing"
  	});
  	return false;
  });

  $(".hero-btn-arrow").click(function() {
  	$("html, body").animate({
  		scrollTop: $($(this).attr("href")).offset().top + "px"
  	}, {
  		duration: 500,
  		easing: "swing"
  	});
  	return false;
  });

  $(".form-mail-wrap").on("input", "input", function(){
  	if($(this).val().length > 0 ){
  		$(this).siblings('.form-matol-btn-delete').addClass('active');
  	}else {
  		$(this).siblings('.form-matol-btn-delete').removeClass('active');
  	}
  });

  $(".form-matol-btn-delete").on("click", function(){
  	$(this).siblings('input').val(" ");
  	$(this).removeClass('active');
  });


  $(window).on('scroll', function() {
  	var windowTop = $(window).scrollTop();

  	$('.si-1-block').each(function() {
  		var blockTop = $(this).offset().top  - 120;
  		var blockHeight = $(this).outerHeight();

  		if (blockTop <= windowTop && blockTop + blockHeight >= windowTop) {
  			var blockNumber = $(this).data('block');
          // console.log('Блок ' + blockNumber + ' видим на экране.');
          $(".si-1-tab").removeClass('active');
          $(".si-1-tab[data-tab="+ blockNumber + "]").addClass('active');
        }
      });
  });
  
  $(document).on('closing', '.remodal.change-ps', function (e) {
  	$(".old_pass_js").val("");
  	$(".new_pass_js").val("");
  	$(".new_pass_js_2").val("");
  	$(".change-ps-error--1").removeClass('active');
  	$(".change-ps-error--2").removeClass('active');
  	$(".change-ps-succses").removeClass('active');
  });


  $('.ca-1-wrapper').on('input', function() {
  	if (typeof this.value === 'string') {
  		this.value = this.value.replace(/[^0-9.]/g, '');
  	}
  });

  $('.ca-1-wrapper').on('keydown', function(e) {
    // Разрешаем: backspace, delete, tab, escape, enter, стрелки и комбинации клавиш Ctrl/Meta
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
        (e.keyCode >= 35 && e.keyCode <= 39) || // Home, End, Left, Right
        (e.ctrlKey === true || e.metaKey === true)) { // Ctrl/Meta комбинации
      return;
  }

    // Получаем значение клавиши
    var char = e.key;

    // Запрещаем ввод более одной точки
    if (char === '.' && $(this).val().includes('.')) {
      e.preventDefault();
      return;
    }

    // Разрешаем только цифры и точку
    if (!char.match(/[0-9]/) && char !== '.') {
      e.preventDefault();
    }
  });

// Проверяем при вставке текста
$('.ca-1-wrapper').on('input', function() {
  var value = $(this).val();
    var sanitizedValue = value.replace(/[^0-9.]/g, ''); // Убираем все кроме цифр и точки
    var parts = sanitizedValue.split('.');
    if (parts.length > 2) {
        sanitizedValue = parts[0] + '.' + parts.slice(1).join(''); // Оставляем только одну точку
      }
      $(this).val(sanitizedValue);
    });

  /*
  Маска для номера телефона

  $("#m_8_phone").mask("+38 (099) 999-99-99");
  */

  /*    
      Contact form 7 - успешная отправка
  
        $(document).ready(function(){ 
          $('.wpcf7').on( 'wpcf7mailsent ', function( event ) { 
            var inst = $('[data-remodal-id=remodal_thanks]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                    inst.open();      
          });
        });*/

  /*
    Плавный скрол
$(".hero-next-page").click(function() {
         $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
         }, {
            duration: 500,
            easing: "swing"
         });
         return false;
      });
      */

  /*
  Слик слайдер

  $('.s_4_slider_2').slick({
    arrows: false,                    // Стрелки
    asNavFor: ".s_4_slider_1",        // Связки 2 слайдеров для thumbnail
    slidesToShow: 3,                  // Количество слайдов, которые показываются сразу
    focusOnSelect: true,              // Фокус на елемент при клике
    autoplay: true,                   // Автоматическое переключение
    autoplaySpeed: 3000,              // Время на показ слайда до переключения на следующий
    dots: false,                      // Точки
    fade: false,                      // Эффект затухания вместо перелистывания
    infinite: true,                   // Бесконечность слайдов
    initialSlide: 0,                  // Номер с которого откроется слайдер
    pauseOnHover: true,               // Пауза при наведении на слайдер
    pauseOnDotsHover: false,          // Пауза при наведение на точки
    rows: 1,                          // Количество строк
    centerMod: true,                  // Центровать слайд
    centerPadding: '50px',            // Отсупы от центрального слайда
    draggable: true,                  // перелистывание слайдов, перетаскиванием слайда мышью
    speed: 300,                       // Скорость анимации перелистывания
    vertical: false,                  // Переключение на вертикальный тип слайдера
    cssEase: "easy",                  // Вид анимации, для непрерывного слайдера linear  
    responsive: [                     
      {
        breakpoint: 992,
          settings: {

        }
      },
      {
        breakpoint: 600,
          settings: {

        }
      },
    ]
  });
  */


  /*
  Валидация - отправка формы ajax

  $("form#idForm").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: "Это поле обязательно для ввода",
            },
            email: {
                required: "Это поле обязательно для ввода",
                email: "Вы ввели некоректный email",
            },
        },
        submitHandler: function () {
            var formData2 =  $('form#idForm').serialize(); // Выбираем нашу форм, посылание на тег form
            $.ajax({
              url: '/wp-admin/admin-ajax.php', 
              type: 'POST',
              data: formData2 + '&action=my_form_action',  // У каждой формы свой action, который пишется после =
              success: function() {
                $("form#idForm input[type=text]").val(""); // Чистим формы после того как клиент отправил данные нам на почту
                var inst = $('[data-remodal-id=remodal_id]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();                                               // remodal открытие
                },
              error: function() {
                alert('Error');
              }
            });
            return false;
        }
   });
   */

   $(".ca-1-wrapper-btn-send").on("click", function(){
    let inp_raz_scheta = $(".inp_raz_sheta_js").val();
    let inp_risk_percent = $(".inp_risk_percent_js").val();
    let inp_open = $(".inp_open_js").val();
    let inp_stop_loss = $(".inp_stoplos_js").val();
    let inp_comm_js = $(".inp_comm_js").val();
    let inp_comm_stoplos_js = $(".inp_comm_stoplos_js").val();


    $(".inp_raz_sheta_js").removeClass('error');
    $(".inp_risk_percent_js").removeClass('error');
    $(".inp_open_js").removeClass('error');
    $(".inp_stoplos_js").removeClass('error');

    if(!inp_raz_scheta){
      $(".inp_raz_sheta_js").addClass('error');
    }
    if(!inp_risk_percent){
      $(".inp_risk_percent_js").addClass('error');
    }
    if(!inp_open){
      $(".inp_open_js").addClass('error');
    }
    if(!inp_stop_loss){
      $(".inp_stoplos_js").addClass('error');
    }


    if(inp_raz_scheta && inp_risk_percent && inp_open && inp_stop_loss){
     inp_raz_scheta = parseFloat(inp_raz_scheta);
     inp_risk_percent = parseFloat(inp_risk_percent);
     inp_open = parseFloat(inp_open);
     inp_stop_loss = parseFloat(inp_stop_loss);

     if(inp_comm_js <= 0){
      inp_comm_js = 0;
    }
    if(inp_comm_stoplos_js <= 0){
      inp_comm_stoplos_js = 0;
    }

    let razm_crypto = 0;
    let razm_usd = 0;
    
    
    // $(".ca-1-error").removeClass('active');
    let risk_usd = inp_raz_scheta * (inp_risk_percent / 100);
    let x1 = 0;

    if(inp_stop_loss > inp_open){
      x1 = inp_stop_loss - inp_open;
    } else {
      x1 = inp_open - inp_stop_loss;
    }


    let x2 = (inp_open * (inp_comm_js / 100) ) + (inp_stop_loss * (inp_comm_stoplos_js / 100) );
    let x3 = x1 + x2;
    if(inp_comm_js && inp_comm_stoplos_js && inp_comm_js != 0 && inp_comm_stoplos_js != 0){

      razm_crypto = risk_usd / x3;
    } else {
     razm_crypto = risk_usd / x1;
   }
   razm_crypto = parseFloat(razm_crypto.toFixed(3)); 
   if(razm_crypto < 0){
     razm_crypto == 0;
   }
   razm_usd = razm_crypto * inp_open;

   razm_usd = parseFloat(razm_usd.toFixed(2));
   risk_usd = parseFloat(risk_usd.toFixed(2));
   $(".inp_razm_crypto_js").val(razm_crypto);
   $(".inp_razm_usd_js").val(razm_usd);
   $(".inp_risk_usd_js").val(risk_usd);
 } else {
  // $(".ca-1-error").addClass('active');
}
});


   $("body").on("click", ".ca-1-wrapper-btn-clean", function(){
    $(".inp_raz_sheta_js").val('');
    $(".inp_risk_percent_js").val('');
    $(".inp_open_js").val('');
    $(".inp_stoplos_js").val('');
    $(".inp_comm_js").val('');
    $(".inp_comm_stoplos_js").val('');
    $(".inp_razm_crypto_js").val('');
    $(".inp_razm_usd_js").val('');
    $(".inp_risk_usd_js").val('');
    $(".ca-1-error").removeClass('active');
  });

   $("body").on("click", ".ca-1-wrapper-btn-clean-2", function(){
    $(".inp_raz_sheta_js_2").val('');
    $(".inp_risk_percent_js_2").val('');
    $(".inp_risk_usd_js_2").val('');
    $(".inp_pipsu_js").val('');
    $(".inp_lotu_js").val('');
    $(".inp_unit_js").val('');
    $(".inp_otkritie_2").val('');
  });


   $(document).on('click', '.ca-1-row-el--copy-btn', function() {
    var button = $(this);
    button.addClass('active');

    const thisitem = $(this);
    setTimeout(function(){
      thisitem.removeClass('active');
        button.find('.label-std').remove(); // Удаляем предыдущую надпись, если есть
      }, 1500);

    var parent = button.closest('.ca-1-row-el');
    var input = parent.find('input');
    var inputValue = input.val();
    var tempElement = $('<textarea>');
    $('body').append(tempElement);
    tempElement.val(inputValue).select();
    document.execCommand('copy');
    tempElement.remove();

    // Добавляем надпись "Скопировано"
    var copiedLabel = $('<div class="label-std">Скопировано</div>');
    button.append(copiedLabel);
  });




   $(".ca-1-wrapper-btn-send-2").on("click", function(){
    $(".inp_raz_sheta_js_2").removeClass('error');
    $(".inp_risk_percent_js_2").removeClass('error');
    $(".inp_pipsu_js").removeClass('error');
    $(".inp_otkritie_2").removeClass('error');

    let inp_raz_scheta = $(".inp_raz_sheta_js_2").val();
    let inp_risk_percent = $(".inp_risk_percent_js_2").val();
    let inp_pipsu = $(".inp_pipsu_js").val();
    let inp_para = $(".select_para_js select").val();
    let inp_otkritie = $(".inp_otkritie_2").val();

    

    if(!inp_raz_scheta){
      $(".inp_raz_sheta_js_2").addClass('error');
    }
    if(!inp_risk_percent){
      $(".inp_risk_percent_js_2").addClass('error');
    }
    if(!inp_pipsu){
      $(".inp_pipsu_js").addClass('error');
    }


    if(inp_para == "USD/JPY" || inp_para == "USD/CHF" || inp_para == "USD/CAD"){
      if(!inp_otkritie){
        console.log("стоп");
        $(".inp_otkritie_2").addClass('error');
        return false;
      }
    }

    if(inp_raz_scheta && inp_risk_percent && inp_pipsu && inp_para){
      if(inp_para == "USD/JPY" || inp_para == "USD/CHF" || inp_para == "USD/CAD"){
        if(inp_otkritie){
          inp_otkritie = parseFloat(inp_otkritie);
        }
      }
      inp_raz_scheta = parseFloat(inp_raz_scheta);
      inp_risk_percent = parseFloat(inp_risk_percent);
      inp_pipsu = parseFloat(inp_pipsu);
      

      let inp_lotu_js = 0;
      let inp_unit_js = 0;
      let x1 = 0;
      let x2 = 0;
      let x3 = 0;
      let x4 = 0;
      let x5 = 0;
      let x6 = 0;

      x1 = inp_risk_percent / 100;
      x2 = x1 * inp_raz_scheta;
      

      if(inp_para == "USD/JPY"){
        x3 = 1000 / inp_otkritie;
        x4 = inp_pipsu * x3;
        x5 = x2 / x4;
        inp_lotu_js = x5;
        x6 = x5 * 100000;
        x6 = Math.round(x6);
        inp_unit_js = x6;
      }else if( inp_para == "USD/CHF" || inp_para == "USD/CAD"){
        x3 = 10 / inp_otkritie;
        x4 = inp_pipsu * x3;
        x5 = x2 / x4;
        inp_lotu_js = x5;
        x6 = x5 * 100000;
        inp_unit_js = x6;
      }else {
        x3 = inp_pipsu * 10;
        x4 = x2 / x3;
        inp_lotu_js = x4;
        x5 = x4 * 100000;
        inp_unit_js = x5;
      }

      inp_lotu_js = inp_lotu_js.toFixed(2);
      inp_unit_js = Math.round(inp_unit_js)
      x2 = x2.toFixed(2);


      $(".inp_lotu_js").val(inp_lotu_js);
      $(".inp_unit_js").val(inp_unit_js);
      $(".inp_risk_usd_js_2").val(x2);
    } else {
          // тут ошибка если хоть одно поле пустое
        }
      });

   $("select").styler();

   $('.select_para_js').on('change',"select", function() {
    let inp_para = $(this).val();
    console.log(inp_para);
    $(".ca-1-row-full--js-visual").removeClass('active');

    if(inp_para == "USD/JPY"){
      $(".ca-1-row-full--js-visual").addClass('active');
      $('.inp_otkritie_2').attr('placeholder', '156.850');
    }else if(inp_para == "USD/CHF"){
      $(".ca-1-row-full--js-visual").addClass('active');
      $('.inp_otkritie_2').attr('placeholder', '0.91390');
    }else if(inp_para == "USD/CAD"){
      $(".ca-1-row-full--js-visual").addClass('active');
      $('.inp_otkritie_2').attr('placeholder', '1.36555');
    }
  });






   $('.main-menu a[href="#"]').on('click', function(event) {
    event.preventDefault();
    var $menuItem = $(this).closest('.menu-item');
    $menuItem.toggleClass('active');
  });

   $(document).on('click', function(event) {
    if (!$(event.target).closest('.main-menu').length) {
      $('.main-menu .menu-item.active').removeClass('active');
    }
  });

 });
