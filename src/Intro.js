import React from 'react'
import './App.css'

const Intro = () => {
  return (
    <div className="Intro" id='#about'>
       <div className='introText'>
        <p>We make so may connections but how do we keep up with those connections?<br/>
        How do we remember where we know them from?<br/> What if they reach out to us and we don't remember where we know them from? <br/>
            A virtual rolodex could help with that! <br/> <br/>
            Everyone has a journey and makes connections along the way but we need a way to professionally maintain those connections. 
          With the connections application we offer a platform with all the benefits of 
          a contact form <br/>in addition to how that connection was made!</p>
          </div>
          <div className="instructions">
          <h2>Using The Connections Keeper</h2>
          <p>Once signed in, navigate to your connections page through
            the home button at the bottom of your screen.<br/>
            All your current contacts will be displayed on note cards.<br/>
            To enter a new connection, click the new contact card and simply enter their information.<br/>
            <strong>Make sure to include how you know them!</strong><br/>
            Your new contact will be displayed in your contact list.<br/>
            Need to change some of their info, simply click on the edit button and you can update or delete that contact.
          </p>
          </div>
          <h1>Enjoy your new virtual rolodex!</h1>
        
    </div>
  )
}

export default Intro
