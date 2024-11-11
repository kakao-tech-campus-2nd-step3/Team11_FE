const imgFileMap = new Map<string, File>();

export const createPostContent = (
  content: string
): { images: File[]; updatedContent: string } => {
  return Array.from(imgFileMap.entries()).reduce(
    (acc, [key, value]) => {
      if (acc.updatedContent.includes(key)) {
        acc.updatedContent = acc.updatedContent.replace(key, '?');
        acc.images.push(value);
      }
      return acc;
    },
    { updatedContent: content, images: [] as File[] }
  );
};

export const createImagePreviewUrl = (image: File): string => {
  const imgUrl = URL.createObjectURL(image);
  imgFileMap.set(imgUrl, image);
  return imgUrl;
};

export const removeImagePreviewUrl = (imgUrl: string): void => {
  imgFileMap.delete(imgUrl);
  URL.revokeObjectURL(imgUrl);
};

export const flushImagePreviewUrls = (): void => {
  for (const imageUrl of imgFileMap.keys()) {
    URL.revokeObjectURL(imageUrl);
  }
  imgFileMap.clear();
};
