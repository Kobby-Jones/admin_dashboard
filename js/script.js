function createBarChart() {
     const ctx = document.getElementById("myChart");

     new Chart(ctx, {
       type: "line",
       data: {
         labels: ["January", "February", "March", "April", "May", "June"],
         datasets: [
           {
             label: "Latest Product",
             data: [88, 68, 79, 57, 50, 55],
             cubicInterpolationMode: "monotone",
             borderColor: "rgb(75, 192, 192)",
             pointRadius: 0,
             borderWidth: 3,
           },
           {
             label: "Popular products",
             data: [33, 45, 37, 21, 55, 74],
             cubicInterpolationMode: "monotone",
             borderColor: "red",
             pointRadius: 0,
             borderWidth: 3,
           },
           {
             label: "Featured products",
             data: [44, 19, 38, 46, 85, 66],
             cubicInterpolationMode: "monotone",
             borderColor: "orange",
             pointRadius: 0,
             borderWidth: 3,
           },
         ],
       },
       plugins: {
         Legend: {
           position: "bottom",
         },
       },
     });
}