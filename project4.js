var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  $(document).ready(function(){
      var body= $('body');
      var popup = '<div class="popup"></div>';

      var formLogin = '<div id="login-form">'+
                            '<form action="">'+
                                '<label for="">Login form</label>'+
                                '<br><br>'+
                                '<label for="">Name :</label><br>'+
                                '<input type="text" id="name" placeholder="Enter name..." name="name"><br>'+
                                '<label for="">Email :</label><br>'+
                                '<input type="text" id="email" placeholder="Enter email..."><br>'+
                                '<label for="">Password :</label><br>'+
                                '<input type="text" id="password" placeholder="Enter password..."><br>'+
                                '<button id="submit">Submit</button>'+
                            '</form>'+
                        '</div>';

    $('#btn-login').click(function(){
        body.append(popup);
        body.find('.popup').append(formLogin);
    })
    body.on('click', '.popup', function() {
        $(this).remove();
    });
                        
    body.on('click', '#login-form', function(event) {
        event.stopPropagation();
        event.preventDefault();
    });
    body.on('click', '#login-form #submit', function() {
    
        var eThis = $(this);
        var Parent = eThis.parents('#login-form');
        var name = Parent.find('#name');
        var email = Parent.find('#email');
        var password = Parent.find('#password');
    
        if (name.val() == '') {
            alert('Please input name!');
            name.focus();
            return;
        } else if (email.val() == '') {
            alert('Please input email!');
            email.focus(); // Changed to focus on the input field
            return;
        } else if (password.val() == '') {
            alert('Please input password!');
            password.focus();
            return;
        }
    
        // Remove the login form if validation is successful
        body.find('.popup').remove();
    });

})
