// 240403 sjh team_bi script

    const sub_aside_li = document.querySelectorAll('.side_menu li');
    for(let i = 0; i<sub_aside_li.length; i++){
        if(sub_aside_li[i].querySelector('.sub_side_menu')){
            sub_aside_li[i].classList.add('has_sub')
        }else{
            sub_aside_li[i].classList.remove('has_sub')
        }
    }

    const sub_sub_aside = document.querySelectorAll('.side_menu .has_sub a');
    sub_sub_aside.forEach(function(e){
        e.addEventListener('click', function(idx){
            this.parentNode.querySelector('.sub_side_menu').classList.toggle('show')
        })
    })


    const tab_li = document.querySelectorAll('.tabs_li li'),
        tab_con = document.querySelectorAll('.tabs_con > div');
        
        

    tab_li.forEach(function(e, idx){
        e.addEventListener('click', function(){
            for(let i=0; i<tab_con.length; i++){
                tab_li[i].classList.remove('active')
                tab_con[i].classList.remove('show')
            }
            e.classList.add('active')
            tab_con[idx].classList.add('show')
        })
    })

    const aco_li = document.querySelectorAll('.uniform_li li'),
        aco_li_tt = document.querySelectorAll('.uniform_li_tt');
    aco_li_tt.forEach(function(e){
        e.addEventListener('click', function(){
            if(this.parentNode.classList.contains('active')){
                this.parentNode.classList.remove('active')
            }else{
                for(let i=0; i<aco_li.length; i++){
                    aco_li[i].classList.remove('active')
                }
                this.parentNode.classList.add('active')
            }
        })
    })

    const go_top = document.querySelector('.go_top'),
        footer = document.querySelector('footer')
    go_top.addEventListener('click', function(){
        window.scrollTo({
            top:0, behavior:'smooth'
        })
    })
    this.window.addEventListener('scroll', function(){
        //this.alert(footer.offsetHeight)
        if(this.window.scrollY > 100){
            go_top.classList.add('active')
            if(this.window.scrollY > footer.offsetTop - footer.offsetHeight - 600){
                go_top.classList.add('bottom')
            }else{
                go_top.classList.remove('bottom')
            }
        }else{
            go_top.classList.remove('active')
    
        }
    })


AOS.init();