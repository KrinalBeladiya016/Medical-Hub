from django.contrib import admin
from .models import UserProfile,ContactMessage,Hospital,PatientVisit

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'password' , 'email', 'contact', 'dob', 'aadhar_no', 'gender', 'blood_group', 'address', 'city', 'state', 'pincode', 'health_id', 'start_date', 'exp_date')
    search_fields = ('name', 'email', 'aadhar_no','health_id')
    readonly_fields = ('health_id', 'start_date', 'exp_date')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name','email','message')

@admin.register(Hospital)
class HospitalAdmin(admin.ModelAdmin):
    list_display = ('name', 'password' , 'email', 'contact' , 'address')
    # search_fields = ('name', 'email')

@admin.register(PatientVisit)
class PatientVisitAdmin(admin.ModelAdmin):
    list_display = ('patient_id', 'visit_date', 'doctor_name', 'diagnosis')
    search_fields = ('patient_id', 'doctor_name', 'symptoms', 'diagnosis')
    list_filter = ('visit_date', 'doctor_name')
    ordering = ('-visit_date',)  # Order by visit date descending
