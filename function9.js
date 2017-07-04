var phonebook = {
    list: [] // массив объектов в данном случае пользователей
    findByTel: function(tel) { // метод который будет возвращать пользователя по номеру тел.
                    
                }

    updateUserByTel: function(tel) { // метод который будет обновлять пользователя по номеру телефона
                    
                }

    addUser: function(user) { // метод для добавления юзеров
                    
				phonebook.list.push(user); 
				sort(phonebook.list);
                }

    getUser: function(tel) { // метод который будет выводить информацию про юзера по номеру телефона
                    
                }

    deleteUser: function(tel) { // 
                        
                }
}

function addUser(name, surname, tel){
    var user = {
        name: name;
        surname: surname;
        tel: tel;
    }
    phonebook.addUser(user);
}