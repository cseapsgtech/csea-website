import { firebase } from "../../../firebase/clientApp";

export const getArchives = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("all_events")
    .get()

  return snapshot.docs.map(doc => doc.id).filter(id => id !== "current_academic_year");
};

export default function handler(req, res) {

  getArchives().then((data) => {
    res.status(200).json(data);
  });
}
