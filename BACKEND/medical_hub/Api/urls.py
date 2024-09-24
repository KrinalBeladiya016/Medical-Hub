from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('getid/', views.get_id, name='profile-create'),
    # path('getid/<int:pk>/', profile_detail, name='profile-detail'),
    path('csrf_token/', views.get_csrf_token, name='csrf_token'),
    path('login/', views.login_view, name='login'),
    path('hospital_login/', views.hospital_login_view, name='hospital_login'),
    path('contact/', views.contact_message_create, name='contact_message_create'),
    path('search_user/',views.search_user,name='search_user'),
    path('user_profile/',views.user_profile,name='user_profile'),
    path('patient_history/',views.submit_patient_history,name='patient_history'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)