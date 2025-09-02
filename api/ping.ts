import type { IncomingMessage, ServerResponse } from 'http';

export default function handler(_req: IncomingMessage, res: ServerResponse) {
    const keys = ['NODE_ENV', 'DATABASE_URL', 'JWT_SECRET', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
    const result = Object.fromEntries(keys.map(k => [k, process.env[k] ? 'SET' : 'MISSING']));
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(result));
}