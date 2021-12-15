document.addEventListener('DOMContentLoaded', ()=> {

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


    burgerMenu();



    /*Chart*/
    // const DATA_COUNT = 12;
    // const labels = [];
    // for(let i = 0; i < DATA_COUNT; i++) {
    //     labels.push(i.toString());
    // }

    // const datapoints = []
})