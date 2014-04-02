// JavaScript Document

 $(document).ready(function() {
   $('#stepOneBtn').click(function(){
     $('#childInformation,#btn1p').hide();
	 $('#familyInformation,#ethnicInformation,#stepTwoBtns').show()
   });
   
   $('#BackTo1').click(function(){
     $('#childInformation,#btn1p').show();
	 $('#familyInformation,#ethnicInformation,#stepTwoBtns').hide()
   });
   
   $('#continuetoThree').click(function(){
     $('#familyInformation,#ethnicInformation,#stepTwoBtns').hide()
	 $('#areasOfInterest,#submitForm,#consentFromParent,#initials,#formInstructions').show()
   });
   
   $('#backtoPageTwo').click(function(){
     $('#familyInformation,#ethnicInformation,#stepTwoBtns').show()
	 $('#areasOfInterest,#submitForm,#consentFromParent,#initials,#formInstructions').hide()
   });
   
   $('#facilitiesFund').click(function(){
   	$('#amountFacilities').toggle()
   });
   
   $('#endowmentFund').click(function(){
   $('#amountEndowment').toggle()
   });
   
   $('#operationalFund').click(function(){
   $('#amountOpReserve').toggle()
   });
   
   $('#educationFund').click(function(){
   $('#amountEducation').toggle()
   });
   
   $('#genOpFund').click(function(){
   $('#amountGenOp').toggle()
   });
   
   $('#girlsFund').click(function(){
   $('#amountGirls').toggle()
   });
   
   $('#healthWellnessFund').click(function(){
   $('#amountHealthWellness').toggle()
   });
   
   $('#dayCampFund').click(function(){
   $('#amountSummerCamp').toggle()
   });
   
   $('#sportsFund').click(function(){
   $('#amountSports').toggle()
   });
   
   $('#summerCampFund').click(function(){
   $('#amountSummerCamp').toggle()
   });
   
   $('#awardsFund').click(function(){
   $('#amountAwards').toggle()
   });
   
   $('#fundCocaCola').click(function(){
   $('#amountCocaCola').toggle()
   });
   
   $('#fundJackBuck').click(function(){
   $('#amountJackBuck').toggle()
   });
   
   $('#fundmalenessToManhood').click(function(){
   $('#amountMaleness').toggle()
   });
   
   $('#fundSafety').click(function(){
   $('#amountSafety').toggle()
   });
   
   $('#fundsayAmen').click(function(){
   $('#amountSayAmen').toggle()
   });
   
   $('#fundSheerElegance').click(function(){
   $('#amountSheerElegance').toggle()
   });
   
   $('#fundSkyIsLimit').click(function(){
   $('#amountSkyLimit').toggle()
   });
   
   
 });