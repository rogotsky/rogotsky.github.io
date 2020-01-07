//Temporary hardcoded solution
export const grabData = async (success) => {
  const url = 'http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://google.com') + '&callback=?';
  try {
    const response = await fetch(url);
    const data = await response.json();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    success({
      image: doc.querySelector('meta[property="og:image"]').content || null,
      title: doc.querySelector('meta[property="og:title"]').content || null
    });
  } catch (e) {
    console.log(e);
  }
};
