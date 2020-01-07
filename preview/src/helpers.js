//Temporary solution
export const grabData = async (url, success) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    success(data);
  } catch (e) {
    console.log(e);
  }
};
