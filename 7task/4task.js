const coffees = ['cappucino', 'latee', 'americano']
const prices = [1.5, 1, 2]
const updatedPriсes = prices.map(price => price + 0.5)

updatedPriсes.forEach((prices, index ) => {alert(`кофе ${coffees[index]} сейчас стоит ${prices} евро`)})