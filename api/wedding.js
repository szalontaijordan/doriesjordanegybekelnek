export default async function handler(req, res) {
    res.send({ albumURL: process.env.WEDDING_ALBUM_URL });
}
