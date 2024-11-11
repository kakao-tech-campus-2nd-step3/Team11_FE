import {
  Direction,
  Positioning,
  getDirectionsByPositioning,
  initializePositioning,
  resetPositioning,
  resizeDiagonal,
  resizeHorizontal,
  resizeVertical,
} from '@components/ImageResizer/utils';

import * as React from 'react';
import { MutableRefObject, useRef } from 'react';

const resizeDirections = [
  { className: 'image-resizer-n', direction: Direction.north },
  {
    className: 'image-resizer-ne',
    direction: Direction.north | Direction.east,
  },
  { className: 'image-resizer-e', direction: Direction.east },
  {
    className: 'image-resizer-se',
    direction: Direction.south | Direction.east,
  },
  { className: 'image-resizer-s', direction: Direction.south },
  {
    className: 'image-resizer-sw',
    direction: Direction.south | Direction.west,
  },
  { className: 'image-resizer-w', direction: Direction.west },
  {
    className: 'image-resizer-nw',
    direction: Direction.north | Direction.west,
  },
];

export const ImageResizer: React.FC<{
  imageRef: MutableRefObject<HTMLImageElement | null>;
  maxW: number;
  maxH: number;
  minW?: number;
  minH?: number;
  onResizeStart: (direction: number) => void;
  onResizeEnd: (width: 'inherit' | number, height: 'inherit' | number) => void;
}> = ({
  imageRef,
  onResizeStart,
  onResizeEnd,
  maxW,
  maxH,
  minW = 100,
  minH = 100,
}) => {
  const controlWrapperRef = useRef<HTMLDivElement>(null);
  const positioningRef = useRef<Positioning>({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: false,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0,
  });

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
    direction: number
  ) => {
    const image = imageRef.current;
    const controlWrapper = controlWrapperRef.current;
    if (image === null || controlWrapper === null) {
      return;
    }

    event.preventDefault();
    const { width, height } = image.getBoundingClientRect();
    const positioning = positioningRef.current;

    initializePositioning(event, image, positioning, direction);
    onResizeStart(direction);

    controlWrapper.classList.add('image-control-wrapper--resizing');
    image.style.height = `${height}px`;
    image.style.width = `${width}px`;

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerMove = (event: PointerEvent) => {
    const image = imageRef.current;
    const positioning = positioningRef.current;
    if (image === null || !positioning.isResizing) {
      return;
    }

    const { isHorizontal, isVertical } =
      getDirectionsByPositioning(positioning);

    if (isHorizontal && isVertical) {
      resizeDiagonal(event, positioning, image, minW, maxW);
      return;
    }
    if (isVertical) {
      resizeVertical(event, positioning, image, minH, maxH);
      return;
    }
    resizeHorizontal(event, positioning, image, minW, maxW);
  };

  const handlePointerUp = () => {
    const image = imageRef.current;
    const positioning = positioningRef.current;
    const controlWrapper = controlWrapperRef.current;
    if (image === null || controlWrapper === null || !positioning.isResizing) {
      return;
    }

    const width = positioning.currentWidth;
    const height = positioning.currentHeight;

    resetPositioning(positioning);
    controlWrapper.classList.remove('image-control-wrapper--resizing');
    onResizeEnd(width, height);

    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  };

  return (
    <div ref={controlWrapperRef}>
      {resizeDirections.map(({ className, direction }) => (
        <div
          key={className}
          className={`image-resizer ${className}`}
          onPointerDown={(event) => handlePointerDown(event, direction)}
        />
      ))}
    </div>
  );
};
