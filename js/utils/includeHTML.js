const includeHTML = (callback) => {
  const elements = document.querySelectorAll('[include-html]');
  const promises = [...elements].map(el => {
    const filePath = el.getAttribute('include-html');
    if (!filePath) {
      return Promise.resolve(true);
    }

    return fetchForHtmlText(filePath)
      .then(html => el.innerHTML = html);
  });

  Promise.all(promises)
    .catch(error => console.error(error))
    .finally(() => callback())
};

const fetchForHtmlText = async (filePath) => {
  return await fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load HTML: ${filePath}`);
      }
      return response.text();
    });
}

export const appendHtml = async (selector, filePath) => {
  const node = document.querySelector(selector);

  await fetchForHtmlText(filePath)
    .then(async html => {
      const divElement = document.createElement('div');
      divElement.innerHTML = await html;
      node.appendChild(divElement);
    })
    .catch(error => console.error(error));
}

export default includeHTML;
