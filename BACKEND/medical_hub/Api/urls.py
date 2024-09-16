from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import get_id,login_view,contact_message_create

urlpatterns = [
    path('getid/', get_id, name='profile-create'),
    # path('getid/<int:pk>/', profile_detail, name='profile-detail'),
    # path('csrf_token/', get_csrf_token, name='csrf_token'),
    path('login/', login_view, name='login'),
    path('contact/', contact_message_create, name='contact_message_create'),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)