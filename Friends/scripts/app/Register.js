/**
 * Signup view model
 */
var app = app || {};

app.Trial = (function () {
    'use strict';

    var viewModel = kendo.observable({
            name: "",
            lastname: "",
            expectedsalary: "",
            currentsalary: "",
            email: "",
            contact: "",
            dob: "",
            experience: "",
            currentcompany: "",         
            noticeperiod: "",

            updateUserDetails: function () {


           
                jQuery.support.cors = true;
                var getdata = {
                    name: viewModel.get("name"),
                    surname: viewModel.get("lastname"),
                    address: viewModel.get("address"),
                    email: viewModel.get("expectedsalary"),
                    //email: viewModel.get("currentsalary"),
                    //email: viewModel.get("email"),
                    //email: viewModel.get("contact"),
                    //email: viewModel.get("dob"),
                    //email: viewModel.get("experience"),
                    //email: viewModel.get("currentcompany"),
                    //email: viewModel.get("currentsalary"),
                    //email: viewModel.get("expectedsalary"),
                    //email: viewModel.get("noticeperiod")
                };
                $.ajax({
                    cache: false,
                    requestType: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    url: "http://localhost:49253/api/Candidate/InsertCandidateDetails",
                    data: JSON.stringify(getdata),

                    success: function (data) {
                     
                        if (data == true) {
                            alert('User Registered successfully...');
                        }
                        else
                            alert('Unable to register');



                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    
                        alert(textStatus + ":" + errorThrown);
                    }
                });

            }
        });


        kendo.bind($("#signUp"), viewModel);

        return viewModel;

}());
