
var money = prompt ('Ваш бюджет?');
var name = prompt ("Название вашего магазина?");

var mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: true,

}

mainList.shopGoods[0] = prompt ("Какой тип товарв будем продавать?");
mainList.shopGoods[1] = prompt ("Какой тип товарв будем продавать?");
mainList.shopGoods[2] = prompt ("Какой тип товарв будем продавать?");

alert("бюджет на 1 день:" + mainList.budget/30);

console.log(mainList);