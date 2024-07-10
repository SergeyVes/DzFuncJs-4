// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(id, url) {
    fetch (url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(element => {
        if (element.id === id) {
          console.log(element);
        }
      });
    })
    .catch((error) => {
      console.log("There has been a problem with your fetch operation:", error);
    })
  }
  
  getUserData(1, "https://jsonplaceholder.typicode.com/users")
  
  // Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
  
  // *Подсказка *
  // // Пример использования функции
  // const user = {
  // name: 'John Smith',
  // age: 30,
  // email: 'john@example.com'
  // };
  
  // saveUserData(user)
  // .then(() => {
  // console.log('User data saved successfully');
  // })
  // .catch(error => {
  // console.log(error.message);
  // });
  
  // saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени
  
  const userData = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
  };
  
  function saveUserData(user, url) {
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(user), // Тело запроса в JSON-формате
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Добавляем необходимые заголовки
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log('User data saved successfully');
    }
  )
    .catch((error) => {
      console.log(error);
    })
  }
  
  saveUserData(userData, 'https://jsonplaceholder.typicode.com/posts');
  
  // Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
  
  // // Пример использования функции
  // changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
  
  const pElement = document.createElement('p');
  pElement.textContent = "Привет";
  pElement.id = 'myElem'
  pElement.classList.add("myElement");
  const blockCardElement = document.querySelector('.box');
  blockCardElement.appendChild(pElement);
  console.log(blockCardElement);
  
  function changeStyleDelayed(id, time) {
    setTimeout(() => {
      const elem = document.getElementById(id);
      elem.style.backgroundColor = "green";
      elem.style.border = "1px solid red";
      elem.style.width = "100px";
      elem.style.height = "20px";
      elem.style.textAlign = "center";
    }, time);
  }
  
  changeStyleDelayed('myElem', 2000)