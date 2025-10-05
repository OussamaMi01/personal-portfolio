import { verifyPassword, createSession } from '../../../../lib/auth';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ success: false, error: 'Password is required' });
    }

    if (verifyPassword(password)) {
        const session = createSession();

        // Set session in HTTP-only cookie
        res.setHeader('Set-Cookie', `admin_session=${JSON.stringify(session)}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`);

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            session
        });
    } else {
        return res.status(401).json({
            success: false,
            error: 'Invalid password'
        });
    }
}