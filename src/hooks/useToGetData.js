import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";

export const useToGetData = ({arrayName,Id,}) => {
const [data,setData] = useState(null)

useEffect(()=>{
    getData()
},[])

const getData = async ()=>{

    
    const docRef = doc(db, arrayName, Id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data())

    } else {
      // doc.data() will be undefined in this case
      setData('No such document!')
    }

}



  return (

    data

  )
}

