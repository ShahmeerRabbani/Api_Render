import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './FirebaseConfig'

const DataBase = () => {

    const [userData, setUserData] = useState([])
    const [refresh, setRefresh] = useState(false)
    
    useEffect(()=>{
        getUserData()
        console.log('chala')
    }, [refresh])
    
    const getUserData = async () => {
        const getData = await getDocs(collection(db, "userData"))
            let arr = []
            getData.forEach((doc) => {
                arr.push({...doc.data(), id:doc.id})
                setUserData(arr)
                console.log(arr)

              });
    }
    
    const EditData = (id) =>{
        let updateVal = prompt('Enter the value')

        let updateObj = {
            name: updateVal
        }
        const edit = updateDoc(doc(db, "userData", id), updateObj)

        setRefresh(!refresh)
    };

    const deleteData =async (id) => {
        const deleteUser =await deleteDoc(doc(db, "userData", id))
        setRefresh(!refresh)
    }

  return (
    <div>
      <h1>DataBase</h1>
      {
        userData.map((e, i) => {
            return (
                <div key={i}>
                    <span style={{fontSize: 30, marginRight: 10}}>{e.name} {e.lastName}</span>
                    <button onClick={() => EditData(e.id)}>Edit</button>
                    <button onClick={() => deleteData(e.id)}>Delete</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default DataBase
