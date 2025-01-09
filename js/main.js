(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Fact Counter

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);



// URL to post data to
// function contactForm(){
//     const url = 'https://portfolio-server-pigb.onrender.com/contact/contactEmpire';

//     var name = document.getElementById("nameIndex").value;
//     var subject = document.getElementById("subjectIndex").value;
//     var email = document.getElementById("emailIndex").value;
//     var message = document.getElementById("messageIndex").value;



//     // Data to send
//     const data = {
//         name: name,
//         subject:subject,
//         email:email,
//         message:message,
//     };

//     // Sending data using POST
//     fetch(url, {
//         method: 'POST', // HTTP method
//         headers: {
//             'Content-Type': 'application/json', // Inform server about the data format
//         },
//         body: JSON.stringify(data), // Convert JavaScript object to JSON
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 console.log(`HTTP error! Status: ${response.status}`)
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json(); // Parse JSON response
//         })
//         .then((data) => {
//             console.log(data.msg);
//             alert('Data posted successfully:', data.msg);
//         })
//         .catch((error) => {
//             // console.error('Error posting data:', error);
//             alert('Error posting data:', error);
//         })

        
//     console.log(name + subject + email+ message)

// };

function contactFormContactPage() {
    const url = 'https://portfolio-server-pigb.onrender.com/contact/contactEmpire';

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Data to send
    const data = {
        name: name,
        subject: subject,
        email: email,
        message: message,
    };

    // Show the processLoader and freeze the page
    document.getElementById("processLoader").style.display = "flex";
    document.body.classList.add('loading'); // Disable interactions

    // Sending data using POST
    fetch(url, {
        method: 'POST', // HTTP method
        headers: {
            'Content-Type': 'application/json', // Inform server about the data format
        },
        body: JSON.stringify(data), // Convert JavaScript object to JSON
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
        })
        .then((data) => {
            alert( data.msg);
        })
        .catch((error) => {
            alert('Error sending message: ' + error.message);
        })
        .finally(() => {
            // Hide the processLoader and enable interactions
            document.getElementById("processLoader").style.display = "none";
            document.body.classList.remove('loading'); // Re-enable interactions
        });

    console.log(name + subject + email + message);
}


function contactForm() {
    const url = 'https://portfolio-server-pigb.onrender.com/contact/contactEmpire';

    var name = document.getElementById("nameIndex").value;
    var subject = document.getElementById("subjectIndex").value;
    var email = document.getElementById("emailIndex").value;
    var message = document.getElementById("messageIndex").value;

    // Data to send
    const data = {
        name: name,
        subject: subject,
        email: email,
        message: message,
    };

    // Show the processLoader and freeze the page
    document.getElementById("processLoader").style.display = "flex";
    document.body.classList.add('loading'); // Disable interactions

    // Sending data using POST
    fetch(url, {
        method: 'POST', // HTTP method
        headers: {
            'Content-Type': 'application/json', // Inform server about the data format
        },
        body: JSON.stringify(data), // Convert JavaScript object to JSON
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
        })
        .then((data) => {
            alert( data.msg);
        })
        .catch((error) => {
            alert('Error sending message: ' + error.message);
        })
        .finally(() => {
            // Hide the processLoader and enable interactions
            document.getElementById("processLoader").style.display = "none";
            document.body.classList.remove('loading'); // Re-enable interactions
        });

    console.log(name + subject + email + message);
}
