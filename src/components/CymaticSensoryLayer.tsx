import React, { useEffect, useRef } from 'react';

export const CymaticSensoryLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Advanced Bird Particle with calculated behavior
    class Bird {
      x: number = Math.random() * window.innerWidth;
      y: number = Math.random() * window.innerHeight;
      vx: number = (Math.random() - 0.5) * 2;
      vy: number = (Math.random() - 0.5) * 2;
      size: number = Math.random() * 3 + 1;
      color: string;
      angle: number = Math.random() * Math.PI * 2;
      wingAngle: number = 0; // For flapping

      constructor() {
        const colors = ['rgba(6, 182, 212, 0.5)', 'rgba(255, 255, 255, 0.3)', 'rgba(148, 163, 184, 0.4)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Subtle steering behavior
        this.angle += (Math.random() - 0.5) * 0.1;
        this.vx += Math.cos(this.angle) * 0.05;
        this.vy += Math.sin(this.angle) * 0.05;
        
        // Speed cap
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 2) {
          this.vx = (this.vx / speed) * 2;
          this.vy = (this.vy / speed) * 2;
        }

        this.x += this.vx; this.y += this.vy;
        
        // Wing flap animation speed
        this.wingAngle += 0.3;

        // Wrap around screen
        if (this.x < -20) this.x = window.innerWidth + 20;
        if (this.x > window.innerWidth + 20) this.x = -20;
        if (this.y < -20) this.y = window.innerHeight + 20;
        if (this.y > window.innerHeight + 20) this.y = -20;
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(Math.atan2(this.vy, this.vx));
        
        // Classic 'V' flight silhouette
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-this.size * 2, -Math.sin(this.wingAngle) * this.size * 2);
        c.moveTo(0, 0);
        c.lineTo(-this.size * 2, Math.sin(this.wingAngle) * this.size * 2);
        
        c.strokeStyle = this.color;
        c.lineWidth = 2;
        c.stroke();
        
        c.restore();
      }
    }

    // Soapy Glitter Bubble
    class Bubble {
      x: number = Math.random() * window.innerWidth;
      y: number = Math.random() * window.innerHeight;
      radius: number = Math.random() * 8 + 2;
      vx: number = (Math.random() - 0.5) * 0.3;
      vy: number = (Math.random() - 0.5) * 0.3;
      color: string = `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`;

      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
      }
      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.beginPath(); c.arc(this.x, this.y, this.radius, 0, Math.PI * 2); c.fill();
      }
    }

    const birds = Array.from({ length: 10 }, () => new Bird());
    const bubbles = Array.from({ length: 20 }, () => new Bubble());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach(b => { b.update(); b.draw(ctx); });
      birds.forEach(b => { b.update(); b.draw(ctx); });
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();
    
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-[50] pointer-events-none" />;
};
