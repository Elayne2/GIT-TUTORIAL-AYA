let quotes=[
    {
        "id":0,
        "author":"auteur1",
        "quote":"1=Le bonheur le plus doux est celui qu’on partage",
       "Likes":0
    },
    {
        "id":1,
        "author":"auteur2",
        "quote":"2=Tout le bonheur du monde est dans l’inattendu.",
        "Likes":0
       
    },
    {
        "id":2,
        "author":"auteur1",
        "quote":"3=Le bonheur est contagieux : entourez-vous de visage heureux. ",
        "Likes":0
    }
];

let section=document.querySelector('section');
let btn=document.getElementById('Générerdevis');
let newqt=null;
btn.addEventListener('click',function(){



    
   let newQuote=quotes[Math.floor(Math.random() * quotes.length)];
    section.textContent=newQuote.quote
  
    let quote=quotes.find((x)=> x.id ==newQuote.id)
    console.log(quote)

    console.log(Math.floor(Math.random() * quotes.length)) 
    span[3].textContent=quote.Likes 
})

let citation=document.getElementById('text1');
let auteur=document.getElementById('text2');
let bntAjout=document.getElementById('bntAjout');
let btnLike=document.getElementById('btnLike');

bntAjout.addEventListener('click',function(e){
    e.preventDefault()
    let newCitation={
            "id":quotes.length,
            "author":auteur.value,
            "quote":citation.value,
            "Likes":0
            
        }
        quotes.push(newCitation)
        auteur.value="",citation.value=""
        console.log(quotes)
  
}
)

let span=document.querySelectorAll('span');
let avec_espace=document.getElementById('btnCalcul');
avec_espace.addEventListener('click',(e)=>{
    e.preventDefault()   
    span[0].textContent=(section.textContent).length
})


let sans_espace=document.getElementById('btnCalcul2');
sans_espace.addEventListener('click',(e)=>{
    e.preventDefault()
    const str = section.textContent.replace(/ /g,'');
    span[1].textContent=str.length
    console.log(str);

})

let Nombre_mot=document.getElementById('btnCalcul3');
Nombre_mot.addEventListener('click',(e)=>{
    e.preventDefault();
    
   const quoteText = section.textContent.split("-")[0].trim();
   span[2].textContent=quoteText.split(" ").length

console.log(`La citation"${quoteText}"`);
})

let Nombre_jaime=document.getElementById('btnLike');
Nombre_jaime.addEventListener('click',(e)=>{
 e.preventDefault();    

  const quoteText = section.textContent.split("-")[0].trim();
  
  const quote=quotes.find((q) => q.quote === quoteText);
  span[3].textContent=quote.Likes
   
  if (quote) {
    quote.Likes++;
      console.log(`tu as aimé "${quoteText}" (${span[3].textContent.likes} likes).`);
    }

})
		const prevBtn = document.getElementById("prevBtn");
		const nextBtn = document.getElementById("nextBtn");

		let filteredQuotes = quotes;
		let Index = -1;

		function filterQuotes() {
			const author = document.getElementById("author").value.trim().toLowerCase();
			if (author === "") {
				filteredQuotes = quotes;
			} else {
				filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author);
			}
			Index = -1;
			showQuote();
		}

		function showQuote() {
			if (filteredQuotes.length === 0) {
				citationEl.textContent = "Aucune citation trouvée.";
				prevBtn= true;
				nextBtn = true;
			} else {
				Index = (Index + filteredQuotes.length) % filteredQuotes.length;
				const quote = filteredQuotes[Index];
				citationEl.textContent = `"${quote.quote}" - ${quote.author}`;
				prevBtn.disabled = Index === 0;    
				nextBtn.disabled = Index === filteredQuotes.length - 1;
			}
		}
     const btnfil=document.getElementById("btnfil");
     btnfil.addEventListener("click", e  => {
			e.preventDefault();
			filterQuotes();
		});

		prevBtn.addEventListener("click", () => {
			Index--;
			showQuote();
		});

		nextBtn.addEventListener("click", () => {
			Index++;
			showQuote();
		});
