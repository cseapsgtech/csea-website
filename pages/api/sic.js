import { firebase } from "../../firebase/clientApp";

export const getProbStatements = async () => {
  const sicRef = firebase.firestore().collection("sic");

  let data;

  await sicRef.get().then((snapshot) => {
    data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  return data;
};

export default function handler(req, res) {
  getProbStatements().then((data) => {
    res.status(200).json(data);
  });
}
