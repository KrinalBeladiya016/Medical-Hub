# from django.contrib import admin
# from .models import UserProfile

# @admin.register(UserProfile)
# class UserProfileAdmin(admin.ModelAdmin):
#     # Specify fields to be displayed on the form
#     fields = (
#         'name',
#         'email',
#         'password',
#         'contact',
#         'dob',
#         'aadhar_no',
#         'gender',
#         'blood_group',
#         'chronic_conditions',
#         'profile',
#         'report',
#         'address',
#         'city',
#         'state',
#         'pincode',
#         'start_date',
#         'exp_date',
#     )
    
#     # Fields to be displayed in the list view
#     list_display = (
#         'name',
#         'email',
#         'contact',
#         'dob',
#         'aadhar_no',
#         'health_id',
#         'blood_group',
#         'address',
#         'city',
#         'state',
#         'pincode',
#         'start_date',
#         'exp_date',
#     )
    
#     # Search fields in the admin interface
#     search_fields = (
#         'name',
#         'email',
#         'contact',
#         'aadhar_no',
#         'health_id',
#     )

#     # Optional: Add filters in the list view
#     list_filter = (
#         'gender',
#         'blood_group',
#         'state',
#     )


from django.contrib import admin
from .models import UserProfile,ContactMessage

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'password' , 'email', 'contact', 'dob', 'aadhar_no', 'gender', 'blood_group', 'address', 'city', 'state', 'pincode', 'health_id', 'start_date', 'exp_date')
    search_fields = ('name', 'email', 'aadhar_no')
    readonly_fields = ('health_id', 'start_date', 'exp_date')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name','email','message')
