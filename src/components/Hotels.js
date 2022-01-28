import Hotel from './Hotel';


function Hotels({ hotelsData }) {

    return (
        <>
            <section className="section" style={{ marginTop: '3em' }}>
                <div className="container">
                    <div className="columns is-multiline">
                        {hotelsData.map(hotel => (
                            <li key={hotel.name}>
                                <div className="column is-one-third">
                                    <Hotel hotelsData={hotel} />
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}

export default Hotels;