// template_8twpwgc
// service_4pyo5um
// WCptaUdsjFzovdoBc

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += ' modal__overlay--visible';
  emailjs
    .sendForm(
      'service_4pyo5um', 
      'template_8twpwgc',
      event.target, 
      'WCptaUdsjFzovdoBc'
    ).then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        'The email service is temporarily unavailable. Please contact me directly at dnelson.digital@gmail.com'
      )
    })
}