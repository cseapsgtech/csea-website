import { firebase } from "../../../../../firebase/clientApp";

export const getEventById = async (id, academicYear) => {
  const snapshot = await firebase
    .firestore()
    .collection("all_events")
    .doc(academicYear)
    .collection("events")
    .where("__name__", "==", id)
    .get();

  return {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  };
};

export default function handler(req, res) {
  const { id, academicYear } = req.query;

  getEventById(id, academicYear).then((data) => {
    res.status(200).json(data);
  });
}
