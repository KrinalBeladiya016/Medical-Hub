from django import forms
from .models import UserProfile

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = [
            'name', 'email', 'contact', 'dob', 'aadhar_no', 'gender', 
            'blood_group', 'chronic_conditions', 'profile', 'report',
            'address', 'city', 'state', 'pincode'
        ]
        widgets = {
            'dob': forms.DateInput(attrs={'type': 'date'}),
            'create_date': forms.DateInput(attrs={'type': 'date'}),
            'exp_date': forms.DateInput(attrs={'type': 'date'}),
        }
