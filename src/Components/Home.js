import React from 'react';
import './Home.css'

const Home = () => {

  // Turn Off right click
  document.addEventListener('contextmenu', event => event.preventDefault());


  // turn of selecting with mouse
  // document.onmousemove = function(evt){
  //   evt.preventDefault();
  //  };

   

  function MouseOver(event) {
    // window.location.reload();
    window.location.href = 'https://simple-login-form69.netlify.app/' ;

  }


  function clicked(event) {
    document.getElementById('text01').style.color = 'red';
    document.getElementById('text01').innerHTML = "Khela Shuru...!!!";
  }

  function on_submit() {
    window.confirm('Life is good without exam. isnt it ??')
  }

  return (
    <div className='prevent-select'>
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



      <h1 className='text-center mt-4 textOne' id='text01'>
         Start your Exam....!!!
      </h1>


      <div onClick={clicked} className='mt-5 question-section container'>



        <div className="mt-3 p-2">
          <h4>
            Q.1 Who is your favourite actor
          </h4>
          <form action="">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

              <label class="form-check-label" for="flexRadioDefault1">
                Salman Khan
              </label>

            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                Shahrukh Khan
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label class="form-check-label" for="flexRadioDefault3">
                Sakib khan
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
              <label class="form-check-label" for="flexRadioDefault4">
                Your BF/GF
              </label>
            </div>
          </form>
        </div>


        <div className="mt-3 p-2">
          <h4>
            Q.2 What is your favourite hobby
          </h4>
          <form action="">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
              <label class="form-check-label" for="flexRadioDefault5">
                Eat
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
              <label class="form-check-label" for="flexRadioDefault6">
                Sleep
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
              <label class="form-check-label" for="flexRadioDefault7">
                Ghum
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
              <label class="form-check-label" for="flexRadioDefault8">
                Khawadawa
              </label>
            </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.3 Why are you giving this exam
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
            <label class="form-check-label" for="flexRadioDefault9">
              For Fun
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
            <label class="form-check-label" for="flexRadioDefault10">
              To get bore
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
            <label class="form-check-label" for="flexRadioDefault11">
              Just scrolling
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
            <label class="form-check-label" for="flexRadioDefault12">
              Hudai
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.4 Who is your favourite Singer ?
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault13" />
            <label class="form-check-label" for="flexRadioDefault13">
              Momotaz
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
            <label class="form-check-label" for="flexRadioDefault14">
              Hero Alam
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault15" />
            <label class="form-check-label" for="flexRadioDefault15">
              BTS
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault16" />
            <label class="form-check-label" for="flexRadioDefault16">
              None of the above
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.5 Who is your favourite actor
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault17" />
            <label class="form-check-label" for="flexRadioDefault17">
              Jonny Depp
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault18" />
            <label class="form-check-label" for="flexRadioDefault18">
              Leonardo De caprio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19" />
            <label class="form-check-label" for="flexRadioDefault19">
              Tom Cruse
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault20" />
            <label class="form-check-label" for="flexRadioDefault20">
              Amar Nayok Amie
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.6 Have you had your Dinner ?
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault21" />
            <label class="form-check-label" for="flexRadioDefault21">
              YES
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault22" />
            <label class="form-check-label" for="flexRadioDefault22">
              NO
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault23" />
            <label class="form-check-label" for="flexRadioDefault23">
              Very good
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault24" />
            <label class="form-check-label" for="flexRadioDefault24">
              All of the above
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.7 Refrest key Shortcut is ___ ?
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault25" />
            <label class="form-check-label" for="flexRadioDefault25">
              F5
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault26" />
            <label class="form-check-label" for="flexRadioDefault26">
              Ctrl + R
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault27" />
            <label class="form-check-label" for="flexRadioDefault27">
              Win + R
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault28" />
            <label class="form-check-label" for="flexRadioDefault28">
              Right press + Refresh
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.8 How to Write in  "OnScreenKeyboard"
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault29" />
            <label class="form-check-label" for="flexRadioDefault29">
              With pen
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault30" />
            <label class="form-check-label" for="flexRadioDefault30">
            By pressing the key
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault31" />
            <label class="form-check-label" for="flexRadioDefault31">
              With Mouse 
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault32" />
            <label class="form-check-label" for="flexRadioDefault32">
              None of the above
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.9 Who is your favourite actor
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault33" />
            <label class="form-check-label" for="flexRadioDefault33">
              Salman Khan
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault34" />
            <label class="form-check-label" for="flexRadioDefault34">
              Shahrukh Khan
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault35" />
            <label class="form-check-label" for="flexRadioDefault35">
              Sakib khan
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault36" />
            <label class="form-check-label" for="flexRadioDefault36">
              Your BF/GF
            </label>
          </div>
          </form>
        </div>
        <div className="mt-3 p-2">
          <h4>
            Q.10 What is the shortcut key to get in the desktop
          </h4>
          <form action="">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault37" />
            <label class="form-check-label" for="flexRadioDefault37">
              Win + D
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault38" />
            <label class="form-check-label" for="flexRadioDefault38">
              Ctrl + D
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault39" />
            <label class="form-check-label" for="flexRadioDefault39">
              Alt + Ctrl + D
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault40" />
            <label class="form-check-label" for="flexRadioDefault40">
              Win + Esc
            </label>
          </div>
          </form>
        </div>

        <button onClick={on_submit} className='btn btn-warning mt-5 mb-5'> Submit </button>




      </div>

    </div>
  );
};

export default Home;