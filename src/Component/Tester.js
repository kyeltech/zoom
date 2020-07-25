// import React,{useState} from 'react'
import React from 'react'

function NameUpdate() {
    // const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            {/* <form>
                <input type= "text"  value = {name.firstName} onChange = { e => setName ({ ...name, firstName: e.target.value})}/>
                   <input type= "text"  value = {name.lastName} onChange = { e => setName ({ ...name, lastName: e.target.value})}/>
            </form>
            <h2> your firstname is - {name.firstName}</h2>
            <h2> your lastname is - {name.lastName}</h2> 
            <h2>{JSON.stringify(name)}</h2> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#2">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#1">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#1">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#1">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#1" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default NameUpdate
