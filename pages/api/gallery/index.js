import { storage } from "../../../firebase/clientApp";

export const getPictureLinks = async () => {
  const result = await storage.ref("gallery/").listAll();

  const urls = await Promise.all(
    result.items.map(async (imageRef) => imageRef.getDownloadURL())
  );

  return urls;
};

export default function handler(req, res) {
  getPictureLinks().then((data) => {
    res.status(200).json(data);
  });
}
