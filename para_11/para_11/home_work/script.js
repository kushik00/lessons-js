const nameInput = document.getElementById('nameInput');
const namePreview = document.getElementById('namePreview');
const saveBtn = document.getElementById('saveBtn');
const statusMsg = document.getElementById('statusMsg');
const langSelect = document.getElementById('langSelect');
const themeBtn = document.getElementById('themeBtn');
const toggleInfoBtn = document.getElementById('toggleInfoBtn');
const extraInfo = document.getElementById('extraInfo');
const card = document.getElementById('card');

nameInput.addEventListener('input', () => {
  namePreview.textContent = nameInput.value || 'Гість';
});

saveBtn.addEventListener('click', () => {
  statusMsg.textContent = `Збережено: ${namePreview.textContent}`;
  statusMsg.classList.add('success');
});

langSelect.addEventListener('change', () => {
  console.log(langSelect.value);
});

themeBtn.addEventListener('click', () => {
  card.classList.toggle('dark');
  if (card.classList.contains('dark')) {
    themeBtn.textContent = 'Світла тема';
  } else {
    themeBtn.textContent = 'Темна тема';
  }
});

toggleInfoBtn.addEventListener('click', () => {
  extraInfo.classList.toggle('hidden');
});