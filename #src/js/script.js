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


    function tabsFunc() {
        const tabsParent = document.querySelector('.doc__main_tabs');
        const tabs = document.querySelectorAll('.doc__tab');
        const tabsContents = document.querySelectorAll('.doc__content');

        function hideTabs() {
            tabsContents.forEach(item => {
                item.style.display = 'none';
            });
            tabs.forEach(item => {
                item.style.color = '#fff';
            })
        }

        function showTabs(ind = 0) {
            tabsContents[ind].style.display = 'block';
            tabs[ind].style.color = 'red';
        }


        hideTabs();

        showTabs();


        tabsParent.addEventListener('click', (e)=> {
            let target = e.target;

            if(target && target.classList.contains('doc__tab')) {
                tabs.forEach((i, index) => {
                    if(target == i) {
                        hideTabs();
                        showTabs(index);
                    }
                })
            }
        })


    }

    const tabtog = document.querySelector('.doc__main_tabs');

    if(tabtog) {
        tabsFunc(); 
    }

    
    burgerMenu();
    asideMenu();

    let options = {
        chart: {
          height: 280,
          type: "area"
        },
        dataLabels: {
          enabled: false,
          
        },
        series: [
          {
            name: "Series 1",
            data: [45, 52, 38, 45, 19, 23, 2],
          },
              {
            name: "Series 2",
            data: [25, 22, 32, 54, 12, 13, 2]
          }
        ],
        fill: {
          type: "gradient",
          colors: ['#fff', '#fff'],
          gradient: {
            shadeIntensity: 1,
            opacityFrom:0,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        markers: {
          colors: ['#432f8a', '#ECE9F1']
        },
        stroke: {
          colors: ['#432f8a', '#ECE9F1']
        },
        xaxis: {
          categories: [
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30"
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