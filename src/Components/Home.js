import React from 'react';
import './Home.css'

const Home = () => {
  function MouseOver(event) {
    window.location.reload();
  }


  function clicked(event) {
    document.getElementById('text01').style.color='red' ;
    document.getElementById('text01').innerHTML = "Khela Shuru...!!!";
   

  }
 
  
    return (
        <div>
            <h3 className='text-primary text-center'>
                Welcome to
            </h3>
            <h1 className='text-info bg-dark text-center'>
                CP Learning <small className='small-word text-danger text-center'> copy paste Learning </small>
            </h1>


            {/*  === hover refresh ==== */}

          <div onMouseOver={MouseOver} className='mt-4 refrest-bar p-3 text-center'>
          <h3 >
            &#128127;  Don't touch me  &#128127;
            </h3>
          </div>



        <h3 className='text-center mt-4 textOne' id='text01'>
          Please Start your Exam
        </h3>


         <div onClick={clicked} className='mt-5 question-section container'>
          
         

     <div className="mt-3 p-2">
      <h4>
        Q.1 Who is your favourite actor
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  
    Salman Khan
  
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Shahrukh Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label class="form-check-label" for="flexRadioDefault3">
    Sakib khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label class="form-check-label" for="flexRadioDefault4">
    Your BF/GF 
  </label>
</div>
     </div>

     
     <div className="mt-3 p-2">
      <h4>
        Q.2 What is your favourite hobby
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
  <label class="form-check-label" for="flexRadioDefault5">
    Eat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>
  <label class="form-check-label" for="flexRadioDefault6">
    Sleep
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7"/>
  <label class="form-check-label" for="flexRadioDefault7">
    Ghum
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8"/>
  <label class="form-check-label" for="flexRadioDefault8">
    Khawadawa
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.3 Why are you giving this exam
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9"/>
  <label class="form-check-label" for="flexRadioDefault9">
    For Fun
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10"/>
  <label class="form-check-label" for="flexRadioDefault10">
    To get bore
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11"/>
  <label class="form-check-label" for="flexRadioDefault11">
    Just scrolling
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12"/>
  <label class="form-check-label" for="flexRadioDefault12">
    Hudai
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.4 Who is your favourite Singer ?
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault13"/>
  <label class="form-check-label" for="flexRadioDefault13">
    Momotaz
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14"/>
  <label class="form-check-label" for="flexRadioDefault14">
    Hero Alam
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault15"/>
  <label class="form-check-label" for="flexRadioDefault15">
    BTS
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault16"/>
  <label class="form-check-label" for="flexRadioDefault16">
    None of the above 
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.5 Who is your favourite actor
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Jonny Depp
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Leonardo De caprio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Tom Cruse
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Pasher Bashar Abuilla
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.6 Have you had your Dinner ?
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    YES
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    NO
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Very good
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    All of the above
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.7 Who is your favourite actor
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Salman Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Shahrukh Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Sakib khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Your BF/GF 
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.8 Who is your favourite actor
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Salman Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Shahrukh Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Sakib khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Your BF/GF 
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.9 Who is your favourite actor
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Salman Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Shahrukh Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Sakib khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Your BF/GF 
  </label>
</div>
     </div>
     <div className="mt-3 p-2">
      <h4>
        Q.10 Who is your favourite actor
      </h4>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Salman Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Shahrukh Khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Sakib khan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Your BF/GF 
  </label>
</div>
     </div>




         </div>

        </div>
    );
};

export default Home;