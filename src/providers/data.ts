const baseUrl = process.env['REACT_APP_API_URL'];
const suffix = process.env['REACT_APP_API_SUFFIX'];
const notesUrl = baseUrl + '/notes' + suffix;

export async function getNotes(): Promise<any> {
  return await fetch(notesUrl,{
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}
    ).then(response => response.json())
    .then(responseData => responseData.data);
}
