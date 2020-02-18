$(document).ready(function () {
	$(".late").click(function () {
		gData();
	});

	async function gData() {
		try {

			let tempResponse = await fetch("http://localhost:8080/employees", {
				method: 'GET',
				headers: {
					//"Accept": "application/json"  ,
					"Content-Type": "application/json",
				}
			});
			let response = await tempResponse.json();
			console.log(response);
			var noOfEmp = response.length;

			if (noOfEmp > 0) {


				// CREATE DYNAMIC TABLE.
				var table = document.createElement("table");
				table.style.width = '70%';
				table.setAttribute('border', '1');
				table.setAttribute('cellspacing', '0');
				table.setAttribute('cellpadding', '3');

				// retrieve column header ('Name', 'Email', and 'Mobile')

				var col = []; // define an empty array
				for (var i = 0; i < noOfEmp; i++) {
					for (var key in response[i]) {
						if (col.indexOf(key) === -1) {
							col.push(key);
						}
					}
				}

				// CREATE TABLE HEAD .
				var tHead = document.createElement("thead");


				// CREATE ROW FOR TABLE HEAD .
				var hRow = document.createElement("tr");

				// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
				for (var i = 0; i < col.length; i++) {
					var th = document.createElement("th");
					th.innerHTML = col[i];
					hRow.appendChild(th);
				}
				tHead.appendChild(hRow);
				table.appendChild(tHead);

				// CREATE TABLE BODY .
				var tBody = document.createElement("tbody");

				// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
				var count = 0;
				for (var i = 0; i < noOfEmp; i++) {
					count++;
					var bRow = document.createElement("tr");

					// CREATE ROW FOR EACH RECORD .


					for (var j = 0; j < col.length; j++) {

						var td = document.createElement("td");
						var entry1 = document.createElement("input");
						var entry2 = document.createElement("input");
						var label1 = document.createElement("label");
						var label2 = document.createElement("label");
						//var yes=document.createElement("p");
						entry1.value = true;
						entry2.value = false;
						entry1.setAttribute("type", "radio");
						entry2.setAttribute("type", "radio");
						entry2.setAttribute("checked", "");
						// entry1.setAttribute("name", "row_" + response[i][col[j]]);
						// entry2.setAttribute("name", "row_" + count);
						// entry2.setAttribute({
						// 	"type": "radio",
						// 	"name": "late_entry"
						// });

						// entry1.setAttribute("value", "Yes");
						td.innerHTML = response[i][col[j]];
						if (col[j] == 'Employee_Id') {

							//bRow.setAttribute('id', response[i][col[j]]);
							td.innerHTML = count;
							bRow.appendChild(td);
						}
						if (col[j] == 'late_entry') {
							entry1.setAttribute("name",  response[i][col[0]]);
							entry2.setAttribute("name",  response[i][col[0]]);
							//entry1.setAttribute('id', response[i][col[0]] * 10);
							td.innerHTML = "";
							label1.innerHTML = "yes";
							label1.appendChild(entry1);
							//bRow.appendChild(yes);
							label2.innerHTML = "no";
							label2.appendChild(entry2);
							//bRow.appendChild(yes);
							td.appendChild(label1);
							td.appendChild(label2);
							bRow.appendChild(td);
						}
						else {
							bRow.appendChild(td);
						}

					}
					tBody.appendChild(bRow)

				}
				table.appendChild(tBody);


				// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
				var divContainer = document.getElementById("tab");
				divContainer.innerHTML = "";
				divContainer.appendChild(table);

				// document.getElementById("bu1").style.visibility= "visible";
			}
			document.getElementById('tab').style.display = 'block';
			document.getElementById("bu1").style.display = "none";
			document.getElementById('form1').style.display = 'none';
			document.getElementById('bt3').style.display = 'block';
			document.getElementById('record1').style.display = 'none';
		}
		catch (err) {
			alert(err);
		}

	}

});

async function formSubmit() {
	//console.log(document.getElementById("10").value);
	let formData = $('#tab').serializeArray();
	console.log(formData);
	//console.log(formData.name==true);
	var total= formData.length;
	console.log(formData[5].value);
	for(var i=0;i<total;i++){
		//console.log(formData[i].value);
		if(formData[i].value=="true"){
			//console.log(formData[i].value);
			var nn=formData[i].name;
		let data = {
					s_no : 1,
					id : nn,
					late: 1
					//Emp_Name :

					//Emp_Name : formData[3].name
				}
				const options = {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						"Accept": "application/json"  ,
						"Content-Type": "application/json",
					}
	
				}
				let tempResponse = await fetch("http://localhost:8080/lates",options);
			}
			else{
				var nn=formData[i].name;
		let data = {
					s_no : 1,
					id : nn,
					late: 0
					//Emp_Name :

					//Emp_Name : formData[3].name
				}
				const options = {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						"Accept": "application/json"  ,
						"Content-Type": "application/json",
					}
	
				}
				let tempResponse = await fetch("http://localhost:8080/lates",options);

			}
			}
			
}