document.getElementById('toggleContactBtn').addEventListener('click', function () {
  const contactInfo = document.getElementById('contactInfo');
  contactInfo.classList.toggle('hidden');

  this.textContent = contactInfo.classList.contains('hidden')
    ? 'Show Contact Info'
    : 'Hide Contact Info';
});





const loginForm = document.getElementById('loginForm');
const createForm = document.getElementById('createForm');
const showCreateBtn = document.getElementById('showCreateBtn');
const showLoginBtn = document.getElementById('showLoginBtn');
const loginOverlay = document.getElementById('loginOverlay');
const mainContent = document.getElementById('mainContent');

const loginError = document.getElementById('loginError');
const createError = document.getElementById('createError');


showCreateBtn.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  loginForm.classList.remove('active');
  createForm.classList.remove('hidden');
  createForm.classList.add('active');
  loginError.classList.add('hidden');
  createError.classList.add('hidden');
});


showLoginBtn.addEventListener('click', () => {
  createForm.classList.add('hidden');
  createForm.classList.remove('active');
  loginForm.classList.remove('hidden');
  loginForm.classList.add('active');
  loginError.classList.add('hidden');
  createError.classList.add('hidden');
});


function getUsers() {
  const usersJSON = localStorage.getItem('users');
  return usersJSON ? JSON.parse(usersJSON) : [];
}


function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}


createForm.addEventListener('submit', e => {
  e.preventDefault();

  createError.classList.add('hidden');
  const email = document.getElementById('createEmail').value.trim().toLowerCase();
  const password = document.getElementById('createPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;


  if (password !== confirmPassword) {
    createError.textContent = "Passwords don't match!";
    createError.classList.remove('hidden');
    return;
  }



  if (password.length < 6) {
    createError.textContent = "Password must be at least 6 characters.";
    createError.classList.remove('hidden');
    return;
  }

  let users = getUsers();


  if (users.find(user => user.email === email)) {
    createError.textContent = "Email is already registered.";
    createError.classList.remove('hidden');
    return;
  }

 
  users.push({ email, password });
  saveUsers(users);

  alert('Account created successfully! Please log in.');


  createForm.reset();


  showLoginBtn.click();
});


loginForm.addEventListener('submit', e => {
  e.preventDefault();

  loginError.classList.add('hidden');
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  let users = getUsers();

  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    loginError.textContent = "Invalid email or password.";
    loginError.classList.remove('hidden');
    return;
  }

 
  loginOverlay.classList.add('hidden');
  mainContent.classList.remove('hidden');


  loginForm.reset();
});


