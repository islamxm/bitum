import ApexCharts from 'apexcharts';
import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', ()=> {


    MicroModal.init();
    
    function burgerMenu() {
        const burgerBtn = document.querySelector('.header__burger');
        const burgerMenu = document.querySelector('.menu');

        if(burgerBtn && burgerMenu) {
            burgerBtn.addEventListener('click', () => {
                burgerBtn.classList.toggle('active');
                burgerMenu.classList.toggle('active');

                if(burgerMenu.classList.contains('active') && burgerBtn.classList.contains('active')) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
            });

            burgerMenu.addEventListener('click', (e) => {
                if(e.target && e.target.classList.contains('menu')) {
                    burgerBtn.classList.remove('active');
                    burgerMenu.classList.remove('active');
                }

                if(burgerMenu.classList.contains('active') && burgerBtn.classList.contains('active')) {
                document.body.classList.add('no-scroll');
                } else {
                    document.body.classList.remove('no-scroll');
                }
            })


        }
    }

    function asideMenu() {
        const asideBtn = document.querySelector('.aside__btn');
        const aside = document.querySelector('.aside');
        const asideMenu = document.querySelector('.aside__in');

        if(asideBtn) {
            asideBtn.addEventListener('click', () => {
                aside.classList.toggle('active');
            })
        }
    }


    burgerMenu();
    asideMenu();

    let options = {
        chart: {
          height: 280,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        series: [
          {
            name: "Series 1",
            data: [45, 52, 38, 45, 19, 23, 2]
          },
              {
            name: "Series 2",
            data: [25, 22, 32, 54, 12, 13, 2]
          }
        ],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan"
          ]
        },
        responsive: [{
          breakpoint: 500,
          options: {
            chart: {
              height: 200
            }
          }
        }]
    };
      

    const charts = document.querySelectorAll('.chartC');

    charts.forEach(i => {
        if(i) {
            let chart = new ApexCharts(i, options);

            chart.render();
        } 
    });





    /*Chart*/
    // const DATA_COUNT = 12;
    // const labels = [];
    // for(let i = 0; i < DATA_COUNT; i++) {
    //     labels.push(i.toString());
    // }

    // const datapoints = []
})