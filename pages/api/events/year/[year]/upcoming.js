import { firebase } from "../../../../../firebase/clientApp";

export const getUpcomingEvents = async (year) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const nextYear = new String(parseInt(year) + 1);

  const eventsRef = firebase
    .firestore()
    .collection("events")
    .where("date", ">=", new Date(year))
    .where("date", "<", new Date(nextYear))
    .where("date", ">=", startOfToday);

  let data;

  await eventsRef.get().then((snapshot) => {
    data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  return data;
}

export default function handler(req, res) {
  const { year } = req.query;

  getUpcomingEvents(year).then(data => {
    res.status(200).json(data);
  });
}
