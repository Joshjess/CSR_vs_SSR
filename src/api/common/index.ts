import http from '../http-common';

interface content {
  message: string;
}

const fetchContent = async () => {
  let text = ``;
  await http
    .get<content>(`/gethomepage`)
    .then((res) => {
      text = res.data.message;
    })
    .catch((err) => {
      console.log(err);
      text = `Unable to fetch text from api`;
    });
  return text;
};

export default fetchContent;
