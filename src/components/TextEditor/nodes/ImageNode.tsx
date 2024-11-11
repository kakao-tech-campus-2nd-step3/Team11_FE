import React, { Suspense } from 'react';

import {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  DecoratorNode,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';

const LazyEditorImage = React.lazy(() => import('./LazyEditorImage'));

export interface ImagePayload {
  altText: string;
  height?: number;
  key?: NodeKey;
  maxWidth?: number;
  src: string;
  width?: number;
}

export type SerializedImageNode = Spread<
  {
    altText: string;
    height?: number;
    maxWidth: number;
    src: string;
    width?: number;
    type: 'image';
    version: 1;
  },
  SerializedLexicalNode
>;

const convertImageElement = (domNode: Node): null | DOMConversionOutput => {
  if (domNode instanceof HTMLImageElement) {
    const { alt, src } = domNode;
    const node = $createImageNode({ altText: alt, src: src });

    return { node };
  }
  return null;
};

export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __altText: string;
  __width: 'inherit' | number;
  __height: 'inherit' | number;
  __maxWidth: number;

  constructor(
    src: string,
    altText: string,
    maxWidth: number,
    width?: 'inherit' | number,
    height?: 'inherit' | number,
    key?: NodeKey
  ) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__maxWidth = maxWidth;
    this.__width = width || 'inherit';
    this.__height = height || 'inherit';
  }

  static getType(): string {
    return 'image';
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__maxWidth,
      node.__width,
      node.__height,
      node.__key
    );
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    return $createImageNode(serializedNode);
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: () => ({
        conversion: convertImageElement,
        priority: 0,
      }),
    };
  }

  exportJSON(): SerializedImageNode {
    return {
      altText: this.__altText,
      height: this.__height === 'inherit' ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      src: this.__src,
      type: 'image',
      version: 1,
      width: this.__width === 'inherit' ? 0 : this.__width,
    };
  }

  exportDOM(): DOMExportOutput {
    const el = document.createElement('img');
    el.setAttribute('src', this.__src);
    el.setAttribute('alt', this.__altText);

    return { element: el };
  }

  setWidthAndHeight(
    width: 'inherit' | number,
    height: 'inherit' | number
  ): void {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span');
    const theme = config.theme;
    const className = theme.image;
    if (className !== undefined) {
      span.className = className;
    }
    return span;
  }

  updateDOM(): false {
    return false;
  }

  getSrc(): string {
    return this.__src;
  }

  getAltText(): string {
    return this.__altText;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <LazyEditorImage
          src={this.__src}
          altText={this.__altText}
          w={this.__width}
          h={this.__height}
          maxW={this.__maxWidth}
          nodeKey={this.getKey()}
        />
      </Suspense>
    );
  }
}

export const $createImageNode = ({
  altText,
  height,
  maxWidth = 500,
  src,
  width,
  key,
}: ImagePayload) => {
  return new ImageNode(src, altText, maxWidth as number, width, height, key);
};

export const $isImageNode = (
  node: LexicalNode | null | undefined
): node is ImageNode => {
  return node instanceof ImageNode;
};
