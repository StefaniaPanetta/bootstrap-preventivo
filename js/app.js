console.log("Preventivo")

//recuperare il form dal DOM

const formElement = document.getElementById('form-preventivo')
const InputJob = document.getElementById("inputLavoro")
const InputSconto = document.getElementById("PromoCode")
const prezzoFinale = document.getElementById("prezzoFinale")

// ascolto l'evento submit e al submit blocco l'invio del form

formElement.addEventListener ('submit', function (event) {
	event.preventDefault() // blocca l'invio del form
	console.log('submit del form', event)

  //leggo i valori del form

  const JobValue = InputJob.value 
  const ScontoValue = InputSconto.value

  console.log(JobValue, ScontoValue)

  // calcolare il prezzo base devo mettere un altro if qui con il prezzo base

   let prezzoBase = 0

  if(JobValue === 'backend'){
		prezzoBase = 10 * 20.50
	} else if (JobValue === 'frontend') {
    prezzoBase = 10 * 15.30	}
    else (JobValue === 'project') {
    prezzoBase = 10 * 33.60	}
 
  // calcoliamo lo sconto
  let percentualeSconto = 0

  if (ScontoValue === 'YHDNU32'||
    ScontoValue === 'JANJC63'||
    ScontoValue === 'PWKCN25'||
    ScontoValue === 'SJDPO96' ||
    ScontoValue === 'POCIE24'
   ){
		percentualeSconto = 25
	} else if (ScontoValue === 'null') {
		percentualeSconto = 0
	}

  console.log('percentuale sconto', percentualeSconto)

	const sconto = (prezzoBase * percentualeSconto) / 100

	console.log('sconto', sconto)

  // calcolo il prezzo finale
	const prezzoFinale = prezzoBase - sconto

	console.log('prezzo finale', prezzoFinale)

  // lo stampo nella sezione
  prezzoOutputElement.innerHTML = prezzoFinale.toFixed(2) + ' &euro;'

  })
