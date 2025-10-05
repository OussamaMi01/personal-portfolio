export default function handler(req, res) {
    res.setHeader('Set-Cookie', 'admin_session=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict');
    res.status(200).json({ success: true, message: 'Logged out successfully' });
}