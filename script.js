const studentsData = [
  {
    name: "Salman Ahmed",
    marks: 38,
    class: "3rd",
    address: "India"
  },
  {
    name: "Riya Sharma",
    marks: 85,
    class: "10th",
    address: "123, ABC Colony, Delhi"
  },
  {
    name: "Rohan Patel",
    marks: 70,
    class: "12th",
    address: "456, XYZ Street, Mumbai"
  },
  {
    name: "Priya Singh",
    marks: 95,
    class: "8th",
    address: "789, PQR Nagar, Bangalore"
  },
  {
    name: "Aditi Gupta",
    marks: 60,
    class: "9th",
    address: "101, LMN Road, Kolkata"
  },
  {
    name: "Neha Verma",
    marks: 80,
    class: "11th",
    address: "222, DEF Avenue, Chennai"
  },
  {
    name: "Manoj Kumar",
    marks: 75,
    class: "10th",
    address: "Hyderabad"
  },
  {
    name: "Pooja Mishra",
    marks: 88,
    class: "12th",
    address: "Pune"
  },
  {
    name: "Rajesh Singhaniya",
    marks: 92,
    class: "9th",
    address: "Jaipur"
  }
];

let container = document.getElementsByClassName("card-container")[0];
studentsData.map((student) => {
    container.innerHTML += `
    <div class="card">
      <h3>Student Name: ${student.name}</h3>
      <p>Marks: ${student.marks}%</p>
      <p>Class: ${student.class}</p>
      <p>Address: ${student.address}</p>
    </div>
  `;
});

let searchData = document.getElementById('search-btn');
console.log(searchData);

const searchInput = document.getElementById("search-input");
console.log(searchInput);


searchData.addEventListener('click',()=>{
    let value = searchInput.value.toLowerCase();

    const filteredStudents = studentsData.filter((student) => 
        student.name.toLowerCase().includes(value));

     container.innerHTML = "";

    filteredStudents.map((student) => {
        container.innerHTML += `
            <div class="card">
                <h3>Student Name: ${student.name}</h3>
                <p>Marks: ${student.marks}%</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
            `;
    });
})