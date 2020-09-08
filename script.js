
$("#login-form").submit(function (e) {
	e.preventDefault()

	// document.getElementById("submit_btn").disabled = true
	// document.getElementById("submit_btn").classList.add("disabled")
	const Submit_btn = document.getElementById("submit_btn")
	Submit_btn.value="Wait... "
	Submit_btn.disabled=true
	Submit_btn.classList.add("disabled̥")
	// $("#alert_resp_box").show()
	let form_data = new FormData(document.querySelector("#login-form"))

	fetch("https://script.google.com/macros/s/AKfycbwjXjnTCr2a8_7zLl9XUK63fG2Y_GD4c2bQ-kr3kwcLsGewE88/exec",{
		method:"POST",
		body:form_data
	}).then(response=>{
		return response.json()
	}).then(json_response=>{
		if(json_response.result == "success"){
			swal("Good Job !","Check your Email & join Whatsapp Group.","success").then(val=>{
				window.location.reload()
			})
		}
		else{
			swal("Oops","Please try again after some time.","error")
		}
	})


})
	
document.getElementById("team_member_name").value=""
document.getElementById("team_member_email").value=""
document.getElementById("team_member_number").value=""


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function handle_team_change(){
	console.log("function called")
	console.log(document.getElementById("team"),"is the value of select input")
	if(document.getElementById("team").value == "2"){
		document.getElementById("extra_member").style.display="block"
		document.getElementById("extra_member1").style.display="block"
		document.getElementById("extra_member2").style.display="block"
	}
	else{
		document.getElementById("team_member_name").value=""
		document.getElementById("team_member_email").value=""
		document.getElementById("team_member_number").value=""
		document.getElementById("extra_member").style.display="none"
		document.getElementById("extra_member1").style.display="none"
		document.getElementById("extra_member2").style.display="none"
	}
}

// function handle_form_submit(event){
// 	event.preventDefault()
// 	const names = ["your_name","your_email","roll_number","phone"]

// 	for(let name of names){
// 		const element = document.getElementsByName(name)[0]
// 		if(element)
// 	}
// }