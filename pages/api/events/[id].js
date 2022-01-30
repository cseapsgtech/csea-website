import { firebase } from "../../../firebase/clientApp";

export default function handler(req, res) {
  const { id } = req.query;

  const eventsRef = firebase
    .firestore()
    .collection("events")
    .where("__name__", "==", id);

  eventsRef.get().then((snapshot) => {
    const data = {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data(),
    };

    res.status(200).json(data);
  });
}
