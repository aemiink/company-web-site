import React, {useState} from 'react';
import '../assets/styles/contactUs.css'
import Card from "./Card";
import { Datas } from './interfaces';

function ContactUs({info, page, handleChangePage, handleChangePage1, handleChangePage2}:any) {
    const [fileArea, setFileArea] = useState(false)

    const handleUpload = () => {
        setFileArea(true)
    }

    return (
        <div className="contact-us">
            <div>
                <h1>Contact Us</h1>
                <div className="form-label-input">
                    <input type="text" placeholder="Full Name *" required={true}/>
                    <input type="email" placeholder="E-Mail * " required={true}/>
                </div>
                <div className="form-label-input">
                    <input type="tel" placeholder="Phone Number *" required={true}/>
                    <input type="text" placeholder="Country *" required={true}/>
                </div>
                <div className="form-label-input-message">
                    <input type="text" placeholder="Subject*" required={true}/>
                    <input type="text" placeholder="Message *" required={true}/>
                </div>
                <div className="form-label-attachment">
                    <label htmlFor="fileInput"></label>
                    <input type="file" id="fileInput" onClick={handleUpload}/>
                    {
                        fileArea ? ( <span id="fileStatus">Atachment added.</span>):
                                    (<span id="fileStatus">Add an atachment</span>)
                    }

                    <div className="form-label-checked">
                        <input type="checkbox" id="checkboxTerms"/>
                        <label htmlFor="checkboxTerms">I want to receive news and updates once in a while.
                        </label>
                        <div className="infoArea">We will add your info to our CRM for contacting you regarding your request. For more info please consult our privacy policy</div>
                    </div>
                    <button className="submitButton" type="submit">Send Message</button>
                </div>
            </div>
            <div className='commment-contact'>
                {
                    info.map((info:Datas, index:number)=>(
                        index === 0 && page === "page1" ? 
                        (
                            <Card key={index} {...info} />
                        ): 
                        index === 1 && page === "page2" ?
                        (
                            <Card key={index} {...info} />
                        ): 
                        index === 2 && page === "page3" ?
                        (
                            <Card key={index} {...info} />
                        ):(
                            <div></div>
                        )

                    ))
                }
            </div>
        </div>
    );
}

export default ContactUs;