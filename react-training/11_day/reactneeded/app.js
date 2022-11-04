
// DOM manipulation

const bt = document.getElementById('btOk')
console.log(bt)

const bx = document.getElementById('bx')

bt.onclick = () => {
    console.log(`Clicked`)
    bx.style.background = 'yellow'
}