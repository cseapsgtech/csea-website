import { firebase } from "../../../firebase/clientApp";

export const getProbStatements = async (academicYear) => {
  const snapshot = await firebase
    .firestore()
    .collection("sic")
    .doc(academicYear)
    .collection("problem_statements")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default function handler(req, res) {
  const { academicYear } = req.query;

  getProbStatements(academicYear).then((data) => {
    res.status(200).json(data);
  });
}
