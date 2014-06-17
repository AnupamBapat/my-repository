var app = app || {};

app.Trial = (function () {
    'use strict';
  
    var viewModel = kendo.observable({
        FirstName: "",
        LastName: "",
        address: "",
        EmailId: "",
        ContactNumber: "",
        DOB: "",
        Experience:"",
        CurrentOrganization:"",
        CurrentSalary: "",
        ExpectedSalary: "",
        NoticePeriod: "",
       

        updateUserDetails: function () {
            jQuery.support.cors = true;
          
            var testData = {
                FirstName: viewModel.get("name"),
                LastName: viewModel.get("lastname"),
                address: viewModel.get("address"),
                EmailId: viewModel.get("email"),
                ContactNumber: viewModel.get("contact"),
                DOB: viewModel.get("dob"),
                Experience: viewModel.get("experience"),
                CurrentOrganization: viewModel.get("currentcompany"),
                CurrentSalary: viewModel.get("currentsalary"),
                ExpectedSalary: viewModel.get("expectedsalary"),
                NoticePeriod: viewModel.get("noticeperiod")
            };
            $.ajax({
                type: "POST",
                data: JSON.stringify(testData),
                url: "https://betamike.cognizant.com/api/Candidate/InsertCandidateDetails",
                contentType: "application/json",
                //  });                

                success: function (data) {
                    if (data) {
                        alert("Test");
                    }
                },

                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    alert(textStatus + ":" + errorThrown);
                }
            });
           

        },
        updatedropdowndetails: function () {
            jQuery.support.cors = true;
           
        $.ajax({
            
            type: "GET",
            url: "https://betamike.cognizant.com/api/Candidate/GetDriveDetails",
            contentType: "application/json",
            
            success: function (data) {
               alert("Test");
                var ddl = $("#signupHighlevelPicker");
                var dataSource = [];
                for (i = 0; i < data.length; i++) {
                  //  dataSource.push({ "DriveName": data[i].DriveName })
                    ddl.append($("<option></option>").val(data[i].DriveName).html(data[i].DriveName));
                };
               // OrderUomTypes: dataSource
                //$("#ddlCompany").kendoMobileDropDownList({
                //    dataTextField: "DriveName",
                //    dataValueField: "DriveName",
                //    dataSource: dataSource
                //});
            },
            error: function (jqXHR, textStatus, errorThrown) {
                
        
            }
        });
}
        

});
    kendo.bind($("#signup-form"), viewModel);
    return viewModel;

}());


