const renderNoSearchResult = (selector) => {
  if (!selector) return false;

  const section = document.querySelector(selector);

  const div = document.createElement('div');
  div.classList.add('no-result');
  div.textContent = '검색된 결과가 없어요.';

  const span = document.createElement('span');
  span.textContent = '찾고 싶은 영화의 제목이 정확한지 확인해 보세요.';

  div.appendChild(span);
  return section.appendChild(div);
};

export default renderNoSearchResult;