import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './Contact.css'

export default function Contact() {
    const [list,setlist]=useState([
        { nom: 'soukayna', phone: '0666445667', email: 'soukayna@gmail.com', image: process.env.PUBLIC_URL +`image/img1.jpeg` }
    ]);
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setemail]=useState('');
    const [image,setimage]=useState(null);
    const ID=uuid();

    const imagehandler = (e) => {
        if (e.target.files[0]!=null){
        setimage(e.target.files[0])
        }
    }

    const addContact=(e)=>{
      e.preventDefault();
      const n = name; const p = phone;const em=email;const imgp=image;
        const newlist = [...list, { nom: n, phone: p, email: em, image:URL.createObjectURL(imgp)}];
        setlist(newlist);
        setName('');
        setPhone('');
        setemail('');
        setimage(null);
    };
   
    const deletefromArray = (id) => {
        const updatedList = list.filter((el) => el.ID !== id);
        setlist(updatedList);
    };
   

  return (
   <div>
    <form onSubmit={addContact}>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name' /> <br />
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='insert your phone number ' /><br />
              <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='insert your email' /><br />
              <input type="file"  onChange={imagehandler} name="file" required accept='image/png ,image/jpeg, image.jpg ' id="" /><br />
              <input type="submit" value="Ajouter" />
    </form>

{ list.map((el,ID)=>
<div className='contact-display' key={ID}>
            <p>{el.nom.charAt(0)}</p>
            <img src={el.image} alt='PROFILE' height='100px' width='100px'  />
    <div className='contact-info'> 
            <p>NAME : <span>{el.nom}</span></p>
            <p>PHONE NUMBER : <span>{el.phone}</span></p>
            <p>EMAIL: <span>{el.email}</span></p>
    </div>
    <div className='contact-btn'>
    <input type="button" onClick={deletefromArray(el.ID)} value="x" />
    </div>

</div>)}
      </div>
  )
}



