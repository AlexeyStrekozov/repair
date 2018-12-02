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
     data: $("#questions-form").serialize(),
     success: function (data) {
       if (data == "true") {
        $("#questions-form").fadeOut("fast", function () {
           $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
           setTimeout("$.fancybox.close()", 1000);
    }).done(function () {
     $(this).find("input").val("");
     $("form").trigger("reset");
    });
    return false;
   }
  });
    return false;
 });
 return false;
});