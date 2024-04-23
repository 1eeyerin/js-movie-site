const onSearch = () => {
  const form = document.querySelector('#searchForm');

  form.addEventListener('submit',((e) => {
    e.preventDefault();

    const input = document.querySelector('#searchInput');
    const inputValue = input.value;

    if (!inputValue) {
      alert('검색어를 입력해주세요.');
      return;
    }

    window.location.href = './search.html?query=' + encodeURIComponent(inputValue);
  }));
}

export default onSearch;