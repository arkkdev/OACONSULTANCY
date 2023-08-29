

function showForm() {
    document.getElementById('whatsappForm').style.display = 'block';
}

function submitForm() {
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var serviceType = document.getElementById('serviceType').value;
    var businessType = document.getElementById('businessType').value;
    var locationType = document.getElementById('locationType').value;
    var businessStatus = document.getElementById('businessStatus').value;

    var message = "Hello! I would like to inquire about " + serviceType + ". Here are my details:\
                   \nName: " + name + "\
                   \nLocation: " + location + "\
                   \nPhone Number: " + number + "\
                   \nEmail: " + email + "\
                   \nBusiness Type: " + businessType + "\
                   \nLocation Type: " + locationType + "\
                   \nBusiness Status: " + businessStatus;

    var encodedMessage = encodeURIComponent(message);

    var whatsappURL = "https://wa.me/123456789?text=" + encodedMessage; // Replace YOURNUMBERHERE with your WhatsApp number
    window.open(whatsappURL, '_blank');
}

function closeForm() {
    document.getElementById('whatsappForm').style.display = 'none';
}


    function showEmailForm() {
    document.getElementById('emailForm').style.display = 'block';
}

function closeEmailForm() {
    document.getElementById('emailForm').style.display = 'none';
}

function submitEmailForm() {
    var name = document.getElementById('emailName').value;
    var location = document.getElementById('emailLocation').value;
    var number = document.getElementById('emailNumber').value;
    var email = document.getElementById('emailEmail').value;
    var serviceType = document.getElementById('emailServiceType').value;
    var businessType = document.getElementById('emailBusinessType').value;
    var locationType = document.getElementById('emailLocationType').value;
    var businessStatus = document.getElementById('emailBusinessStatus').value;

    var subject = "New Inquiry about " + serviceType;

    var body = "Name: " + name +
               "\nLocation: " + location +
               "\nPhone Number: " + number +
               "\nEmail: " + email +
               "\nBusiness Type: " + businessType +
               "\nLocation Type: " + locationType +
               "\nBusiness Status: " + businessStatus;

    var mailtoURL = "mailto:ahmed.o.a.hsaan@outlook.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(mailtoURL, '_blank');
}
