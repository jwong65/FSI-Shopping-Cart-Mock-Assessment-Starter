let button1 = document.querySelector("#quantity-up")
let button2 = document.querySelector("#quantity-down")
let totalq = document.querySelector(".total-quantity")
let totalp = document.querySelector(".total-price")
let removebutton = document.querySelector(".remove")


let count = 1
let price = 0

function updateQuantityText(count, price)
{
    totalp.textContent ="Total Price available at checkout:" + String(price)
    totalq.textContent = "Quantity: "+ String(count)
}

removebutton.addEventListener('click', function()
{
    count = 0
    price = count*15
    updateQuantityText(count)
    updateText(price)
})

button1.addEventListener('click', function()
{
    if (count<100){
        count++
        price= count*15
    }
    updateQuantityText(count, price)
    //let totalq =("Quantity :", count)
}
)

button2.addEventListener('click', function()
{
    if (count>1){
        count--
        price = count*15
    }
    updateQuantityText(count, price)
    //let totalq =("Quantity :", count) 
}
)



//Made the count a string(count)

//totalq.textContent ="Quantity : "
//how do you put the variable count into the textContent for totalq

