$(".phone").keypress(function (event) {
 event = event || window.event;
 if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
  return false;
});
$(document).ready(function () {
 $('#form').submit(function () {
  $('#form').validate({
   rules: {
    fio: {
     required: true,
    },
    phone: {
     required: true,
     minlength: 11,
     maxlength: 11,
    },
   },

   messages: {
    fio: {
     required: "Это поле обязательноe",
    },
    phone: {
     required: "Это поле обязательноe",
     minlength: "Номер должен быть минимум 11 символа",
    },
   },
   submitHandler: function () {
    $.ajax({
     type: "POST",
     url: "php/send.php",
     data: $("#form").serialize()
    }).done(function () {
     $(this).find("input").val("");
     alert("Сообщение успешно отправлено");
     $("form").trigger("reset");
    });
    return false;
   }
  });
    return false;
 });
   return false;
});

$(document).ready(function () {
 $('#modal-form').submit(function () {
  $('#modal-form').validate({
   rules: {
    fio: {
     required: true,
    },
    phone: {
     required: true,
     minlength: 11,
     maxlength: 11,
    },
   },

   messages: {
    fio: {
     required: "Это поле обязательноe",
    },
    phone: {
     required: "Это поле обязательноe",
     minlength: "Номер должен быть минимум 11 символа",
    },
   },
   
   submitHandler: function () {
    $.ajax({
     type: "POST",
     url: "php/send.php",
     data: $("#modal-form").serialize()
    }).done(function () {
     $(this).find("input").val("");
      $('a[name=modal]').click(function (e) {
       e.preventDefault();
       var id = $(this).attr('href');
       var maskHeight = $(document).height();
       var maskWidth = $(window).width();
       $('#mask').css({
        'width': maskWidth,
        'height': maskHeight
       });
       $('#mask').fadeIn(1000);
       $('#mask').fadeTo("slow", 0.8);
       var winH = $(window).height();
       var winW = $(window).width();
       $(id).css('top', winH / 2 - $(id).height() / 2);
       $(id).css('left', winW / 2 - $(id).width() / 2);
       $(id).fadeIn(2000);
      });
      $('.window .close').click(function (e) {
       e.preventDefault();
       $('#mask, .window').hide();
      });
      $('#mask').click(function () {
       $(this).hide();
       $('.window').hide();
      });
    
     $("form").trigger("reset");
    });
    return false;
   }
  });
    return false;
 });
  return false;
});

$(document).ready(function () {
 $('#questions-form').submit(function () {
  $('#questions-form').validate({
   rules: {
    fio: {
     required: true,
    },
    phone: {
     required: true,
     minlength: 11,
     maxlength: 11,
    },
   },

   messages: {
    fio: {
     required: "Это поле обязательноe",
    },
    phone: {
     required: "Это поле обязательноe",
     minlength: "Номер должен быть минимум 11 символа",
    },
   },
   submitHandler: function () {
    $.ajax({
     type: "POST",
     url: "php/send.php",
     data: $("#questions-form").serialize()
    }).done(function () {
     $(this).find("input").val("");
     alert("Сообщение успешно отправлено");
     $("form").trigger("reset");
    });
    return false;
   }
  });
    return false;
 });
 return false;
});