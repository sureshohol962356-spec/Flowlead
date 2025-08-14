export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Lead Received:", req.body);
    res.status(200).json({ message: "Lead stored successfully!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
