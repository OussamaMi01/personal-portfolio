// pages/api/admin/protected-route.js
import { requireAdminAuth } from '../../../lib/auth-middleware';

const handler = async(req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // This route is protected by the middleware
        // req.user is available from the middleware
        res.status(200).json({
            success: true,
            message: 'Access granted to protected route',
            user: req.user
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default requireAdminAuth(handler);