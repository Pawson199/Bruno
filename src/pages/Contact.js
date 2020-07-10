import React, {useState} from 'react'

export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

      const data = {
          name: name,
          email: email,
          message: message
      }

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...data })
          })
            .then(() => {alert("Success!"); console.log(encode({ "form-name": "contact", ...data }))})
            .catch(error => alert(error));
    
          e.preventDefault();
    }

    const handleChange = e => {
        switch(e.target.name){
            case "name" :
                setName(e.target.value)
            break;
            case "email" :
                setEmail(e.target.value)
            break;
            case "message" :
                setMessage(e.target.value)
            break;
        }
    };

    console.log(data)

    return (
        <div className="contact_container">
             <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
    )
}
