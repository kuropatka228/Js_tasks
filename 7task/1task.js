const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function giveParcel(queue) {
    if (queue.length > 0) {
      const person = queue.shift();
      alert(`${person} получил(а) посылку. В очереди осталось ${queue.length} человек.`);
    }
  }
  
  function leaveQueueWithoutParcel(queue, person) {
    if (queue.includes(person)) {
      const index = queue.indexOf(person);
      queue.splice(index, 1);
      alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
    }
  }

  giveParcel(peopleWaiting);
  giveParcel(peopleWaiting);

const kristinaIndex = peopleWaiting.indexOf("Кристина");
if (kristinaIndex > -1) {
  peopleWaiting.splice(kristinaIndex, 1);
}

const olegIndex = peopleWaiting.indexOf("Олег");
if (olegIndex > -1) {
  peopleWaiting.splice(olegIndex, 1);
}

let remainingPeople = peopleWaiting.slice();
remainingPeople.forEach(person => leaveQueueWithoutParcel(peopleWaiting, person));