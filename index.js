function Info() {
    return (
        <nav>
            <img src="./images/profil.png" className="profil--icon" />
        </nav>
    )
}

function Main() {
    return (
        <main>
            <h1 className="main--first_title">Laura Smith</h1>
            <h3 className="main--second_title">Frontend Developer</h3>
            <h5 className="main--third_title">laurasmith.website</h5>
        </main>
    )
}

function About() {
    return (
        <div className="contains">
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest
                in making things simple and automating daily
                tasks. I try to keep up with security and best
                practices, and am always looking for new things to
                learn.
            </p>
            <h2 className="interests_title">Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet
                fanatic. Bacon buff. Entrepreneur. Travel geek. Pop
                culture ninja. Coffee fanatic.
            </p>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <img src="./images/Twitter_Icon.png" className="footer--icon"/>
            <img src="./images/Facebook_Icon.png" className="footer--icon"/>
            <img src="./images/Instagram_Icon.png" className="footer--icon"/>
            <img src="./images/GitHub_Icon.png" className="footer--icon"/>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Info />
            <Main />
            <About />
            <Footer />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))