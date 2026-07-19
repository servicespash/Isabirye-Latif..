import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let db: unknown = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDb(): any {
  if (!db) {
    try {
      initializeApp();
      db = getFirestore();
    } catch (e) {
      console.warn("Failed to initialize Firebase Admin", e);
    }
  }
  return db;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Sitemap route
  app.get('/sitemap.xml', (req, res) => {
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
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Download route
  app.get('/api/v1/download', async (req, res) => {
    const { appType, version } = req.query;
    if (!appType || !version || (appType !== 'study' && appType !== 'resonance')) {
      return res.status(400).send('Invalid parameters');
    }
    const firestore = getDb();
    if (firestore) {
      try {
        await firestore.collection('downloads').add({
          appType,
          version,
          timestamp: new Date().toISOString()
        });
      } catch (e) {
        console.error("Failed to log download", e);
      }
    }
    res.redirect(`https://github.com/IsabiryeLatif/cymatic-evolution/releases/download/${version}/${appType}-${version}.zip`);
  });

  // Infrastructure Telemetry API
  app.get('/api/health/:subdomain', (req, res) => {
    const { subdomain } = req.params;
    res.json({
        subdomain,
        latency: Math.floor(Math.random() * 50) + 10 + 'ms',
        nodeEfficiency: (95 + Math.random() * 5).toFixed(1) + '%',
        pulse: Math.floor(Math.random() * 20) + 70 + ' bpm'
    });
  });

  // Get all releases for the download index
  app.get('/api/v1/releases', async (req, res) => {
    try {
      const response = await fetch('https://api.github.com/repos/IsabiryeLatif/cymatic-evolution/releases', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'CymaticStudy-Portfolio'
        }
      });
      const releases = await response.json();
      res.json(releases);
    } catch (error) {
      console.error('Error fetching releases:', error);
      res.status(500).json({ error: 'Failed to fetch releases' });
    }
  });

  // Vite development middleware vs. static build file serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
