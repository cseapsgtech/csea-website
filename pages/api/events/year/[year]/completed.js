import { firebase } from "../../../../../firebase/clientApp";

export default function handler(req, res) {
  const { year } = req.query;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const nextYear = new String(parseInt(year) + 1);

  const eventsRef = firebase
    .firestore()
    .collection("events")
    .where("date", ">=", new Date(year))
    .where("date", "<", new Date(nextYear))
    .where("date", "<", startOfToday);

  eventsRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(data);
  });
}
