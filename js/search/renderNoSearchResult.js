const renderNoSearchResult = (selector) => {
  if (!selector) return false;

  const section = document.querySelector(selector);

  const wrap = document.createElement('div');
  wrap.className = 'no-result';

  wrap.innerHTML = `
    검색된 결과가 없어요.
    <span>찾고 싶은 영화의 제목이 정확한지 확인해 보세요.</span>
  `;

  section.appendChild(wrap);
};

export default renderNoSearchResult;
