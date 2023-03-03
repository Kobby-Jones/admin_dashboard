function createBarChart() {
     const lineChart = document.getElementById("myChart");

    new Chart(lineChart,
        {
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
         ]
         },
        
     });
}
function createBarChart2() {
  const lineChart = document.getElementById("reviewChart");

  new Chart(lineChart, {
    type: "doughnut",
    data: {
      labels: [
        "Automotives",
        "Skincare",
        "Fernitures",
        "Sunglasses",
        "Smartphones and Laptops",
        "Lighting",
      ],
      datasets: [
        {
          label: "Latest Product",
          data: [22.1, 7.3, 5.7, 32.5, 14.6, 10.67],
          cubicInterpolationMode: "monotone",
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 0,
          backgroundColor: [
            " #F7604D",
            "#4ED6B8",
            "#3889FC",
            "#A8D582",
            "#D7D768",
            "#9D66CC",
          ],

              borderWidth: 3,
          height:400,
        },
      ],
    },
    option: {
      height: 200,
    },
  });
}

function horizontalBarChart() {
    let salesChart = document.getElementById("salesChart");

    new Chart(salesChart, {
      type: "bar",
      data: {
        labels: [
          "Automotives",
          "Skincare",
          "Fernitures",
          "Sunglasses",
          "Laptops",
          "Lighting",
          ],
          datasets: [
              {
                  label: "Product Sales",
                  data: [23, 45, 67, 40, 15, 67],
                  
              }
          ]
        },
        options: {
            indexAxis: "y",
            barPercentage:0.2
      }
    });
}
/**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */