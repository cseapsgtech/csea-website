import { firebase } from "../../firebase/clientApp";

export const getTeamMembers = async () => {
  const snapshot = await firebase.firestore().collection("teams").get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default function handler(req, res) {
  getTeamMembers().then((data) => {
    res.status(200).json(data);
  });
}
