// api/index.ts
import type { IncomingMessage, ServerResponse } from 'http';

// lazy-import + 에러 로깅
export default async function handler(req: IncomingMessage, res: ServerResponse) {
    try {
        const mod = await import('../src/app');    // 여기서 보통 터짐
        const app = mod.default as any;            // express instance (handler)
        return app(req, res);
    } catch (err: any) {
        console.error('[api/index] boot error:', {
            name: err?.name,
            message: err?.message,
            stack: err?.stack,
        });
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, reason: 'BOOT_ERROR', message: err?.message }));
    }
}