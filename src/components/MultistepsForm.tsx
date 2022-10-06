import { useState } from "react"

export default function MultistepsForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [step, setStep] = useState(1)

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if((!email || !password)) {
      setError('Fields must be fill')
      return
    }

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(address);
    console.log(zipCode);
    console.log(city);
    console.log(email);
    console.log(password);

    alert('You have submitted the form.')
    setFirstName('')
    setLastName('')
    setAge('')
    setAddress('')
    setZipCode('')
    setCity('')
    setEmail('')
    setPassword('')
    setError(null)
  }

  const handleClickNext = (e: any) => {
    e.preventDefault()

    if(step === 1 && (!firstName || !lastName || !age)) {
      setError('Fields must be fill')
      return
    }

    if(step === 2 && (!address || !zipCode || !city)) {
      setError('Fields must be fill')
      return
    }
    
    setStep(o => o + 1)
    setError(null)
  }

  const handleClickPrev = (e: any) => {
    e.preventDefault()

    setStep(o => o - 1)
    setError(null)
  }

  return (
    <div className="mutisteps-form">
      <form onSubmit={handleSubmit}>
        <div className={`step ${step === 1 ? 'active' : ''}`}>
          <p>Step: 1/3</p><br />
          <h4>Personal Details</h4><br />
          <input 
            type="text" 
            required
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input 
            type="text" 
            required
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input 
            type="text" 
            required
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <br /><br />
          {error && <><p className="error">{error}</p><br /></>}

          <button onClick={handleClickNext}>Next</button>
        </div>

        <div className={`step ${step === 2 ? 'active' : ''}`}>
          <p>Step: 2/3</p><br />
          <h4>Address</h4><br />
          <input 
            type="text" 
            required
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <input 
            type="text" 
            required
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <br />
          <input 
            type="text" 
            required
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <br /><br />

          {error && <><p className="error">{error}</p><br /></>}

          <button onClick={handleClickPrev}>Previous</button>
          <button onClick={handleClickNext}>Next</button>
        </div>

        <div className={`step ${step === 3 ? 'active' : ''}`}>
          <p>Step: 3/3</p><br />
          <h4>Credentials</h4><br />
          <input 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input 
            type="text" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          {error && <><p className="error">{error}</p><br /></>}

          <button onClick={handleClickPrev}>Previous</button>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}
