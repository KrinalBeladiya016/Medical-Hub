# Generated by Django 5.0.3 on 2024-09-21 12:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0006_userprofile_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
    ]
