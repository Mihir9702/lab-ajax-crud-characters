class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(results => {
        results.data.map(name => {

          // console.log(name.name);
          const docName = document.querySelector('.name');
          docName.innerHTML = name.name;
        })
        // results.data.name = document.querySelector('.name');
        // document.querySelector('.occupation') = results.data.occupation[0];
        // document.querySelector('.weapon') = results.data.weapon[0];
      })
      .catch(error => console.log(error))
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(results => {
        document.querySelector('.name').innerHTML = results.data.name;
        document.querySelector('.occupation').innerHTML = results.data.occupation;
        document.querySelector('.weapon').innerHTML = results.data.weapon;
        document.querySelector('.cartoon').innerHTML = results.data.cartoon;
      })
      .catch(error => console.log(error))
  }

  createOneRegister(obj) {
    axios
      .post(`${this.BASE_URL}/characters`, obj)
      .then(results => console.log(results.data))
      .catch(err => console.log(err))
  }

  updateOneRegister(id, obj) {
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, obj)
      .then(results => console.log(results.data))
      .catch(err => console.log(err))
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(results => console.log(results.data))
      .catch(err => console.log(err))
  }
}