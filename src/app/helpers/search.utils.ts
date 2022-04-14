export const rotateItems = (items: any, numberOfRotations: number): string[] => {
    for (let n = 0; n < numberOfRotations; n++) {
      const length = items.length - 1;
      const temp = items[0];
      for (let i = 0; i < length; i++) {
        items[i] = items[i + 1];
      }
      items[length] = temp;
    }
    return items;
  };