let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let val = inp.value
    getData(val)
})
