const successBTN = document.querySelector('.btn--success');
const dangerBTN = document.querySelector('.btn--danger');
const infoBTN = document.querySelector('.btn--info');
const warningBTN = document.querySelector('.btn--warning');

    function toast({ title = '', content = '',style = '', duration = 1000} ){
        console.log(title)
                    const getToast = document.getElementById('toast');
                    const icons = {
                        success : 'fas fa-check-circle',
                        warning : 'fas fa-exclamation-triangle',
                        danger : 'fas fa-bomb ',
                        info : 'fas fa-info-circle '
                    }
                    const icon = icons[style];
                    const delay = (duration/1000).toFixed(2);
                    const outAnimation = 1000;
                    const removeToast = duration + outAnimation;
                  
                    if(getToast) {
                        const createElementToast = document.createElement('div');

                        // auto remove Toast
                        const time = setTimeout(()=>{
                            getToast.removeChild(createElementToast);
                        },removeToast);
                        // click close Toast
                        createElementToast.onclick = (event)=>{
                          if(event.target.closest('.toast__close')){
                            getToast.removeChild(createElementToast);
                            clearTimeout(time);
                          }
                        }

                        createElementToast.classList.add('toast',`toast--${style}`)
                        createElementToast.style.animation = ` hiToast ease 0.4s , outToast linear ${outAnimation}s ${delay}s forwards`;
                        createElementToast.innerHTML = `<div class="toast__icon"><i class="${icon} fa-2x"></i></div>
                                                        <div class="toast__content">
                                                            <h3 class="toast__title">${title}</h3>
                                                            <p class="toast__title__body">${content}</p>
                                                        </div>
                                                        <div class="toast__close"><i class="fas fa-times"></i></div>`;
                        getToast.appendChild(createElementToast);
                        
                    }
                
    }
    successBTN.onclick = ()=>{
        toast({
            title : 'Success',
            content : 'The next generation of our icon library',
            style : 'success',
        });
    }
    dangerBTN.onclick = ()=>{
         toast({
            title : 'Danger',
            content : 'The next generation of our icon library',
            style : 'danger',
        });
    }
    infoBTN.onclick = ()=>{
         toast({
            title : 'Info',
            content : 'The next generation of our icon library',
            style : 'info',
        });
    }
    warningBTN.onclick = ()=>{
         toast({
            title : 'Warning',
            content : 'The next generation of our icon library',
            style : 'warning',
        });
    }

