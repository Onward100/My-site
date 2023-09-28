AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function message() {
  var params = {
    from_name : document.getElementById('fullName').value,
    email_id : document.getElementById('email_id').value,
    message : document.getElementById('message').value,
  }
  if(fullName.value === '' || email_id.value === '' || message.value === ''){
    alert("Fields can't be empty");
  }
  else{
    emailjs.send('service_02yqzad', 'template_sxhhwp8', params).then(function (res){
      alert('Email sent successfully:', res);
    }, function(error){
      alert("Email sending failed:", error);
    });
  }
}