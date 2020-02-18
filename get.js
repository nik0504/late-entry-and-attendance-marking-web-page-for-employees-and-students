$(document).ready(function(){
	$(".active").click(function(){
		getData();
	});
	async function getData(){
		try{
			
			let tempResponse = await fetch("http://localhost:8080/hello/student/get-employee",{
			method:'GET',
			headers: {
				//"Accept": "application/json"  ,
				"Content-Type": "application/json" ,
					}
			});
			let response = await tempResponse.json();
			console.log(response);
			var noOfEmp = response.length;
			console.log(noOfEmp);
			if(noOfEmp>0){
			// CREATE DYNAMIC TABLE.
				var table = document.createElement("table");
				table.style.width = '50%';
				table.setAttribute('border', '1');
				table.setAttribute('cellspacing', '0');
				table.setAttribute('cellpadding', '5');
				
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
				var count=0;
				for (var i = 0; i < noOfEmp; i++) {
						count++;
						var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .

						
						
						for (var j = 0; j < col.length; j++) {
							var td = document.createElement("td");
							td.innerHTML = response[i][col[j]];
							if(col[j]=='Employee_Id'){
								
								td.innerHTML = count;
								bRow.appendChild(td);
							}
							else{
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
					document.getElementById('tab').style.display='block';
					document.getElementById("bu1").style.display= "block";
					document.getElementById('form1').style.display='none';
					document.getElementById('bt3').style.display='none';
					document.getElementById('record1').style.display = 'none';
		  			

		}
					catch(err){
						alert(err);
					}
				}
				// on clicking add new employee
	  			$("#bu1").click(function(){
	  			document.getElementById('form1').style.display='block';
	  			document.getElementById('tab').style.display='none';
	  			document.getElementById('bu1').style.display='none';
				  document.getElementById('bt3').style.display='none';
				  document.getElementById('record1').style.display = 'none';
	  				  		})
	  	
			 
			//on clicking submit on add new employee
	  		$("#bu2").click(async function postData() {
				  let NameVal = document.getElementById('nameI').value;
				  if(NameVal ==""){
					alert("This field should not be empty");
				}
	else{
		const data  ={
			Employee_Name: NameVal
					   }
		   const options={
		   method : 'POST',
		   body: JSON.stringify(data),
		   headers :{
		   // "Accept": "application/json"  ,
			   "Content-Type": "application/json" ,            }

   }

		   //try{
			   let tempResponse = await fetch("http://localhost:8080/employees",options);
		
	}	

					let response = await tempResponse.json();
					console.log(response);		
					//let response = await tempResponse.json();
					//console.log(response);
				//}
				// catch(err){
				// 	alert(err);
				// }
				getData();
					document.getElementById('form1').style.display='none';
	  				document.getElementById('tab').style.display='block';
	  				document.getElementById('bu1').style.display='block';
					  document.getElementById('bt3').style.display='none';
					  document.getElementById('record1').style.display = 'none';
			})
			//to genrate the report
			$(".report1").click(function(){
				document.getElementById('record1').style.display = 'block';
				document.getElementById('tab').style.display='none';
				document.getElementById("bu1").style.display= "none";
				document.getElementById('form1').style.display='none';
				document.getElementById('bt3').style.display='none';
				//query for fetching the data
				//select employee.Employee_Name, late_entry.date from employee left join late_entry on employee.Employee_Id=late_entry.id where late_entry.late = 1 AND DATE(late_entry.date) >= '2020-01-20' AND DATE(late_entry.date) <='2020-01-20'
				//getReport();


				  });
			$("#finalRep").click(function(){
				getReport();
			});
				  async function getReport(){
					try{
						var date1 = document.getElementById('from').value ;
						var date2 = document.getElementById('toDate').value ;
						console.log(date1);

						let data = {
							date : {date1,date2}
		
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
						let tempResponse = await fetch("http://localhost:8080/hello/student/get-employee-report",options);
						let response = await tempResponse.json();
						console.log(response);
						var noOfEmp = response.length;
						console.log(noOfEmp);
						if(noOfEmp>0){
						// CREATE DYNAMIC TABLE.
							var table = document.createElement("table");
							table.style.width = '50%';
							table.setAttribute('border', '1');
							table.setAttribute('cellspacing', '0');
							table.setAttribute('cellpadding', '5');
							
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
							var count=0;
							for (var i = 0; i < noOfEmp; i++) {
									count++;
									var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
			
									
									
									for (var j = 0; j < col.length; j++) {
										var td = document.createElement("td");
										td.innerHTML = response[i][col[j]];
										if(col[j]=='Employee_Id'){
											
											td.innerHTML = count;
											bRow.appendChild(td);
										}
										else{
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
								document.getElementById('tab').style.display='block';
								document.getElementById("bu1").style.display= "none";
								document.getElementById('form1').style.display='none';
								document.getElementById('bt3').style.display='none';
								document.getElementById('record1').style.display = 'none';
								  
			
					}
								catch(err){
									alert(err);
								}
							}
						
	
	  	});
