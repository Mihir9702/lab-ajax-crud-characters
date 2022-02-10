const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  // Read All
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList();
  });

  // Read One
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();

    const id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id);
  });

  // Delete One
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();

    const id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id);
  });

  // Edit One
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('edit-id').value;

    const obj = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').value === 'on'
    }

    charactersAPI.updateOneRegister(id, obj)
  });

  // Create One
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const obj = {
      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occupation').value,
      weapon: document.getElementById('new-weapon').value,
      cartoon: document.getElementById('new-cartoon').value === 'on'
    }

    charactersAPI.createOneRegister(obj);
  });
});
