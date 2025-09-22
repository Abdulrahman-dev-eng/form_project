    let fname, matric, lname, inputValues, level, table = "";


    function render() {
        fname = document.getElementById("fname").value;
        lname = document.getElementById("lname").value;
        matric = document.getElementById("matric").value;
        level = document.getElementById("level").value;
        ///////////////// Validations
        if (isNaN(matric)) {
            document.getElementById("pM").style.display = "block";
        }

        if (isNaN(level)) {
            document.getElementById("pL").style.display = "block";
        }

        delContent();
 
        if (fname != "" && lname != "" && matric != "" && level != "" && !(isNaN(matric)) && !(isNaN(level))) {
            inputValues = [];
            inputValues.push({firstName: fname, lastName: lname, matric: matric, level: level})
            renderTable();
        } //////////////// end
    }

    function renderTable() {
        inputValues.forEach(myfunction)

        function myfunction(value, index, inputValues) {
         table += `<tr>
                     <td>${inputValues[index].firstName}</td>
                     <td>${inputValues[index].lastName}</td>
                     <td>${inputValues[index].matric}</td>
                     <td>${inputValues[index].level}</td>
                  </tr>
                  `     
        }
        document.getElementById("schoolInfo").innerHTML = table;
        document.getElementById("pM").style.display = "none";
        document.getElementById("pL").style.display = "none";
    }

    function delContent() {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("matric").value = "";
        document.getElementById("level").value = "";
    }