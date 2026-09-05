import React, { useRef, useEffect } from 'react';
import '../component/HeaderSection/Header.css';

function Bg() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameId;
    let vw, vh;
    let particles = [];

    const NODE_COUNT = 90;
    const LINK_DIST = 130;
    const MOUSE_RADIUS = 150;

    const palette = ['#7f5af0', '#2cb67d', '#ff8906', '#e53170'];

    const setSize = () => {
      vw = canvas.width = window.innerWidth;
      vh = canvas.height = window.innerHeight;
    };

    const makeParticles = () => {
      particles = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * vw,
        y: Math.random() * vh,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 1,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    setSize();
    makeParticles();

    const onResize = () => {
      setSize();
      makeParticles();
    };
    window.addEventListener('resize', onResize);

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    window.addEventListener('mouseout', onMouseLeave);

    const tick = () => {
      ctx.clearRect(0, 0, vw, vh);

      const bg = ctx.createLinearGradient(0, 0, vw, vh);
      bg.addColorStop(0, '#05050a');
      bg.addColorStop(1, '#0d0b1a');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, vw, vh);

      const { x: mx, y: my } = mouseRef.current;

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > vw) p.vx *= -1;
        if (p.y < 0 || p.y > vh) p.vy *= -1;

        if (mx !== null) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(150, 140, 255, ${1 - dist / LINK_DIST})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let p of particles) {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-wrapper" />;
}

export default Bg;