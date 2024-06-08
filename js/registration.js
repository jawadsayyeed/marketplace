var role = document.getElementById('role'),
  phoneNumber = document.getElementById('phone'),
  address = document.getElementById('address'),
  lPhone = document.querySelector('.lPhone'),
  lAddress = document.querySelector('.lAddress');

// d-none
role.addEventListener('change', () => {
  if (role.value == 'Customer') {
    document.getElementById('phone').classList.toggle('d-none')
    document.getElementById('address').classList.toggle('d-none')
    document.querySelector('.lPhone').classList.toggle('d-none')
    document.querySelector('.lAddress').classList.toggle('d-none')
  } else {
    document.getElementById('phone').classList.toggle('d-none')
    document.getElementById('address').classList.toggle('d-none')
    document.querySelector('.lPhone').classList.toggle('d-none')
    document.querySelector('.lAddress').classList.toggle('d-none')
  }
})