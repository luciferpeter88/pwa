export function generateCaloriesChartData(data, labels) {
  return {
    labels: labels,
    datasets: [
      {
        label: "Kcal Burned",
        data: data.map((entry) => entry.calories),
        backgroundColor: "#f88415",
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };
}

export const baseChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      color: "#f1f1f1",
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#f1f1f1",
      },
      grid: {
        color: "#2a2a2a",
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 5000,
      ticks: {
        stepSize: 1000,
        callback: function (value) {
          return value.toLocaleString();
        },
        color: "#f1f1f1",
      },
      grid: {
        color: "#2a2a2a",
      },
    },
  },
};
