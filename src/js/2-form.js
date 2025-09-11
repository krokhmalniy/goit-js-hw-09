let formData = {
  email: '',
  message: '',
};

const email = document.getElementById('email');
const message = document.getElementById('message');

email.addEventListener('focus', () => {
  email.placeholder = 'Type area';
});

email.addEventListener('blur', () => {
  email.placeholder = ''; 
});

message.addEventListener('focus', () => {
  message.placeholder = 'Type area';
});

message.addEventListener('blur', () => {
  message.placeholder = ''; 
});

const feedbackForm = document.querySelector('.feedback-form');
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  feedbackForm.elements.email.value = formData.email || '';
  feedbackForm.elements.message.value = formData.message || '';
}

feedbackForm.addEventListener('input', onInput => {
  formData[onInput.target.name] = onInput.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', sub => {
  sub.preventDefault();

  formData.email = feedbackForm.elements.email.value;
  formData.message = feedbackForm.elements.message.value.trim();

  localStorage.removeItem('feedback-form-state');
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  feedbackForm.reset();
});
