import React from "react";
import axios from "axios";
import { useEffect } from "react";

const BaseUrl = axios.create({
    baseURL: "http://127.0.0.1:8000/"
})



async function loginUser(){
 try{
const response = await axios.get({
    url: BaseUrl,
    method: "post",
    data: {
        
    }
})
 } catch(err){
console.log(err)
 }
}

async function registerUSER(){

}

async function getUser(){

}