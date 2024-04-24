const includeHTML = (callback) => {
  const elements = document.querySelectorAll('[include-html]');
  const promises = [...elements].map(el => {
    const file = el.getAttribute('include-html');
    if (!file) {
      return Promise.resolve(true);
    }

    return fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load HTML: ${file}`);
        }

        return response.text();
      })
      .then(html => el.innerHTML = html);
  });

  Promise.all(promises)
    .catch(error => {console.error(error)})
    .finally(() => callback())
};

export default includeHTML;
