from django.http import JsonResponse, HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password, check_password
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from .models import UserProfile,ContactMessage
from datetime import datetime
from django.views import View
import logging
import json
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

logger = logging.getLogger(__name__)

def get_csrf_token(request):
    csrf_token = get_token(request)  # Generate CSRF token
    print(csrf_token , "csrf_tokencsrf_tokencsrf_tokencsrf_token")
    return JsonResponse({'csrfToken': csrf_token})  # Return it as JSON

@csrf_exempt
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


@csrf_exempt
def contact_message_create(request):
    if request.method == 'POST':
        try:
            logger.info("Received data: %s", request.POST)
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            # data = json.loads(request.body)
            # name = data.get('name')
            # email = data.get('email')
            # message = data.get('message')

            if not name or not email or not message:
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            contact_message = ContactMessage(name=name, email=email, message=message)
            contact_message.save()

            return JsonResponse({'message': 'Your message has been sent successfully!'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)

        userId = data.get('userId')
        password = data.get('password')
        print(f"User ID: {userId}, Password: {password}")
        try:
            # Get the user from the UserProfile model using email
            user = UserProfile.objects.get(email=userId)

            # Check the password
            print(f"Received password: {password}")
            print(f"Stored hashed password: {user.password}")

            if check_password(password, user.password):
                print("Password Matched")
                return JsonResponse({"message": "Login successful", "user_id": user.email}, status=200)
            else:
                print("Password Not Matched")
                return JsonResponse({"error": "Invalid password"}, status=400)

        except UserProfile.DoesNotExist:
            print("User does not exist")
            return JsonResponse({"error": "User does not exist"}, status=400)
    print('method Problem')
    return JsonResponse({"error": "Method not allowed"}, status=405)

@login_required
def get_profile(request):
    # If user is authenticated, return profile data
    user = request.user
    profile = UserProfile.objects.filter(user=user).first()  # Assuming you have a UserProfile model
    if profile:
        return JsonResponse({
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            # Add more fields as necessary
        })
    return JsonResponse({"error": "Profile not found"}, status=404)@api_view(['GET'])

@login_required  # Ensure the user is authenticated
def get_profile(request):
    # Check if user is authenticated
    print("Hiiiiiiiiiiiiiiii")
    if not request.user.is_authenticated:
        print("Here")
        return JsonResponse({'error': 'User is not authenticated'}, status=401)

    # Now we know the user is authenticated, fetch their profile
    user = request.user

    # Assuming you have a UserProfile model to store user profiles
    try:
        profile = UserProfile.objects.get(user=user)
        print(profile)
        profile_data = {
            "email": user.email,
            "name": user.name,
            # Add more fields as necessary
        }
        print(profile_data)
        return JsonResponse(profile_data)
    except UserProfile.DoesNotExist:
        print("Okiee")
        return JsonResponse({"error": "Profile not found"}, status=404)


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        profile = UserProfile.objects.get(user=user)
        profile_data = {
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            # Add other fields as needed
        }
        return Response(profile_data)