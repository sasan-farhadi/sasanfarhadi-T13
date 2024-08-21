const Header = () => {
    return (
        <div className="container">
            <header>
                <h1>Sasan Farhadi | Tabs Components With React</h1>
                <div className="radio-inputs">
                    <label className="radio">
                        <input type="radio" name="radio" defaultChecked />
                        <span className="name">JavaScript</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" />
                        <span className="name">ReactJs</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" />
                        <span className="name">NextJs</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" />
                        <span className="name">Github</span>
                    </label>
                </div>

            </header>
        </div>
    )
}
export default Header
