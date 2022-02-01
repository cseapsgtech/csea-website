import { firebase } from "../../../../firebase/clientApp";

export const getCurrentAcademicYear = async () => {
  const currentAcademicYear = await firebase
    .firestore()
    .collection("all_events")
    .doc("current_academic_year")
    .get();

  if (!currentAcademicYear.exists) {
    return { error: "No current academic year found!" };
  }

  return currentAcademicYear.data();
};

export default function handler(req, res) {
  getCurrentAcademicYear().then((data) => {
    res.status(200).json(data);
  });
}
