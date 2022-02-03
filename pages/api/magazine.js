import { firebase } from "../../firebase/clientApp";

export const getMagazineLinks = async () => {
  const snapshot = await firebase.firestore().collection("magazine").get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default function handler(req, res) {
  getMagazineLinks().then((data) => {
    res.status(200).json(data);
  });
}
