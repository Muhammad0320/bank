'use client';

export function clampBuilder(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
  const root = document.querySelector('html');
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem )`;
}

import { useState, useEffect } from 'react';

export function ClampComponent(
  minWidthPx,
  maxWidthPx,
  minFontSize,
  maxFontSize,
) {
  const [clampValue, setClampValue] = useState('');

  useEffect(() => {
    const root = document.querySelector('html');
    const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;

    const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minFontSize;

    const calculatedClamp = `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem )`;
    setClampValue(calculatedClamp);
  }, [minFontSize, minWidthPx, maxWidthPx, maxFontSize]);

  return clampValue;
}
