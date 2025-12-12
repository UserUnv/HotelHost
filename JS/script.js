// Скрипт для плавного появления секций при скролле
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Сохранение профиля
function saveProfile() {
  const fullname = document.getElementById('fullname').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  alert(`Профиль сохранен:\n${fullname}\n${phone}\n${email}`);
}

// Скрипт для FAQ (расширение)
document.querySelectorAll('.question h4').forEach(h4 => {
  h4.style.cursor = 'pointer';
  h4.addEventListener('click', () => {
    const p = h4.nextElementSibling;
    if(p.style.display === 'none' || !p.style.display){
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
});
// Скрипт для плавного появления секций при скролле
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Сохранение профиля
function saveProfile() {
  const fullname = document.getElementById('fullname').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  alert(`Профиль сохранен:\n${fullname}\n${phone}\n${email}`);
}

// FAQ - раскрытие ответов
document.querySelectorAll('.question h4').forEach(h4 => {
  h4.style.cursor = 'pointer';
  h4.addEventListener('click', () => {
    const p = h4.nextElementSibling;
    if(p.style.display === 'none' || !p.style.display){
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
});