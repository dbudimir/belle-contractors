/**
 * Scrolls to an anchor element with a consistent offset
 * @param anchorId - The ID of the element to scroll to (without the # prefix)
 * @param offset - The offset in pixels from the top (default: 100)
 */
export const scrollToAnchor = (
  anchorId: string,
  offset: number = 100
): void => {
  const element = document.getElementById(anchorId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
