import firebase from "../../../firebase/clientApp";

export default function handler(req, res) {

  var startOfToday = new Date(); 
  startOfToday.setHours(0,0,0,0);

  const eventsRef = firebase.firestore().collection("events").where("date", ">=", startOfToday);

  eventsRef.get().then(
    (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(data);
    });
}