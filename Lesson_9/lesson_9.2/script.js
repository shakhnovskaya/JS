let age = document.getElementById('age'),
	value = age.value;

 function showUser(surname, name) {
	this.name = name;
	this.surname = surname;
	this.value = value;

	   alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let alex = new showUser('Smith', 'Alex');
 
