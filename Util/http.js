import axios from "axios"
const BACKEND_URL = "https://expenses-db7bb-default-rtdb.firebaseio.com/"
export async function storeExpense(data){
    const response = await axios.post(BACKEND_URL + "expenses.json",data)
    const id = response.data.name
    return id
}
export async function fetchExpenses(){
    const response = await axios.get(BACKEND_URL + "expenses.json")
    const expenses=[]
    for (const key in response.data){
        const expense = {
            id:key,
            title:response.data[key].title,
            amount:response.data[key].amount,
            date:new Date(response.data[key].date) ,
        }
        expenses.push(expense)
    }
    return expenses
}
export async function updateExp(data,id){
    return await axios.put(BACKEND_URL + `expenses/${id}.json`,data)
    
}
export async function deleteExp(id){
    return await axios.delete(BACKEND_URL + `expenses/${id}.json`)
    
}