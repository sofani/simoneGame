


$(document).ready(function() {

    var random = [];
    var litID = [];
    var lit;
    var clicked = [];
    var i;
    var j = 0;
    var count = 1;
    var on;
    var off;
    var strict;
    var x;
    


    function change1() {

               //set interval length
                if (count <= 10) {
                    off = 400;
                    on  = 800;

                } else {
                    off = 250;
                    on =  500;
                }
                x = setInterval(function () {

                   if (random[j] == 1) {

                      lit = 'green-active';
                      $('#one').addClass(lit);
                      $('#audio1')[0].play();
                      litID.push(1);

                      setTimeout(function () {
                        $('#one').removeClass(lit);
                      }, off);

                   } else if (random[j] == 2) {

                        lit = 'red-active';
                        $('#two').addClass(lit);
                         $('#audio2')[0].play();
                        litID.push(2);

                        setTimeout(function () {
                            $('#two').removeClass(lit);
                        }, off);

                  } else if (random[j] == 3) {

                        lit = 'yellow-active';
                        $('#three').addClass(lit);
                         $('#audio3')[0].play();
                        litID.push(3);

                        setTimeout(function () {
                            $('#three').removeClass(lit);
                        }, off);
                  } else {

                        lit = 'blue-active';
                        $('#four').addClass(lit);
                        $('#audio4')[0].play();
                        litID.push(4);
                        setTimeout(function () {
                            $('#four').removeClass(lit);
                        }, off);
                 }

                 j++;

                 if (j >= count) {
                    clearInterval(x);
                 }

             }, on);
      }



    function checking() {

        if (litID.length == clicked.length) {

                if (litID.join() == clicked.join()) {

                        if (count == 20) {

                            setTimeout(function () {
                                alert("You win!");
                                location.reload();
                            }, 1000);
                        } else {
                            setTimeout(function () {
                                $('#count').text(count + 1);
                                count++;
                                litID = [];
                                clicked = [];
                                j = 0;
                                change1();

                            }, 1000);
                        }
                } else {
                    if (strict == 1) {

                        location.reload();

                    } else {
                        setTimeout(function () {
                            $('#count').text('!!');

                            litID = [];
                            clicked = [];
                            j = 0;
                            change1();
                        }, 1000);
                    }
                }
    }
  }


   $('#on').on('click', function () {

        $('#count').text('--');
        for (i = 0; i < 20; i++) {
           random[i] = Math.floor((Math.random() * 4));

        }

        $('#strict').on('click', function () {
            strict = 1;
        });

        //to start the game
        $('#start').on('click', function () {
            $('#count').text(count);
            change1();
        });

        //user to play
        $('#one').on('click', function () {

            $('#one').addClass("green-active");
            $('#audio1')[0].play();

            clicked.push(1);

            setTimeout(function () {
                $('#one').removeClass("green-active");

            }, 250);

            checking();

        });

        $('#two').on('click', function () {

            $('#two').addClass('red-active');
            $('#audio2')[0].play();

            clicked.push(2);

            setTimeout(function () {
                $('#two').removeClass('red-active');

            }, 250);

            checking();
        });

        $('#three').on('click', function () {

            $('#three').addClass('yellow-active');
            $('#audio3')[0].play();

            clicked.push(3);

            setTimeout(function () {
                $('#three').removeClass('yellow-active');

            }, 250);

            checking();
        });

        $('#four').on('click', function () {

            $('#four').addClass('blue-active ');
            $('#audio4')[0].play();

            clicked.push(4);

            setTimeout(function () {
                $('#four').removeClass('blue-active ');

            }, 250);

            checking();
        });

    });

    //to switch off
    $('#off').on('click', function () {
        location.reload();
    });
});