export const doughnutLegends = [
    { title: 'Shirts', color: 'bg-blue-500' },
    { title: 'Shoes', color: 'bg-teal-600' },
    { title: 'Bags', color: 'bg-purple-600' },
  ]
  
  export const lineLegends = [
    { title: 'Organic', color: 'bg-teal-600' },
    { title: 'Paid', color: 'bg-purple-600' },
  ]
  
  export const barLegends = [
    { title: 'Shoes', color: 'bg-teal-600' },
    { title: 'Bags', color: 'bg-purple-600' },
  ]
  
  export const doughnutOptions = {
    data: {
      datasets: [
        {
          data: [33, 33, 33],
          /**
           * These colors come from Tailwind CSS palette
           * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
           */
          backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
          label: 'Dataset 1',
        },
      ],
      labels: ['Shoes', 'Shirts', 'Bags'],
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
    },
    legend: {
      display: false,
    },
  }
 