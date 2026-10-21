'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CharacterMode } from '../../../types/portfolio';

interface StudioCanvasProps {
  mode: CharacterMode;
  onWaveTrigger?: () => void;
}

export default function StudioCanvas({ mode, onWaveTrigger }: StudioCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerWaveRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animFrameId: number;
    let animClock = 0;
    let isBlinking = false;
    let isHappyExpression = false;
    const pointer = { x: 0, y: 0 };
    let isDragging = false;
    let startX = 0;
    let userRotY = 0;
    let bounceOffset = 0;
    let bounceVelocity = 0;
    let waveFrames = 0;

    const w = container.clientWidth || 400;
    const h = container.clientHeight || 350;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
    camera.position.set(0, 0.45, 6.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Warm Studio Lighting
    const ambient = new THREE.AmbientLight(0xf4f3ef, 0.85);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff6ed, 1.3);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const vermilionRim = new THREE.PointLight(0xe04f33, 1.8, 11);
    vermilionRim.position.set(-3.5, 2.2, -2);
    scene.add(vermilionRim);

    const mossFill = new THREE.PointLight(0x2e9b68, 1.3, 10);
    mossFill.position.set(3.2, -1.5, 2.5);
    scene.add(mossFill);

    // Studio Craft Materials
    const alabasterMat = new THREE.MeshStandardMaterial({
      color: 0xf4f3ef,
      roughness: 0.3,
      metalness: 0.12,
    });
    const charcoalMat = new THREE.MeshStandardMaterial({
      color: 0x181715,
      roughness: 0.4,
      metalness: 0.35,
    });
    const deskWoodMat = new THREE.MeshStandardMaterial({
      color: 0x262420,
      roughness: 0.5,
      metalness: 0.2,
    });
    const vermilionMat = new THREE.MeshStandardMaterial({
      color: 0xe04f33,
      emissive: 0xe04f33,
      emissiveIntensity: 0.4,
      roughness: 0.25,
    });
    const mossMat = new THREE.MeshStandardMaterial({
      color: 0x2e9b68,
      emissive: 0x2e9b68,
      emissiveIntensity: 0.45,
      roughness: 0.25,
    });

    const meshMaterials = [alabasterMat, charcoalMat, deskWoodMat, vermilionMat, mossMat];

    // LED Face Canvas Texture
    const faceCanvas = document.createElement('canvas');
    faceCanvas.width = 512;
    faceCanvas.height = 256;
    const faceCtx = faceCanvas.getContext('2d');
    const faceTexture = new THREE.CanvasTexture(faceCanvas);
    const faceScreenMat = new THREE.MeshBasicMaterial({ map: faceTexture });

    const studioGroup = new THREE.Group();
    studioGroup.position.set(0, -0.1, 0);
    scene.add(studioGroup);

    // 1. Character Head with Rounded Studio Headphones & LED Screen Face
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.95, -0.1);
    studioGroup.add(headGroup);

    const headBox = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.98, 1.08), alabasterMat);
    headGroup.add(headBox);

    const screenFrame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.68, 0.08), charcoalMat);
    screenFrame.position.set(0, 0.02, 0.52);
    headGroup.add(screenFrame);

    const ledFace = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 0.6), faceScreenMat);
    ledFace.position.set(0, 0.02, 0.57);
    headGroup.add(ledFace);

    // Studio Headphones
    const leftCup = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.16, 24), vermilionMat);
    leftCup.rotation.z = Math.PI / 2;
    leftCup.position.set(-0.74, 0.02, 0);
    headGroup.add(leftCup);

    const rightCup = leftCup.clone();
    rightCup.position.set(0.74, 0.02, 0);
    headGroup.add(rightCup);

    // 2. Character Torso
    const bodyGroup = new THREE.Group();
    bodyGroup.position.set(0, -0.15, -0.15);
    studioGroup.add(bodyGroup);

    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.88, 0.72), charcoalMat);
    bodyGroup.add(torsoMesh);

    const badgeAccent = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.1, 0.05), vermilionMat);
    badgeAccent.position.set(0.26, 0.18, 0.37);
    bodyGroup.add(badgeAccent);

    // 3. Articulated Hands
    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 20), alabasterMat);
    leftHand.position.set(-0.42, -0.25, 0.58);
    studioGroup.add(leftHand);

    const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 20), alabasterMat);
    rightHand.position.set(0.42, -0.25, 0.58);
    studioGroup.add(rightHand);

    // 4. Floating Studio Desk & Open Laptop
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, -0.58, 0.65);
    studioGroup.add(deskGroup);

    const deskPlate = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.09, 0.95), deskWoodMat);
    deskGroup.add(deskPlate);

    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.04, 0.62), alabasterMat);
    laptopBase.position.set(0, 0.07, -0.02);
    deskGroup.add(laptopBase);

    const laptopLidGroup = new THREE.Group();
    laptopLidGroup.position.set(0, 0.09, 0.28);
    laptopLidGroup.rotation.x = -0.38;
    deskGroup.add(laptopLidGroup);

    const laptopLid = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.58, 0.04), alabasterMat);
    laptopLid.position.set(0, 0.29, 0);
    laptopLidGroup.add(laptopLid);

    const laptopScreenGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.5), mossMat);
    laptopScreenGlow.rotation.y = Math.PI;
    laptopScreenGlow.position.set(0, 0.29, -0.025);
    laptopLidGroup.add(laptopScreenGlow);

    const mugBody = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.22, 20), vermilionMat);
    mugBody.position.set(-0.75, 0.15, 0.1);
    deskGroup.add(mugBody);

    const drawFace = () => {
      if (!faceCtx) return;
      const cvWidth = faceCanvas.width;
      const cvHeight = faceCanvas.height;

      faceCtx.fillStyle = '#0A0A09';
      faceCtx.fillRect(0, 0, cvWidth, cvHeight);

      const eyeOffsetX = pointer.x * 26;
      const eyeOffsetY = -pointer.y * 14;
      const eyeColor = mode === 'coding' ? '#E04F33' : '#2E9B68';

      faceCtx.save();
      faceCtx.shadowColor = eyeColor;
      faceCtx.shadowBlur = 16;
      faceCtx.fillStyle = eyeColor;
      faceCtx.strokeStyle = eyeColor;
      faceCtx.lineWidth = 8;
      faceCtx.lineCap = 'round';

      const leftX = cvWidth * 0.34 + eyeOffsetX;
      const rightX = cvWidth * 0.66 + eyeOffsetX;
      const centerY = cvHeight * 0.48 + eyeOffsetY;

      if (isBlinking) {
        faceCtx.beginPath();
        faceCtx.moveTo(leftX - 22, centerY);
        faceCtx.lineTo(leftX + 22, centerY);
        faceCtx.moveTo(rightX - 22, centerY);
        faceCtx.lineTo(rightX + 22, centerY);
        faceCtx.stroke();
      } else if (isHappyExpression) {
        [leftX, rightX].forEach((x) => {
          faceCtx.beginPath();
          faceCtx.arc(x, centerY + 6, 18, Math.PI * 1.15, Math.PI * 1.85);
          faceCtx.stroke();
        });
      } else {
        [leftX, rightX].forEach((x) => {
          faceCtx.beginPath();
          if (typeof faceCtx.roundRect === 'function') {
            faceCtx.roundRect(x - 18, centerY - 22, 36, 44, 14);
          } else {
            faceCtx.rect(x - 18, centerY - 22, 36, 44);
          }
          faceCtx.fill();

          faceCtx.fillStyle = '#F4F3EF';
          faceCtx.beginPath();
          faceCtx.arc(x + 5, centerY - 7, 5.5, 0, Math.PI * 2);
          faceCtx.fill();
          faceCtx.fillStyle = eyeColor;
        });
      }

      // Friendly subtle smile arc
      faceCtx.lineWidth = 5;
      faceCtx.beginPath();
      faceCtx.arc(cvWidth * 0.5 + eyeOffsetX * 0.4, centerY + 34, 14, 0.15 * Math.PI, 0.85 * Math.PI);
      faceCtx.stroke();

      faceCtx.restore();
      faceTexture.needsUpdate = true;
    };

    drawFace();

    // Natural Blink Interval
    const blinkInterval = setInterval(() => {
      isBlinking = true;
      drawFace();
      setTimeout(() => {
        isBlinking = false;
        drawFace();
      }, 140);
    }, 3500);

    const triggerFriendlyWave = () => {
      bounceVelocity = 0.12;
      waveFrames = 45;
      isHappyExpression = true;
      drawFace();
      onWaveTrigger?.();
      setTimeout(() => {
        isHappyExpression = false;
        drawFace();
      }, 1300);
    };

    triggerWaveRef.current = triggerFriendlyWave;

    // Pointer move listener
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (isDragging) {
        const dx = e.clientX - startX;
        userRotY += dx * 0.01;
        startX = e.clientX;
      }
      drawFace();
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        triggerFriendlyWave();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        pointer.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        const dx = touch.clientX - startX;
        userRotY += dx * 0.012;
        startX = touch.clientX;
        drawFace();
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleClick = () => {
      triggerFriendlyWave();
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Apply wireframe mode
    const isWireframe = mode === 'wireframe';
    meshMaterials.forEach((m) => {
      m.wireframe = isWireframe;
    });

    if (mode === 'coding') {
      bounceVelocity = 0.11;
    }

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      animClock += mode === 'coding' ? 0.085 : 0.035;

      // Friendly jump / bounce physics
      if (bounceOffset > 0 || bounceVelocity !== 0) {
        bounceOffset += bounceVelocity;
        bounceVelocity -= 0.0085;
        if (bounceOffset <= 0) {
          bounceOffset = 0;
          bounceVelocity = 0;
        }
      }

      // Gentle floating motion
      const floatAmp = mode === 'float' ? 0.22 : 0.09;
      studioGroup.position.y = -0.1 + Math.sin(animClock) * floatAmp + bounceOffset;

      if (mode === 'float') {
        studioGroup.rotation.y += 0.012;
        studioGroup.rotation.z = Math.sin(animClock * 0.7) * 0.06;
      } else {
        studioGroup.rotation.z = THREE.MathUtils.lerp(studioGroup.rotation.z, 0, 0.1);
        const targetY = userRotY + pointer.x * 0.38;
        studioGroup.rotation.y = THREE.MathUtils.lerp(studioGroup.rotation.y, targetY, 0.08);
      }

      // Head tracks cursor or laptop in coding mode
      const targetHeadY = mode === 'coding' ? Math.sin(animClock * 1.5) * 0.12 : pointer.x * 0.45;
      const targetHeadX = mode === 'coding' ? 0.22 : -pointer.y * 0.28;
      headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetHeadY, 0.12);
      headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetHeadX, 0.12);

      // Articulated hands
      const typingSpeed = mode === 'coding' ? 5.5 : 2.8;
      leftHand.position.y = -0.25 + Math.abs(Math.sin(animClock * typingSpeed)) * 0.08;
      leftHand.position.x = -0.32 + Math.sin(animClock * 1.7) * 0.05;

      if (waveFrames > 0) {
        waveFrames--;
        rightHand.position.y = 0.55 + Math.sin(animClock * 6) * 0.14;
        rightHand.position.x = 0.88 + Math.cos(animClock * 6) * 0.12;
      } else {
        rightHand.position.y = -0.25 + Math.abs(Math.cos(animClock * typingSpeed)) * 0.08;
        rightHand.position.x = 0.32 + Math.cos(animClock * 1.7) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      clearInterval(blinkInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);

      // Clean disposal
      renderer.dispose();
      faceTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, onWaveTrigger]);

  return (
    <div
      ref={containerRef}
      id="studio-canvas-wrap"
      className="w-full h-[320px] sm:h-[370px] relative cursor-grab active:cursor-grabbing select-none"
      data-cursor="Tap or Drag"
    />
  );
}
