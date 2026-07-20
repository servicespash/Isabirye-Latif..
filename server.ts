import { Hono } from 'hono';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "sonorous-station-hn56p",
  appId: "1:131755142262:web:829dc76a4ea8511e324357",
  apiKey: "AIzaSyB8lyK_Y0N0Ql_oXuw60xNKXT4VEl_FZFs",
  authDomain: "sonorous-station-hn56p.firebaseapp.com",
  storageBucket: "sonorous-station-hn56p.firebasestorage.app",
  messagingSenderId: "131755142262",
};

const databaseId = "ai-studio-lattyportfolio-88c45d5c-6597-4b50-9afe-23b9a63e9921";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any = null;
function getDb() {
  if (!db) {
    try {
      const app = initializeApp(firebaseConfig);
      db = getFirestore(app, databaseId);
    } catch (e) {
      console.warn("Failed to initialize Firebase", e);
    }
  }
  return db;
}

const app = new Hono();

// Sitemap route
app.get('/sitemap.xml', (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://cymatichub.xyz/</loc></url>
  <url><loc>https://cymatichub.xyz/manifesto</loc></url>
  <url><loc>https://cymatichub.xyz/projects</loc></url>
  <url><loc>https://cymatichub.xyz/resonance</loc></url>
  <url><loc>https://cymatichub.xyz/creative</loc></url>
  <url><loc>https://cymatichub.xyz/creatives</loc></url>
  <url><loc>https://cymatichub.xyz/hub</loc></url>
  <url><loc>https://cymatichub.xyz/learning</loc></url>
  <url><loc>https://cymatichub.xyz/legal</loc></url>
  <url><loc>https://cymatichub.xyz/transparency</loc></url>
  <url><loc>https://cymatichub.xyz/stack</loc></url>
  <url><loc>https://cymatichub.xyz/socials</loc></url>
</urlset>`;
  c.header('Content-Type', 'application/xml');
  return c.body(sitemap);
});

// Download route
app.get('/api/v1/download', async (c) => {
  const appType = c.req.query('appType');
  const version = c.req.query('version');
  
  if (!appType || !version || (appType !== 'study' && appType !== 'resonance')) {
    return c.text('Invalid parameters', 400);
  }
  
  const firestore = getDb();
  if (firestore) {
    try {
      await addDoc(collection(firestore, 'downloads'), {
        appType,
        version,
        timestamp: new Date().toISOString()
      });
    } catch (e) {
      console.error("Failed to log download", e);
    }
  }
  return c.redirect(`https://github.com/IsabiryeLatif/cymatic-evolution/releases/download/${version}/${appType}-${version}.zip`);
});

// Infrastructure Telemetry API
app.get('/api/health/:subdomain', (c) => {
  const subdomain = c.req.param('subdomain');
  return c.json({
      subdomain,
      latency: Math.floor(Math.random() * 50) + 10 + 'ms',
      nodeEfficiency: (95 + Math.random() * 5).toFixed(1) + '%',
      pulse: Math.floor(Math.random() * 20) + 70 + ' bpm'
  });
});

// Get all releases for the download index
app.get('/api/v1/releases', async (c) => {
  try {
    const response = await fetch('https://api.github.com/repos/IsabiryeLatif/cymatic-evolution/releases', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'CymaticStudy-Portfolio'
      }
    });
    const releases = await response.json();
    return c.json(releases);
  } catch (error) {
    console.error('Error fetching releases:', error);
    return c.json({ error: 'Failed to fetch releases' }, 500);
  }
});

// Development server setup
if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
  const startDev = async () => {
    const { serve } = await import('@hono/node-server');
    const { createServer: createViteServer } = await import('vite');
    const nodeApp = new Hono();
    
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    
    // Mount our routes
    nodeApp.route('/', app);

    // Use Vite middleware in development
    nodeApp.use('*', async (c, next) => {
      // @ts-expect-error - incoming and outgoing are added by @hono/node-server
      const { incoming, outgoing } = c.env;
      if (incoming && outgoing) {
        const wait = new Promise((resolve) => {
          vite.middlewares(incoming, outgoing, resolve);
        });
        await wait;
        if (!outgoing.writableEnded) {
          await next();
        }
      } else {
        await next();
      }
    });

    const port = 3000;
    console.log(`Starting dev server on http://localhost:${port}`);
    serve({
      fetch: nodeApp.fetch,
      port
    });
  };
  
  startDev().catch(console.error);
}

export default {
  fetch: app.fetch
};
