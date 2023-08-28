import throttle from 'lodash.throttle';
const formEl = document.querySelector(".feedback-form");
const LS_FORM_KEY = "feedback-form-state";
const {email, message} =formEl.elements;
const isData = localStorage.getItem(LS_FORM_KEY);
const fillForm =(e)=>{
	
	const formInfo ={
		email:email.value,
		message:message.value
	}
	localStorage.setItem(LS_FORM_KEY, JSON.stringify(formInfo))
}
const setInfoOnLoad = ()=>{

if(isData){
	const dataInfo =JSON.parse(isData);
	email.value = dataInfo.email;
	message.value = dataInfo.message
} 
}
const onSubmit =(e)=>{
	e.preventDefault();
	console.log(JSON.parse(isData));
	localStorage.clear();
	e.currentTarget.reset()
}
formEl.addEventListener("input", throttle(fillForm, 500))
document.addEventListener("DOMContentLoaded", setInfoOnLoad)
formEl.addEventListener("submit", onSubmit)


