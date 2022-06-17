import { firebase } from "../../../firebase/clientApp";

export const getTeamMembers = async (academicYear) => {
  const snapshot = await firebase
    .firestore()
    .collection("teams")
    .doc(academicYear)
    .collection("executives")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default function handler(req, res) {
  const { academicYear } = req.query;

  getTeamMembers(academicYear).then((data) => {
    res.status(200).json(data);
  });
}
