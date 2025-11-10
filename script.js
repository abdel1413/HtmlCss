

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.querySelector('.design').classList.toggle('dark');
});


document.querySelector('.saturation-btn').addEventListener('click', () => {
  document.querySelector('.saturation-container').classList.toggle('dark');
});


//get clustered card to generate an html
const clusteredCardContainer = document.querySelector(".clustered-card-container")

clusteredCardContainer.innerHTML = `
<div class="card">
<h2>Clustered card <span style="color:red">(Not Advised)</span></h2>
<p style='color: red'>Too much information</p>
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2><strong><em>Product Name: Ultimate Edition</em></strong></h2>
  <p>
    This is a great product that you will love! It has many features and benefits that will make your life easier and more enjoyable. Whether you're at home or on the go, this product is perfect for all situations. Don’t miss out on this incredible offer, buy now and experience the difference!
  </p>
  <button>Buy Now</button>
  <button>Learn More</button>
  <button>Add to Wishlist</button>
  <p><strong>Only 3 left in stock!</strong></p>
  <p><em>Rated 4.8 stars by 2,391 customers</em></p>
</div>`

//get the user-friendly card
const idealCard = document.querySelector(".ideal-card")
idealCard.innerHTML = `<div class="card">
<h2> keep the card simple</h2>
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>`

//dialog
const dialog = document.querySelector('dialog')
const close = dialog.querySelector(".close")
const openDialog = document.querySelector("#open-modal")

 close.addEventListener('click',()=>{
    dialog.close()
 })

openDialog.addEventListener("click",()=>{
dialog.showModal()
})

//close modal when clicked outside the dialog
dialog.addEventListener('click',(e)=>{

    const rect = dialog.getBoundingClientRect()
    console.log('red',e.clientX >=rect.left )
    console.log('red',e.clientX <=rect.right )
    console.log('red', e.clientY >=rect.top ,)
    console.log('red', e.clientY <= rect.bottom,)

    const isInDialog =(
        e.clientX >= rect.left &&
         e.clientX <= rect.right &&
          e.clientY >=rect.top &&
           e.clientY <= rect.bottom
        )

        if(!isInDialog){
            dialog.close()
        }
    
})

//progress bar

const progressPart = document.querySelector(".progress-part")

progressPart.innerHTML= `

<form id="progressForm">
  <div class="form-progress" aria-label="Form progress">
    <label class="progress-label">Step 
    <span id="currentStep">1</span> of
     <span id="totalSteps">4</span> (<span id="percentage">25%</span>)</label>
    <div class="progress-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25">
      <div class="progress-bar"></div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Basic Information</legend>
    <p>Please enter your basic information.</p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"  required>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Contact Details</legend>
    <p>How can we reach you?</p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <p>Where do you live?</p>
    <label for="address">Street:</label>
    <input type="text" id="address" name="address" required>
    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 4 -->
  <fieldset class="form-step">
    <legend>Review</legend>
    <p>Review your answers before submitting.</p>
     <div class='review'>some go here</div>
    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>`


const form = document.getElementById('progressForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const currentStepSpan = document.getElementById('currentStep');
const totalStepsSpan = document.getElementById('totalSteps');
const percentageSpan = document.getElementById('percentage');



const totalSteps = steps.length;
let currentStep = 0;
console.log(totalSteps)


const updateProgress =()=>{
     const percentage =Math.round(((currentStep + 1)/totalSteps)* 100)
  
     progressBar.style.width = percentage +"%"
     currentStepSpan.textContent = currentStep +1;
     percentageSpan.textContent = percentage +"%";
     form.querySelector('.progress-container').setAttribute('aria-valuenow',percentage)
}

updateProgress()
 

const showStep =(index)=>{
    steps.forEach((step,i) => {
       step.classList.toggle('active', i===index)
    })
    updateProgress()
}

form.querySelectorAll(".next-btn").forEach(btn =>{
    btn.addEventListener('click',()=>{
        if(currentStep < totalSteps -1){
            currentStep++
        }
           if(currentStep ===(totalSteps -1)){
            const inputName = form.querySelector('input[type=text]').value 
            const email = form.querySelector('input[type=email]').value
            const address = form.querySelector('input[name=address]').value
            console.log(';in',inputName)
            console.log('curr',currentStep ===  totalSteps-1)
            form.querySelector(".review").innerHTML = `<p class='review-name'>${inputName}</p>
            <p>${email}</p>
            <p>${address}</p>`
        }
        showStep(currentStep)
       
    })
})

form.querySelectorAll('.prev-btn').forEach(btn =>{
    btn.addEventListener('click',()=>{
        if(currentStep >0){
            currentStep--
        }

     
        showStep(currentStep)
    })
   
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert("Form submitted")
})


showStep(currentStep)

//Shopping card

const toggleBtn = document.querySelector("#toggle-advanced-btn")
const details = document.querySelector("#advanced-details")
toggleBtn.addEventListener("click",()=>{
    const isHidden =details.classList.toggle('hidden')
    toggleBtn.setAttribute('aria-expanded', !isHidden)
     toggleBtn.textContent = isHidden ? 'More Info' : 'Hide Info';
    if(!isHidden){
        details.focus();
    }
})


//birthday car=

const birthdayCard = document.querySelector(".birthday-card-container")
birthdayCard.innerHTML = ` <div class="bd-card" id="greeting-card">
      <h1>Happy Birthday!</h1>

      <p class="message">
        Wishing you all the happiness and joy on your special day!
      </p>

      <div class="card-links">
        <a href="#send" class="send-link">Send Card</a>
        <a href="#share" class="share-link">Share on Social Media</a>
      </div>
  	</div>

  <section id="send">
    <h2>Sending your card...</h2>
    <p>Card successfully sent to your recipient!</p>
  </section>

  <section id="share">
    <h2>Sharing your card...</h2>
    <p>Your card was shared on social media!</p>
  </section>`


  const appContainer = document.querySelector(".application-container")
  appContainer.innerHTML =`<div class='application-container'>
    <form><label for='name'>
        Name
        <input type='text' placeholder="Enter your name"id='name'/>
        </label>
        <label for='email'>
            Email
        <input type='email' name='email' id='email'placeholder="your email"/>
        </label>
        <label for='position'>
        <select id='position'>

          <option>Select an option </option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Manager</option>
          </label>
        </select>
        <fieldset class='radio-group'>
          <legend>Availability</legend>
          <label for='full-time'>
            <input type='radio' name='availability' id='full-time'/>
            Full-Time
            </label>
            <label for='part-time'>
            <input type='radio' name='availability' id='part-time'/>
            Part-Time
            </label>
        </fiedset> 

        <label for='message'>
            Why do you want this job?
        <textarea id='message' placeholder='Enter your motivation'></textarea>
        </label>
    </form>
</div>`