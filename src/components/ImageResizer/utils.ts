import * as React from 'react';

import { calculateZoomLevel } from '@lexical/utils';

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Direction
 */
export const Direction = {
  east: 1 << 0,
  north: 1 << 3,
  south: 1 << 1,
  west: 1 << 2,
} as const;

export const getDirectionsByPositioning = (positioning: Positioning) => ({
  isHorizontal: positioning.direction & (Direction.east | Direction.west),
  isVertical: positioning.direction & (Direction.south | Direction.north),
});

export const getDirectionStr = (direction: number) => {
  const ew = direction === Direction.east || direction === Direction.west;
  const ns = direction === Direction.north || direction === Direction.south;
  const nwse =
    (direction & Direction.north && direction & Direction.west) ||
    (direction & Direction.south && direction & Direction.east);

  return ew ? 'ew' : ns ? 'ns' : nwse ? 'nwse' : 'nesw';
};

/**
 * Positioning
 */
export type Positioning = {
  currentHeight: 'inherit' | number;
  currentWidth: 'inherit' | number;
  direction: number;
  isResizing: boolean;
  ratio: number;
  startHeight: number;
  startWidth: number;
  startX: number;
  startY: number;
};

export const initializePositioning = (
  event: React.PointerEvent<HTMLDivElement>,
  image: HTMLImageElement,
  positioning: Positioning,
  direction: number
) => {
  const { width, height } = image.getBoundingClientRect();
  const zoom = calculateZoomLevel(image);

  positioning.startWidth = width;
  positioning.startHeight = height;
  positioning.ratio = width / height;
  positioning.currentWidth = width;
  positioning.currentHeight = height;
  positioning.startX = event.clientX / zoom;
  positioning.startY = event.clientY / zoom;
  positioning.isResizing = true;
  positioning.direction = direction;
};

export const resetPositioning = (positioning: Positioning) => {
  positioning.startWidth = 0;
  positioning.startHeight = 0;
  positioning.ratio = 0;
  positioning.startX = 0;
  positioning.startY = 0;
  positioning.currentWidth = 0;
  positioning.currentHeight = 0;
  positioning.isResizing = false;
};

export const resizeDiagonal = (
  event: PointerEvent,
  positioning: Positioning,
  image: HTMLImageElement,
  minW: number,
  maxW: number
) => {
  const zoom = calculateZoomLevel(image);

  let diff = Math.floor(positioning.startX - event.clientX / zoom);
  diff = positioning.direction & Direction.east ? -diff : diff;

  const width = clamp(positioning.startWidth + diff, minW, maxW);
  const height = width / positioning.ratio;
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;

  positioning.currentWidth = width;
  positioning.currentHeight = height;
};

export const resizeVertical = (
  event: PointerEvent,
  positioning: Positioning,
  image: HTMLImageElement,
  minH: number,
  maxH: number
) => {
  const zoom = calculateZoomLevel(image);

  let diff = Math.floor(positioning.startY - event.clientY / zoom);
  diff = positioning.direction & Direction.south ? -diff : diff;

  const height = clamp(positioning.startHeight + diff, minH, maxH);
  image.style.height = `${height}px`;

  positioning.currentHeight = height;
};

export const resizeHorizontal = (
  event: PointerEvent,
  positioning: Positioning,
  image: HTMLImageElement,
  minW: number,
  maxW: number
) => {
  const zoom = calculateZoomLevel(image);

  let diff = Math.floor(positioning.startX - event.clientX / zoom);
  diff = positioning.direction & Direction.east ? -diff : diff;

  const width = clamp(positioning.startWidth + diff, minW, maxW);
  image.style.width = `${width}px`;

  positioning.currentWidth = width;
};
