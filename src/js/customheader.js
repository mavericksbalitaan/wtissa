class MyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<header>
            <nav>
              <h1>
          <a href="/">
          International Space Station</h1>
          </a>
              <ul>
                <li>
                  <a href="/home.html">Home</a>
                </li>
                <li>
                  <a href="./about.html">About ISS</a>
                </li>
                <li>
                  <a href="./isstracker.html">Tracker</a>
                </li>
              </ul>
            </nav>
          </header>`;
  }
}

customElements.define("my-header", MyHeader);
