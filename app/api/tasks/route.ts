import { NextRequest, NextResponse } from "next/server";

let tasks = [
    { id: 1, title: "Learn Next js ", completed: false},
    { id: 2, title: "Build an API ", completed: false},
]

// fetch all tasks
export async function GET(){
    return NextResponse.json(tasks)
}

// Create a task 
export async function POST(request : NextRequest){
    const {title} = await request.json()
    const newTask = {id: tasks.length + 1, title, completed:false}
    tasks.push(newTask);
    return NextResponse.json(newTask);
}