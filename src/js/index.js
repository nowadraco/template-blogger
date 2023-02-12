class PokemonComponent extends HTMLElement {
    constructor() {
      super();
  
      const pokemonName = this.getAttribute("name");
      const pokemonTypes = JSON.parse(this.getAttribute("types"));
      const pokemonImage = this.getAttribute("image");
      const pokemonNumber = this.getAttribute("number");
      const pokemonCP = JSON.parse(this.getAttribute("cp"));
      const pokemonWeather = JSON.parse(this.getAttribute("weather"));
  
      const typeIcons = pokemonTypes.map(
        type => `<img src="https://images.weserv.nl/?w=25&il&url=https://raw.githubusercontent.com/nowadraco/pogo_assets/master/Images/Types/POKEMON_TYPE_${type.toUpperCase()}.png" title="${type}" />`
      );
  
      const weatherIcons = pokemonWeather.map(
        weather => `<img src="https://images.weserv.nl/?w=30&il&url=https://raw.githubusercontent.com/nowadraco/pogo_assets/master/Images/Weather/weatherIcon_large_${weather.toLowerCase()}Day.png" title="${weather}" />`
      );
  
      this.innerHTML = `
        <div class="chefe-linha">
          <p class="chefe-nome">
            ${pokemonName}
          </p>
          <div class="chefe-tipo">
            ${typeIcons.join("&nbsp;")}
          </div>
        </div>
        <div class="chefe-borda">
          <div class="chefe-imagem">
            <img class="chefe" src="https://images.weserv.nl/?w=200&il&url=raw.githubusercontent.com/nowadraco/pogo_assets/master/Images/Pokemon%20-%20256x256/pokemon_icon_${pokemonNumber}_00.png" />
            <div class="dex">
              ${pokemonNumber}
            </div>
          </div>
          <div class="chefe-2">
            <span class="cp_prefixo">
              PC&nbsp;
            </span>
            ${pokemonCP[0]} - ${pokemonCP[1]}
          </div>
          <div class="chefe-3">
            <span class="chefe-clima">
              ${weatherIcons.join("&nbsp;")}
            </span>
            <span class="boost-cp">
              <span class="cp_prefixo">
                PC&nbsp;
              </span>
              ${pokemonCP[2]} - ${pokemonCP[3]}
            </span>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("pokemon-component", PokemonComponent);
  