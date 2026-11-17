let addBtn = document.querySelector('#add-btn');
let participantNameInput = document.querySelector('#participant-name');
let eventNameInput = document.querySelector('#event-name');
let errorMessage = document.querySelector('#error-message');
let participantsList = document.querySelector('#participants-list');
let totalCountSpan = document.querySelector('#total-count');
let confirmedCountSpan = document.querySelector('#confirmed-count');
let clearAllBtn = document.querySelector('#clear-all-btn');

let applications = [];

function updateStats() {
  let total = applications.length;
  let confirmed = applications.filter(app => app.isConfirmed).length;

  totalCountSpan.textContent = total;
  confirmedCountSpan.textContent = confirmed;
}

function renderApplications() {
  participantsList.innerHTML = '';

  if (applications.length === 0) {
    let emptyMsg = document.createElement('div');
    emptyMsg.className = 'empty-message';
    emptyMsg.textContent = 'Заявок поки немає';
    participantsList.appendChild(emptyMsg);
    updateStats();
    return;
  }

  applications.forEach((app, index) => {
    let item = document.createElement('div');
    item.className = 'participant-item';

    let infoDiv = document.createElement('div');
    infoDiv.className = 'participant-info';

    let h3 = document.createElement('h3');
    h3.textContent = app.name;

    let p = document.createElement('p');
    p.className = 'event-title';
    p.textContent = app.event;

    let badge = document.createElement('span');
    badge.className = 'badge ' + (app.isConfirmed ? 'badge-confirmed' : 'badge-pending');
    badge.textContent = app.isConfirmed ? 'Підтверджено' : 'Очікує';

    infoDiv.append(h3, p, badge);

    let actionsDiv = document.createElement('div');
    actionsDiv.className = 'participant-actions';

    let confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.className = 'btn-action btn-blue';
    confirmBtn.textContent = app.isConfirmed ? 'Скасувати' : 'Підтвердити';

    confirmBtn.addEventListener('click', function() {
      applications[index].isConfirmed = !applications[index].isConfirmed;
      renderApplications();
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn-action btn-red';
    deleteBtn.textContent = 'Видалити';

    deleteBtn.addEventListener('click', function() {
      applications.splice(index, 1);
      renderApplications();
    });

    actionsDiv.append(confirmBtn, deleteBtn);
    item.append(infoDiv, actionsDiv);
    participantsList.appendChild(item);
  });

  updateStats();
}

addBtn.addEventListener('click', function() {
  let nameVal = participantNameInput.value.trim();
  let eventVal = eventNameInput.value.trim();

  if (nameVal === '' || eventVal === '') {
    errorMessage.classList.remove('hidden');
    return;
  }

  errorMessage.classList.add('hidden');

  applications.push({
    name: nameVal,
    event: eventVal,
    isConfirmed: false
  });

  participantNameInput.value = '';
  eventNameInput.value = '';

  renderApplications();
});

participantNameInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});

eventNameInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});

clearAllBtn.addEventListener('click', function() {
  if (applications.length === 0) return;

  let confirmed = confirm('Ви дійсно хочете очистити всі заявки?');
  if (confirmed) {
    applications = [];
    renderApplications();
  }
});

renderApplications();
