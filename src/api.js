export async function fetchData() {
  return fetch(
    "https://raw.githubusercontent.com/leejihahaha/myapi/master/myapi/project.json"
  ).then((response) => response.json());
}
//api를 fetch 하고 json을 리턴하는 함수
