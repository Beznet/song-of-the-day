window.addEventListener("DOMContentLoaded", function(){
  const people = ['Anthony Ciccone', 'Ben Gummoe', 'Bennett Dungan', 'Brian DiRito', 'Joe Gonwa', 'Kelly Porter', 'Max Novak', 'Natalie Colburn', 'James Socol',];

  const setDateHeader = () => {
      const today = new Date();
      document.getElementsByClassName("today")[0].innerHTML = `Song of the Day for ${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  }
  const shuffleStudents = (list) => {
      let selectedPeople = localStorage.getItem('SelectedPeople') || "";
      selectedPeople = selectedPeople.split(',');
      if (selectedPeople.length !== people.length) {
        list = list.filter((item) => {
          return !selectedPeople.includes(item)
        });
      } else {
        selectedPeople = ""
      }

      const randomPerson = list[Math.floor(Math.random() * list.length)];
      localStorage.setItem('SelectedPeople', selectedPeople + randomPerson+",");
      displayPairings(randomPerson);
  }

  const displayPairings = (person) => {
      let pairingDiv = document.getElementsByClassName("person")[0];
      pairingDiv.innerHTML += `<h1>Is: ${person}</h1>`;
  }

  setDateHeader();
  shuffleStudents(people);
})
