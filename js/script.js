// let lineChart = document.getElementById("lineChart").getContext("2d");
// var chart = new Chart(lineChart, {
//     type: "line",
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "Monthly Products",
//             backgroundColor: ['red', 'blue', 'green', 'yellow', 'violet', 'pink', 'orange'],
//             data: [5, 10, 15, 20, 25, 30, 35]
//         }]
//     },
//      options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
// })
 const ctx = document.getElementById("myChart");

 new Chart(ctx, {
   type: "line",
   data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [
       {
         label: "# of Votes",
         data: [12, 19, 3, 5, 2, 3],
         borderWidth: 1,
       },
     ],
   },
   options: {
     scales: {
       y: {
         beginAtZero: true,
       },
     },
   },
 });