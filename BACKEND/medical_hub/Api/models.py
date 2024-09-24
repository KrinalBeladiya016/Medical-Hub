from django.db import models,IntegrityError
from datetime import datetime,timedelta
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    health_id = models.CharField(max_length=12, unique=True, editable=False, primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=8)
    contact = models.CharField(max_length=10)
    dob = models.DateField()
    aadhar_no = models.CharField(max_length=12,unique=True)
    gender = models.CharField(max_length=10)
    blood_group = models.CharField(max_length=5)
    chronic_conditions = models.TextField()
    profile = models.ImageField(upload_to='profiles/', null=True, blank=True)
    report = models.FileField(upload_to='reports/', null=True, blank=True)    
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    start_date = models.DateField(auto_now_add=True)
    exp_date = models.DateField()


    def clean(self):
        errors = {}
        if not isinstance(self.contact, str) or not self.contact.isdigit() or not (10 <= len(self.contact) <= 15):
            errors['contact'] = 'Contact number must be digits and between 10 and 15 characters long.'

        if not isinstance(self.aadhar_no, str) or not self.aadhar_no.isdigit() or len(self.aadhar_no) != 12:
            errors['aadhar_no'] = 'Aadhar number must be exactly 12 digits long.'

        pincode_str = str(self.pincode)
        if len(pincode_str) != 6 or not pincode_str.isdigit():
            errors['pincode'] = 'Pincode must be exactly 6 digits long.'

        if errors:
            raise ValidationError(errors)


    def save(self, *args, **kwargs):
        self.clean()  # Call clean method to validate data

        if not self.health_id:
            dob_str = self.dob.strftime('%Y%m%d')  # Format DOB as YYYYMMDD
            base_id = f"{self.name[:2].upper()}{dob_str[-4:]}{self.aadhar_no[-2:]}"  # Generate base ID
            
            # Ensure the ID is 12 characters long by appending a unique number
            existing_ids = UserProfile.objects.filter(health_id__startswith=base_id).order_by('-health_id')
            if existing_ids.exists():
                last_id = existing_ids.first().health_id
                sequential_number = int(last_id[-4:]) + 1  # Increment last 4 digits
            else:
                sequential_number = 1  # Start with 0001 if no ID exists

            sequential_str = f"{sequential_number:04d}"
            self.health_id = f"{base_id}{sequential_str}"

        if not self.start_date:
            self.start_date = datetime.now().date()
        if not self.exp_date:
            self.exp_date = self.start_date + timedelta(days=3*365)
        
        # if not self.pk or not self.__class__.objects.filter(pk=self.pk).exists() or self.__class__.objects.get(pk=self.pk).password != self.password:
        #     self.password = make_password(self.password)

        try:
            super(UserProfile, self).save(*args, **kwargs)

        except IntegrityError as e:
            # Check which unique field caused the IntegrityError
            if 'userid' in str(e):
                raise ValidationError({'userid': 'User ID already exists.'})
            elif 'aadhar_no' in str(e):
                raise ValidationError({'aadhar_no': 'Aadhar number already exists.'})

    def __str__(self):
        return self.email
    

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
    

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    address = models.TextField()
    contact = models.CharField(max_length=10)
    password = models.CharField(max_length=8)
    
    def save(self, *args, **kwargs):

        
        if not self.pk or not self.__class__.objects.filter(pk=self.pk).exists() or self.__class__.objects.get(pk=self.pk).password != self.password:
            self.password = make_password(self.password)

        try:
            super(Hospital, self).save(*args, **kwargs)

        except IntegrityError as e:
            # Check which unique field caused the IntegrityError
            if 'email' in str(e):
                raise ValidationError({'email': 'User ID already exists.'})
            
    def __str__(self):
        return self.name


class PatientVisit(models.Model):
    # Patient Information
    patient_id = models.CharField(max_length=12)  # Assuming patient ID is an alphanumeric string
    
    # Visit Details
    visit_date = models.DateField(auto_now_add=True)  # Automatically adds the current date
    doctor_name = models.CharField(max_length=100)
    
    # Health Information
    symptoms = models.TextField()  # Detailed input for symptoms
    diagnosis = models.TextField()  # Detailed diagnosis descriptions
    
    # Medical Tests and Results
    tests_ordered = models.TextField(blank=True, null=True)  # Optional field for ordered tests
    test_results = models.TextField(blank=True, null=True)  # Optional field for test results
    
    # Notes and Recommendations
    doctor_notes = models.TextField(blank=True, null=True)  # Optional field for additional notes
    
    def __str__(self):
        return f"Patient ID: {self.patient_id}, Visit Date: {self.visit_date}"