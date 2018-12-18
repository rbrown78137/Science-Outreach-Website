
function showTables(elem){
		elem.parentNode.removeChild(elem);
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		var ServerData = this.responseText;
		var Students = ServerData.split("#");
		for(student of Students)
		{
			StudentInfo = student.split("!");
			console.log(StudentInfo[0]);
			var StudentInfoTable = document.createElement("ul");
			document.getElementById("table1").appendChild(StudentInfoTable);
			var infoNum = 0;
			for(info of StudentInfo){
				var node = document.createElement("li");
				var textnode = document.createTextNode(info);
				node.appendChild(textnode);
				StudentInfoTable.appendChild(node);
				
			}
		}
		 /*var node = document.createElement("P");
	   	 var textnode = document.createTextNode(ServerData);
   		 node.appendChild(textnode);
		 document.getElementById("table1").appendChild(node);
		 */
	
            }
        }
        xmlhttp.open("POST", "tableInfo.php", true);
        xmlhttp.send();
}		
	
		
		
		
		
		function editYear(elem){
			elem.parentNode.removeChild(elem);
			var removeButton= document.createElement('input');
			removeButton.setAttribute('type','button');
			removeButton.setAttribute('value','Remove Year Dates');
			document.getElementById("dateTable").appendChild(removeButton);
			removeButton.onclick = function(){removeYear()};
			
			var linebreak = document.createElement('br');
			document.getElementById("dateTable").appendChild(linebreak);
			
			var addDateButton = document.createElement('input');
			addDateButton.type = 'button';
			addDateButton.value = 'Add dates to year';
			document.getElementById("dateTable").appendChild(addDateButton);
			
			var dateNum = document.createElement('input');
			dateNum.type = 'text';
			document.getElementById("dateTable").appendChild(dateNum);
			
			addDateButton.onclick = function(){ addDate(dateNum)};
			
		}
		
		
		
		
		
		function removeYear(){
			 var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
			window.location.reload();
          }
       }
       xmlhttp.open("POST", "removeDates.php");
	   xmlhttp.send();
		}
		
		
		
		
		
		function addDate(dateNum){
			var dates = dateNum.value;
			console.log("function used");
			console.log(dates);
			if(dates >=1 && dates < 20){
			var form = document.createElement('form');
			form.id = "dateForm";
			document.getElementById("dateTable").appendChild(form);
			for(var i=0;i<dates; i++){
			var linebreak = document.createElement('br');
			document.getElementById("dateForm").appendChild(linebreak);
			var date = document.createElement('input');
			date.type = 'text';
			date.name = "date" + i;
			date.setAttribute('class','dateInput');
			console.log(date.name);
			document.getElementById("dateForm").appendChild(date);
			var linebreak = document.createElement('br');
			document.getElementById("dateForm").appendChild(linebreak);
			}
			var date = document.createElement('input');
			date.type = 'button';
			date.value = "submit";
			date.onclick = function(){submitDates(dates)};
			document.getElementById("dateForm").appendChild(date);
			}
		}
		
		
		function submitDates(numberOfDates){
		var inputs = document.getElementsByClassName("dateInput");
       var formdata = new FormData();
	   formdata.append("numDates", numberOfDates);
       for(var i=0; i<inputs.length; i++)
       {
           formdata.append(inputs[i].name, inputs[i].value);
		   console.log(inputs[i].name + " " + inputs[i].value);
       }
       var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
			    window.location.reload();
          }
       }
       xmlhttp.open("POST", "addDate.php");
       xmlhttp.send(formdata);
		}
		
		
		
		
		function editExperiment(elem){
			elem.parentNode.removeChild(elem);
			var removeButton= document.createElement('input');
			removeButton.setAttribute('type','button');
			removeButton.setAttribute('value','Remove Experiments');
			document.getElementById("experimentTable").appendChild(removeButton);
			removeButton.onclick = function(){removeExperiment()};
			
			var linebreak = document.createElement('br');
			document.getElementById("experimentTable").appendChild(linebreak);
			
			var addExperimentButton = document.createElement('input');
			addExperimentButton.type = 'button';
			addExperimentButton.value = 'Add experiments';
			document.getElementById("experimentTable").appendChild(addExperimentButton);
			
			var experimentText = document.createElement('input');
			experimentText.type = 'text';
			document.getElementById("experimentTable").appendChild(experimentText);
			
			addExperimentButton.onclick = function(){ addExperiment(experimentText)};
		}
		
		
		
		
		function addExperiment(textNode){	
		console.log("added experiemnt" + textNode.value);
		var expNumCount = textNode.value;
			console.log("function used");
			console.log(expNumCount);
			if(expNumCount >=1 && expNumCount < 20){
			var form = document.createElement('form');
			form.id = "expForm";
			document.getElementById("experimentTable").appendChild(form);
			
			for(var i=0;i<expNumCount; i++){
			var linebreak = document.createElement('br');
			document.getElementById("expForm").appendChild(linebreak);
			
			var expName = document.createElement("label");
				expName.innerHTML = "Experiment Name  ";
				document.getElementById("expForm").appendChild(expName);
			
			var exp = document.createElement('input');
			exp.type = 'text';
			exp.name = "exp" + i;
			exp.setAttribute('class','expInput');
			console.log(exp.name);
			document.getElementById("expForm").appendChild(exp);
			
			var expNumName = document.createElement("label");
				expNumName.innerHTML = "Number of Students for experiment  ";
				document.getElementById("expForm").appendChild(expNumName);
			
			var expNum = document.createElement('input');
			expNum.type = 'text';
			expNum.name = "expNum" + i;
			expNum.setAttribute('class','expNumInput');
			console.log(expNum.name);
			document.getElementById("expForm").appendChild(expNum);
			
			var linebreak = document.createElement('br');
			document.getElementById("expForm").appendChild(linebreak);
			}
			var exp= document.createElement('input');
			exp.type = 'button';
			exp.value = "submit";
			exp.onclick = function(){submitExperiments(expNumCount)};
			document.getElementById("expForm").appendChild(exp);
		}
		}		

		function submitExperiments(expNum){
			var inputs = document.getElementsByClassName("expInput");
			var numInputs = document.getElementsByClassName("expNumInput");
       var formdata = new FormData();
	   formdata.append("numExp", expNum);
       for(var i=0; i<inputs.length; i++)
       {
           formdata.append(inputs[i].name, inputs[i].value);
		   formdata.append(numInputs[i].name, numInputs[i].value);
		   console.log(inputs[i].name + " " + inputs[i].value);
		    console.log(numInputs[i].name + " " + numInputs[i].value);
       }
	   console.log("testing form data");
		for(var pair of formdata.entries()) {
   console.log(pair[0]+ ', '+ pair[1]); 
}
       var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
			  	window.location.reload();
          }
       }
       xmlhttp.open("POST", "addExperiment.php");
       xmlhttp.send(formdata);
		}
		
		
		
		
		function removeExperiment(){
			 var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
			window.location.reload();
          }
       }
       xmlhttp.open("POST", "removeExperiments.php");
	   xmlhttp.send();
		
		}
		//likely for date planner
function addDatesToSelect(elem){
	elem.parentNode.removeChild(elem);
	console.log("attempting to add Dates");
var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText);
				var dates = this.responseText.split("#");
				//console.log(dates[0]);
				for(var i =0; i<dates.length;i++){
				
					var linebreak = document.createElement('br');
					document.getElementById("dateSelection").appendChild(linebreak);
					
					var date = document.createElement('input');
					date.type = 'checkbox';
					date.name = dates[i];
					date.setAttribute('class','dateSelectionInput');
					document.getElementById("dateSelection").appendChild(date);
				
					var dateName = document.createTextNode(dates[i] + "   ");
					document.getElementById("dateSelection").appendChild(dateName);
					
					
					var linebreak = document.createElement('br');
					document.getElementById("dateSelection").appendChild(linebreak);
					
				}
				var selection= document.createElement('input');
			selection.type = 'button';
			selection.value = "Confirm Date";
			selection.onclick = function(){getExperiments(selection)};
			document.getElementById("dateSelection").appendChild(selection);
			}
		
	
       };
        xmlhttp.open("Post", "showDates.php", true);
        xmlhttp.send();
}
function getExperiments(elem){
	var dateToPlan ="";
	var dates = document.getElementsByClassName("dateSelectionInput");
	for(date of dates){
		if(date.checked){
			console.log(date.name);
			dateToPlan = date.name;
			
		}
	}
	var elementList = document.getElementById("dateSelection").childNodes;
	while(elementList[0]!=null){
	document.getElementById("dateSelection").removeChild(elementList[0]);
	}
	var selectionTextNode = document.createTextNode("Select the experiments you would like to do");
	document.getElementById("dateSelection").appendChild(selectionTextNode);
	
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				//showExperiments.php is file asking from
                //console.log(this.responseText);
				var experiments = this.responseText.split("#");
				console.log(experiments[0]);
				for(var i =0; i<experiments.length;i++){
				
					var linebreak = document.createElement('br');
					document.getElementById("dateSelection").appendChild(linebreak);
					
					var experiment = document.createElement('input');
					experiment.type = 'checkbox';
					experiment.name = experiments[i];
					experiment.setAttribute('class','experimentSelectionInput');
					document.getElementById("dateSelection").appendChild(experiment);
				
					var experimentName = document.createTextNode(experiments[i].split("!")[0] + "   ");
					document.getElementById("dateSelection").appendChild(experimentName);
					
					
					var linebreak = document.createElement('br');
					document.getElementById("dateSelection").appendChild(linebreak);
					
				}
				
				var linebreak = document.createElement('br');
				document.getElementById("dateSelection").appendChild(linebreak);
				
				var selectionOfExperiments= document.createElement('input');
				selectionOfExperiments.type = 'button';
				selectionOfExperiments.value = "Confirm Experiments";
				selectionOfExperiments.onclick = function(){generateDate(dateToPlan)};
				document.getElementById("dateSelection").appendChild(selectionOfExperiments);
			}
		
	
       };
        xmlhttp.open("Post", "showExperiments.php", true);
        xmlhttp.send();
	
}
function generateDate(dateName){
	var experimentsToPlan = [];
	var expIndex = 0;
	var experimentList = document.getElementsByClassName("experimentSelectionInput");
	for(experiment of experimentList){
		if(experiment.checked){
			console.log(experiment.name);
			experimentsToPlan[expIndex] = experiment.name;
			expIndex++;
		}
	}
	console.log(experimentsToPlan);
	//line of code to clear element checkboxes
	var elementList = document.getElementById("dateSelection").childNodes;
	while(elementList[0]!=null){
	document.getElementById("dateSelection").removeChild(elementList[0]);
	}
	//console.log("trying to open php file");
	//console.log(dateName);
	
	var formdata = new FormData();
	
	formdata.append("dateName", dateName);
	var experimentString = JSON.stringify(experimentsToPlan);
	//console.log(experimentString);
	formdata.append("experimentList", experimentString);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayCurrentEvent(dateName);
		}
};
xmlhttp.open("POST", "FindStudentsForDate.php");
xmlhttp.send(formdata);
}
function generatePreviousEventList(elem){
		elem.parentNode.removeChild(elem);
			 var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
			  var dataJSON = this.responseText;
			  console.log(dataJSON);
			  var events = this.responseText.split("&");
			  for(var i=0;i<events.length;i++){
				var eventData = JSON.parse(events[i]);
			  var experimentList = JSON.parse(eventData[2].substr(0,eventData[2].length-1));
			   var studentListForExperiments = JSON.parse(eventData[3]);
				console.log(eventData);
				var dateHeader = document.createElement('h3');
				dateHeader.innerHTML = eventData[0];
				document.getElementById("eventTable").appendChild(dateHeader);
					  for(var z = 0; z<experimentList.length;z++){
						var expHeader = document.createElement('h4');
						expHeader.innerHTML = experimentList[z].split("!")[0];
						expHeader.className = "experimentListStyle";
						document.getElementById("eventTable").appendChild(expHeader);
						var studentArray = studentListForExperiments[z];
								for(var q = 0; q<studentArray.length;q++){
									var studentHeader = document.createElement('h5');
								studentHeader.innerHTML = studentArray[q];
								studentHeader.className = "studentListStyle";
								document.getElementById("eventTable").appendChild(studentHeader);
								}
					  }
			  var linebreak = document.createElement('br');
				document.getElementById("eventTable").appendChild(linebreak);
			  }
			  
          }
       }
       xmlhttp.open("POST", "getEventData.php");
	   xmlhttp.send();
		
}
function displayCurrentEvent(dateName){
	 var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
         if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
			  var dataJSON = this.responseText;
			  console.log(dataJSON);
			  var events = this.responseText.split("&");
			  for(var i=0;i<events.length;i++){
				var eventData = JSON.parse(events[i]);
					console.log(eventData[0]);
								if(eventData[0] === dateName){
									var experimentList = JSON.parse(eventData[2].substr(0,eventData[2].length-1));
									var studentListForExperiments = JSON.parse(eventData[3]);
									console.log(eventData);
									var dateHeader = document.createElement('h3');
									dateHeader.innerHTML = eventData[0];
									document.getElementById("dateSelection").appendChild(dateHeader);
									  for(var z = 0; z<experimentList.length;z++){
										var expHeader = document.createElement('h4');
										expHeader.innerHTML = experimentList[z].split("!")[0];
										expHeader.className = "experimentListStyle";
										document.getElementById("dateSelection").appendChild(expHeader);
										var studentArray = studentListForExperiments[z];
												for(var q = 0; q<studentArray.length;q++){
													var studentHeader = document.createElement('h5');
													studentHeader.innerHTML = studentArray[q];
													studentHeader.className = "studentListStyle";
													document.getElementById("dateSelection").appendChild(studentHeader);
												}
									  }
							  var linebreak = document.createElement('br');
								document.getElementById("dateSelection").appendChild(linebreak);
							}
			    }
			  
          }
       }
	   xmlhttp.open("POST", "getEventData.php");
	   xmlhttp.send();
}
function editValueButton(elem){
			elem.parentNode.removeChild(elem);
			var updateButton= document.createElement('input');
			updateButton.setAttribute('type','button');
			updateButton.setAttribute('value','Edit Info of a Student');
			document.getElementById("studentDBEdit").appendChild(updateButton);
			updateButton.onclick = function(){
				createEditForm(updateButton);
			};
			
			var linebreak = document.createElement('br');
			document.getElementById("studentDBEdit").appendChild(linebreak);
			
			var deleteButton= document.createElement('input');
			deleteButton.setAttribute('type','button');
			deleteButton.setAttribute('value','Delete Student');
			document.getElementById("studentDBEdit").appendChild(deleteButton);
			deleteButton.onclick = function(){
				createDeleteForm(deleteButton);
			};
			
			var linebreak = document.createElement('br');
			document.getElementById("studentDBEdit").appendChild(linebreak);
			
			
			

}
function createEditForm(elem){
			elem.parentNode.removeChild(elem);
			
			var nameLabel = document.createElement("label");
				nameLabel.innerHTML  = "Name of Student";
				document.getElementById("studentDBEdit").appendChild(nameLabel);
					
			var nameText = document.createElement('input');
			nameText.type = 'text';
			nameText.id = "nameTextBox";
			document.getElementById("studentDBEdit").appendChild(nameText);
			
			var linebreak = document.createElement('br');
			document.getElementById("studentDBEdit").appendChild(linebreak);
			
			var indexLabel = document.createElement("label");
				indexLabel.innerHTML  = "Index of Value";
				document.getElementById("studentDBEdit").appendChild(indexLabel);
					
			var valueIndexText = document.createElement('input');
			valueIndexText.type = 'text';
			valueIndexText.id = "valueIndexTextBox";
			document.getElementById("studentDBEdit").appendChild(valueIndexText);
			
			var linebreak = document.createElement('br');
			document.getElementById("studentDBEdit").appendChild(linebreak);
			
			var valueLabel = document.createElement("label");
				valueLabel.innerHTML  = "New Value";
				document.getElementById("studentDBEdit").appendChild(valueLabel);
			
			var valueText = document.createElement('input');
			valueIndexText.type = 'text';
			valueIndexText.id = "valueTextBox";
			document.getElementById("studentDBEdit").appendChild(valueText);
			
			var linebreak = document.createElement('br');
			document.getElementById("studentDBEdit").appendChild(linebreak);
			
			var updateButton= document.createElement('input');
			updateButton.setAttribute('type','button');
			updateButton.setAttribute('value','Submit Updated Value');
			document.getElementById("studentDBEdit").appendChild(updateButton);
			updateButton.onclick = function(){
				var index = valueIndexText.value;
				var value = valueText.value;
				var name = nameText.value;
				editValueInDatabase(name,index,value);
			};
}
function editValueInDatabase(nameOfStudent,valueIndex, value){
	 var formdata = new FormData();
		formdata.append("studentName", nameOfStudent);
	   formdata.append("valueIndex", valueIndex);
	   formdata.append("updatedValue", value);
		 var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
         if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
			  
			}
	   }
	   xmlhttp.open("POST", "updateStudentInfo.php");
	   xmlhttp.send(formdata);
}
function createDeleteForm(elem){
		elem.parentNode.removeChild(elem);
		var nameLabel = document.createElement("label");
				nameLabel.innerHTML  = "Name of Student";
				document.getElementById("studentDBEdit").appendChild(nameLabel);
					
			var nameText = document.createElement('input');
			nameText.type = 'text';
			nameText.id = "deleteNameTextBox";
			document.getElementById("studentDBEdit").appendChild(nameText);
			
			var linebreak = document.createElement('br');
			document.getElementById("studentDBEdit").appendChild(linebreak);
			
			var updateButton= document.createElement('input');
			updateButton.setAttribute('type','button');
			updateButton.setAttribute('value','Delete Student');
			document.getElementById("studentDBEdit").appendChild(updateButton);
			updateButton.onclick = function(){
				var name = nameText.value;
				deleteStudentFromDatabase(name);
			};
}
function deleteStudentFromDatabase(name){
 var formdata = new FormData();
		formdata.append("studentName", name);
		 var xmlhttp;
       if(window.XMLHttpRequest)
       {
           xmlhttp = new XMLHttpRequest;
       }
       else
       {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange = function()
       {
         if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
			  
			}
	   }
	   xmlhttp.open("POST", "deleteStudent.php");
	   xmlhttp.send(formdata);
}
   