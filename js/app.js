const  formSelect = document.querySelector(".form__select")
const  selectTitle = document.querySelector(".select-title")
const  selectTitleText = document.querySelector(".select-title__text")
const  selectOption = document.querySelectorAll(".select-option")


selectTitle.addEventListener('click', () => {
    formSelect.classList.toggle('active');
})

document.addEventListener('click', e => {
    let click = e.composedPath().includes(formSelect)
    if(!click){
        return  formSelect.classList.remove("active")
    }
})

const removeOptionActive = () => selectOption.forEach( el => {
    el.classList.remove("active-option")
})

selectOption.forEach(el => {
    el.addEventListener('click', function(){
        removeOptionActive()
        el.classList.add("active-option")
        selectTitleText.innerHTML = el.querySelector("input").value
        formSelect.classList.remove("active")
    })
})



/*--------------------------------------Range--------------------------------------------*/

const formRangePercent = document.querySelector(".form__range-perсent")

const addValueRange = (e) => {
    formRangePercent.innerHTML = e
}
/*------------------------------------------Burger-----------------------------------------------*/

const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
})

