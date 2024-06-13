// let myJSON=`{
//     "name":"king",
//     "age":200,
//     "phone":null,
//     "status":true
// }`
// //json parse -> json string -> js object
// console.log(myJSON)
// let myObj = JSON.parse(myJSON)
// console.log(myObj)

//json parse -> json object -> js string
// let myObj = {
//     name: "king",
//     age: 99,
//     phone:null,
//     status:true
// }
// let myJSON = JSON.stringify(myObj)
// console.log(typeof myJSON)

//json array & object
// let myObj={
//     "name":"king",
//     "age":200,
//     "phone":null,
//     "status":true,
//     "languages":["thai","eng","china"],
//     "general":{
//         "weight":70,
//         "height":190,
//         "gender":"man"
//     }
// }
// console.log(myObj.general.["gender"])

//ดึงข้อมูลจากไฟล์ user.json ไปแสดงผล
// const list = document.getElementById("list")
// let output=''

// fetch("user.json")
// .then(res =>res.json())
// .then(json=>{
//     json.users.forEach(item=>{
//         output+="<li>"+item.name+"</li>"
//     })
//     list.innerHTML=output
// }).catch(err=>{
//     console.log(err)
// })

//async / await
// const list = document.getElementById("list")
// let output=''

// async function getUsers(){
//     const res = await fetch("users.json")
//     const json = await res.json()
//        json.users.forEach(item=>{
//        output+="<li>"+item.name+"</li>"
//      })
//      list.innerHTML=output
// }
// getUsers()

const list = document.getElementById("list")
let output = ''

async function getDataFromAPI(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url)
    const json = await res.json()
    json.forEach(item=>{
        output+="<li>"+item.title+"</li>"
    })
    list.innerHTML=output
}
getDataFromAPI()