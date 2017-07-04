var phonebook = {
    list: [ // массив объектов в данном случае пользователей
        {
            "surname": "surname1",
            "name": "name1",
            "tel": "tel1"
        },
        {
            "surname": "surname2",
            "name": "name2",
            "tel": "tel2"
        },
        {
            "surname": "surname3",
            "name": "name3",
            "tel": "tel3"
        }
    ],

    findByTel: function(tel) { // метод который будет возвращать пользователя по номеру тел.
                 return this.list.find(function(user) {
                    return user.tel === tel;
                })   
    },

    updateUserByTel: function(tel, name, surname) { // метод который будет обновлять пользователя по номеру телефона
                var user = this.findByTel(tel);
                user.name = name;
                user.surname = surname; 
                return "Updated!";   
                },

    addUser: function(user) { // метод для добавления юзеров                    
				if (typeof(this.findByTel(user.tel)) === "undefined") {
                    this.list.push(user); 
				    this.list.sort(compareSurnameAndName);
                    return "Added!";
                }
                else return "A user with this telephone number already exists!";
                },

    getUser: function(tel) { // метод который будет выводить информацию про юзера по номеру телефона
                var user = this.findByTel(tel);
                if (typeof(user) === "undefined") {
                    return "A user with this phone number doesn't exist!";    
                }
                else {
                    console.log("name: " + user.name + "\nsurname: " + user.surname + "\ntelephone: " + user.tel);
                }    
                },

    deleteUser: function(tel) { // 
                var deleteIndex = this.list.findIndex(function(user) {
                        return user.tel === tel;
                    });
                if (deleteIndex !== -1) {
                    this.list.splice(deleteIndex, 1);
                    return "Deleted!";    
                }
                else {
                    return "A user with this phone number doesn't exist!";
                }
                      
    }

}

function compareSurnameAndName(user1, user2) {
    var fullNameUser1 = user1.surname + " " + user1.name;
    var fullNameUser2 = user2.surname + " " + user2.name;
    return fullNameUser1 > fullNameUser2 ? 1 : (fullNameUser1 === fullNameUser2 ? 0 : -1);
}