/**
 * 
 */
$(document).ready(function() {
    getJobs();
    $("#jobform").submit(function(event){
    	event.preventDefault();
        postJob();
    });
    });
    

    function getJobs()
    {
    	$.ajax({
            url: "/jobs"
        }).then(function(data) {
        $.each(data,function(id, job)
        {
          $('.tbody').append('<tr>'+
          '<td>'+job.position+'</td>'+
//          '<td>'+job.jobDescription+'</td>'+
          '<td>'+job.dateApplied+'</td>'+
          '<td>'+job.interviewDate+'</td>'+
          '<td>'+job.employer.companyName+'</td>'+
          '<td>'+job.employer.employerType+'</td>'+
          '<td>'+job.employer.address.email+'</td>'+
          '<td>'+job.employer.address.state+'</td>'+
          '<td>'+job.employer.address.source+'</td>'+
          '<td>'+'<a href='+job.employer.address.website+'>'+job.employer.address.website+'</a>'+'</td>'+
          '<td>'+'<span class="label label-success">'+'View Job Desc'+'</span>'
          +'</td>'                                       
      +'</tr>')
          
        });
});
    }

function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}


function postJob()
{
//	var formData = $("#jobform").serializeArray();
//	var data=JSON.stringify(formData);
//	var jobdata={}
	
	var data=ConvertFormToJSON("#jobform");
	var jsonDatas={
		  jobDescription: $("#jobDescription").val(),
		  position: $("#position").val(),
		  employer: {
		    address: {
		      email: $("#email").val(),
		      phoneNumber: $("#phoneNumber").val(),
		      source: $("#source").val(),
		      state: $("#state").val(),
		      street: $("#street").val(),
		      website: $("#website").val()
		    },
		    companyName: $("#companyName").val(),
		    employerType: $("#employerType").val(),
		    
		  },
		  
		};
	
	console.log("from the var: "+JSON.stringify(jsonDatas));
	$.ajax({
	    type: "POST",
	    url: "/jobs",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: JSON.stringify(jsonDatas),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data){
	    	$('.tbody').children().remove();
	    	getJobs();
	    	},
	    failure: function(errMsg) {
	        alert(errMsg);
	    }
	});
	}