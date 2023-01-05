const testbtn = document.getElementById('testbtn')

testbtn.addEventListener('click', (event) => {
    testbtn.textContent = '호이'
    console.log(event.target.textContent)
})