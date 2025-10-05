// lib/auth-middleware.js

export const validateAdminSession = (req) => {
    try {
        const adminSession = req.cookies.get('admin_session');
        const sessionValue = adminSession ? adminSession.value : null;

        if (!sessionValue) {
            return { isValid: false, error: 'No session found' };
        }

        const session = JSON.parse(sessionValue);

        if (session.expires < Date.now()) {
            return { isValid: false, error: 'Session expired' };
        }

        if (session.user && session.user.role !== 'admin') {
            return { isValid: false, error: 'Insufficient permissions' };
        }

        return { isValid: true, user: session.user };
    } catch (error) {
        return { isValid: false, error: 'Invalid session' };
    }
};

export const requireAdminAuth = (handler) => {
    return async(req, res) => {
        const auth = validateAdminSession(req);

        if (!auth.isValid) {
            return res.status(401).json({
                success: false,
                error: 'Unauthorized',
                message: auth.error
            });
        }

        // Add user to request object for use in API routes
        req.user = auth.user;
        return handler(req, res);
    };
};