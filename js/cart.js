'use strict'

function Product(path, name, price) {
    this.path = path;
    this.name = name;
    this.price = price;
    this.quant = 0
    globArr.push(this)


};
let globArr = [];
let btnArr = ['pro1', 'pro2', 'pro3', 'pro4', 'pro5', 'pro6']

new Product('../images/order/31301_Mild_250g_Macinato-MOKA.jpg', 'Mild Coffee', 10);
new Product('../images/order/bleeding utopia.jpg', 'Black Cofee', 12);
new Product('../images/order/TH-Coarse-Grind-300g-Medium.jpg', 'Blue Mountain Coffee', 14);
new Product('../images/order/zoroy_the_finesse_arabica_ground_coffee.jpg', 'zoroy Arabic Coffee', 16);
new Product('../images/order/31506_MiTul-bio_250g_Macinato-MOKA.jpg', 'Mitul Coffee', 18);
new Product('../images/order/Bulletproof.jpg', 'Bulletproof Coffee', 25);
console.log(globArr);
let idArr = [];
// console.log(typeof gloArr[0].quant);
let totalSum = 0;
let divPrint = document.getElementById('print');
let btn1;
for (let i = 0; i < btnArr.length; i++) {
    
    btn1 = document.getElementById(btnArr[i]);
    btn1.addEventListener('click', handelClick);
    
}

let sum;
function handelClick(event) {
    for (let i = 0; i < btnArr.length; i++) {
        if (btnArr[i] == event.target.id) {
            if (idArr.includes(btnArr[i])) {
                alert('you already take')
                return
            }
            
            idArr.push(btnArr[i]);
            let div1 = document.createElement('div');
            divPrint.appendChild(div1);
            let img = document.createElement('img');
            div1.appendChild(img);
            img.setAttribute("src", globArr[i].path);
            let ProductName = document.createElement('h4');
            div1.appendChild(ProductName);
            ProductName.textContent = globArr[i].name + ' ' + globArr[i].price + '.00 $ / packge';
            let inbutDecrease = document.createElement('button');
            div1.appendChild(inbutDecrease);
            inbutDecrease.setAttribute('id','decrease')
            let inbutIncrease = document.createElement('button');            
            div1.appendChild(inbutIncrease);
            inbutIncrease.setAttribute('id','increase')
            let allPrice = document.createElement('p');
            div1.appendChild(allPrice);
            inbutDecrease.addEventListener('click', handelDecrease);
            inbutIncrease.addEventListener('click', handelIncrease);
            handelIncrease();
            let deletButton = document.createElement('button');
            div1.appendChild(deletButton);
            deletButton.setAttribute('id','delete')
            deletButton.addEventListener('click', deletClick);

            function deletClick(){

                divPrint.removeChild(div1);
                let newIdArr = idArr;
                idArr = [];
                for (let j = 0; j < newIdArr.length; j++) {
                    if (btnArr[i] != newIdArr[j]) {
                        idArr.push(newIdArr[j])
                        globArr[i].price=0
                        
                        totalSum1 ()
                    }
                    
                }
                

            }
            totalSum1 ()

            
            function handelIncrease() {
                globArr[i].quant++
                sum = globArr[i].quant * globArr[i].price
                console.log(sum);
                allPrice.textContent = sum + ' $';
                totalSum1 ()
                
            }
            // handelDecrease();
            function handelDecrease() {
                if(globArr[i].quant > 1){
                    globArr[i].quant--;
                    let sum = globArr[i].quant * globArr[i].price
                    console.log(sum);
                    allPrice.textContent = sum + ' $';
                    totalSum1 ()
                    
                    
                
                }
            }
            
        }
    }
    
}

let totalPrice = document.getElementById('totalPrice');
let totalParagraph = document.createElement('p');
totalPrice.appendChild(totalParagraph);

function totalSum1 (){
    let finalPrice = 0;
    for (let i = 0; i < globArr.length; i++) {
        finalPrice += (globArr[i].price * globArr[i].quant)
    }
    console.log(finalPrice);
    totalParagraph.textContent = 'Total = '+finalPrice;
    

    return finalPrice
    };






