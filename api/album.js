export default async function handler(req, res) {
    res.send({ albumURL: process.env.ALBUM_URL });
}
