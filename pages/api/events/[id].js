import { firebase } from "../../../firebase/clientApp";

export const getEventById = async (id) => {
  const eventsRef = firebase
    .firestore()
    .collection("events")
    .where("__name__", "==", id);

  let data;

  await eventsRef.get().then((snapshot) => {
    data = {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data(),
    };
  });

  return data;
};

export default function handler(req, res) {
  const { id } = req.query;

  getEventWithId(id).then((data) => {
    res.status(200).json(data);
  });
}
