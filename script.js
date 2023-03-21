//your JS code here. If required.
function getObject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value
      };
      resolve(obj);
    }, 4000);
  });
}

function extractValue(obj) {
  return new Promise((resolve, reject) => {
    if (obj.age >= 18) {
      resolve(obj.age);
    } else {
      reject(obj.name);
    }
  });
}

function createObject(value) {
  return new Promise((resolve, reject) => {
    const newObj = {
      age: value
    };
    resolve(newObj);
  });
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  if (name === '' || age === '') {
    alert('Please fill all the fields');
  } else {
    getObject()
      .then(extractValue)
      .then(createObject)
      .then((result) => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch((error) => {
        alert(`Oh sorry ${error}. You aren't old enough.`);
      });
  }
});
