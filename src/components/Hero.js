
//use effect
function Hero(props) {


    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        desde el <strong> dia {props.filters.dateFrom.toLocaleDateString()}
                        hasta el {props.filters.dateTo.toLocaleDateString()}
                        </strong>
                    </h2>
                </div>
            </div>
        </section>

    )

}

export default Hero