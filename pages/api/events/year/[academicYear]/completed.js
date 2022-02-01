import { firebase } from "../../../../../firebase/clientApp";

export const getCompletedEvents = async (academicYear) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const snapshot = await firebase
    .firestore()
    .collection("all_events")
    .doc(academicYear)
    .collection("events")
    .where("date", "<", startOfToday)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default function handler(req, res) {
  const { academicYear } = req.query;

  getCompletedEvents(academicYear).then((data) => {
    res.status(200).json(data);
  });
}
