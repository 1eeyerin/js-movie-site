const hideSkeletonList = (selector) => {
  const skeleton = document.querySelector(`${selector} .skeleton-wrap`);

  const hideSkeleton = setTimeout(() => {
    skeleton.style.display = 'none';

    clearTimeout(hideSkeleton);
  }, 500);
};

export default hideSkeletonList;