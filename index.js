const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '575c3e10f7msh987e888810eb8acp16656cjsnfa8240820466',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
fetchData('https://imdb8.p.rapidapi.com/auto-complete?q=god');
async function fetchData(url)
{
    let response= await fetch(url,options);
    let data = await response.json();
    console.log(data);
}