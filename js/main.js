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
// function message() {
//   (function(){
//     emailjs.init('qxmxUsw-53qD2MAvg');
//   })();

//   var params = {
//     sendername: document.querySelector('#sendername').value,
//     to: document.querySelector('#to').value,
//     message: document.querySelector('#message').value,
//   };

//   var serviceID = 'service_02yqzad';
//   var templateID = 'template_u0erony';

//   emailjs.send(serviceID, templateID, params).then(res =>{
//     alert('Email sent successfully!')
//   }).catch();
// }

// function message(){
//   var Name = document.getElementById('name')
//   var email = document.getElementById('email');
//   var msg = document.getElementById('msg');
//   const success = document.getElementById('success');
//   const danger = document.getElementById('danger');

function message() {
  var params = {
    from_name : document.getElementById('fullName').value,
    email_id : document.getElementById('email_id').value,
    message : document.getElementById('message').value,
  }
  emailjs.send('service_02yqzad', 'template_sxhhwp8', params).then(function (res){
    alert('Email sent successfully!');
  })
  if(fullName.value === '' || email_id.value === '' || message.value === ''){
    danger.style.display = 'block';
}
else{
    setTimeout(() => {
        fullName.value = ''; 
        email_id.value = '';
        message.value = '';
    }, 2000);

    success.style.display = 'block';
}

setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
}, 4000);

}