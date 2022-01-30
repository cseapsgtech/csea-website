import { firebase } from "../../firebase/clientApp";

export const getTeamMembers = async () => {
  const teamsRef = firebase.firestore().collection("teams");

  let data;

  await teamsRef.get().then((snapshot) => {
    data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  return data;
};

export default function handler(req, res) {
  getTeamMembers().then((data) => {
    res.status(200).json(data);
  });
}
