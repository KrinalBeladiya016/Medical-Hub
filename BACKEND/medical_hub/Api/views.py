from django.http import JsonResponse, HttpResponse
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login, get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password, check_password
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from .models import UserProfile,ContactMessage,Hospital,PatientVisit
from datetime import datetime
from django.views import View
import logging
import json
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import permissions
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import AccessToken




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
    print("Method :",request.method)
    if request.method == "POST":  # Handle only POST requests
        try:
            data = json.loads(request.body)
            userId = data.get('userId')
            password = data.get('password')

            # Look up the user by email
            user = UserProfile.objects.get(email=userId)

            # Check if the password is correct
            # print("Userrrrrrr",user)
            if check_password(password, user.password):
                # try:
                #     access_token = AccessToken.for_user(user)  # Attempt to generate the token

                #     access_token['health_id'] = user.health_id  # Add custom field
                #     return JsonResponse({'access': str(access_token)}, status=200)
                # except Exception as e:
                #     print(f"Error generating access token: {e}")  # Print the error message
                #     return JsonResponse({'error': 'Token generation failed'}, status=500)
                print(user)
                # refresh = RefreshToken.for_user(user)
                return JsonResponse({"message": "Login successful", "user_id": user.email}, status=200)
            else:
                return JsonResponse({"error": "Invalid password"}, status=400)

        except UserProfile.DoesNotExist:
            return JsonResponse({"error": "User does not exist"}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid request body"}, status=400)
    # print("Method :",request.method)
    request.method="POST"
    return JsonResponse({"error": "Method not allowed"}, status=405) 

@api_view(['GET'])
def get_user_profile(APIView):
    def get(self, request, email):
        try:
            user = UserProfile.objects.get(email=email)
            return Response({"name": user.name, "email": user.email})  # Adjust as needed
        except UserProfile.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def hospital_login_view(request):
    print("Method :",request.method)
    if request.method == "POST":  # Handle only POST requests
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            # Look up the user by email
            user = Hospital.objects.get(email=email)

            # print("Userrrrrrr",user)
            if check_password(password, user.password):
                print(user)
                return JsonResponse({"message": "Login successful", "user_id": user.email}, status=200)
            else:
                return JsonResponse({"error": "Invalid password"}, status=400)

        except UserProfile.DoesNotExist:
            return JsonResponse({"error": "User does not exist"}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid request body"}, status=400)
    # print("Method :",request.method)
    request.method="POST"
    return JsonResponse({"error": "Method not allowed"}, status=405) 

def search_user(request):
    query = request.GET.get('query', '')
    if query:
        user = UserProfile.objects.filter(health_id=query)
        
        results = list(user.values('name', 'password' , 'email', 'contact', 'dob', 'aadhar_no', 'gender', 'blood_group', 'address', 'city', 'state', 'pincode', 'health_id', 'start_date', 'exp_date', 'profile'))
        
        return JsonResponse(results, safe=False)
    
    return JsonResponse([], safe=False)

def user_profile(request):
    userId = request.GET.get('userId', '')
    if userId:
        user = UserProfile.objects.filter(email=userId)
        
        results = list(user.values('name', 'password' , 'email', 'contact', 'dob', 'aadhar_no', 'gender', 'blood_group', 'address', 'city', 'state', 'pincode', 'health_id', 'start_date', 'exp_date', 'profile'))
        
        return JsonResponse(results, safe=False)
    
    return JsonResponse([], safe=False)



@csrf_exempt
def submit_patient_history(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Parse the JSON body

            # Extracting values from the incoming JSON data
            patient_id = data.get('patient_id')
            doctor_name = data.get('doctor_name')
            symptoms = data.get('symptoms')
            diagnosis = data.get('diagnosis')
            tests_ordered = data.get('tests_ordered', '')  # Default to empty string if not provided
            test_results = data.get('test_results', '')
            doctor_notes = data.get('doctor_notes', '')

            # Ensure patient_id is present
            if not patient_id:
                return JsonResponse({'error': 'Patient ID is required.'}, status=400)

            # Create and save the new PatientVisit instance
            new_visit = PatientVisit(
                patient_id=patient_id,
                doctor_name=doctor_name,
                symptoms=symptoms,
                diagnosis=diagnosis,
                tests_ordered=tests_ordered,
                test_results=test_results,
                doctor_notes=doctor_notes
            )
            new_visit.save()

            return JsonResponse({'message': 'Patient visit recorded successfully.'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)