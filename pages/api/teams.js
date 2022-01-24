import { firebase } from "../../firebase/clientApp";

export default function handler(req, res) {
  const eventsRef = firebase.firestore().collection("teams");

  eventsRef.get().then(
    (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(data);
    });
}