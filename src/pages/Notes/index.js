import React, {useEffect} from "react";
import { AddNotes } from "../../components/Form";
import Note from "../../components/Note";
import Layout from "../../components/DashBoardLayout";

export function Notes(){

    useEffect(
        ()=>{
          document.title= "Slick | notes"
        }
      )
    return(
        <div className="bg-black/5">
        <h1 className="bg-white text-lg italic text-center py-8 text-indigo-800">Keep Your Notes/Ideas Here!</h1>
         
        
        <div className="bg-white/90 flex items-center justify-center mb-4 px-4 py-4">
          <Note/>
        </div>
        <section className="my-10 shadow">
           <AddNotes/>
        </section>

 
        <div>

            </div>
        </div>
    )
}

export default function NotePage(){
  return (
    <>
    <Layout>
      <Notes/>
    </Layout>
    </>
  )
}