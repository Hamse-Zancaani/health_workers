import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Navn </label>
                        <input type="email" class="form-control" placeholder="Dit fulde navn
..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail</label>
                        <input type="email" class="form-control" placeholder="din@email.dk
..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Telefon</label>
                       <input type="text" class="form-control" placeholder="Dit telefonnummer..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Virksomhed/Afdeling</label>
                        <input type="text" class="form-control" placeholder="Virksomhed eller afdeling..." />
                    </div>
                </div>
                 <div className="col-lg-6">
                    <div class="form-group">
                        <label>Emne </label>
                        <input type="text" class="form-control" placeholder="Hvad handler din henvendelse om?
..." />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>
                


                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Send Besked</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Ring direkte for øjeblikkelig assistance</p>
                            <h6>Ring Nu: 25 72 72 49</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;