

function OptionsFilter({options, selected, icon}) {

  return (

    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={{ width: '100%' }}>
          <select style={{ width: '100%' }}>
            {options.map(country =>
              (
              <option key={country.name} value={country.name}>{country.name}</option>
              )
            )}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className="fas"></i>
        </div>
      </div>
    </div>

  )

}

export default OptionsFilter