import { useState, useEffect } from 'react';
import { MENU_API } from './constant';
 
 const useRestaurantmenu=(resId)=>{
    const [menuInfo,setMenuInfo]=useState(null)

    useEffect(() => {
      Getmenu();
    }, []);
  
    const Getmenu = async () => {
      const data = await fetch(MENU_API+resId);
      const json =await data.json();
      console.log(json.data);
  
      setMenuInfo(json.data)
    };

    return menuInfo
 }

 export default useRestaurantmenu