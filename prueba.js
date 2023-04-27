function getCharacters(done) {

    const result = fetch("https://rickandmortyapi.com/api/character");
 
    result
    .then(response => response.json())
    .then(data => {
        done(data);
    });
}
    getCharacters(data => {

        data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
         

            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">


                <h2>${personaje.name}</h2>
                <br>
                <p>${personaje.species}</p>
                
            </div>

            
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
});

