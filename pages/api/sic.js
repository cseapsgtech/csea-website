import { firebase } from "../../firebase/clientApp";

export const getProbStatements = async () => {
  const snapshot = await firebase.firestore().collection("sic").get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default function handler(req, res) {
  getProbStatements().then((data) => {
    res.status(200).json(data);
  });
}
