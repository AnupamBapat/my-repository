/**
 * Signup view model
 */
var app = app || {};

app.Trial = (function () {
    'use strict';

    var viewModel = kendo.observable({
        name: "",
        surname: "",
        address: "",
        email: "",


        updateUserDetails: function () {


          
            jQuery.support.cors = true;
            //var updateOptions = {

            //    url: "http://localhost:52812/api/recruit/SaveInterviewDetails",
            //    Type: "POST",
            //    dataType: "JSON",
            //    data: JSON.stringify(name = ""),
            //    contentType: "application/json"
            //}
            var testData = {                
                FirstName: viewModel.get("name"),
                LastName: viewModel.get("lastname"),
                //address: viewModel.get("address")
                //email: viewModel.get("expectedsalary"),
                //email: viewModel.get("currentsalary"),
                EmailId: viewModel.get("email"),
                //email: viewModel.get("contact"),
                //email: viewModel.get("dob"),
                //email: viewModel.get("experience"),
                //email: viewModel.get("currentcompany"),
                //email: viewModel.get("currentsalary"),
                //email: viewModel.get("expectedsalary"),
                //email: viewModel.get("noticeperiod")
};
            $.ajax({
                type: "POST",
                data: JSON.stringify(testData),
                url: "https://betamike.cognizant.com/api/Candidate/InsertCandidateDetails",
                contentType: "application/json",
                //  });                

                success: function (data) {
                    if(data){
                    Alert("Test");
                    }
                    


                },

                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  
                    alert(textStatus + ":" + errorThrown);
                }
            });

        }
    });


    kendo.bind($("#signup-form"), viewModel);
    //})();



    //var viewModel = kendo.observable({
    //        name: "",
    //        lastname: "",
    //        expectedsalary: "",
    //        currentsalary: "",
    //        email: "",
    //        contact: "",
    //        dob: "",
    //        experience: "",
    //        currentcompany: "",         
    //        noticeperiod: "",
    //        updateUserDetails: function () {


    //            debugger;
    //            jQuery.support.cors = true;
    //            var getdata = {
    //                FirstName: viewModel.get("name"),
    //                LastName: viewModel.get("lastname"),
    //                //address: viewModel.get("address")
    //                //email: viewModel.get("expectedsalary"),
    //                //email: viewModel.get("currentsalary"),
    //                EmailId: viewModel.get("email"),
    //                //email: viewModel.get("contact"),
    //                //email: viewModel.get("dob"),
    //                //email: viewModel.get("experience"),
    //                //email: viewModel.get("currentcompany"),
    //                //email: viewModel.get("currentsalary"),
    //                //email: viewModel.get("expectedsalary"),
    //                //email: viewModel.get("noticeperiod")
    //            };
    //            $.ajax({

    //                type: "POST",
    //                data: JSON.stringify(getdata),
    //                url: "http://localhost:52812/api/recruit/InsertCandidateDetails",
    //                contentType: "application/json",
    //                success: function (data) {
    //                    alert("Test");
    //                    debugger;
    //                }

    //            });


    //        }

    //        //updateUserDetails: function () {


    //        //    debugger;
    //        //    jQuery.support.cors = true;
    //        //    var getdata = {
    //        //        name: "abc",//viewModel.get("name"),
    //        //        surname: "a",//viewModel.get("lastname"),
    //        //        address: "aa",//viewModel.get("address"),
    //        //        email: "a"//viewModel.get("expectedsalary"),                    
    //        //        //email: viewModel.get("currentsalary"),
    //        //        //email: viewModel.get("email"),
    //        //        //email: viewModel.get("contact"),
    //        //        //email: viewModel.get("dob"),
    //        //        //email: viewModel.get("experience"),
    //        //        //email: viewModel.get("currentcompany"),
    //        //        //email: viewModel.get("currentsalary"),
    //        //        //email: viewModel.get("expectedsalary"),
    //        //        //email: viewModel.get("noticeperiod")
    //        //    };
    //        //    $.ajax({
    //        //        type: "POST",
    //        //        data: JSON.stringify(getdata),
    //        //        url: "http://localhost:52812/api/Candidate/InsertCandidateDetails",
    //        //        contentType: "application/json",
                    

    //        //        success: function (data) {
                     
    //        //            if (data == true) {
    //        //                alert('User Registered successfully...');
    //        //            }
    //        //            else
    //        //                alert('Unable to register');



    //        //        },
    //        //        error: function (XMLHttpRequest, textStatus, errorThrown) {
                    
    //        //            alert(textStatus + ":" + errorThrown);
    //        //        }
    //        //    });

    //        //}
    //    });


    //    kendo.bind($("#signUp"), viewModel);

        return viewModel;

}());
