from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('getid/', views.get_id, name='profile-create'),
    # path('getid/<int:pk>/', profile_detail, name='profile-detail'),
    path('csrf_token/', views.get_csrf_token, name='csrf_token'),
    path('login/', views.login_view, name='login'),
    path('contact/', views.contact_message_create, name='contact_message_create'),
    path('userProfile/', views.UserProfileView.as_view(), name='user-profile'),
    # path('userprofile/',views.UserProfileView,name='UserProfileView'),
    path('check_login_status/', views.check_login_status, name='check_login_status'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)