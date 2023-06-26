'use client'
import { useEffect, useState } from "react"

export default function Detail({storeId}){
    const [stores, setStores] = useState({})
    console.log(stores)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/detail/${storeId}`);
            const data = await response.json();
            setStores(data);
          } catch (error) {
            console.error("데이터 가져오기 에러:", error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <>asd</>
    )
}