const coffees = ['cappucino', 'latee', 'americano']
const coffeeName = prompt("поиск кофе по названию")
const index = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase())

if (index !== -1){
        alert(`Держите ваш любимый кофе ${coffees[index]} Он ${index + 1} по популярности в нашей кофейне`)}
    else{
        alert("К сожалению такого вида кофе нет в наличии")
}