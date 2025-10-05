import crypto from 'crypto';

// Simple password-based authentication (for single user)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SESSION_SECRET = process.env.SESSION_SECRET || 'your-secret-key';

export function verifyPassword(password) {
    if (!ADMIN_PASSWORD) {
        console.warn('ADMIN_PASSWORD not set in environment variables');
        return false;
    }
    return password === ADMIN_PASSWORD;
}

export function createSession() {
    const sessionId = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
    return { sessionId, expires };
}

export function verifySession(session) {
    if (!session || !session.expires || !session.sessionId) return false;
    return Date.now() < session.expires;
}