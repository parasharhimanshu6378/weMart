document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.fname.value = '';
    e.target.elements.sname.value = '';
    e.target.elements.email.value = '';
    e.target.elements.phone.value = '';
    e.target.elements.message.value = '';
  });