window.addEventListener('DOMContentLoaded', function () {
  const people = [
    'Anthony Ciccone',
    'Bennett Dungan',
    'Joe Gonwa',
    'Kelly Porter',
    'Natalie Colburn',
  ];

  const setDateHeader = (randomPerson) => {
    const today = new Date();
    const defaultHeader = 'Song of the Day for ';
    document.getElementsByClassName('today')[0].innerHTML = `${defaultHeader} ${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`;
  };
  const shuffleStudents = (list) => {
    let selectedPeople = localStorage.getItem('SelectedPeople') || '';
    selectedPeople = selectedPeople.split(',');
    if (selectedPeople.length !== people.length) {
      list = list.filter((item) => {
        return !selectedPeople.includes(item);
      });
    } else {
      selectedPeople = '';
    }

    const randomPerson = list[Math.floor(Math.random() * list.length)];
    localStorage.setItem('SelectedPeople', selectedPeople + randomPerson + ',');
    setDateHeader(randomPerson);
    displayPairings(randomPerson);
  };

  const displayPairings = (person) => {
    let pairingDiv = document.getElementsByClassName('person')[0];
    pairingDiv.innerHTML += `<h1>Is:  🎶 ${person} 🎶</h1>`;
  };

  shuffleStudents(people);
});
