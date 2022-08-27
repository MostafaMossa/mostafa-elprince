import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import CountUp from 'react-countup'


const VisitorCounter = () => {
    const [visitors, setVisitors] = useState()
    const collectionNane = "Visitors"
    const VisitorsCount = 1


    useEffect(() => {
        const collectionRefVisitors = collection(db, collectionNane)
        const getData = async () => {
            const data = await getDocs(collectionRefVisitors);
            const dataDoc = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            if (!dataDoc[0]) {
                const addDocCount = addDoc(collectionRefVisitors, { VisitorsCouter: VisitorsCount })
            }
            const counter = dataDoc[0].VisitorsCouter + VisitorsCount

            const docRef = doc(db, collectionNane, dataDoc[0].id);
            await updateDoc(docRef, { VisitorsCouter: counter });

            setVisitors(counter)
        }


        getData()
    }, [])


    return (
        <CountUp start={0} end={visitors} duration={2.5}>
            {visitors}
        </CountUp>
    );
}

export default VisitorCounter;