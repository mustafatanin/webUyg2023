//name="Mustafa" (python)
//Değişken Tanımlama type safe değil
// var name="Mustafa"
//Ecmascript 9dan sonra let ve const
//Değişken Tanımlama
// let name="Mustafa"
// console.log(name)
//var ve let farkları
//var function scope let block scope
//Sabit Tanımlama
// const name="Mustafa"

// function(test){
//     if(true){
//         let degisken="Merhaba Dünya"
//     }
//     if(true{
//         console.log(degisken)
//     })
// }
// test()

//var keyword değişkenler tekrar tanımlanabilir
// var degisken="Merhaba Dünya"
// var degisken="hello world"
// console.log(degisken)

//Hoisting: bir değişkeni önce tanımlama sonra kullanmak
// degisken="Merhaba Dünya"
// console.log(degisken)
// var degisken

// let name="Mustafa"
// const adi="Mustafa"
// name="Ahmet"
// adi="Ahmet"

// var agirlik=50
// if(agirlik>49){
//     var miktar=1.4
//     console.log(`${miktar} su içmelisin`)
// }
// console.log(miktar)

// function test(){
//     console.log("Merhaba"+this.name)
// }
// const person={
//     name:"Can",
//     soyle:test,
// }
// person.soyle()
//Arrow function

// const test=()=>{
//     console.log("Merhaba"+this.name)
// }
// const person={
//     name:"Can",
//     soyle:test,
// }
// person.soyle()

// function addToCart(urun_adi,adet,fiyat){

// }
// addToCart("elma",5,10)
// addToCart("armut",2,20)
// addToCart("Limon",3,15)

// let urunler=[{urun_adi:"Elma",fiyat:5,adet:20},
//             {urun_adi:"Armut",fiyat:2,adet:11},
//             {urun_adi:"Limon",fiyat:4,adet:23}]
// function addToCart(urun){
//     console.log(urun.urun_adi)
//     console.log(urun.adet)
//     console.log(urun.fiyat)
// }
// addToCart(urunler)

// let urunler=[{urun_adi:"Elma",fiyat:5,adet:20},
//             {urun_adi:"Armut",fiyat:2,adet:11},
//             {urun_adi:"Limon",fiyat:4,adet:23}]

// console.log(urunler[0]["urun_adi"])

//Rest Operatörü
// function topla(...sayilar){
//     let toplam=0
//     for(let i=0;i<sayilar.length,i++){
//         toplam=toplam+sayilar[i]
//     }
//     console.log(toplam)
// }
// topla(10,20,30,40,50,60,70)

//Distracting İşlemi
// let [birinci,ikinci,üçüncü]=[{adi:"İç Anadolu",nufus:"20m"},
//                             {adi:"Marmara",nufus:"10m"},
//                             {adi:"karadeniz",nufus:"30m"}]
// console.log(birinci.adi)

//Spread Operatörü
// let sayilar=[30,100,200,300,350]
// console.log(...sayilar)

// function test(){
//     a+100
// }

// const test=()=>{
//     a+100
// }

// (test)=>a+100
// test=>a+100

//Conditional ternary operator
// if(a=100){
//     console.log("100e eşit")
// }else{
//     console.log("100e eşit değil")
// }
// const sonuc=a==100?"100e eşit":"100e eşit değil"

// function example(){
//     if(condition1){
//         return value1
//     }else if(condition2){
//         return value2
//     }else if(condition3){
//         return value3
//     }else {
//         return value4
//     }
// }
// function example(){
//     return condition1?value1:
//     condition2?value2:
//     condition3?value3:
//     value4
// }


const sayilar=[1,2,3,4,5,6,7,8,9]
// const ciftsayilar=sayilar.filter(function(sayilar){
//     return sayilar%2===0
// })
// console.log(ciftsayilar)


// const ciftsayilar=sayilar.filter(sayilar=>sayilar%2===0)
// console.log(ciftsayilar)
const sayi=sayilar.find(function(sayilar){
    return sayilar%2===0
})

console.log(sayilar)