from django.http import JsonResponse, HttpResponse
from django.contrib.auth import authenticate, login, get_user_model
# from django.views.decorators.csrf import csrf_exempt
# from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password,check_password
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from .models import UserProfile,ContactMessage
from datetime import datetime
import logging
import json

logger = logging.getLogger(__name__)

# def get_csrf_token(request):
#     csrf_token = get_token(request)  # Generate CSRF token
#     print(csrf_token , "csrf_tokencsrf_tokencsrf_tokencsrf_token")
#     return JsonResponse({'csrfToken': csrf_token})  # Return it as JSON

# @csrf_exempt
def get_id(request):
    if request.method == 'POST':
        try:
            logger.info("Received data: %s", request.POST)
            logger.info("Received files: %s", request.FILES)
            name = request.POST.get('name')
            email = request.POST.get('email')
            pwd = request.POST.get('password')
            password = make_password(pwd)
            contact = request.POST.get('contact')
            dob = request.POST.get('dob')  # Expecting this in YYYY-MM-DD format
            aadhar_no = request.POST.get('aadhar_no')
            gender = request.POST.get('gender')
            blood_group = request.POST.get('blood_group')
            chronic_conditions = request.POST.get('chronic_conditions')
            address = request.POST.get('address')
            city = request.POST.get('city')
            state = request.POST.get('state')
            pincode = request.POST.get('pincode')

            # Handle file uploads
            profile_pic = request.FILES.get('profile')
            report_file = request.FILES.get('report')

            # Convert dob to datetime object
            dob = datetime.strptime(dob, '%Y-%m-%d')

            # Create the user profile
            user_profile =UserProfile(
                name=name,
                email=email,
                password=password,
                contact=contact,
                dob=dob,
                aadhar_no=aadhar_no,
                gender=gender,
                blood_group=blood_group,
                chronic_conditions=chronic_conditions,
                profile=profile_pic,
                report=report_file,
                address=address,
                city=city,
                state=state,
                pincode=pincode
            )

            
            user_profile.save()  # Save the user profile

            return JsonResponse({"message": "Profile created successfully!", "health_id": user_profile.health_id}, status=201)
        
        except IntegrityError as e:
            if 'aadhar_no' in str(e):
                return JsonResponse({'error': 'Aadhar number already exists.'}, status=400)
            return JsonResponse({'error': 'A database error occurred'}, status=500)
        
        except ValidationError as ve:
            logger.error("Validation error: %s", ve)
            return JsonResponse({"error": ve.message_dict}, status=400)
        except Exception as e:
            logger.error("Exception occurred: %s", e)
            return JsonResponse({"error": str(e)}, status=400)

    return HttpResponse(status=405)  # Method not allowed


# @csrf_exempt
def contact_message_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if not name or not email or not message:
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            contact_message = ContactMessage(name=name, email=email, message=message)
            contact_message.save()

            return JsonResponse({'message': 'Your message has been sent successfully!'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)

User = UserProfile.objects.all()
print(User , "Userrrrrrrrrrrrr")
# @csrf_exempt  # Only necessary if you are skipping CSRF protection
# def login_view(request):
#     print(request.method , "methoddddddd")
#     if request.method == "POST":
#         data = json.loads(request.body)
#         print(data , "Dataaaaa")

#         username = data.get('username')
#         password = data.get('password')
#         print(username  , password , "usernameeeeee")

        

#         try:
#             print("hiiiiiiiiiiiiiiiii")
#             # Get the user from the database
#             user = User.get(username=username)
#             print(user , "userrrrrr")
#             print(user.password , "password")

#             # Check the password
#             if check_password(password, user.password):
#                 return JsonResponse({"message": "Login successful", "user_id": user.id}, status=200)
#             else:
#                 return JsonResponse({"error": "Invalid password"}, status=400)

#         except User.DoesNotExist:
#             print("not existsssss")
#             return JsonResponse({"error": "User does not exist"}, status=400)

#     return JsonResponse({"error": "Method not allowed"}, status=405)


def login_view(request):
    print(request.method, "methoddddddd")

    if request.method == "POST":
        data = json.loads(request.body)
        print(data, "Dataaaaa")

        username = data.get('username')
        password = data.get('password')
        print(username, password, "usernameeeeee")

        try:
            # Get the user from the UserProfile model using username
            user = UserProfile.objects.get(username=username)
            print(user, "userrrrrr")
            print(user.password, "password")

            # Check the password
            if check_password(password, user.password):
                return JsonResponse({"message": "Login successful", "user_id": user.id}, status=200)
            else:
                print("Invalid password")
                return JsonResponse({"error": "Invalid password"}, status=400)

        except UserProfile.DoesNotExist:
            print("User does not exist")
            return JsonResponse({"error": "User does not exist"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)