$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
        var $indexValue = $(this).attr('index');

        var index = Number($indexValue) + 1;
        if ($altvalue=="cat" + index + "") {
            var img = $(".photo:nth-child(" + index + ") img").clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
       

        // if ($altvalue=="cat1") {
        //     var img = $('.photo:nth-child(1) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat2") {
        //     var img = $('.photo:nth-child(2) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat3") {
        //     var img = $('.photo:nth-child(3) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat4") {
        //     var img = $('.photo:nth-child(4) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat5") {
        //     var img = $('.photo:nth-child(5) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat6") {
        //     var img = $('.photo:nth-child(6) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat7") {
        //     var img = $('.photo:nth-child(7) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat8") {
        //     var img = $('.photo:nth-child(8) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat9") {
        //     var img = $('.photo:nth-child(9) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // } else if ($altvalue=="cat10") {
        //     var img = $('.photo:last-child img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});