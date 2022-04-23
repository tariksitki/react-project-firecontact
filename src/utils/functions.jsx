
import firebase from "./firebase";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "../toastify/Toastify";


// Add user to DataBase, DeleteUser, UpdateUser, Get a User from Database
/// all functions are hier

// func lar, firebase sitesinde docs kisminda, build altinda Realtime Database ve onun altinda Web ve onun altinda Read and Write


        /// Writing a new Data to Database:

export const addUser = function (info) {
    const db = getDatabase();
    const userRef = ref(db, "database");
    const newUserRef = push(userRef);
    set(newUserRef, {
        username : info.username,
        phoneNumber : info.phoneNumber,
        gender : info.gender
    })
};
// burada "database" bizim firebase de database kurarken belirlemis oldugumuz isim
// ref set push bunlar firebase e ait sabit funclar
// db userref newUserRef ise bizim belirledigimiz isimler
// const userRef = ref(db, "database"); burada yeni olusturdugumuz database e bizim database isimli databasi imizi entegre ettik
// const newUserRef = push(userRef);  burada eski bilgilerin hepsini spread operatörü gibi ekledik asagisinda ise yenileri eskilere ilave ettik. yani addUser her cagirildiginda database e gidecek orada var olan bilgileri alacak ve yenilerini üzerine ekleyecek



    
// calling data from database:

export const CallUser = () => {
    const [isLoading, setIsLoading] = useState();
    const [contactList, setContactList] = useState();

    useEffect(() => {
        setIsLoading(true);

        const db = getDatabase();
        const userRef = ref(db, "database");
        
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            // database in o anki durumundan bir snapshot al ve data isimli degiskene at
            
            const databaseArray = [];

            for (let id in data) {
                databaseArray.push({id, ...data[id]});
                // burada id dedigimize i de denebilir. Burada diyoruz ki; database deki verilerin her biri üzerinde dön. dataBaseArray e bir object formatinda önce bu verilerin id numarasini at daha sonra bu id numarasina ait detay bilgilerini ser. bu her bir user icin yapilir. 
            }
            setContactList(databaseArray);
            setIsLoading(false);
          });
    }, []);
    return {isLoading, contactList}
};






////// delete data from database:

export const deleteUser = (id) => {
    const db = getDatabase();
    const userRef = ref(db, "database");
    Toastify("Data is deleted");
    remove(ref(db, "database/" + id));
};
// remove komutu anlami: database adindaki db mizin icine gir ve orada o an ki id mize ait bilgiyi sil. id yi ise map icinde her bir item a ait id yi buraya gönderiyoruz.





////// Edit User:

export const EditUser = (info) => {
    const db = getDatabase();
    const updates = {};
    updates["database/" + info.id] = info;
    // bizim database imiz icine gir, edit tusuna tiklanan kisinin id numarasini al ve bunun bilgilerini güncelle demek

    return update(ref(db), updates);
};