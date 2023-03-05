// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '575c3e10f7msh987e888810eb8acp16656cjsnfa8240820466',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };
// fetchData('https://imdb8.p.rapidapi.com/auto-complete?q=god');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '575c3e10f7msh987e888810eb8acp16656cjsnfa8240820466',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
const songSearch= document.getElementById('songSearch');
const searchButton= document.getElementById('songButton');

async function fetchData(url)
{
    let response= await fetch(url,options);
    let data = await response.json();
    console.log(data);
    processSong(data.albums);
}
searchButton.addEventListener('click',function()
{
    localStorage.clear();
    if(songSearch.value)
    {
        fetchData(`https://spotify23.p.rapidapi.com/search/?q=${songSearch.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`);
    }
    else
    {
        alert('Please enter a song name')
    }
    
});
function processSong(info)
{
    var songObject= info.items;
    for(let i=0;i<songObject.length;i++)
    {
        if(songObject[i].data)
        {
            if(songObject[i].data.name)
            {
                console.log(songObject[i].data.name);
                localStorage.setItem(`songName-${i+1}`,songObject[i].data.name);
            }
            if(songObject[i].data.uri)
            {
                console.log(songObject[i].data.uri);
                localStorage.setItem(`songUri-${i+1}`,songObject[i].data.uri);
            }
            if(songObject[i].data.coverArt && songObject[i].data.coverArt.sources[0])
            {
                var songPoster= songObject[i].data.coverArt.sources[0].url;
                console.log(songPoster);
                localStorage.setItem(`songPoster-${i+1}`,songPoster);
            }
        }
    }
}